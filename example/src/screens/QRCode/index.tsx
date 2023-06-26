import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector, useStore} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import type {AppStackParamList} from '../../navigator';
import {styles} from './styles';
import {getMeetingUrl, validateUrl} from '../../utils/functions';
import {COLORS} from '../../utils/theme';
import {
  CustomButton,
  CustomInput,
  DefaultModal,
  JoinSettingsModalContent,
} from '../../components';
import {setRoomID} from '../../redux/actions';
import {Constants} from '../../utils/types';
import {RootState} from '../../redux';
import {callService} from '../../utils/functions';

type QRCodeScreenProp = NativeStackNavigationProp<
  AppStackParamList,
  'QRCodeScreen'
>;

const QRCode = () => {
  const navigate = useNavigation<QRCodeScreenProp>().navigate;
  const {top, bottom, left, right} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const store = useStore();

  const roomLink = useSelector(
    (state: RootState) => state.app.roomID || getMeetingUrl(),
  );
  const debugInfo = useSelector(
    (state: RootState) => state.app.joinConfig.debugInfo,
  );
  const [peerName, setPeerName] = useState<string>('');
  const [joinDisabled, setJoinDisabled] = useState<boolean>(true);
  const [joiningLink, setJoiningLink] = useState<string>('');
  const [moreModalVisible, setMoreModalVisible] = useState(false);

  const onJoinPress = () => {
    if (joiningLink.includes('app.100ms.live/')) {
      dispatch(setRoomID(joiningLink.replace('meeting', 'preview')));

      callService(
        joiningLink,
        (
          roomCode: string,
          userId: string,
          tokenEndpoint: string | undefined,
          initEndpoint: string | undefined,
        ) => {
          // Saving Meeting Link to Async Storage for persisting it between app starts.
          AsyncStorage.setItem(
            Constants.MEET_URL,
            joiningLink.replace('preview', 'meeting'),
          );
          // @ts-ignore
          global.joinConfig = (store.getState() as RootState).app.joinConfig;
          navigate('HMSPrebuiltScreen', {
            roomCode,
            userName: peerName,
            userId,
            endPoints:
              tokenEndpoint && initEndpoint
                ? {init: initEndpoint, token: tokenEndpoint}
                : undefined,
            debugInfo, // default is false, will deal with this later
          });
        },
        (errorMsg: string) => {
          Toast.showWithGravity(errorMsg, Toast.LONG, Toast.TOP);
        },
      );
    } else {
      Alert.alert('Error', 'Invalid URL');
    }
  };

  const handleMorePress = () => setMoreModalVisible(true);

  const closeMoreModal = () => setMoreModalVisible(false);

  const onScanQRCodePress = () => {
    navigate('QRCodeScannerScreen');
  };

  useEffect(() => {
    setJoinDisabled(!validateUrl(joiningLink));
  }, [joiningLink]);

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        setJoiningLink(url);
      }
    });

    const updateUrl = ({url}: {url: string}) => {
      if (url) {
        setJoiningLink(url);
      }
    };
    Linking.addEventListener('url', updateUrl);

    return () => {
      Linking.removeEventListener('url', updateUrl);
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem(Constants.MEET_URL, (_error, url) => {
        if (url && url === roomLink) {
          setJoiningLink(url);
        }
      });
    }, [roomLink]),
  );

  useEffect(() => {
    if (roomLink) {
      setJoiningLink(roomLink);
    }
  }, [roomLink]);

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={[
          styles.contentContainerStyle,
          {
            paddingTop: 24 + top,
            paddingLeft: 24 + left,
            paddingRight: 24 + right,
            paddingBottom: 24 + bottom,
          },
        ]}
        style={styles.container}
        keyboardShouldPersistTaps="always"
      >
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={require('../../../assets/illustration.png')}
        />
        <View>
          <Text style={styles.heading}>Experience the power of 100ms</Text>
          <Text style={styles.description}>
            Jump right in by pasting a room link or scanning a QR code
          </Text>
        </View>
        <View style={styles.joiningLinkInputView}>
          <Text style={styles.joiningLinkInputText}>Joining Link</Text>
        </View>

        <View style={{width: '100%', flexDirection: 'row'}}>
          <CustomInput
            value={joiningLink}
            onChangeText={setJoiningLink}
            inputStyle={styles.joiningLinkInput}
            viewStyle={{width: '86%'}}
            placeholderTextColor={COLORS.TEXT.DISABLED}
            placeholder="Paste the link here"
            multiline
            blurOnSubmit
          />
          <TouchableOpacity
            onPress={onScanQRCodePress}
            style={{
              width: '14%',
              marginTop: 8,
              backgroundColor: COLORS.PRIMARY.DEFAULT,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
          >
            <MaterialCommunityIcons
              name="qrcode"
              style={{color: COLORS.TEXT.HIGH_EMPHASIS_ACCENT}}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <CustomInput
          value={peerName}
          onChangeText={setPeerName}
          textStyle={styles.userNameInputText}
          viewStyle={styles.userNameInputView}
          inputStyle={styles.userNameInput}
          placeholderTextColor={COLORS.TEXT.DISABLED}
          placeholder="Enter your name"
          title="Name"
        />

        <View style={{flexDirection: 'row'}}>
          <CustomButton
            title="Join Now"
            onPress={onJoinPress}
            disabled={joinDisabled}
            viewStyle={[styles.joinButton, joinDisabled && styles.disabled]}
            textStyle={[
              styles.joinButtonText,
              joinDisabled && styles.disabledText,
            ]}
          />
          <CustomButton
            onPress={handleMorePress}
            viewStyle={styles.moreButton}
            RightIcon={
              <MaterialIcons
                name="more-vert"
                style={styles.moreButtonIcon}
                size={24}
              />
            }
          />
        </View>
      </ScrollView>

      <DefaultModal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        modalVisible={moreModalVisible}
        viewStyle={{height: 700}}
        setModalVisible={closeMoreModal}
      >
        <JoinSettingsModalContent />
      </DefaultModal>
    </KeyboardAvoidingView>
  );
};

export {QRCode};
