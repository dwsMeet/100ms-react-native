import {Platform, StyleSheet} from 'react-native';

import {COLORS, FONTS} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND.DEFAULT,
  },
  videoIcon: {
    color: COLORS.PRIMARY.DEFAULT,
  },
  labelContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    flexDirection: 'row',
    padding: 10,
  },
  raiseHand: {
    color: COLORS.INDICATORS.WARNING,
  },
  degraded: {
    color: COLORS.INDICATORS.ERROR,
  },
  generalTile: {
    height: '100%',
    width: '100%',
    marginVertical: 1,
    padding: '0.25%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  hmsView: {
    height: '100%',
    width: '100%',
  },
  hmsViewScreen: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  displayContainer: {
    position: 'absolute',
    top: 4,
    alignSelf: 'center',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3,
  },
  peerName: {
    color: COLORS.PRIMARY.DEFAULT,
    fontFamily: 'Inter-Bold',
  },
  peerNameContainer: {
    maxWidth: 70,
  },
  micContainer: {
    flexDirection: 'row',
  },
  mic: {
    color: COLORS.PRIMARY.DEFAULT,
    paddingHorizontal: 3,
  },
  avatarContainer: {
    flex: 1,
    backgroundColor: COLORS.SURFACE.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  degradedContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLACK,
    zIndex: 2,
  },
  avatar: {
    aspectRatio: 1,
    width: '50%',
    maxWidth: 100,
    maxHeight: 100,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY.DEFAULT,
  },
  avatarText: {
    color: COLORS.WHITE,
    ...FONTS.H4,
  },
  degradedText: {
    color: COLORS.WHITE,
    ...FONTS.H6,
  },
  highlight: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: COLORS.PRIMARY.DEFAULT,
  },
  messageDot: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 10,
    aspectRatio: 1,
    borderRadius: 20,
    zIndex: 2,
    backgroundColor: COLORS.PRIMARY.DEFAULT,
  },
  options: {
    color: COLORS.PRIMARY.DEFAULT,
  },
  optionsContainer: {
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  roleChangeText: {
    padding: 12,
    fontFamily: 'Inter-Regular',
  },
  headerName: {
    color: COLORS.PRIMARY.DEFAULT,
    fontFamily: 'Inter-Bold',
    paddingLeft: 8,
  },
  headerIcon: {
    padding: 10,
  },
  headerContainer: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  page: {
    flexDirection: 'row',
    width: 414,
    flexWrap: 'wrap',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.BLACK,
    paddingLeft: 10,
    minHeight: 32,
    color: COLORS.PRIMARY.DEFAULT,
    margin: 10,
  },
  recordingDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  checkboxContainer: {
    height: 25,
    width: 25,
    borderColor: COLORS.BLACK,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    color: COLORS.BLACK,
  },
  closeButton: {
    zIndex: 2,
    position: 'absolute',
    left: 2,
    top: 0,
    height: 50,
    width: 50,
  },
  flex: {
    flex: 1,
  },
  renderVideo: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // brbContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   paddingHorizontal: 5,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: COLORS.PRIMARY.DEFAULT,
  // },
  // brb: {
  //   color: COLORS.PRIMARY.DEFAULT,
  //   fontFamily: 'Inter-Bold',
  // },
  brbOnContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY.DEFAULT,
    backgroundColor: COLORS.PRIMARY.DEFAULT,
  },
  brbOn: {
    color: COLORS.WHITE,
    fontFamily: 'Inter-Bold',
  },
  statsContainer: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLORS.OVERLAY,
    padding: 5,
    borderRadius: 10,
    margin: 1,
  },
  statsText: {
    color: COLORS.WHITE,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  heroContainer: {
    width: '100%',
    height: '100%',
  },
  heroContainerLandscaspe: {
    flexDirection: 'row',
  },
  heroView: {
    height: '100%',
    width: '100%',
    marginVertical: 1,
    padding: '0.25%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  heroTileContainer: {
    height: '70%',
    width: '100%',
    marginVertical: 1,
    padding: '0.25%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  heroTileContainerLandscaspe: {
    height: '100%',
    width: '80%',
  },
  heroTileContainerSingle: {
    height: '100%',
    width: '100%',
    marginVertical: 1,
    padding: '0.25%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  heroListContainer: {
    width: '100%',
    height: '30%',
  },
  heroListContainerLandscaspe: {
    width: '20%',
    height: '100%',
  },
  heroListView: {
    width: 150,
    height: '100%',
  },
  heroListViewLandscaspe: {
    height: 250,
    width: '100%',
  },
  mainTileContainer: {
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  miniTileContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '40%',
    height: '40%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.WHITE,
    zIndex: 3,
  },
  miniTileContainerLandscape: {
    width: '20%',
    height: '80%',
  },
  heroListViewContainer: {
    marginHorizontal: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  heroListViewContainerLandscaspe: {
    marginVertical: 1,
  },
  network: {
    height: 30,
    width: 30,
    marginRight: 3,
  },
  interRegular: {
    fontFamily: 'Inter-Regular',
  },
  status: {
    alignSelf: 'center',
    position: 'absolute',
    top: '70%',
  },
  resolutionContainer: {
    padding: 16,
  },
  resolutionDetails: {
    flexDirection: 'row',
  },
  resolutionValue: {
    fontFamily: 'Inter-Regular',
    paddingLeft: 16,
  },
  iconContainer: {
    backgroundColor: COLORS.BACKGROUND.DEFAULT,
    borderColor: COLORS.BORDER.LIGHT,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 6,
  },
  leaveIcon: {
    backgroundColor: COLORS.INDICATORS.ERROR,
    borderColor: COLORS.INDICATORS.ERROR,
  },
  roomStatus: {
    color: COLORS.INDICATORS.ERROR,
    marginHorizontal: 6,
  },
  iconTopWrapper: {
    height: 50,
    width: '100%',
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.OVERLAY,
    zIndex: 1,
  },
  iconTopSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMuted: {
    backgroundColor: COLORS.BORDER.LIGHT,
  },
  icon: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
  },
  handRaised: {
    color: COLORS.INDICATORS.WARNING,
  },
  iconBotttomButtonWrapper: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBotttomWrapper: {
    width: '100%',
    position: 'absolute',
    paddingVertical: 4,
    backgroundColor: COLORS.OVERLAY,
    zIndex: 2,
    borderRadius: 16,
  },
  goLiveIconContainer: {
    backgroundColor: COLORS.PRIMARY.DEFAULT,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54,
    marginHorizontal: 6,
  },
  endLiveIconContainer: {
    backgroundColor: COLORS.INDICATORS.ERROR,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54,
    marginHorizontal: 6,
  },
  liveText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: COLORS.TEXT.HIGH_EMPHASIS,
    marginTop: 4,
  },
  participantContainer: {
    height: '100%',
    width: '100%',
  },
  participantsSearchInput: {
    backgroundColor: COLORS.SURFACE.DEFAULT,
    borderColor: COLORS.BORDER.LIGHT,
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 56,
    paddingRight: 16,
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontFamily: 'Inter-Medium',
  },
  participantsSearchInputIcon: {
    position: 'absolute',
    top: 12,
    bottom: 12,
    left: 16,
    right: 16,
    color: COLORS.TEXT.MEDIUM_EMPHASIS,
    width: 24,
  },
  participantsHeaderContainer: {
    height: 48,
    width: '80%',
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantsHeading: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: COLORS.TEXT.HIGH_EMPHASIS,
    paddingRight: 12,
  },
  participantItem: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  participantAvatar: {
    height: 32,
    width: 32,
    borderRadius: 32,
    backgroundColor: COLORS.PRIMARY.DEFAULT,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  participantDescription: {
    flex: 1,
    flexDirection: 'column',
  },
  participantAvatarText: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontFamily: 'Inter-Medium',
  },
  participantName: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
  participantRole: {
    color: COLORS.TEXT.MEDIUM_EMPHASIS,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontFamily: 'Inter-Regular',
    textTransform: 'capitalize',
  },
  participantSettings: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 6,
  },
  participantsMenuContainer: {
    backgroundColor: COLORS.SURFACE.LIGHT,
  },
  participantMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Platform.OS === 'ios' ? 16 : 0,
  },
  participantMenuItemIcon: {
    color: COLORS.WHITE,
    paddingRight: 16,
    height: 24,
  },
  participantMenuItemName: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
  participantRolePickerContainer: {
    backgroundColor: COLORS.SURFACE.LIGHT,
    borderColor: COLORS.BORDER.LIGHT,
    borderWidth: 1,
    height: 56,
    borderRadius: 8,
    marginTop: 24,
  },
  participantRolePicker: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'Inter-Regular',
  },
  roleChangeModalHeading: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
  roleChangeModalDescription: {
    color: COLORS.TEXT.MEDIUM_EMPHASIS,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontFamily: 'Inter-Regular',
    paddingTop: 8,
  },
  roleChangeModalPermission: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    fontFamily: 'Inter-Regular',
  },
  roleChangeModalPermissionContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  roleChangeModalButtonText: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
  roleChangeModalCheckBox: {
    height: 20,
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: COLORS.TEXT.HIGH_EMPHASIS,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roleChangeModalCheck: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
  },
  roleChangeModalCancelButton: {
    backgroundColor: COLORS.SECONDARY.DISABLED,
    borderColor: COLORS.SECONDARY.DISABLED,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    width: '48%',
    alignSelf: 'center',
    marginRight: '4%',
  },
  roleChangeModalSuccessButton: {
    backgroundColor: COLORS.PRIMARY.DEFAULT,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY.DEFAULT,
    borderRadius: 8,
    width: '48%',
    alignSelf: 'center',
  },
  roleChangeModal: {
    padding: 24,
  },
  participantFilterContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: 120,
    borderWidth: 1,
    borderColor: COLORS.BORDER.LIGHT,
    borderRadius: 8,
  },
  participantFilterText: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    marginRight: 12,
    textTransform: 'capitalize',
  },
  participantFilterIcon: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    position: 'absolute',
    right: 0,
  },
  volumeModalContainer: {
    padding: 24,
  },
  volumeModalDivider: {
    height: 1,
    backgroundColor: COLORS.BORDER.LIGHT,
    width: '100%',
    marginTop: 8,
    marginBottom: 12,
  },
  volumeModalSlider: {
    width: '100%',
    marginTop: 24,
  },
  participantChangeNameInput: {
    backgroundColor: COLORS.SURFACE.LIGHT,
    borderColor: COLORS.BORDER.LIGHT,
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    padding: 8,
    color: COLORS.TEXT.HIGH_EMPHASIS,
    fontFamily: 'Inter-Medium',
  },
  error: {
    color: COLORS.INDICATORS.ERROR,
  },
  participantChangeRoleContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
    borderWidth: 1,
    borderColor: COLORS.BORDER.LIGHT,
    borderRadius: 8,
  },
  statsModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsModalText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: COLORS.TEXT.HIGH_EMPHASIS,
  },
  statsModalCheckbox: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: COLORS.TEXT.HIGH_EMPHASIS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsModalCheck: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
  },
  statsModalMenu: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
    borderWidth: 1,
    borderColor: COLORS.BORDER.LIGHT,
    borderRadius: 8,
    backgroundColor: COLORS.SURFACE.LIGHT,
    height: 48,
  },
  statsModalCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statsModalCard: {
    minHeight: 80,
    backgroundColor: COLORS.SURFACE.LIGHT,
    width: '47%',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  statsModalCardHeading: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: COLORS.TEXT.MEDIUM_EMPHASIS,
  },
  statsModalCardDescription: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    textTransform: 'uppercase',
    color: COLORS.TEXT.HIGH_EMPHASIS,
    paddingTop: 8,
  },
});

export {styles};
