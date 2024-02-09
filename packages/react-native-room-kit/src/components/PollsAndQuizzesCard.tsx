import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { batch, useDispatch, useSelector } from 'react-redux';
import type { HMSPoll } from '@100mslive/react-native-hms';
import { HMSPollState, HMSPollType } from '@100mslive/react-native-hms';

import { useHMSRoomStyleSheet } from '../hooks-util';
import type { RootState } from '../redux';
import { HMSPrimaryButton } from './HMSPrimaryButton';
import { HMSSecondaryButton } from './HMSSecondaryButton';
import { setPollStage, setSelectedPollId } from '../redux/actions';
import { CreatePollStages } from '../redux/actionTypes';
import { PollAndQuizzStateLabel } from './PollAndQuizzStateLabel';

export interface PollsAndQuizzesCardProps {
  poll: HMSPoll;
}

export const PollsAndQuizzesCard: React.FC<PollsAndQuizzesCardProps> = ({
  poll,
}) => {
  const dispatch = useDispatch();

  const hmsRoomStyles = useHMSRoomStyleSheet((theme, typography) => ({
    surfaceHighSemiBoldText: {
      color: theme.palette.on_surface_high,
      fontFamily: `${typography.font_family}-SemiBold`,
    },
    container: {
      backgroundColor: theme.palette.surface_default,
    },
    liveStateLabelWrapper: {
      backgroundColor: theme.palette.alert_error_default,
    },
    stateLabelWrapper: {
      backgroundColor: theme.palette.surface_brighter,
    },
  }));

  const viewPoll = () => {
    batch(() => {
      dispatch(setPollStage(CreatePollStages.POLL_VOTING));
      dispatch(setSelectedPollId(poll.pollId));
    });
  };

  return (
    <View style={[hmsRoomStyles.container, styles.container]}>
      <View style={styles.row}>
        <Text style={[styles.pollTitle, hmsRoomStyles.surfaceHighSemiBoldText]}>
          {poll.title}
        </Text>

        {typeof poll.state === 'number' ? (
          <PollAndQuizzStateLabel state={poll.state} />
        ) : null}
      </View>

      <View style={styles.spacer} />

      <View style={styles.rightRow}>
        {/* {poll.state === HMSPollState.stopped ? (
          <HMSSecondaryButton
            loading={false}
            onPress={() => null}
            style={{ marginRight: 8 }}
            title="View Results"
          />
        ) : null} */}

        <HMSPrimaryButton loading={false} onPress={viewPoll} title="View" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  spacer: {
    height: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pollTitle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  stateLabelWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  stateLabel: {
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
  },
});
