(self.webpackChunkdouyin_live_v2 = self.webpackChunkdouyin_live_v2 || []).push([
  [9606],
  {
    18838: (e, t, a) => {
      "use strict";
      var r, o, i, s, n, d;
      a.d(t, {
        Kr: () => r,
        Om: () => s,
        xr: () => l,
        ej: () => g,
        AG: () => n,
        SZ: () => d,
        DA: () => o,
        nN: () => i,
        Jn: () => p,
        ry: () => c,
        PN: () => u,
      }),
        (function (e) {
          (e[(e.Url = 0)] = "Url"),
            (e[(e.BdDid = 1)] = "BdDid"),
            (e[(e.SessionInCookie = 2)] = "SessionInCookie"),
            (e[(e.TTWIDInCookie = 3)] = "TTWIDInCookie");
        })(r || (r = {})),
        (function (e) {
          (e.Protobuf = "protobuf"), (e.Json = "json");
        })(o || (o = {})),
        (function (e) {
          (e.Anchor = "anchor"), (e.Audience = "audience");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Polling = 0)] = "Polling"),
            (e[(e.Socket = 1)] = "Socket"),
            (e[(e.PollingWhenSocketConnecting = 2)] =
              "PollingWhenSocketConnecting");
        })(s || (s = {})),
        (function (e) {
          (e.Close = "close"), (e.Ack = "ack"), (e.Msg = "msg"), (e.Hb = "hb");
        })(n || (n = {})),
        (function (e) {
          (e.FetchConfig = "live_im_fetch_config"),
            (e.FetchStop = "live_im_fetch_stop"),
            (e.FetchConfigError = "live_im_fetch_config_error"),
            (e.SocketStart = "live_im_socket_start"),
            (e.SocketClose = "live_im_socket_close"),
            (e.SocketSuccess = "live_im_socket_success"),
            (e.SocketError = "live_im_socket_failed"),
            (e.PollingStart = "live_im_polling_start"),
            (e.PollingError = "live_im_polling_error"),
            (e.SocketSwitchToPolling = "live_im_socket_switch_to_polling"),
            (e.PollingSwitchToSocket = "live_im_polling_switch_to_socket");
        })(d || (d = {}));
      const p = "1.3.0",
        c = "180800",
        g = 30;
      function u() {
        return {
          device_platform: "web",
          cookie_enabled: navigator.cookieEnabled,
          screen_width: screen.width,
          screen_height: screen.height,
          browser_language: navigator.language,
          browser_platform: navigator.platform,
          browser_name: navigator.appCodeName,
          browser_version: navigator.appVersion,
          browser_online: navigator.onLine,
          tz_name: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
      }
      const l = "/webcast/im/fetch/";
    },
    36687: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          ActivityCouponInvalidMessage: () => oi.ActivityCouponInvalidMessage,
          ActivityInteractiveMessage: () => i.ActivityInteractiveMessage,
          AddKTVDressContent: () => St.AddKTVDressContent,
          AdminData: () => g.AdminData,
          AdminPrivilegeMessage: () => p.AdminPrivilegeMessage,
          AdminPrivilegeStruct: () => p.AdminPrivilegeStruct,
          AdminRecordHandleMessage: () => c.AdminRecordHandleMessage,
          AdminRecordMessage: () => g.AdminRecordMessage,
          AllQuizInfo: () => yr.AllQuizInfo,
          AnchorAppointmentNumUpdateMessage: () =>
            Eo.AnchorAppointmentNumUpdateMessage,
          AnchorBoost: () => u.AnchorBoost,
          AnchorBoostMessage: () => u.AnchorBoostMessage,
          AnchorFaceConfig: () => Fr.AnchorFaceConfig,
          AnchorUpdateLayoutContent: () => Ut.AnchorUpdateLayoutContent,
          AnchorUpdateLinkmicConfigContent: () =>
            Ut.AnchorUpdateLinkmicConfigContent,
          AnswerReviewMessage: () => l.AnswerReviewMessage,
          AppointmentNumberUpdateMessage: () =>
            zo.AppointmentNumberUpdateMessage,
          AssetEffectUtilMessage: () => f.AssetEffectUtilMessage,
          AssetMessage: () => b.AssetMessage,
          AuctionInfo: () => Sa.AuctionInfo,
          AuctionMessage: () => ja.AuctionMessage,
          AuctionPublicScreenMessageExtra: () =>
            ja.AuctionPublicScreenMessageExtra,
          AuctionRankMessageExtra: () => ja.AuctionRankMessageExtra,
          AuctionSettleMessageExtra: () => ja.AuctionSettleMessageExtra,
          AuctionStartMessageExtra: () => ja.AuctionStartMessageExtra,
          AuctionSuccess: () => Sa.AuctionSuccess,
          AudienceAddSongSettingChangedContent: () =>
            Bt.AudienceAddSongSettingChangedContent,
          AudienceEntranceMessage: () => ho.AudienceEntranceMessage,
          AudienceGiftSyncData: () => wi.AudienceGiftSyncData,
          AudienceOrderSongChatContent: () => Bt.AudienceOrderSongChatContent,
          AudienceOrderSongContent: () => Bt.AudienceOrderSongContent,
          AudioBGImgMessage: () => w.AudioBGImgMessage,
          AudioChatMessage: () => y.AudioChatMessage,
          AuthorizationNotifyMessage: () => h.AuthorizationNotifyMessage,
          AutoCoverMessage: () => M.AutoCoverMessage,
          Avatar: () => Ga.Avatar,
          AwemeShopExplainMessage: () => m.AwemeShopExplainMessage,
          BackRecordVideoMessage: () => I.BackRecordVideoMessage,
          Background: () => Xr.Background,
          BattleAutoMatchMessage: () => C.BattleAutoMatchMessage,
          BattleCancelMessage: () => S.BattleCancelMessage,
          BattleFeedBackCardMessage: () => F.BattleFeedBackCardMessage,
          BattleFrontRankMessage: () => B.BattleFrontRankMessage,
          BattleInviteMessage: () => L.BattleInviteMessage,
          BattleMode: () => Nt.BattleMode,
          BattleModeMessage: () => T.BattleModeMessage,
          BattleMultiMatchMessage: () => D.BattleMultiMatchMessage,
          BattleNotifyMessage: () => P.BattleNotifyMessage,
          BattlePrecisionMatchMessage: () => k.BattlePrecisionMatchMessage,
          BattleRejectMessage: () => R.BattleRejectMessage,
          BattleSettings: () => Nt.BattleSettings,
          BattleTask: () => Nt.BattleTask,
          BattleTeamTaskAskMessage: () => v.BattleTeamTaskAskMessage,
          BattleTeamTaskMessage: () => W.BattleTeamTaskMessage,
          BattleUseCardMessage: () => E.BattleUseCardMessage,
          BeginnerGuideMessage: () => z.BeginnerGuideMessage,
          BenefitLabel: () => Sa.BenefitLabel,
          BindingGiftMessage: () => qe.BindingGiftMessage,
          BridgeData: () => G.BridgeData,
          BridgeMessage: () => G.BridgeMessage,
          BrokerNotifyMessage: () => Re.BrokerNotifyMessage,
          BrotherhoodMessage: () => U.BrotherhoodMessage,
          BubbleConfig: () => Po.BubbleConfig,
          CNYATaskMessage: () => K.CNYATaskMessage,
          CNYReward: () => K.CNYReward,
          CallToLinkmicContent: () => Jt.CallToLinkmicContent,
          CameraShareStateSyncData: () => yi.CameraShareStateSyncData,
          CarBallShowMessage: () => O.CarBallShowMessage,
          CarSeriesInfoMessage: () => x.CarSeriesInfoMessage,
          CarnivalMessage: () => N.CarnivalMessage,
          CarouselInfo: () => Bi.CarouselInfo,
          CategoryChangeMessage: () => j.CategoryChangeMessage,
          CategoryInfo: () => Fa.CategoryInfo,
          CeremonyMessage: () => ce.CeremonyMessage,
          ChangeKTVDressContent: () => St.ChangeKTVDressContent,
          ChannelLinkerApplyContent: () => At.ChannelLinkerApplyContent,
          ChannelLinkerCloseContent: () => At.ChannelLinkerCloseContent,
          ChannelLinkerCreateContent: () => At.ChannelLinkerCreateContent,
          ChannelLinkerEnterContent: () => At.ChannelLinkerEnterContent,
          ChannelLinkerInviteContent: () => At.ChannelLinkerInviteContent,
          ChannelLinkerKickOutContent: () => At.ChannelLinkerKickOutContent,
          ChannelLinkerLeaveContent: () => At.ChannelLinkerLeaveContent,
          ChannelLinkerLinkedListChangeContent: () =>
            At.ChannelLinkerLinkedListChangeContent,
          ChannelLinkerPermitContent: () => At.ChannelLinkerPermitContent,
          ChannelLinkerReplyContent: () => At.ChannelLinkerReplyContent,
          ChannelLinkerSilenceContent: () => At.ChannelLinkerSilenceContent,
          ChannelNoticeContent: () => Ut.ChannelNoticeContent,
          ChatCarnivalMessage: () => _.ChatCarnivalMessage,
          ChatCarnivalSyncData: () => Mi.ChatCarnivalSyncData,
          ChatItem: () => _.ChatItem,
          ChatMessage: () => V.ChatMessage,
          ChijiNoticeMessage: () => Vt.ChijiNoticeMessage,
          ChorusMessage: () => H.ChorusMessage,
          ChorusOrderedSongListChangeContent: () =>
            H.ChorusOrderedSongListChangeContent,
          CityEffect: () => Ut.CityEffect,
          ClientOperation: () => ft.ClientOperation,
          CloseChorusContent: () => H.CloseChorusContent,
          CloseKtvComponentContent: () => Bt.CloseKtvComponentContent,
          CloudGamingPodMessage: () => Ve.CloudGamingPodMessage,
          Comment: () => mi.Comment,
          CommentRoleConfig: () => so.CommentRoleConfig,
          CommentaryChangeMessage: () => J.CommentaryChangeMessage,
          CommentsMessage: () => $.CommentsMessage,
          CommentsSyncData: () => mi.CommentsSyncData,
          CommerceMessage: () => Y.CommerceMessage,
          CommerceSaleMessage: () => q.CommerceSaleMessage,
          CommonCardAreaMessage: () => Q.CommonCardAreaMessage,
          CommonGuideMessage: () => X.CommonGuideMessage,
          CommonLuckyMoneyMessage: () => Z.CommonLuckyMoneyMessage,
          CommonPopupMessage: () => te.CommonPopupMessage,
          CommonTextMessage: () => ae.CommonTextMessage,
          CommonToastMessage: () => re.CommonToastMessage,
          ComplexContent: () => X.ComplexContent,
          ControlMessage: () => oe.ControlMessage,
          CornerReachMessage: () => Fe.CornerReachMessage,
          CouponActivityInfoMessage: () => Ia.CouponActivityInfoMessage,
          CouponMetaInfoMessage: () => Ia.CouponMetaInfoMessage,
          CoverSuccessMessage: () => Uo.CoverSuccessMessage,
          CreateGroupChatGuideContent: () => Jt.CreateGroupChatGuideContent,
          CreateRedPacketMessage: () => Cr.CreateRedPacketMessage,
          CreateTeamfightGuideContent: () => Jt.CreateTeamfightGuideContent,
          CrossRoomLinkCancelInviteContent: () =>
            Ut.CrossRoomLinkCancelInviteContent,
          CrossRoomLinkInviteContent: () => Ut.CrossRoomLinkInviteContent,
          CrossRoomLinkReplyContent: () => Ut.CrossRoomLinkReplyContent,
          CrossRoomRTCInfoContent: () => Ut.CrossRoomRTCInfoContent,
          CurrentUserInfo: () => Sa.CurrentUserInfo,
          CustomizedCardMessage: () => ho.CustomizedCardMessage,
          DLiveMessage: () => ce.DLiveMessage,
          DataLifeLiveMessage: () => ie.DataLifeLiveMessage,
          DecorationModifyMessage: () => ne.DecorationModifyMessage,
          DecorationUpdateMessage: () => de.DecorationUpdateMessage,
          DeviceIdRuleTypeEnum: () => Hi.Kr,
          DiggMessage: () => pe.DiggMessage,
          DisplayControlInfo: () => zt.DisplayControlInfo,
          DolphinSettingUpdateMessage: () => ge.DolphinSettingUpdateMessage,
          DonationMessage: () => ue.DonationMessage,
          DoodleGiftMessage: () => le.DoodleGiftMessage,
          DoubleLikeDetail: () => zt.DoubleLikeDetail,
          DoubleLikeHeartMessage: () => fe.DoubleLikeHeartMessage,
          DoubleLikeSyncData: () => Ii.DoubleLikeSyncData,
          DoubleLikeTopUserMessage: () => fe.DoubleLikeTopUserMessage,
          DouplusIndicatorMessage: () => be.DouplusIndicatorMessage,
          DouplusMessage: () => we.DouplusMessage,
          DressAssetMessage: () => ye.DressAssetMessage,
          DriveGiftMessage: () => he.DriveGiftMessage,
          DrumMessage: () => Me.DrumMessage,
          DrumMsgType: () => Me.DrumMsgType,
          DrumResult: () => Me.DrumResult,
          DutyGiftMessage: () => Ie.DutyGiftMessage,
          EasterEggMessage: () => Ce.EasterEggMessage,
          EasterEggMessageData: () => Ce.EasterEggMessageData,
          EcomBuyIntentionMessage: () => mt.EcomBuyIntentionMessage,
          EcomFansClubMessage: () => Se.EcomFansClubMessage,
          EffectUtilImageInfo: () => f.EffectUtilImageInfo,
          EffectUtilTextInfo: () => f.EffectUtilTextInfo,
          EggItem: () => _.EggItem,
          EmojiChatMessage: () => V.EmojiChatMessage,
          EpisodeChatMessage: () => Be.EpisodeChatMessage,
          ExhibitionChatMessage: () => $e.ExhibitionChatMessage,
          ExhibitionTopLeftMessage: () => $e.ExhibitionTopLeftMessage,
          FansGroupGuideMessage: () => Le.FansGroupGuideMessage,
          FansclubGuideMessage: () => Te.FansclubGuideMessage,
          FansclubMessage: () => Te.FansclubMessage,
          FansclubReviewMessage: () => Te.FansclubReviewMessage,
          FansclubStatisticsMessage: () => Te.FansclubStatisticsMessage,
          FastChatInfo: () => Si.FastChatInfo,
          FastChatSyncData: () => Ci.FastChatSyncData,
          FeedbackActionMessage: () => De.FeedbackActionMessage,
          FeedbackCardMessage: () => De.FeedbackCardMessage,
          FetchRuleEnum: () => Hi.Om,
          FieldLocation: () => Ri.FieldLocation,
          FilterSwitchChangeData: () => Sa.FilterSwitchChangeData,
          FireworkMultiMessage: () => Pe.FireworkMultiMessage,
          FixedChatInfo: () => Si.FixedChatInfo,
          FixedChatSyncData: () => Si.FixedChatSyncData,
          FollowGuideMessage: () => ke.FollowGuideMessage,
          FootballTalkingModule: () => Ga.FootballTalkingModule,
          FreeCellGiftMessage: () => ve.FreeCellGiftMessage,
          FreeGiftMessage: () => We.FreeGiftMessage,
          FreshmanSupportMessage: () => ti.FreshmanSupportMessage,
          FriendChatMessage: () => V.FriendChatMessage,
          GamblingStatusChangedMessage: () => Ee.GamblingStatusChangedMessage,
          GameAncAudDataFromAncMessage: () => ze.GameAncAudDataFromAncMessage,
          GameAncAudDataFromAudMessage: () => ze.GameAncAudDataFromAudMessage,
          GameAncAudEntranceMessage: () => ze.GameAncAudEntranceMessage,
          GameAncAudPanelCtrlMessage: () => ze.GameAncAudPanelCtrlMessage,
          GameAncAudStatusMessage: () => ze.GameAncAudStatusMessage,
          GameCPAnchorPromoteInfoMessage: () =>
            je.GameCPAnchorPromoteInfoMessage,
          GameCPAnchorReminderMessage: () => _e.GameCPAnchorReminderMessage,
          GameCPBaseMessage: () => _e.GameCPBaseMessage,
          GameCPShowMessage: () => _e.GameCPShowMessage,
          GameCPUserDownloadMessage: () => _e.GameCPUserDownloadMessage,
          GameCPUserRoomMetaMessage: () => _e.GameCPUserRoomMetaMessage,
          GameCardMessage: () => ho.GameCardMessage,
          GameChannelMessage: () => ze.GameChannelMessage,
          GameDevelopMessage: () => Ae.GameDevelopMessage,
          GameGiftMessage: () => Ge.GameGiftMessage,
          GameGiftStatusMessage: () => Ge.GameGiftStatusMessage,
          GameInviteMessage: () => Oe.GameInviteMessage,
          GameInviteReplyMessage: () => Oe.GameInviteReplyMessage,
          GamePVPMessage: () => xe.GamePVPMessage,
          GamePlayInviteMessage: () => He.GamePlayInviteMessage,
          GamePlayStatusMessage: () => He.GamePlayStatusMessage,
          GamePlayTeamStatusMessage: () => He.GamePlayTeamStatusMessage,
          GameStatusMessage: () => Ue.GameStatusMessage,
          GameStatusUpdateMessage: () => Ne.GameStatusUpdateMessage,
          GeneralCarnivalMessage: () => Fi.GeneralCarnivalMessage,
          GeneralCarnivalSyncData: () => Fi.GeneralCarnivalSyncData,
          GiftConsumeRemindMessage: () => Ke.GiftConsumeRemindMessage,
          GiftCycleReleaseMessage: () => Je.GiftCycleReleaseMessage,
          GiftIconFlashMessage: () => Ye.GiftIconFlashMessage,
          GiftMessage: () => qe.GiftMessage,
          GiftUpdateMessage: () => Qe.GiftUpdateMessage,
          GiftVoteMessage: () => Xe.GiftVoteMessage,
          GradeBuffAnchorShareMessage: () => Ze.GradeBuffAnchorShareMessage,
          GroupPhotoJumpDetail: () => Ri.GroupPhotoJumpDetail,
          GroupShowUserUpdateMessage: () => et.GroupShowUserUpdateMessage,
          GrowthTaskMessage: () => tt.GrowthTaskMessage,
          GuestBattleBubbleGuideContent: () => Jt.GuestBattleBubbleGuideContent,
          GuestBattleFinishContent: () => at.GuestBattleFinishContent,
          GuestBattleMessage: () => at.GuestBattleMessage,
          GuestBattleScoreMessage: () => rt.GuestBattleScoreMessage,
          GuestBattleUpdateContent: () => at.GuestBattleUpdateContent,
          GuideMessage: () => ot.GuideMessage,
          HighlightComment: () => it.HighlightComment,
          HighlightCommentPosition: () => st.HighlightCommentPosition,
          HighlightContainerSyncData: () => Bi.HighlightContainerSyncData,
          HighlightDataAnswer: () => Bi.HighlightDataAnswer,
          HighlightDataAppointment: () => Bi.HighlightDataAppointment,
          HighlightDataComment: () => Bi.HighlightDataComment,
          HighlightDataCommonText: () => Bi.HighlightDataCommonText,
          HighlightDataImCommon: () => Bi.HighlightDataImCommon,
          HighlightDataMicroApp: () => Bi.HighlightDataMicroApp,
          HighlightDataVideo: () => Bi.HighlightDataVideo,
          HighlightItem: () => Bi.HighlightItem,
          HighlightTempInfo: () => Bi.HighlightTempInfo,
          HostVersion: () => ze.HostVersion,
          HotAtmosphere: () => Sa.HotAtmosphere,
          HotChatMessage: () => nt.HotChatMessage,
          HotLiveModule: () => Ga.HotLiveModule,
          HotRoomMessage: () => dt.HotRoomMessage,
          HotVideoCard: () => Ga.HotVideoCard,
          IMMessageTypes: () => Vi.w,
          IM_URL: () => Hi.xr,
          ImDeleteMessage: () => pt.ImDeleteMessage,
          ImageInfo: () => d.ImageInfo,
          Img: () => Sa.Img,
          InRoomBannerEvent: () => ct.InRoomBannerEvent,
          InRoomBannerMessage: () => ct.InRoomBannerMessage,
          InRoomBannerRedPoint: () => gt.InRoomBannerRedPoint,
          InRoomBannerRefreshMessage: () => ut.InRoomBannerRefreshMessage,
          IncrPriceList: () => Sa.IncrPriceList,
          InitLinkmicContent: () => A.InitLinkmicContent,
          InputPanelComponentSyncData: () => Li.InputPanelComponentSyncData,
          InstantCommandMessage: () => lt.InstantCommandMessage,
          InteractControlMessage: () => ft.InteractControlMessage,
          InteractOpenAppStatusMessage: () => ai.InteractOpenAppStatusMessage,
          InteractOpenChatMessage: () => ri.InteractOpenChatMessage,
          InteractOpenDevelopMessage: () => bt.InteractOpenDevelopMessage,
          InteractOpenDiamondMessage: () => ii.InteractOpenDiamondMessage,
          InteractOpenFollowingMessage: () => si.InteractOpenFollowingMessage,
          InteractOpenRewardMessage: () => di.InteractOpenRewardMessage,
          InteractOpenViolationMessage: () => ci.InteractOpenViolationMessage,
          InteractScreenshotMessage: () => pi.InteractScreenshotMessage,
          InteractionAvatar: () => Sa.InteractionAvatar,
          InteractionContent: () => Sa.InteractionContent,
          InteractionContentCheck: () => Sa.InteractionContentCheck,
          InteractionData: () => Sa.InteractionData,
          InteractionElement: () => Sa.InteractionElement,
          InteractionInfoMessage: () => wt.InteractionInfoMessage,
          IntercomChangeSyncData: () => Di.IntercomChangeSyncData,
          IntercomInviteMessage: () => yt.IntercomInviteMessage,
          IntercomReplyMessage: () => yt.IntercomReplyMessage,
          ItemShareMessage: () => ht.ItemShareMessage,
          JackfruitMessage: () => Mt.JackfruitMessage,
          JoinGroupChatGuideContent: () => Jt.JoinGroupChatGuideContent,
          KTVChallengeRankMessage: () => kt.KTVChallengeRankMessage,
          KTVChallengeStatusMessage: () => Rt.KTVChallengeStatusMessage,
          KTVContestSupportMessage: () => Ct.KTVContestSupportMessage,
          KTVPlayModeStartMessage: () => Lt.KTVPlayModeStartMessage,
          KTVShortVideoCreatedMessage: () => Tt.KTVShortVideoCreatedMessage,
          KTVSingerHotRankPosMessage: () => Dt.KTVSingerHotRankPosMessage,
          KTVStartGrabSongMessage: () => vt.KTVStartGrabSongMessage,
          KTVUserSingingHotMessage: () => Wt.KTVUserSingingHotMessage,
          KtvAddSongGuideContent: () => Jt.KtvAddSongGuideContent,
          KtvAtmosphereVideoContent: () => It.KtvAtmosphereVideoContent,
          KtvAtmosphereVideoMessage: () => It.KtvAtmosphereVideoMessage,
          KtvChallengeConfigMessage: () => Pt.KtvChallengeConfigMessage,
          KtvDressMessage: () => St.KtvDressMessage,
          KtvDressSyncData: () => Pi.KtvDressSyncData,
          KtvGrabSongResultMessage: () => Ft.KtvGrabSongResultMessage,
          KtvMessage: () => Bt.KtvMessage,
          KtvStreamSingSyncData: () => ki.KtvStreamSingSyncData,
          LevelUpMessage: () => Et.LevelUpMessage,
          LikeEggJumpDetail: () => Ri.LikeEggJumpDetail,
          LikeEggSyncData: () => Ri.LikeEggSyncData,
          LikeEggTrayColor: () => Ri.LikeEggTrayColor,
          LikeMessage: () => zt.LikeMessage,
          LikeUserDetail: () => fe.LikeUserDetail,
          LinkMessage: () => Ut.LinkMessage,
          LinkMicAdventureCallCancelContent: () =>
            na.LinkMicAdventureCallCancelContent,
          LinkMicAdventureCallInviteContent: () =>
            na.LinkMicAdventureCallInviteContent,
          LinkMicAdventureCallReplyContent: () =>
            na.LinkMicAdventureCallReplyContent,
          LinkMicAdventureCardContent: () => na.LinkMicAdventureCardContent,
          LinkMicAdventureFinishContent: () => na.LinkMicAdventureFinishContent,
          LinkMicAdventureInviteContent: () => na.LinkMicAdventureInviteContent,
          LinkMicAdventureMessage: () => na.LinkMicAdventureMessage,
          LinkMicAdventurePairFinishContent: () =>
            na.LinkMicAdventurePairFinishContent,
          LinkMicAdventurePairInfoChangeContent: () =>
            na.LinkMicAdventurePairInfoChangeContent,
          LinkMicAdventurePlayModeInfoChangeContent: () =>
            na.LinkMicAdventurePlayModeInfoChangeContent,
          LinkMicAdventureReplyContent: () => na.LinkMicAdventureReplyContent,
          LinkMicAdventureScoreMessage: () => da.LinkMicAdventureScoreMessage,
          LinkMicAdventureStartContent: () => na.LinkMicAdventureStartContent,
          LinkMicArmies: () => Ot.LinkMicArmies,
          LinkMicAudienceKtvMessage: () => pa.LinkMicAudienceKtvMessage,
          LinkMicBattle: () => Nt.LinkMicBattle,
          LinkMicBattleFinish: () => xt.LinkMicBattleFinish,
          LinkMicBattlePunish: () => jt.LinkMicBattlePunish,
          LinkMicBattleTaskMessage: () => _t.LinkMicBattleTaskMessage,
          LinkMicEnterNoticeMessage: () => Ht.LinkMicEnterNoticeMessage,
          LinkMicFriendOnlineMessage: () => Kt.LinkMicFriendOnlineMessage,
          LinkMicGuideMessage: () => Jt.LinkMicGuideMessage,
          LinkMicHostModifyMsg: () => $t.LinkMicHostModifyMsg,
          LinkMicKtvBeatRankMessage: () => Yt.LinkMicKtvBeatRankMessage,
          LinkMicKtvEffectMessage: () => qt.LinkMicKtvEffectMessage,
          LinkMicMethod: () => Qt.LinkMicMethod,
          LinkMicOChannelKickOutMsg: () => Xt.LinkMicOChannelKickOutMsg,
          LinkMicOChannelNotifyMsg: () => Zt.LinkMicOChannelNotifyMsg,
          LinkMicPositionListChangeContent: () =>
            ra.LinkMicPositionListChangeContent,
          LinkMicPositionMessage: () => ra.LinkMicPositionMessage,
          LinkMicPositionVerifyContent: () => ra.LinkMicPositionVerifyContent,
          LinkMicPositionVerifyItem: () => ra.LinkMicPositionVerifyItem,
          LinkMicSendEmojiMessage: () => oa.LinkMicSendEmojiMessage,
          LinkMicSignalingMethod: () => sa.LinkMicSignalingMethod,
          LinkPhaseEnterNextNotifyContent: () =>
            Ut.LinkPhaseEnterNextNotifyContent,
          LinkPrepareApplyContent: () => Ut.LinkPrepareApplyContent,
          LinkSettingNotifyMessage: () => ia.LinkSettingNotifyMessage,
          LinkerAnchorStreamSwitchContent: () =>
            Ut.LinkerAnchorStreamSwitchContent,
          LinkerApplyExpiredContent: () => Ut.LinkerApplyExpiredContent,
          LinkerApplyRankChangeContent: () => Ut.LinkerApplyRankChangeContent,
          LinkerApplyStrongReminderContent: () =>
            Ut.LinkerApplyStrongReminderContent,
          LinkerAvatarAuditContent: () => Ut.LinkerAvatarAuditContent,
          LinkerBanContent: () => Ut.LinkerBanContent,
          LinkerBattleConnectContent: () => Ut.LinkerBattleConnectContent,
          LinkerCancelContent: () => Ut.LinkerCancelContent,
          LinkerChangeMediaInfoContent: () => Ut.LinkerChangeMediaInfoContent,
          LinkerChangeMultiPKTeamInfoContent: () =>
            Ut.LinkerChangeMultiPKTeamInfoContent,
          LinkerChangePlayModeContent: () => Ut.LinkerChangePlayModeContent,
          LinkerClickScreenContent: () => Ut.LinkerClickScreenContent,
          LinkerCloseContent: () => Ut.LinkerCloseContent,
          LinkerContributeMessage: () => Gt.LinkerContributeMessage,
          LinkerCreateContent: () => Ut.LinkerCreateContent,
          LinkerCrossRoomUpdateContent: () => Ut.LinkerCrossRoomUpdateContent,
          LinkerDegradeAlertContent: () => Ut.LinkerDegradeAlertContent,
          LinkerEnlargeGuestApplyContent: () =>
            Ut.LinkerEnlargeGuestApplyContent,
          LinkerEnlargeGuestInviteContent: () =>
            Ut.LinkerEnlargeGuestInviteContent,
          LinkerEnlargeGuestReplyContent: () =>
            Ut.LinkerEnlargeGuestReplyContent,
          LinkerEnterContent: () => Ut.LinkerEnterContent,
          LinkerFollowStrongGuideContent: () =>
            Ut.LinkerFollowStrongGuideContent,
          LinkerGuestExitCastScreenContent: () =>
            Ut.LinkerGuestExitCastScreenContent,
          LinkerGuestInviteContent: () => Ut.LinkerGuestInviteContent,
          LinkerInviteContent: () => Ut.LinkerInviteContent,
          LinkerItemContent: () => Ut.LinkerItemContent,
          LinkerKickOutContent: () => Ut.LinkerKickOutContent,
          LinkerLeaveContent: () => Ut.LinkerLeaveContent,
          LinkerLinkedListChangeContent: () => Ut.LinkerLinkedListChangeContent,
          LinkerLockPositionContent: () => Ut.LinkerLockPositionContent,
          LinkerLowBalanceForPaidLinkmicContent: () =>
            Ut.LinkerLowBalanceForPaidLinkmicContent,
          LinkerReplyContent: () => Ut.LinkerReplyContent,
          LinkerResumeApplyContent: () => Ut.LinkerResumeApplyContent,
          LinkerResumeAudienceContent: () => Ut.LinkerResumeAudienceContent,
          LinkerSetting: () => Ut.LinkerSetting,
          LinkerShareVideoImContent: () => Ut.LinkerShareVideoImContent,
          LinkerSwitchSceneContent: () => Ut.LinkerSwitchSceneContent,
          LinkerSysKickOutContent: () => Ut.LinkerSysKickOutContent,
          LinkerUILayoutChangeContent: () => Ut.LinkerUILayoutChangeContent,
          LinkerUpdateLinkTypeApplyContent: () =>
            Ut.LinkerUpdateLinkTypeApplyContent,
          LinkerUpdateLinkTypeReplyContent: () =>
            Ut.LinkerUpdateLinkTypeReplyContent,
          LinkerUpdateUserContent: () => Ut.LinkerUpdateUserContent,
          LinkerUpdateWaitingUserOffsetContent: () =>
            Ut.LinkerUpdateWaitingUserOffsetContent,
          LinkerViolationReminderContent: () =>
            Ut.LinkerViolationReminderContent,
          LinkerWaitingListChangeContent: () =>
            Ut.LinkerWaitingListChangeContent,
          LinkmicBigEventMessage: () => A.LinkmicBigEventMessage,
          LinkmicChatMatchFinishGroupContent: () =>
            ca.LinkmicChatMatchFinishGroupContent,
          LinkmicChatMatchMessage: () => ca.LinkmicChatMatchMessage,
          LinkmicChatMatchResultContent: () => ca.LinkmicChatMatchResultContent,
          LinkmicChatMatchStartCountDownContent: () =>
            ca.LinkmicChatMatchStartCountDownContent,
          LinkmicChatMatchUserJoinContent: () =>
            ca.LinkmicChatMatchUserJoinContent,
          LinkmicChatMatchUserLeaveContent: () =>
            ca.LinkmicChatMatchUserLeaveContent,
          LinkmicEcologyMessage: () => ga.LinkmicEcologyMessage,
          LinkmicEnlargeGuestChangeUserContent: () =>
            ua.LinkmicEnlargeGuestChangeUserContent,
          LinkmicEnlargeGuestMessage: () => ua.LinkmicEnlargeGuestMessage,
          LinkmicEnlargeGuestTurnOffContent: () =>
            ua.LinkmicEnlargeGuestTurnOffContent,
          LinkmicEnlargeGuestTurnOnContent: () =>
            ua.LinkmicEnlargeGuestTurnOnContent,
          LinkmicFollowEffectContent: () => Jt.LinkmicFollowEffectContent,
          LinkmicGiftRecipientContent: () => la.LinkmicGiftRecipientContent,
          LinkmicInfo: () => Ut.LinkmicInfo,
          LinkmicOrderSingActionContent: () => ta.LinkmicOrderSingActionContent,
          LinkmicOrderSingActionToastContent: () =>
            ta.LinkmicOrderSingActionToastContent,
          LinkmicOrderSingCreateContent: () => ta.LinkmicOrderSingCreateContent,
          LinkmicOrderSingFinishContent: () => ta.LinkmicOrderSingFinishContent,
          LinkmicOrderSingListContent: () => ea.LinkmicOrderSingListContent,
          LinkmicOrderSingListMessage: () => ea.LinkmicOrderSingListMessage,
          LinkmicOrderSingMessage: () => ta.LinkmicOrderSingMessage,
          LinkmicOrderSingScoreContent: () => aa.LinkmicOrderSingScoreContent,
          LinkmicOrderSingScoreMessage: () => aa.LinkmicOrderSingScoreMessage,
          LinkmicProfitBidPaidLinkmicAbortContent: () =>
            la.LinkmicProfitBidPaidLinkmicAbortContent,
          LinkmicProfitBidPaidLinkmicBidContent: () =>
            la.LinkmicProfitBidPaidLinkmicBidContent,
          LinkmicProfitBidPaidLinkmicDealContent: () =>
            la.LinkmicProfitBidPaidLinkmicDealContent,
          LinkmicProfitBidPaidLinkmicStartContent: () =>
            la.LinkmicProfitBidPaidLinkmicStartContent,
          LinkmicProfitBidPaidLinkmicTerminateContent: () =>
            la.LinkmicProfitBidPaidLinkmicTerminateContent,
          LinkmicProfitBidPaidLinkmicTurnOffContent: () =>
            la.LinkmicProfitBidPaidLinkmicTurnOffContent,
          LinkmicProfitBidPaidLinkmicTurnOnContent: () =>
            la.LinkmicProfitBidPaidLinkmicTurnOnContent,
          LinkmicProfitInteractiveScreenCastCloseContent: () =>
            la.LinkmicProfitInteractiveScreenCastCloseContent,
          LinkmicProfitInteractiveScreenCastOpenContent: () =>
            la.LinkmicProfitInteractiveScreenCastOpenContent,
          LinkmicProfitMessage: () => la.LinkmicProfitMessage,
          LinkmicProfitNormalPaidLinkmicAddPriceContent: () =>
            la.LinkmicProfitNormalPaidLinkmicAddPriceContent,
          LinkmicProfitNormalPaidLinkmicCloseContent: () =>
            la.LinkmicProfitNormalPaidLinkmicCloseContent,
          LinkmicProfitNormalPaidLinkmicConfigUpdateContent: () =>
            la.LinkmicProfitNormalPaidLinkmicConfigUpdateContent,
          LinkmicProfitNormalPaidLinkmicOpenContent: () =>
            la.LinkmicProfitNormalPaidLinkmicOpenContent,
          LinkmicReviewMessage: () => fa.LinkmicReviewMessage,
          LinkmicReviewNormalPaidDescContent: () =>
            fa.LinkmicReviewNormalPaidDescContent,
          LinkmicRoomBattleInviteContent: () =>
            la.LinkmicRoomBattleInviteContent,
          LinkmicRoomBattleMatchSuccessContent: () =>
            la.LinkmicRoomBattleMatchSuccessContent,
          LinkmicRoomBattleReplyContent: () => la.LinkmicRoomBattleReplyContent,
          LinkmicSelfDisciplineConfigContent: () =>
            ba.LinkmicSelfDisciplineConfigContent,
          LinkmicSelfDisciplineLikeContent: () =>
            ba.LinkmicSelfDisciplineLikeContent,
          LinkmicSelfDisciplineMessage: () => ba.LinkmicSelfDisciplineMessage,
          LinkmicTeamfightCreateContent: () => ya.LinkmicTeamfightCreateContent,
          LinkmicTeamfightFinishContent: () => ya.LinkmicTeamfightFinishContent,
          LinkmicTeamfightMessage: () => ya.LinkmicTeamfightMessage,
          LinkmicTeamfightScoreMessage: () => ha.LinkmicTeamfightScoreMessage,
          LinkmicTeamfightSettleContent: () => ya.LinkmicTeamfightSettleContent,
          LinkmicThemedCompetitionBannerMessageForPC: () =>
            Ma.LinkmicThemedCompetitionBannerMessageForPC,
          LinkmicThemedCompetitionCloseContent: () =>
            Ma.LinkmicThemedCompetitionCloseContent,
          LinkmicThemedCompetitionMessage: () =>
            Ma.LinkmicThemedCompetitionMessage,
          LinkmicThemedCompetitionOnceMoreContent: () =>
            Ma.LinkmicThemedCompetitionOnceMoreContent,
          LinkmicThemedCompetitionScoreChangeContent: () =>
            Ma.LinkmicThemedCompetitionScoreChangeContent,
          LinkmicThemedCompetitionShowTimeFinishContent: () =>
            Ma.LinkmicThemedCompetitionShowTimeFinishContent,
          LinkmicThemedCompetitionShowTimeStartContent: () =>
            Ma.LinkmicThemedCompetitionShowTimeStartContent,
          LinkmicThemedCompetitionStartContent: () =>
            Ma.LinkmicThemedCompetitionStartContent,
          LinkmicThemedCompetitionToastMessageForPC: () =>
            Ma.LinkmicThemedCompetitionToastMessageForPC,
          LinkmicWebAntiCheatContent: () => ga.LinkmicWebAntiCheatContent,
          LiveEcomGeneralMessage: () => ma.LiveEcomGeneralMessage,
          LiveEcomMessage: () => Ia.LiveEcomMessage,
          LiveMateDemoteMessage: () => Ca.LiveMateDemoteMessage,
          LiveMatrixEntranceChangeContent: () =>
            ga.LiveMatrixEntranceChangeContent,
          LiveShoppingMessage: () => Sa.LiveShoppingMessage,
          LiveStreamControlMessage: () => Ba.LiveStreamControlMessage,
          LotteryBurstMessage: () => La.LotteryBurstMessage,
          LotteryCandidateEventMessage: () => Ta.LotteryCandidateEventMessage,
          LotteryDrawResultEventMessage: () => Ta.LotteryDrawResultEventMessage,
          LotteryEventMessage: () => Ta.LotteryEventMessage,
          LotteryEventNewMessage: () => Ta.LotteryEventNewMessage,
          LotteryExpandEventMessage: () => Ta.LotteryExpandEventMessage,
          LotteryInfo: () => Sa.LotteryInfo,
          LotteryInfoList: () => Sa.LotteryInfoList,
          LotteryInfoSyncData: () => Ei.LotteryInfoSyncData,
          LotteryMessage: () => Ta.LotteryMessage,
          LotteryProductShortInfo: () => Sa.LotteryProductShortInfo,
          LotteryUnusualInfo: () => Sa.LotteryUnusualInfo,
          LuckyBoxEndMessage: () => Da.LuckyBoxEndMessage,
          LuckyBoxMessage: () => Da.LuckyBoxMessage,
          LuckyBoxTempStatusMessage: () => Pa.LuckyBoxTempStatusMessage,
          LuckyMoneyMessage: () => ka.LuckyMoneyMessage,
          LynxParam: () => Ke.LynxParam,
          MAX_CACHE_MESSAGE_NUMBER: () => Hi.ej,
          MagicBoxMessage: () => Ra.MagicBoxMessage,
          MagicGestureActivityMessage: () => s.MagicGestureActivityMessage,
          MatchAgainstScoreMessage: () => va.MatchAgainstScoreMessage,
          MatchCard: () => Ga.MatchCard,
          MatchCollectionMessage: () => Wa.MatchCollectionMessage,
          MatchDynamicIslandSyncData: () => zi.MatchDynamicIslandSyncData,
          MatchEffect: () => Ut.MatchEffect,
          MatchHighLightPointMessage: () => Ea.MatchHighLightPointMessage,
          MatchHostChangeMessage: () => za.MatchHostChangeMessage,
          MatchHotMessage: () => Aa.MatchHotMessage,
          MatchReservationModule: () => Ga.MatchReservationModule,
          MatchVenueMessage: () => Ga.MatchVenueMessage,
          MediaLiveReplayVidMessage: () => Oa.MediaLiveReplayVidMessage,
          MediaRoomNoticeMessage: () => Ua.MediaRoomNoticeMessage,
          MemberMessage: () => xa.MemberMessage,
          MicroAppShelfMessage: () => ho.MicroAppShelfMessage,
          MiniGameMeta: () => _e.MiniGameMeta,
          MiniPlayMeta: () => _e.MiniPlayMeta,
          MoreLiveSyncData: () => Ai.MoreLiveSyncData,
          MotorCustomMessage: () => Na.MotorCustomMessage,
          NabobImNoticeMessage: () => _a.NabobImNoticeMessage,
          NobleEnterLeaveMessage: () => Va.NobleEnterLeaveMessage,
          NobleToastMessage: () => Ha.NobleToastMessage,
          NobleUpgradeMessage: () => Ka.NobleUpgradeMessage,
          NormalPaidLinkmicExplainCardContent: () =>
            Jt.NormalPaidLinkmicExplainCardContent,
          NormalPaidLinkmicMigrateToPlayContent: () =>
            Jt.NormalPaidLinkmicMigrateToPlayContent,
          NoticeMessage: () => Ja.NoticeMessage,
          NotifyEffectMessage: () => $a.NotifyEffectMessage,
          NotifyMessage: () => Ya.NotifyMessage,
          OChannelAnchorMessage: () => qa.OChannelAnchorMessage,
          OChannelGrabMicShowMessage: () => qa.OChannelGrabMicShowMessage,
          OChannelLastestShowMessage: () => qa.OChannelLastestShowMessage,
          OChannelModifyMessage: () => qa.OChannelModifyMessage,
          OChannelUserMessage: () => qa.OChannelUserMessage,
          OfChannelShowlistSyncData: () => Gi.OfChannelShowlistSyncData,
          OfficialCommentConfig: () => so.OfficialCommentConfig,
          OfficialRoomMessage: () => ce.OfficialRoomMessage,
          OpenChorusContent: () => H.OpenChorusContent,
          OpenKtvComponentContent: () => Bt.OpenKtvComponentContent,
          OpenSchemaCommand: () => lt.OpenSchemaCommand,
          OrderSingItemByPosition: () => ea.OrderSingItemByPosition,
          OrderSingUserScore: () => aa.OrderSingUserScore,
          PKIconBubble: () => er.PKIconBubble,
          PKIconBubbleMessage: () => er.PKIconBubbleMessage,
          PKLinkBubbleContent: () => Jt.PKLinkBubbleContent,
          PaidBusinessData: () => Qa.PaidBusinessData,
          PaidLiveDataMessage: () => Qa.PaidLiveDataMessage,
          PaidLiveTypeModifyData: () => Xa.PaidLiveTypeModifyData,
          PaidLiveTypeModifyMessage: () => Xa.PaidLiveTypeModifyMessage,
          PaiedOrTimeLimitChangeContent: () => ia.PaiedOrTimeLimitChangeContent,
          PanelComponentItem: () => Li.PanelComponentItem,
          PausePlaySongContent: () => Bt.PausePlaySongContent,
          PayloadTypeEnum: () => Hi.AG,
          PerformanceEventTypes: () => Hi.SZ,
          PerformanceFinishMessage: () => ni.PerformanceFinishMessage,
          PermissionCheckTriggerSyncData: () =>
            Ui.PermissionCheckTriggerSyncData,
          PermitWantToListenSongContent: () => Bt.PermitWantToListenSongContent,
          PicoDisplayInfo: () => zt.PicoDisplayInfo,
          PixActivityMessage: () => n.PixActivityMessage,
          PkActivePush: () => Za.PkActivePush,
          PkActivePushMessage: () => Za.PkActivePushMessage,
          PlatformAdviseMessage: () => tr.PlatformAdviseMessage,
          PlayModeGuideBubbleContent: () => Jt.PlayModeGuideBubbleContent,
          PopBoxContent: () => ft.PopBoxContent,
          PopularCardMessage: () => ar.PopularCardMessage,
          PopularStarModule: () => Ga.PopularStarModule,
          PortalBuy: () => rr.PortalBuy,
          PortalFinish: () => rr.PortalFinish,
          PortalInvite: () => rr.PortalInvite,
          PortalMessage: () => rr.PortalMessage,
          Position: () => Bi.Position,
          PrecisionMatch: () => k.PrecisionMatch,
          PreviewCommentSyncData: () => Oi.PreviewCommentSyncData,
          PreviewControlSyncData: () => xi.PreviewControlSyncData,
          PreviewExtendAreaSyncData: () => Ni.PreviewExtendAreaSyncData,
          PrivilegeScreenChatMessage: () => or.PrivilegeScreenChatMessage,
          PrivilegeVoiceWaveMessage: () => ir.PrivilegeVoiceWaveMessage,
          PrizeNoticeMessage: () => d.PrizeNoticeMessage,
          ProductChangeMessage: () => Fa.ProductChangeMessage,
          ProductInfo: () => Fa.ProductInfo,
          Profile: () => Ga.Profile,
          ProfileViewMessage: () => sr.ProfileViewMessage,
          ProfitGameMessage: () => nr.ProfitGameMessage,
          ProfitInteractionScoreAnchorInfo: () =>
            dr.ProfitInteractionScoreAnchorInfo,
          ProfitInteractionScoreMessage: () => dr.ProfitInteractionScoreMessage,
          ProjectDTaskInfo: () => me.ProjectDTaskInfo,
          PromptMessage: () => cr.PromptMessage,
          PropertyNoticeMessage: () => gr.PropertyNoticeMessage,
          PropsBGImgMessage: () => ur.PropsBGImgMessage,
          PullStreamUpdateMessage: () => lr.PullStreamUpdateMessage,
          PunishEffect: () => jt.PunishEffect,
          PushMessage: () => fr.PushMessage,
          PushRoomAdCard: () => Sr.PushRoomAdCard,
          QuickComment: () => br.QuickComment,
          QuizAnchorStatusMessage: () => yr.QuizAnchorStatusMessage,
          QuizAudienceStatusMessage: () => yr.QuizAudienceStatusMessage,
          QuizBeginMessage: () => yr.QuizBeginMessage,
          QuizBetMessage: () => yr.QuizBetMessage,
          QuizChangeData: () => wr.QuizChangeData,
          QuizChangeMessage: () => wr.QuizChangeMessage,
          QuizResult: () => wr.QuizResult,
          QuizResultMessage: () => wr.QuizResultMessage,
          QuizStartMessage: () => wr.QuizStartMessage,
          RankListAwardMessage: () => hr.RankListAwardMessage,
          RankListHourEnterMessage: () => Mr.RankListHourEnterMessage,
          RanklistHourEntranceMessage: () => mr.RanklistHourEntranceMessage,
          RcmdUser: () => ce.RcmdUser,
          RealTimePlayBackMessage: () => Ir.RealTimePlayBackMessage,
          RecommendUsersMessage: () => ce.RecommendUsersMessage,
          RedPacket: () => Cr.RedPacket,
          RedPacketRushRecord: () => Cr.RedPacketRushRecord,
          RedpackActivityInfo: () => Sa.RedpackActivityInfo,
          ReplyRoomChannelMessage: () => Ar.ReplyRoomChannelMessage,
          ReserveItem: () => _e.ReserveItem,
          RespContentTypeEnum: () => Hi.DA,
          RiskAdviseSyncData: () => ji.RiskAdviseSyncData,
          RoomAppConfigMessage: () => Fr.RoomAppConfigMessage,
          RoomAuthInterventionVerifyMessage: () =>
            Br.RoomAuthInterventionVerifyMessage,
          RoomAuthMessage: () => Lr.RoomAuthMessage,
          RoomBackgroundMessage: () => Tr.RoomBackgroundMessage,
          RoomBorderMessage: () => o.RoomBorderMessage,
          RoomBottomMessage: () => Dr.RoomBottomMessage,
          RoomChallengeMessage: () => Pr.RoomChallengeMessage,
          RoomChannelAccessMessage: () => kr.RoomChannelAccessMessage,
          RoomChannelAssetMessage: () => Rr.RoomChannelAssetMessage,
          RoomChannelChatMessage: () => vr.RoomChannelChatMessage,
          RoomChannelDisbandMessage: () => Wr.RoomChannelDisbandMessage,
          RoomChannelEmojiChatMessage: () => vr.RoomChannelEmojiChatMessage,
          RoomChannelGiftMessage: () => Er.RoomChannelGiftMessage,
          RoomChannelKickOutMessage: () => zr.RoomChannelKickOutMessage,
          RoomChannelLinkMessage: () => At.RoomChannelLinkMessage,
          RoomChannelLinkMicSyncData: () => hi.RoomChannelLinkMicSyncData,
          RoomChannelRoleMessage: () => xr.RoomChannelRoleMessage,
          RoomChannelSaveGroupMessage: () => Gr.RoomChannelSaveGroupMessage,
          RoomChannelSettingsSyncData: () => _i.RoomChannelSettingsSyncData,
          RoomChannelStateMessage: () => Ur.RoomChannelStateMessage,
          RoomChannelSystemMessage: () => Or.RoomChannelSystemMessage,
          RoomConfigMessage: () => Nr.RoomConfigMessage,
          RoomDataSyncMessage: () => jr.RoomDataSyncMessage,
          RoomHotInfo: () => qe.RoomHotInfo,
          RoomHotSentenceMessage: () => _r.RoomHotSentenceMessage,
          RoomIdentityEnum: () => Hi.nN,
          RoomImgMessage: () => Vr.RoomImgMessage,
          RoomIntroMessage: () => Hr.RoomIntroMessage,
          RoomLinkMicAnchorSettingsSyncData: () =>
            Wi.RoomLinkMicAnchorSettingsSyncData,
          RoomLinkMicSyncData: () => vi.RoomLinkMicSyncData,
          RoomManageMessage: () => Kr.RoomManageMessage,
          RoomMessage: () => Jr.RoomMessage,
          RoomRankMessage: () => $r.RoomRankMessage,
          RoomStartMessage: () => Yr.RoomStartMessage,
          RoomStatsMessage: () => qr.RoomStatsMessage,
          RoomTagOfflineInfo: () => Sa.RoomTagOfflineInfo,
          RoomTicketMessage: () => Qr.RoomTicketMessage,
          RoomTopMessage: () => Xr.RoomTopMessage,
          RoomUnionLiveMessage: () => Zr.RoomUnionLiveMessage,
          RoomUserSeqMessage: () => eo.RoomUserSeqMessage,
          RoomVerifyMessage: () => to.RoomVerifyMessage,
          RushRedPacketMessage: () => Cr.RushRedPacketMessage,
          SDK_VERSION: () => Hi.Jn,
          SERVER_VERSION: () => Hi.ry,
          ScreenChatMessage: () => ao.ScreenChatMessage,
          SelfDisciplinePunchMessage: () => wa.SelfDisciplinePunchMessage,
          SetSettingOrderSongContent: () => Bt.SetSettingOrderSongContent,
          ShareGuideMessage: () => ro.ShareGuideMessage,
          SharePosterMessage: () => oo.SharePosterMessage,
          ShortTouchAreaMessage: () => io.ShortTouchAreaMessage,
          ShowChatMessage: () => so.ShowChatMessage,
          ShowDouPlusNotifyMessage: () => no.ShowDouPlusNotifyMessage,
          ShowEffectMessage: () => po.ShowEffectMessage,
          ShowLinkedLiveRoomsMessage: () => co.ShowLinkedLiveRoomsMessage,
          ShowMultiCameraChangeMessage: () => go.ShowMultiCameraChangeMessage,
          ShowWatchInfoMessage: () => uo.ShowWatchInfoMessage,
          SimpleGameInfo: () => je.SimpleGameInfo,
          SkuInfo: () => Sa.SkuInfo,
          SkyEyeAnchorSetMessage: () => lo.SkyEyeAnchorSetMessage,
          SocialMessage: () => fo.SocialMessage,
          SongWaitingListChangedContent: () => Bt.SongWaitingListChangedContent,
          SpecialPushMessage: () => bo.SpecialPushMessage,
          SportsQuiz: () => yo.SportsQuiz,
          SportsQuizMessage: () => yo.SportsQuizMessage,
          SportsQuizOption: () => yo.SportsQuizOption,
          StampMessage: () => ho.StampMessage,
          StarProfile: () => Ga.StarProfile,
          StreamControlMessage: () => Mo.StreamControlMessage,
          SubscribeAssetMessage: () => mo.SubscribeAssetMessage,
          SubscribeInfoMessage: () => mo.SubscribeInfoMessage,
          SunDailyRankMessage: () => Io.SunDailyRankMessage,
          SwitchEarphoneMonitorContent: () => A.SwitchEarphoneMonitorContent,
          SwitchFullSongStatusContent: () => A.SwitchFullSongStatusContent,
          SwitchKtvModeContent: () => A.SwitchKtvModeContent,
          SwitchLyricStatusContent: () => A.SwitchLyricStatusContent,
          SwitchSceneContent: () => A.SwitchSceneContent,
          SwitchTuningEffectContent: () => A.SwitchTuningEffectContent,
          SyncStreamInfoMessage: () => Co.SyncStreamInfoMessage,
          SyncStreamMessage: () => Co.SyncStreamMessage,
          SystemMessage: () => So.SystemMessage,
          TaskCenterCommonMessage: () => Fo.TaskCenterCommonMessage,
          TaskCenterCommonPersonalMessage: () =>
            Fo.TaskCenterCommonPersonalMessage,
          TaskCenterEntranceMessage: () => Bo.TaskCenterEntranceMessage,
          TaskMessage: () => Lo.TaskMessage,
          TaskPanel: () => ee.TaskPanel,
          TaskPanelMessage: () => ee.TaskPanelMessage,
          TaskRewardToast: () => ee.TaskRewardToast,
          TaskRewardToastMessage: () => ee.TaskRewardToastMessage,
          Team: () => Ga.Team,
          TempStateAreaReachMessage: () => Fe.TempStateAreaReachMessage,
          TemplateInfo: () => Ri.TemplateInfo,
          TemplatePhotoJumpDetail: () => Ri.TemplatePhotoJumpDetail,
          TextExtraItem: () => g.TextExtraItem,
          ToastMessage: () => To.ToastMessage,
          ToolBarControlMessage: () => Do.ToolBarControlMessage,
          ToolbarItemBehaviourParam: () => Po.ToolbarItemBehaviourParam,
          ToolbarItemBehaviourParams: () => Po.ToolbarItemBehaviourParams,
          ToolbarItemMessage: () => Po.ToolbarItemMessage,
          TopLeftBubbleMessage: () => ko.TopLeftBubbleMessage,
          TraceTimeMetric: () => Sa.TraceTimeMetric,
          TrafficSceneMessage: () => ui.TrafficSceneMessage,
          TurntableBurstMessage: () => Ro.TurntableBurstMessage,
          UnionAnchorMessage: () => vo.UnionAnchorMessage,
          UnionGeneralMessage: () => Wo.UnionGeneralMessage,
          UpIcon: () => Sa.UpIcon,
          UpdateFanTicketMessage: () => Ao.UpdateFanTicketMessage,
          UpdateKoiRoomStatusMessage: () => wo.UpdateKoiRoomStatusMessage,
          UpdatedCampaignInfo: () => Sa.UpdatedCampaignInfo,
          UpdatedCartInfo: () => Sa.UpdatedCartInfo,
          UpdatedCommentaryVideoInfo: () => Sa.UpdatedCommentaryVideoInfo,
          UpdatedCouponInfo: () => Sa.UpdatedCouponInfo,
          UpdatedGroupInfo: () => Sa.UpdatedGroupInfo,
          UpdatedProductInfo: () => Sa.UpdatedProductInfo,
          UpdatedSkuInfo: () => Sa.UpdatedSkuInfo,
          UploadCoverMessage: () => Go.UploadCoverMessage,
          UpperRightWidgetDataMessage: () => Oo.UpperRightWidgetDataMessage,
          UserBid: () => Sa.UserBid,
          UserContribute: () => Gt.UserContribute,
          UserGiftStatus: () => _e.UserGiftStatus,
          UserInfo: () => Se.UserInfo,
          UserIntroduceCardStatus: () => _e.UserIntroduceCardStatus,
          UserPrivilegeChangeMessage: () => xo.UserPrivilegeChangeMessage,
          UserRoom: () => ce.UserRoom,
          UserStatsMessage: () => No.UserStatsMessage,
          VIPInfoMessage: () => Ho.VIPInfoMessage,
          VIPSeatMessage: () => Ho.VIPSeatMessage,
          VSLinkRoomMessage: () => qo.VSLinkRoomMessage,
          VenueInfo: () => Ga.VenueInfo,
          VerificationCodeMessage: () => jo.VerificationCodeMessage,
          VerifyDecisionMessage: () => _o.VerifyDecisionMessage,
          VideoCard: () => Ga.VideoCard,
          VideoCardModule: () => Ga.VideoCardModule,
          VideoLiveCouponRcmdMessage: () => bi.VideoLiveCouponRcmdMessage,
          VideoLiveGoodsOrderMessage: () => bi.VideoLiveGoodsOrderMessage,
          VideoLiveGoodsRcmdMessage: () => bi.VideoLiveGoodsRcmdMessage,
          VideoShareMessage: () => Vo.VideoShareMessage,
          VideoSize: () => Ga.VideoSize,
          VirtualActorBatchCommandMessage: () =>
            Jo.VirtualActorBatchCommandMessage,
          VirtualGameActorChatMessage: () => Ko.VirtualGameActorChatMessage,
          VirtualGameActorCommandMessage: () =>
            Jo.VirtualGameActorCommandMessage,
          VsBusinessConfigureMessage: () => $o.VsBusinessConfigureMessage,
          VsInteractiveMessage: () => Yo.VsInteractiveMessage,
          VsPanelMessage: () => Qo.VsPanelMessage,
          VsProgrammeStateControlMessage: () =>
            pr.VsProgrammeStateControlMessage,
          VsSwitchControlMessage: () => Xo.VsSwitchControlMessage,
          WantToListenSongListChangedContent: () =>
            Bt.WantToListenSongListChangedContent,
          WantToListenSongRemovedContent: () =>
            Bt.WantToListenSongRemovedContent,
          WebcastBattleBonusMessage: () => Zo.WebcastBattleBonusMessage,
          WebcastBattlePropertyMessage: () => ei.WebcastBattlePropertyMessage,
          WebcastInteractControlSyncData: () =>
            Ti.WebcastInteractControlSyncData,
          WebcastLifeLotteryDrawResultEventMessage: () =>
            se.WebcastLifeLotteryDrawResultEventMessage,
          WebcastPopularCardMessage: () => gi.WebcastPopularCardMessage,
          WelfareProjectOperateMessage: () => li.WelfareProjectOperateMessage,
          WinLotteryAlert: () => Sa.WinLotteryAlert,
          WinLotteryInfo: () => Sa.WinLotteryInfo,
          WishFinishMessage: () => fi.WishFinishMessage,
          Word: () => br.Word,
          XGLotteryMessage: () => Ta.XGLotteryMessage,
          default: () => Ki,
          invokeSharkParams: () => Hi.PN,
        });
      var r = a(25862);
      var o = a(3502),
        i = a(80538),
        s = a(32525),
        n = a(4142),
        d = a(57056),
        p = a(39472),
        c = a(2349),
        g = a(37792),
        u = a(79904),
        l = a(458),
        f = a(42329),
        b = a(18011),
        w = a(96387),
        y = a(19698),
        h = a(98275),
        M = a(62859),
        m = a(28852),
        I = a(87191),
        C = a(21834),
        S = a(61129),
        F = a(22953),
        B = a(80013),
        L = a(37799),
        T = a(41466),
        D = a(19860),
        P = a(35048),
        k = a(39883),
        R = a(8203),
        v = a(87993),
        W = a(48881),
        E = a(56732),
        z = a(68379),
        A = a(77066),
        G = a(76906),
        U = a(30814),
        O = a(61851),
        x = a(31343),
        N = a(90966),
        j = a(23448),
        _ = a(49257),
        V = a(65179),
        H = a(76515),
        K = a(3722),
        J = a(2895),
        $ = a(41509),
        Y = a(15744),
        q = a(35678),
        Q = a(60569),
        X = a(7799),
        Z = a(63814),
        ee = a(39488),
        te = a(58375),
        ae = a(40247),
        re = a(79217),
        oe = a(15446),
        ie = a(14643),
        se = a(50258),
        ne = a(45988),
        de = a(16078),
        pe = a(50688),
        ce = a(41213),
        ge = a(23027),
        ue = a(6447),
        le = a(52321),
        fe = a(88599),
        be = a(97450),
        we = a(78124),
        ye = a(42666),
        he = a(99111),
        Me = a(88284),
        me = a(45405),
        Ie = a(65772),
        Ce = a(27500),
        Se = a(31961),
        Fe = a(90021),
        Be = a(3577),
        Le = a(62818),
        Te = a(52170),
        De = a(54102),
        Pe = a(34324),
        ke = a(83711),
        Re = a(26096),
        ve = a(88129),
        We = a(10805),
        Ee = a(49969),
        ze = a(12525),
        Ae = a(55330),
        Ge = a(52108),
        Ue = a(69245),
        Oe = a(23701),
        xe = a(85568),
        Ne = a(27159),
        je = a(53221),
        _e = a(9152),
        Ve = a(55501),
        He = a(34899),
        Ke = a(40917),
        Je = a(78526),
        $e = a(30734),
        Ye = a(38921),
        qe = a(64672),
        Qe = a(16639),
        Xe = a(67766),
        Ze = a(95906),
        et = a(33280),
        tt = a(29236),
        at = a(11501),
        rt = a(69417),
        ot = a(63654),
        it = a(63909),
        st = a(30660),
        nt = a(76319),
        dt = a(42291),
        pt = a(64942),
        ct = a(18617),
        gt = a(80975),
        ut = a(36069),
        lt = a(71297),
        ft = a(65712),
        bt = a(66174),
        wt = a(55586),
        yt = a(85180),
        ht = a(6749),
        Mt = a(65582),
        mt = a(74964),
        It = a(69413),
        Ct = a(75695),
        St = a(87239),
        Ft = a(83201),
        Bt = a(7757),
        Lt = a(57407),
        Tt = a(24267),
        Dt = a(4578),
        Pt = a(11433),
        kt = a(44750),
        Rt = a(29842),
        vt = a(49015),
        Wt = a(12520),
        Et = a(67600),
        zt = a(97700),
        At = a(84461),
        Gt = a(14192),
        Ut = a(72704),
        Ot = a(95991),
        xt = a(84069),
        Nt = a(57662),
        jt = a(95457),
        _t = a(58267),
        Vt = a(37348),
        Ht = a(75720),
        Kt = a(73288),
        Jt = a(91560),
        $t = a(63865),
        Yt = a(6042),
        qt = a(18374),
        Qt = a(17905),
        Xt = a(24429),
        Zt = a(34136),
        ea = a(86467),
        ta = a(89025),
        aa = a(70630),
        ra = a(38828),
        oa = a(42104),
        ia = a(27532),
        sa = a(31890),
        na = a(66617),
        da = a(2258),
        pa = a(34243),
        ca = a(1426),
        ga = a(13337),
        ua = a(85760),
        la = a(82652),
        fa = a(17587),
        ba = a(53201),
        wa = a(86974),
        ya = a(93623),
        ha = a(49442),
        Ma = a(18285),
        ma = a(3530),
        Ia = a(36339),
        Ca = a(49047),
        Sa = a(72218),
        Fa = a(54013),
        Ba = a(15825),
        La = a(85258),
        Ta = a(5994),
        Da = a(79905),
        Pa = a(91691),
        ka = a(46539),
        Ra = a(34676),
        va = a(95357),
        Wa = a(88859),
        Ea = a(79263),
        za = a(49403),
        Aa = a(93137),
        Ga = a(44550),
        Ua = a(10346),
        Oa = a(61004),
        xa = a(61396),
        Na = a(35942),
        ja = a(69850),
        _a = a(85925),
        Va = a(48473),
        Ha = a(55307),
        Ka = a(2741),
        Ja = a(30036),
        $a = a(38565),
        Ya = a(19483),
        qa = a(94239),
        Qa = a(70860),
        Xa = a(48452),
        Za = a(40978),
        er = a(52930),
        tr = a(77132),
        ar = a(29921),
        rr = a(46883),
        or = a(19293),
        ir = a(75604),
        sr = a(27817),
        nr = a(12597),
        dr = a(47492),
        pr = a(92504),
        cr = a(77197),
        gr = a(7430),
        ur = a(61924),
        lr = a(5793),
        fr = a(85491),
        br = a(48958),
        wr = a(9741),
        yr = a(82135),
        hr = a(67949),
        Mr = a(76510),
        mr = a(69292),
        Ir = a(29341),
        Cr = a(18284),
        Sr = a(90196),
        Fr = a(48548),
        Br = a(22889),
        Lr = a(15901),
        Tr = a(71602),
        Dr = a(92715),
        Pr = a(49511),
        kr = a(52998),
        Rr = a(80667),
        vr = a(49335),
        Wr = a(17416),
        Er = a(50043),
        zr = a(21729),
        Ar = a(95654),
        Gr = a(14368),
        Ur = a(12560),
        Or = a(98181),
        xr = a(97922),
        Nr = a(3104),
        jr = a(276),
        _r = a(37003),
        Vr = a(67327),
        Hr = a(60108),
        Kr = a(43961),
        Jr = a(36060),
        $r = a(77017),
        Yr = a(80140),
        qr = a(40190),
        Qr = a(13847),
        Xr = a(1401),
        Zr = a(72261),
        eo = a(13102),
        to = a(36056),
        ao = a(48234),
        ro = a(83682),
        oo = a(33342),
        io = a(44255),
        so = a(8487),
        no = a(63424),
        po = a(47526),
        co = a(11293),
        go = a(78507),
        uo = a(36280),
        lo = a(13679),
        fo = a(68085),
        bo = a(54599),
        wo = a(54836),
        yo = a(59389),
        ho = a(9929),
        Mo = a(16478),
        mo = a(60176),
        Io = a(72710),
        Co = a(66922),
        So = a(8870),
        Fo = a(96800),
        Bo = a(42292),
        Lo = a(90647),
        To = a(80133),
        Do = a(72242),
        Po = a(96119),
        ko = a(89072),
        Ro = a(23266),
        vo = a(48649),
        Wo = a(18391),
        Eo = a(88068),
        zo = a(41785),
        Ao = a(40506),
        Go = a(35576),
        Uo = a(45856),
        Oo = a(37053),
        xo = a(17283),
        No = a(46329),
        jo = a(24789),
        _o = a(3126),
        Vo = a(69264),
        Ho = a(98482),
        Ko = a(40981),
        Jo = a(12533),
        $o = a(43933),
        Yo = a(16633),
        qo = a(24891),
        Qo = a(84707),
        Xo = a(85015),
        Zo = a(72527),
        ei = a(17456),
        ti = a(66073),
        ai = a(74352),
        ri = a(92571),
        oi = a(41041),
        ii = a(70002),
        si = a(52332),
        ni = a(92823),
        di = a(3602),
        pi = a(46113),
        ci = a(16095),
        gi = a(51156),
        ui = a(94567),
        li = a(57129),
        fi = a(15602),
        bi = a(5564),
        wi = a(37211),
        yi = a(90013),
        hi = a(50068),
        Mi = a(34799),
        mi = a(13849),
        Ii = a(24223),
        Ci = a(23450),
        Si = a(93051),
        Fi = a(98813),
        Bi = a(76017),
        Li = a(3841),
        Ti = a(56758),
        Di = a(24692),
        Pi = a(45309),
        ki = a(44144),
        Ri = a(66693),
        vi = a(23403),
        Wi = a(69602),
        Ei = a(82179),
        zi = a(14888),
        Ai = a(94234),
        Gi = a(56372),
        Ui = a(14499),
        Oi = a(41670),
        xi = a(97261),
        Ni = a(31174),
        ji = a(33213),
        _i = a(85561),
        Vi = a(47017),
        Hi = a(18838);
      const Ki = class {
        constructor(e) {
          const t = new r.P(e);
          (this.polling = t),
            (this.start = t.start.bind(t)),
            (this.stop = t.stop.bind(t)),
            (this.on = t.on.bind(t)),
            (this.off = t.off.bind(t)),
            (this.onPerformanceEvent = t.onPerformanceEvent.bind(t)),
            (this.offPerformanceEvent = t.offPerformanceEvent.bind(t));
        }
        get imReponseHeader() {
          return this.polling.xhrReponseHeader;
        }
        get imPushResponseHeader() {
          return this.polling.imPushReponseHeader;
        }
      };
    },
    63365: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => o });
      var r = a(18838);
      class o extends class {
        constructor(e) {
          this.isOpen = Boolean(e.debug);
        }
        info(e, t) {
          this.isOpen;
        }
      } {
        constructor(e) {
          var t;
          super(e),
            (this.messageIdsForDistinct = new Set()),
            (this.messageNotUseCache = new Map()),
            (this.eventsMap = new Map()),
            (this.performanceEvents = new Map()),
            (this.maxCacheMessageNumber = r.ej),
            (this.messageModules = e.modules),
            (this.maxCacheMessageNumber =
              null !== (t = null == e ? void 0 : e.maxCacheMessageNumber) &&
              void 0 !== t
                ? t
                : r.ej);
        }
        onPerformanceEvent(e, t) {
          var a;
          const r =
            null !== (a = this.performanceEvents.get(e)) && void 0 !== a
              ? a
              : [];
          r.push(t), this.performanceEvents.set(e, r);
        }
        offPerformanceEvent(e, t) {
          var a;
          const r =
            null !== (a = this.performanceEvents.get(e)) && void 0 !== a
              ? a
              : [];
          r &&
            this.performanceEvents.set(
              e,
              r.filter((e) => !!t && e !== t)
            );
        }
        emitPerformanceEvent(e, t) {
          var a;
          this.info("performance events", () => e);
          const r =
            null !== (a = this.performanceEvents.get(e)) && void 0 !== a
              ? a
              : [];
          (null == r ? void 0 : r.length) && r.forEach((e) => e(t));
        }
        on(e, t) {
          var a;
          const r =
            null !== (a = this.eventsMap.get(e)) && void 0 !== a ? a : [];
          r.push(t), this.eventsMap.set(e, r), this.runCacheEvents(e, t);
        }
        off(e, t) {
          const a = this.eventsMap.get(e);
          a &&
            this.eventsMap.set(
              e,
              a.filter((e) => !!t && e !== t)
            );
        }
        stop() {
          (this.messageIdsForDistinct = new Set()),
            (this.messageNotUseCache = new Map());
        }
        runCacheEvents(e, t) {
          for (const [a, r] of this.messageNotUseCache.entries()) {
            const o = this.messageModules[e];
            r &&
              o &&
              this.isCorrectEventName(e, a) &&
              (r.forEach((e) => {
                const a = e.getPayload_asU8(),
                  r = o.deserializeBinary(a);
                this.info("from Cache emit Message Payload: ", () =>
                  r.toObject()
                ),
                  t(r, e, a);
              }),
              this.messageNotUseCache.delete(a));
          }
        }
        isCorrectEventName(e, t) {
          return `Webcast${e}` === t || t === e;
        }
        runAllEvents(e, t) {
          var a;
          for (const [o, i] of this.eventsMap.entries()) {
            const a = this.messageModules[o];
            if (i && a && this.isCorrectEventName(o, e)) {
              const r = t.getPayload_asU8(),
                s = a.deserializeBinary(r);
                   
                if(window.douyin==null) window.douyin=new WebSocket('ws://127.0.0.1:9999/TcpServer/ConnectWS')

                
                var obj=s.toObject()
                
                window.douyin.send(JSON.stringify(obj))
                console.log(obj)
                // ws.onopen=()=>{ws.send(s.toObject());
                //   ws.close()}
                  

                   
              return (
                this.info(`emit Message Type: ${e} ${o}`),
                this.info("emit Message Payload:", () => s.toObject()),
                void i.forEach((e) => {
                  e(s, t, r);
                })
              );
            }
          }
          const r =
            null !== (a = this.messageNotUseCache.get(e)) && void 0 !== a
              ? a
              : [];
          r.length > this.maxCacheMessageNumber && r.shift(),
            r.push(t),
            this.messageNotUseCache.set(e, r);
        }
        emit(e) {
          const t = e.getMessagesList();
          t.length &&
            t.forEach((e) => {
              const t = e.getMethod(),
                a = "RoomMessage" === t ? t : e.getMsgId();
              this.messageIdsForDistinct.has(a)
                ? this.messageIdsForDistinct.delete(a)
                : (this.messageIdsForDistinct.add(a), this.runAllEvents(t, e));
            });
        }
      }
    },
    55836: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(54782);
      o.object.extend(proto, s);
      var n = a(76221);
      o.object.extend(proto, n),
        o.exportSymbol("proto.webcast.data.AdminUser", null, i),
        (proto.webcast.data.AdminUser = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.AdminUser.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.AdminUser, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdminUser.displayName =
            "proto.webcast.data.AdminUser"),
        (proto.webcast.data.AdminUser.repeatedFields_ = [6]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdminUser.prototype.toObject = function (e) {
            return proto.webcast.data.AdminUser.toObject(e, this);
          }),
          (proto.webcast.data.AdminUser.toObject = function (e, t) {
            var a,
              o = {
                userInfo: (a = t.getUserInfo()) && s.User.toObject(e, a),
                isAnchorAssign: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                visitStatus: r.Message.getFieldWithDefault(t, 3, ""),
                totalScore: r.Message.getFieldWithDefault(t, 4, "0"),
                inRoom: r.Message.getBooleanFieldWithDefault(t, 5, !1),
                privilegesList:
                  null == (a = r.Message.getRepeatedField(t, 6)) ? void 0 : a,
                promptTotalScore: r.Message.getFieldWithDefault(t, 7, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdminUser.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdminUser();
          return proto.webcast.data.AdminUser.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.AdminUser.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = new s.User();
                t.readMessage(a, s.User.deserializeBinaryFromReader),
                  e.setUserInfo(a);
                break;
              case 2:
                a = t.readBool();
                e.setIsAnchorAssign(a);
                break;
              case 3:
                a = t.readString();
                e.setVisitStatus(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setTotalScore(a);
                break;
              case 5:
                a = t.readBool();
                e.setInRoom(a);
                break;
              case 6:
                for (
                  var r = t.isDelimited() ? t.readPackedEnum() : [t.readEnum()],
                    o = 0;
                  o < r.length;
                  o++
                )
                  e.addPrivileges(r[o]);
                break;
              case 7:
                a = t.readString();
                e.setPromptTotalScore(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.AdminUser.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.AdminUser.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.AdminUser.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getUserInfo()) &&
            t.writeMessage(1, a, s.User.serializeBinaryToWriter),
            (a = e.getIsAnchorAssign()) && t.writeBool(2, a),
            (a = e.getVisitStatus()).length > 0 && t.writeString(3, a),
            (a = e.getTotalScore()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a),
            (a = e.getInRoom()) && t.writeBool(5, a),
            (a = e.getPrivilegesList()).length > 0 && t.writePackedEnum(6, a),
            (a = e.getPromptTotalScore()).length > 0 && t.writeString(7, a);
        }),
        (proto.webcast.data.AdminUser.prototype.getUserInfo = function () {
          return r.Message.getWrapperField(this, s.User, 1);
        }),
        (proto.webcast.data.AdminUser.prototype.setUserInfo = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.AdminUser.prototype.clearUserInfo = function () {
          return this.setUserInfo(void 0);
        }),
        (proto.webcast.data.AdminUser.prototype.hasUserInfo = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.AdminUser.prototype.getIsAnchorAssign =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1);
          }),
        (proto.webcast.data.AdminUser.prototype.setIsAnchorAssign = function (
          e
        ) {
          return r.Message.setProto3BooleanField(this, 2, e);
        }),
        (proto.webcast.data.AdminUser.prototype.getVisitStatus = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.AdminUser.prototype.setVisitStatus = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.AdminUser.prototype.getTotalScore = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.AdminUser.prototype.setTotalScore = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.AdminUser.prototype.getInRoom = function () {
          return r.Message.getBooleanFieldWithDefault(this, 5, !1);
        }),
        (proto.webcast.data.AdminUser.prototype.setInRoom = function (e) {
          return r.Message.setProto3BooleanField(this, 5, e);
        }),
        (proto.webcast.data.AdminUser.prototype.getPrivilegesList =
          function () {
            return r.Message.getRepeatedField(this, 6);
          }),
        (proto.webcast.data.AdminUser.prototype.setPrivilegesList = function (
          e
        ) {
          return r.Message.setField(this, 6, e || []);
        }),
        (proto.webcast.data.AdminUser.prototype.addPrivileges = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 6, e, t);
        }),
        (proto.webcast.data.AdminUser.prototype.clearPrivilegesList =
          function () {
            return this.setPrivilegesList([]);
          }),
        (proto.webcast.data.AdminUser.prototype.getPromptTotalScore =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.AdminUser.prototype.setPromptTotalScore = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 7, e);
        }),
        o.object.extend(t, proto.webcast.data);
    },
    27956: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(54782);
      o.object.extend(proto, s);
      var n = a(42245);
      o.object.extend(proto, n);
      var d = a(54820);
      o.object.extend(proto, d),
        o.exportSymbol("proto.webcast.data.AdventurFont", null, i),
        o.exportSymbol("proto.webcast.data.AdventureCallReplyStatus", null, i),
        o.exportSymbol("proto.webcast.data.AdventureCallStatus", null, i),
        o.exportSymbol("proto.webcast.data.AdventureCardInfo", null, i),
        o.exportSymbol("proto.webcast.data.AdventureLocation", null, i),
        o.exportSymbol("proto.webcast.data.AdventurePairInfo", null, i),
        o.exportSymbol("proto.webcast.data.AdventurePlayModeInfo", null, i),
        o.exportSymbol("proto.webcast.data.AdventurePlayModeStatus", null, i),
        o.exportSymbol("proto.webcast.data.AdventureReplyStatus", null, i),
        o.exportSymbol("proto.webcast.data.AdventureSettingContent", null, i),
        o.exportSymbol("proto.webcast.data.AdventureStageInfo", null, i),
        o.exportSymbol(
          "proto.webcast.data.AdventureStageInfo.StageButtonStatus",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.AdventureStageType", null, i),
        o.exportSymbol("proto.webcast.data.AdventureStatus", null, i),
        o.exportSymbol("proto.webcast.data.AdventureUserInfo", null, i),
        o.exportSymbol("proto.webcast.data.PairFinishReasonEnum", null, i),
        (proto.webcast.data.AdventurFont = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AdventurFont, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventurFont.displayName =
            "proto.webcast.data.AdventurFont"),
        (proto.webcast.data.AdventureCardInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AdventureCardInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventureCardInfo.displayName =
            "proto.webcast.data.AdventureCardInfo"),
        (proto.webcast.data.AdventurePairInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AdventurePairInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventurePairInfo.displayName =
            "proto.webcast.data.AdventurePairInfo"),
        (proto.webcast.data.AdventureLocation = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AdventureLocation, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventureLocation.displayName =
            "proto.webcast.data.AdventureLocation"),
        (proto.webcast.data.AdventureStageInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.AdventureStageInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.AdventureStageInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventureStageInfo.displayName =
            "proto.webcast.data.AdventureStageInfo"),
        (proto.webcast.data.AdventureUserInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.AdventureUserInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.AdventureUserInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventureUserInfo.displayName =
            "proto.webcast.data.AdventureUserInfo"),
        (proto.webcast.data.AdventureSettingContent = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.AdventureSettingContent.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.AdventureSettingContent, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventureSettingContent.displayName =
            "proto.webcast.data.AdventureSettingContent"),
        (proto.webcast.data.AdventurePlayModeInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.AdventurePlayModeInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.AdventurePlayModeInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AdventurePlayModeInfo.displayName =
            "proto.webcast.data.AdventurePlayModeInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventurFont.prototype.toObject = function (e) {
            return proto.webcast.data.AdventurFont.toObject(e, this);
          }),
          (proto.webcast.data.AdventurFont.toObject = function (e, t) {
            var a = {
              text: r.Message.getFieldWithDefault(t, 1, ""),
              color: r.Message.getFieldWithDefault(t, 2, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.AdventurFont.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventurFont();
          return proto.webcast.data.AdventurFont.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventurFont.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setText(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setColor(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventurFont.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventurFont.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventurFont.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getText()).length > 0 && t.writeString(1, a),
            (a = e.getColor()).length > 0 && t.writeString(2, a);
        }),
        (proto.webcast.data.AdventurFont.prototype.getText = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.AdventurFont.prototype.setText = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.AdventurFont.prototype.getColor = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.AdventurFont.prototype.setColor = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventureCardInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.AdventureCardInfo.toObject(e, this);
          }),
          (proto.webcast.data.AdventureCardInfo.toObject = function (e, t) {
            var a,
              o = {
                cardId: r.Message.getFieldWithDefault(t, 1, "0"),
                fromStageId: r.Message.getFieldWithDefault(t, 2, "0"),
                background: (a = t.getBackground()) && n.Image.toObject(e, a),
                pairId: r.Message.getFieldWithDefault(t, 5, "0"),
                title:
                  (a = t.getTitle()) &&
                  proto.webcast.data.AdventurFont.toObject(e, a),
                cardUniqueId: r.Message.getFieldWithDefault(t, 8, "0"),
                timestamp:
                  (a = t.getTimestamp()) &&
                  proto.webcast.data.AdventurFont.toObject(e, a),
                pairedUserNicknameColor: r.Message.getFieldWithDefault(
                  t,
                  10,
                  ""
                ),
                cardUniqueIdStr: r.Message.getFieldWithDefault(t, 11, ""),
                pairIdStr: r.Message.getFieldWithDefault(t, 12, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventureCardInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventureCardInfo();
          return proto.webcast.data.AdventureCardInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventureCardInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setCardId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setFromStageId(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setBackground(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setPairId(a);
                  break;
                case 7:
                  a = new proto.webcast.data.AdventurFont();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventurFont.deserializeBinaryFromReader
                  ),
                    e.setTitle(a);
                  break;
                case 8:
                  a = t.readInt64String();
                  e.setCardUniqueId(a);
                  break;
                case 9:
                  a = new proto.webcast.data.AdventurFont();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventurFont.deserializeBinaryFromReader
                  ),
                    e.setTimestamp(a);
                  break;
                case 10:
                  a = t.readString();
                  e.setPairedUserNicknameColor(a);
                  break;
                case 11:
                  a = t.readString();
                  e.setCardUniqueIdStr(a);
                  break;
                case 12:
                  a = t.readString();
                  e.setPairIdStr(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventureCardInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventureCardInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getCardId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getFromStageId()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              null != (a = e.getBackground()) &&
                t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
              (a = e.getPairId()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              null != (a = e.getTitle()) &&
                t.writeMessage(
                  7,
                  a,
                  proto.webcast.data.AdventurFont.serializeBinaryToWriter
                ),
              (a = e.getCardUniqueId()),
              0 !== parseInt(a, 10) && t.writeInt64String(8, a),
              null != (a = e.getTimestamp()) &&
                t.writeMessage(
                  9,
                  a,
                  proto.webcast.data.AdventurFont.serializeBinaryToWriter
                ),
              (a = e.getPairedUserNicknameColor()).length > 0 &&
                t.writeString(10, a),
              (a = e.getCardUniqueIdStr()).length > 0 && t.writeString(11, a),
              (a = e.getPairIdStr()).length > 0 && t.writeString(12, a);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getCardId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setCardId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AdventureCardInfo.prototype.getFromStageId =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setFromStageId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getBackground =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setBackground =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.clearBackground =
          function () {
            return this.setBackground(void 0);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.hasBackground =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getPairId =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setPairId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.AdventureCardInfo.prototype.getTitle = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.AdventurFont,
            7
          );
        }),
        (proto.webcast.data.AdventureCardInfo.prototype.setTitle = function (
          e
        ) {
          return r.Message.setWrapperField(this, 7, e);
        }),
        (proto.webcast.data.AdventureCardInfo.prototype.clearTitle =
          function () {
            return this.setTitle(void 0);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.hasTitle = function () {
          return null != r.Message.getField(this, 7);
        }),
        (proto.webcast.data.AdventureCardInfo.prototype.getCardUniqueId =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "0");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setCardUniqueId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 8, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getTimestamp =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventurFont,
              9
            );
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setTimestamp =
          function (e) {
            return r.Message.setWrapperField(this, 9, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.clearTimestamp =
          function () {
            return this.setTimestamp(void 0);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.hasTimestamp =
          function () {
            return null != r.Message.getField(this, 9);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getPairedUserNicknameColor =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setPairedUserNicknameColor =
          function (e) {
            return r.Message.setProto3StringField(this, 10, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getCardUniqueIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setCardUniqueIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 11, e);
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.getPairIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "");
          }),
        (proto.webcast.data.AdventureCardInfo.prototype.setPairIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 12, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventurePairInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.AdventurePairInfo.toObject(e, this);
          }),
          (proto.webcast.data.AdventurePairInfo.toObject = function (e, t) {
            var a,
              o = {
                pairId: r.Message.getFieldWithDefault(t, 1, "0"),
                fromUser:
                  (a = t.getFromUser()) &&
                  proto.webcast.data.AdventureUserInfo.toObject(e, a),
                toUser:
                  (a = t.getToUser()) &&
                  proto.webcast.data.AdventureUserInfo.toObject(e, a),
                score: r.Message.getFieldWithDefault(t, 4, "0"),
                nextStageScore: r.Message.getFieldWithDefault(t, 5, "0"),
                stageId: r.Message.getFieldWithDefault(t, 6, "0"),
                stageInfo:
                  (a = t.getStageInfo()) &&
                  proto.webcast.data.AdventureStageInfo.toObject(e, a),
                pairStatus: r.Message.getFieldWithDefault(t, 8, 0),
                callStatus: r.Message.getFieldWithDefault(t, 9, 0),
                callerUserId: r.Message.getFieldWithDefault(t, 10, "0"),
                pairIdStr: r.Message.getFieldWithDefault(t, 11, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventurePairInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventurePairInfo();
          return proto.webcast.data.AdventurePairInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventurePairInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setPairId(a);
                  break;
                case 2:
                  a = new proto.webcast.data.AdventureUserInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureUserInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setFromUser(a);
                  break;
                case 3:
                  a = new proto.webcast.data.AdventureUserInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureUserInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setToUser(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setScore(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setNextStageScore(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setStageId(a);
                  break;
                case 7:
                  a = new proto.webcast.data.AdventureStageInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureStageInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setStageInfo(a);
                  break;
                case 8:
                  a = t.readEnum();
                  e.setPairStatus(a);
                  break;
                case 9:
                  a = t.readEnum();
                  e.setCallStatus(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setCallerUserId(a);
                  break;
                case 11:
                  a = t.readString();
                  e.setPairIdStr(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventurePairInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventurePairInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getPairId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              null != (a = e.getFromUser()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.AdventureUserInfo.serializeBinaryToWriter
                ),
              null != (a = e.getToUser()) &&
                t.writeMessage(
                  3,
                  a,
                  proto.webcast.data.AdventureUserInfo.serializeBinaryToWriter
                ),
              (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getNextStageScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getStageId()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              null != (a = e.getStageInfo()) &&
                t.writeMessage(
                  7,
                  a,
                  proto.webcast.data.AdventureStageInfo.serializeBinaryToWriter
                ),
              0 !== (a = e.getPairStatus()) && t.writeEnum(8, a),
              0 !== (a = e.getCallStatus()) && t.writeEnum(9, a),
              (a = e.getCallerUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getPairIdStr()).length > 0 && t.writeString(11, a);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getPairId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setPairId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.getFromUser =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventureUserInfo,
              2
            );
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setFromUser = function (
          e
        ) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.clearFromUser =
          function () {
            return this.setFromUser(void 0);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.hasFromUser =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getToUser =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventureUserInfo,
              3
            );
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setToUser = function (
          e
        ) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.clearToUser =
          function () {
            return this.setToUser(void 0);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.hasToUser =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getScore = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.setScore = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.getNextStageScore =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setNextStageScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getStageId =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setStageId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        (proto.webcast.data.AdventurePairInfo.prototype.getStageInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventureStageInfo,
              7
            );
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setStageInfo =
          function (e) {
            return r.Message.setWrapperField(this, 7, e);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.clearStageInfo =
          function () {
            return this.setStageInfo(void 0);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.hasStageInfo =
          function () {
            return null != r.Message.getField(this, 7);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getPairStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 8, 0);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setPairStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 8, e);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getCallStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 9, 0);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setCallStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 9, e);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getCallerUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setCallerUserId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.getPairIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "");
          }),
        (proto.webcast.data.AdventurePairInfo.prototype.setPairIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 11, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventureLocation.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.AdventureLocation.toObject(e, this);
          }),
          (proto.webcast.data.AdventureLocation.toObject = function (e, t) {
            var a = {
              x: r.Message.getFieldWithDefault(t, 1, "0"),
              y: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.AdventureLocation.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventureLocation();
          return proto.webcast.data.AdventureLocation.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventureLocation.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setX(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setY(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventureLocation.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventureLocation.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventureLocation.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getX()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getY()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a);
          }),
        (proto.webcast.data.AdventureLocation.prototype.getX = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.AdventureLocation.prototype.setX = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AdventureLocation.prototype.getY = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.AdventureLocation.prototype.setY = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.AdventureStageInfo.repeatedFields_ = [6, 9]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventureStageInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.AdventureStageInfo.toObject(e, this);
            }),
          (proto.webcast.data.AdventureStageInfo.toObject = function (e, t) {
            var a,
              o = {
                stageId: r.Message.getFieldWithDefault(t, 1, "0"),
                stageName: r.Message.getFieldWithDefault(t, 2, ""),
                stageBackground:
                  (a = t.getStageBackground()) && n.Image.toObject(e, a),
                stageLowerLimitScore: r.Message.getFieldWithDefault(t, 5, "0"),
                stageLowerLimitScoreListList:
                  null == (a = r.Message.getRepeatedField(t, 6)) ? void 0 : a,
                buttonStatus: r.Message.getFieldWithDefault(t, 7, 0),
                stageCallDuration: r.Message.getFieldWithDefault(t, 8, "0"),
                stageCallDurationListList:
                  null == (a = r.Message.getRepeatedField(t, 9)) ? void 0 : a,
                stageType: r.Message.getFieldWithDefault(t, 10, 0),
                processBarTrackImage:
                  (a = t.getProcessBarTrackImage()) && n.Image.toObject(e, a),
                processBarImage:
                  (a = t.getProcessBarImage()) && n.Image.toObject(e, a),
                processBarDotImage:
                  (a = t.getProcessBarDotImage()) && n.Image.toObject(e, a),
                processBarHeaderImage:
                  (a = t.getProcessBarHeaderImage()) && n.Image.toObject(e, a),
                processBarBubbleImage:
                  (a = t.getProcessBarBubbleImage()) && n.Image.toObject(e, a),
                processBarBubbleHeaderImage:
                  (a = t.getProcessBarBubbleHeaderImage()) &&
                  n.Image.toObject(e, a),
                pairedUserAvatarBg:
                  (a = t.getPairedUserAvatarBg()) && n.Image.toObject(e, a),
                pairedUserAvatarBgBorderColor: r.Message.getFieldWithDefault(
                  t,
                  18,
                  ""
                ),
                stageBgType: r.Message.getFieldWithDefault(t, 19, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventureStageInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventureStageInfo();
          return proto.webcast.data.AdventureStageInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventureStageInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setStageId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setStageName(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setStageBackground(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setStageLowerLimitScore(a);
                  break;
                case 6:
                  for (
                    var r = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addStageLowerLimitScoreList(r[o]);
                  break;
                case 7:
                  a = t.readEnum();
                  e.setButtonStatus(a);
                  break;
                case 8:
                  a = t.readInt64String();
                  e.setStageCallDuration(a);
                  break;
                case 9:
                  for (
                    r = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addStageCallDurationList(r[o]);
                  break;
                case 10:
                  a = t.readEnum();
                  e.setStageType(a);
                  break;
                case 11:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarTrackImage(a);
                  break;
                case 12:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarImage(a);
                  break;
                case 13:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarDotImage(a);
                  break;
                case 14:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarHeaderImage(a);
                  break;
                case 15:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarBubbleImage(a);
                  break;
                case 16:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setProcessBarBubbleHeaderImage(a);
                  break;
                case 17:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setPairedUserAvatarBg(a);
                  break;
                case 18:
                  a = t.readString();
                  e.setPairedUserAvatarBgBorderColor(a);
                  break;
                case 19:
                  a = t.readInt64String();
                  e.setStageBgType(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventureStageInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventureStageInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getStageId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getStageName()).length > 0 && t.writeString(2, a),
              null != (a = e.getStageBackground()) &&
                t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
              (a = e.getStageLowerLimitScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getStageLowerLimitScoreListList()).length > 0 &&
                t.writePackedInt64String(6, a),
              0 !== (a = e.getButtonStatus()) && t.writeEnum(7, a),
              (a = e.getStageCallDuration()),
              0 !== parseInt(a, 10) && t.writeInt64String(8, a),
              (a = e.getStageCallDurationListList()).length > 0 &&
                t.writePackedInt64String(9, a),
              0 !== (a = e.getStageType()) && t.writeEnum(10, a),
              null != (a = e.getProcessBarTrackImage()) &&
                t.writeMessage(11, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getProcessBarImage()) &&
                t.writeMessage(12, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getProcessBarDotImage()) &&
                t.writeMessage(13, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getProcessBarHeaderImage()) &&
                t.writeMessage(14, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getProcessBarBubbleImage()) &&
                t.writeMessage(15, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getProcessBarBubbleHeaderImage()) &&
                t.writeMessage(16, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getPairedUserAvatarBg()) &&
                t.writeMessage(17, a, n.Image.serializeBinaryToWriter),
              (a = e.getPairedUserAvatarBgBorderColor()).length > 0 &&
                t.writeString(18, a),
              (a = e.getStageBgType()),
              0 !== parseInt(a, 10) && t.writeInt64String(19, a);
          }),
        (proto.webcast.data.AdventureStageInfo.StageButtonStatus = {
          STAGEBUTTONSTATUS_NONE: 0,
          STAGEBUTTONSTATUS_ON: 1,
          STAGEBUTTONSTATUS_OFF: 2,
        }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageName =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageBackground =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageBackground =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearStageBackground =
          function () {
            return this.setStageBackground(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasStageBackground =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageLowerLimitScore =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageLowerLimitScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageLowerLimitScoreListList =
          function () {
            return r.Message.getRepeatedField(this, 6);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageLowerLimitScoreListList =
          function (e) {
            return r.Message.setField(this, 6, e || []);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.addStageLowerLimitScoreList =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 6, e, t);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearStageLowerLimitScoreListList =
          function () {
            return this.setStageLowerLimitScoreListList([]);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getButtonStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 7, 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setButtonStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 7, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageCallDuration =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "0");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageCallDuration =
          function (e) {
            return r.Message.setProto3StringIntField(this, 8, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageCallDurationListList =
          function () {
            return r.Message.getRepeatedField(this, 9);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageCallDurationListList =
          function (e) {
            return r.Message.setField(this, 9, e || []);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.addStageCallDurationList =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 9, e, t);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearStageCallDurationListList =
          function () {
            return this.setStageCallDurationListList([]);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageType =
          function () {
            return r.Message.getFieldWithDefault(this, 10, 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageType =
          function (e) {
            return r.Message.setProto3EnumField(this, 10, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarTrackImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 11);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarTrackImage =
          function (e) {
            return r.Message.setWrapperField(this, 11, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarTrackImage =
          function () {
            return this.setProcessBarTrackImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarTrackImage =
          function () {
            return null != r.Message.getField(this, 11);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 12);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarImage =
          function (e) {
            return r.Message.setWrapperField(this, 12, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarImage =
          function () {
            return this.setProcessBarImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarImage =
          function () {
            return null != r.Message.getField(this, 12);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarDotImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 13);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarDotImage =
          function (e) {
            return r.Message.setWrapperField(this, 13, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarDotImage =
          function () {
            return this.setProcessBarDotImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarDotImage =
          function () {
            return null != r.Message.getField(this, 13);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarHeaderImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 14);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarHeaderImage =
          function (e) {
            return r.Message.setWrapperField(this, 14, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarHeaderImage =
          function () {
            return this.setProcessBarHeaderImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarHeaderImage =
          function () {
            return null != r.Message.getField(this, 14);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarBubbleImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 15);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarBubbleImage =
          function (e) {
            return r.Message.setWrapperField(this, 15, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarBubbleImage =
          function () {
            return this.setProcessBarBubbleImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarBubbleImage =
          function () {
            return null != r.Message.getField(this, 15);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getProcessBarBubbleHeaderImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 16);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setProcessBarBubbleHeaderImage =
          function (e) {
            return r.Message.setWrapperField(this, 16, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearProcessBarBubbleHeaderImage =
          function () {
            return this.setProcessBarBubbleHeaderImage(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasProcessBarBubbleHeaderImage =
          function () {
            return null != r.Message.getField(this, 16);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getPairedUserAvatarBg =
          function () {
            return r.Message.getWrapperField(this, n.Image, 17);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setPairedUserAvatarBg =
          function (e) {
            return r.Message.setWrapperField(this, 17, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.clearPairedUserAvatarBg =
          function () {
            return this.setPairedUserAvatarBg(void 0);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.hasPairedUserAvatarBg =
          function () {
            return null != r.Message.getField(this, 17);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getPairedUserAvatarBgBorderColor =
          function () {
            return r.Message.getFieldWithDefault(this, 18, "");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setPairedUserAvatarBgBorderColor =
          function (e) {
            return r.Message.setProto3StringField(this, 18, e);
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.getStageBgType =
          function () {
            return r.Message.getFieldWithDefault(this, 19, "0");
          }),
        (proto.webcast.data.AdventureStageInfo.prototype.setStageBgType =
          function (e) {
            return r.Message.setProto3StringIntField(this, 19, e);
          }),
        (proto.webcast.data.AdventureUserInfo.repeatedFields_ = [11]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventureUserInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.AdventureUserInfo.toObject(e, this);
          }),
          (proto.webcast.data.AdventureUserInfo.toObject = function (e, t) {
            var a,
              o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                avatarThumb: (a = t.getAvatarThumb()) && n.Image.toObject(e, a),
                nickName: r.Message.getFieldWithDefault(t, 3, ""),
                score: r.Message.getFieldWithDefault(t, 4, "0"),
                rank: r.Message.getFieldWithDefault(t, 5, "0"),
                isMvp: r.Message.getBooleanFieldWithDefault(t, 8, !1),
                userStatus: r.Message.getFieldWithDefault(t, 9, 0),
                invitedCount: r.Message.getFieldWithDefault(t, 10, "0"),
                inviteUsersList:
                  null == (a = r.Message.getRepeatedField(t, 11)) ? void 0 : a,
                callStatus: r.Message.getFieldWithDefault(t, 12, 0),
                newImIconWithLevel:
                  (a = t.getNewImIconWithLevel()) && n.Image.toObject(e, a),
                gender: r.Message.getFieldWithDefault(t, 14, 0),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventureUserInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventureUserInfo();
          return proto.webcast.data.AdventureUserInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventureUserInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 2:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setAvatarThumb(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setNickName(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setScore(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setRank(a);
                  break;
                case 8:
                  a = t.readBool();
                  e.setIsMvp(a);
                  break;
                case 9:
                  a = t.readEnum();
                  e.setUserStatus(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setInvitedCount(a);
                  break;
                case 11:
                  for (
                    var r = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addInviteUsers(r[o]);
                  break;
                case 12:
                  a = t.readEnum();
                  e.setCallStatus(a);
                  break;
                case 13:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setNewImIconWithLevel(a);
                  break;
                case 14:
                  a = t.readInt32();
                  e.setGender(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventureUserInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventureUserInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              null != (a = e.getAvatarThumb()) &&
                t.writeMessage(2, a, n.Image.serializeBinaryToWriter),
              (a = e.getNickName()).length > 0 && t.writeString(3, a),
              (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getRank()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getIsMvp()) && t.writeBool(8, a),
              0 !== (a = e.getUserStatus()) && t.writeEnum(9, a),
              (a = e.getInvitedCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getInviteUsersList()).length > 0 &&
                t.writePackedInt64String(11, a),
              0 !== (a = e.getCallStatus()) && t.writeEnum(12, a),
              null != (a = e.getNewImIconWithLevel()) &&
                t.writeMessage(13, a, n.Image.serializeBinaryToWriter),
              0 !== (a = e.getGender()) && t.writeInt32(14, a);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setUserId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.getAvatarThumb =
          function () {
            return r.Message.getWrapperField(this, n.Image, 2);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setAvatarThumb =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.clearAvatarThumb =
          function () {
            return this.setAvatarThumb(void 0);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.hasAvatarThumb =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getNickName =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setNickName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.getScore = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.setScore = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.getRank = function () {
          return r.Message.getFieldWithDefault(this, 5, "0");
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.setRank = function (e) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.getIsMvp = function () {
          return r.Message.getBooleanFieldWithDefault(this, 8, !1);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.setIsMvp = function (
          e
        ) {
          return r.Message.setProto3BooleanField(this, 8, e);
        }),
        (proto.webcast.data.AdventureUserInfo.prototype.getUserStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 9, 0);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setUserStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 9, e);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getInvitedCount =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setInvitedCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getInviteUsersList =
          function () {
            return r.Message.getRepeatedField(this, 11);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setInviteUsersList =
          function (e) {
            return r.Message.setField(this, 11, e || []);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.addInviteUsers =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 11, e, t);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.clearInviteUsersList =
          function () {
            return this.setInviteUsersList([]);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getCallStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 12, 0);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setCallStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 12, e);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getNewImIconWithLevel =
          function () {
            return r.Message.getWrapperField(this, n.Image, 13);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setNewImIconWithLevel =
          function (e) {
            return r.Message.setWrapperField(this, 13, e);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.clearNewImIconWithLevel =
          function () {
            return this.setNewImIconWithLevel(void 0);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.hasNewImIconWithLevel =
          function () {
            return null != r.Message.getField(this, 13);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.getGender =
          function () {
            return r.Message.getFieldWithDefault(this, 14, 0);
          }),
        (proto.webcast.data.AdventureUserInfo.prototype.setGender = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 14, e);
        }),
        (proto.webcast.data.AdventureSettingContent.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventureSettingContent.prototype.toObject =
            function (e) {
              return proto.webcast.data.AdventureSettingContent.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.AdventureSettingContent.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                headerBackground:
                  (a = t.getHeaderBackground()) && n.Image.toObject(e, a),
                stageInfoListList: r.Message.toObjectList(
                  t.getStageInfoListList(),
                  proto.webcast.data.AdventureStageInfo.toObject,
                  e
                ),
                callStage:
                  (a = t.getCallStage()) &&
                  proto.webcast.data.AdventureStageInfo.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventureSettingContent.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.AdventureSettingContent();
            return proto.webcast.data.AdventureSettingContent.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.AdventureSettingContent.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setHeaderBackground(a);
                  break;
                case 2:
                  a = new proto.webcast.data.AdventureStageInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureStageInfo
                      .deserializeBinaryFromReader
                  ),
                    e.addStageInfoList(a);
                  break;
                case 3:
                  a = new proto.webcast.data.AdventureStageInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureStageInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setCallStage(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventureSettingContent.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventureSettingContent.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getHeaderBackground()) &&
              t.writeMessage(1, a, n.Image.serializeBinaryToWriter),
              (a = e.getStageInfoListList()).length > 0 &&
                t.writeRepeatedMessage(
                  2,
                  a,
                  proto.webcast.data.AdventureStageInfo.serializeBinaryToWriter
                ),
              null != (a = e.getCallStage()) &&
                t.writeMessage(
                  3,
                  a,
                  proto.webcast.data.AdventureStageInfo.serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.getHeaderBackground =
          function () {
            return r.Message.getWrapperField(this, n.Image, 1);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.setHeaderBackground =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.clearHeaderBackground =
          function () {
            return this.setHeaderBackground(void 0);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.hasHeaderBackground =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.getStageInfoListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.AdventureStageInfo,
              2
            );
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.setStageInfoListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.addStageInfoList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              2,
              e,
              proto.webcast.data.AdventureStageInfo,
              t
            );
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.clearStageInfoListList =
          function () {
            return this.setStageInfoListList([]);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.getCallStage =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventureStageInfo,
              3
            );
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.setCallStage =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.clearCallStage =
          function () {
            return this.setCallStage(void 0);
          }),
        (proto.webcast.data.AdventureSettingContent.prototype.hasCallStage =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.repeatedFields_ = [5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AdventurePlayModeInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.AdventurePlayModeInfo.toObject(e, this);
            }),
          (proto.webcast.data.AdventurePlayModeInfo.toObject = function (e, t) {
            var a,
              o = {
                linkedUserListList: r.Message.toObjectList(
                  t.getLinkedUserListList(),
                  proto.webcast.data.AdventureUserInfo.toObject,
                  e
                ),
                playModeStatus: r.Message.getFieldWithDefault(t, 7, 0),
                settingContent:
                  (a = t.getSettingContent()) &&
                  proto.webcast.data.AdventureSettingContent.toObject(e, a),
                playId: r.Message.getFieldWithDefault(t, 9, "0"),
                startAnimation:
                  (a = t.getStartAnimation()) && n.Image.toObject(e, a),
                finishAnimation:
                  (a = t.getFinishAnimation()) && n.Image.toObject(e, a),
                playIdStr: r.Message.getFieldWithDefault(t, 12, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AdventurePlayModeInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AdventurePlayModeInfo();
          return proto.webcast.data.AdventurePlayModeInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AdventurePlayModeInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 5:
                  var a = new proto.webcast.data.AdventureUserInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureUserInfo
                      .deserializeBinaryFromReader
                  ),
                    e.addLinkedUserList(a);
                  break;
                case 7:
                  a = t.readEnum();
                  e.setPlayModeStatus(a);
                  break;
                case 8:
                  a = new proto.webcast.data.AdventureSettingContent();
                  t.readMessage(
                    a,
                    proto.webcast.data.AdventureSettingContent
                      .deserializeBinaryFromReader
                  ),
                    e.setSettingContent(a);
                  break;
                case 9:
                  a = t.readInt64String();
                  e.setPlayId(a);
                  break;
                case 10:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setStartAnimation(a);
                  break;
                case 11:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setFinishAnimation(a);
                  break;
                case 12:
                  a = t.readString();
                  e.setPlayIdStr(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AdventurePlayModeInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AdventurePlayModeInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getLinkedUserListList()).length > 0 &&
              t.writeRepeatedMessage(
                5,
                a,
                proto.webcast.data.AdventureUserInfo.serializeBinaryToWriter
              ),
              0 !== (a = e.getPlayModeStatus()) && t.writeEnum(7, a),
              null != (a = e.getSettingContent()) &&
                t.writeMessage(
                  8,
                  a,
                  proto.webcast.data.AdventureSettingContent
                    .serializeBinaryToWriter
                ),
              (a = e.getPlayId()),
              0 !== parseInt(a, 10) && t.writeInt64String(9, a),
              null != (a = e.getStartAnimation()) &&
                t.writeMessage(10, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getFinishAnimation()) &&
                t.writeMessage(11, a, n.Image.serializeBinaryToWriter),
              (a = e.getPlayIdStr()).length > 0 && t.writeString(12, a);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getLinkedUserListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.AdventureUserInfo,
              5
            );
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setLinkedUserListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.addLinkedUserList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              5,
              e,
              proto.webcast.data.AdventureUserInfo,
              t
            );
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.clearLinkedUserListList =
          function () {
            return this.setLinkedUserListList([]);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getPlayModeStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 7, 0);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setPlayModeStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 7, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getSettingContent =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AdventureSettingContent,
              8
            );
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setSettingContent =
          function (e) {
            return r.Message.setWrapperField(this, 8, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.clearSettingContent =
          function () {
            return this.setSettingContent(void 0);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.hasSettingContent =
          function () {
            return null != r.Message.getField(this, 8);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getPlayId =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "0");
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setPlayId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 9, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getStartAnimation =
          function () {
            return r.Message.getWrapperField(this, n.Image, 10);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setStartAnimation =
          function (e) {
            return r.Message.setWrapperField(this, 10, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.clearStartAnimation =
          function () {
            return this.setStartAnimation(void 0);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.hasStartAnimation =
          function () {
            return null != r.Message.getField(this, 10);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getFinishAnimation =
          function () {
            return r.Message.getWrapperField(this, n.Image, 11);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setFinishAnimation =
          function (e) {
            return r.Message.setWrapperField(this, 11, e);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.clearFinishAnimation =
          function () {
            return this.setFinishAnimation(void 0);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.hasFinishAnimation =
          function () {
            return null != r.Message.getField(this, 11);
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.getPlayIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "");
          }),
        (proto.webcast.data.AdventurePlayModeInfo.prototype.setPlayIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 12, e);
          }),
        (proto.webcast.data.PairFinishReasonEnum = {
          FINISHREASONENUM_UNKNOWN: 0,
          FINISHREASONENUM_NORMAL: 1,
          FINISHREASONENUM_RTC_INCONSISTENT: 2,
          FINISHREASONENUM_CALL_OVER: 3,
        }),
        (proto.webcast.data.AdventureReplyStatus = {
          REPLYSTATUS_UNKNOWN: 0,
          REPLYSTATUS_PERMIT: 1,
          REPLYSTATUS_DENY: 2,
        }),
        (proto.webcast.data.AdventureCallReplyStatus = {
          REPLYCALLSTATUS_UNKNOWN: 0,
          REPLYCALLSTATUS_PERMIT: 1,
          REPLYCALLSTATUS_DENY: 2,
          REPLYCALLSTATUS_TIMEOUT: 3,
        }),
        (proto.webcast.data.AdventurePlayModeStatus = {
          ADVENTUREPLAYMODESTATUS_UNKNOWN: 0,
          ADVENTUREPLAYMODESTATUS_START: 1,
          ADVENTUREPLAYMODESTATUS_FINISH: 2,
        }),
        (proto.webcast.data.AdventureStageType = {
          ADVENTURESTAGETYPE_UNKNOWN: 0,
          ADVENTURESTAGETYPE_NORMAL: 1,
          ADVENTURESTAGETYPE_CALL: 2,
        }),
        (proto.webcast.data.AdventureStatus = {
          ADVENTURESTATUS_UKNOWN: 0,
          ADVENTURESTATUS_INVITE: 1,
          ADVENTURESTATUS_PAIRED: 2,
          ADVENTURESTATUS_CALL: 3,
          ADVENTURESTATUS_FINISH: 4,
        }),
        (proto.webcast.data.AdventureCallStatus = {
          ADVENTURECALLSTATUS_UNKNOWN: 0,
          ADVENTURECALLSTATUS_INIT: 1,
          ADVENTURECALLSTATUS_INVITE: 2,
          ADVENTURECALLSTATUS_CONNECT: 3,
          ADVENTURECALLSTATUS_FINISH: 4,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    57049: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(54782);
      o.object.extend(proto, s),
        o.exportSymbol("proto.webcast.data.GiftAudienceReceiverItem", null, i),
        (proto.webcast.data.GiftAudienceReceiverItem = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.GiftAudienceReceiverItem, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GiftAudienceReceiverItem.displayName =
            "proto.webcast.data.GiftAudienceReceiverItem"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GiftAudienceReceiverItem.prototype.toObject =
            function (e) {
              return proto.webcast.data.GiftAudienceReceiverItem.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.GiftAudienceReceiverItem.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                user: (a = t.getUser()) && s.User.toObject(e, a),
                score: r.Message.getFieldWithDefault(t, 2, "0"),
                giftAuth: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                offReasonToast: r.Message.getFieldWithDefault(t, 4, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GiftAudienceReceiverItem.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.GiftAudienceReceiverItem();
            return proto.webcast.data.GiftAudienceReceiverItem.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.User();
                  t.readMessage(a, s.User.deserializeBinaryFromReader),
                    e.setUser(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setScore(a);
                  break;
                case 3:
                  a = t.readBool();
                  e.setGiftAuth(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setOffReasonToast(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.GiftAudienceReceiverItem.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getUser()) &&
              t.writeMessage(1, a, s.User.serializeBinaryToWriter),
              (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getGiftAuth()) && t.writeBool(3, a),
              (a = e.getOffReasonToast()).length > 0 && t.writeString(4, a);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.getUser =
          function () {
            return r.Message.getWrapperField(this, s.User, 1);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.setUser =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.clearUser =
          function () {
            return this.setUser(void 0);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.hasUser =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.getScore =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.setScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.getGiftAuth =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.setGiftAuth =
          function (e) {
            return r.Message.setProto3BooleanField(this, 3, e);
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.getOffReasonToast =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.GiftAudienceReceiverItem.prototype.setOffReasonToast =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        o.object.extend(t, proto.webcast.data);
    },
    44408: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(42245);
      o.object.extend(proto, s);
      var n = a(54782);
      o.object.extend(proto, n),
        o.exportSymbol("proto.webcast.data.ChatMatchGroupInfo", null, i),
        o.exportSymbol("proto.webcast.data.ChatMatchGroupStatus", null, i),
        o.exportSymbol("proto.webcast.data.ChatMatchTopicTag", null, i),
        (proto.webcast.data.ChatMatchTopicTag = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ChatMatchTopicTag, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatMatchTopicTag.displayName =
            "proto.webcast.data.ChatMatchTopicTag"),
        (proto.webcast.data.ChatMatchGroupInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ChatMatchGroupInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ChatMatchGroupInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatMatchGroupInfo.displayName =
            "proto.webcast.data.ChatMatchGroupInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatMatchTopicTag.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.ChatMatchTopicTag.toObject(e, this);
          }),
          (proto.webcast.data.ChatMatchTopicTag.toObject = function (e, t) {
            var a,
              o = {
                tagId: r.Message.getFieldWithDefault(t, 1, "0"),
                tagName: r.Message.getFieldWithDefault(t, 2, ""),
                tagImage: (a = t.getTagImage()) && s.Image.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ChatMatchTopicTag.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChatMatchTopicTag();
          return proto.webcast.data.ChatMatchTopicTag.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChatMatchTopicTag.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setTagId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setTagName(a);
                  break;
                case 3:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setTagImage(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatMatchTopicTag.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatMatchTopicTag.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getTagId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getTagName()).length > 0 && t.writeString(2, a),
              null != (a = e.getTagImage()) &&
                t.writeMessage(3, a, s.Image.serializeBinaryToWriter);
          }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.getTagId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.setTagId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.getTagName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.setTagName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.getTagImage =
          function () {
            return r.Message.getWrapperField(this, s.Image, 3);
          }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.setTagImage = function (
          e
        ) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.clearTagImage =
          function () {
            return this.setTagImage(void 0);
          }),
        (proto.webcast.data.ChatMatchTopicTag.prototype.hasTagImage =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.repeatedFields_ = [5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatMatchGroupInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.ChatMatchGroupInfo.toObject(e, this);
            }),
          (proto.webcast.data.ChatMatchGroupInfo.toObject = function (e, t) {
            var a = {
              groupId: r.Message.getFieldWithDefault(t, 1, ""),
              tagId: r.Message.getFieldWithDefault(t, 2, "0"),
              disbandTime: r.Message.getFieldWithDefault(t, 3, "0"),
              status: r.Message.getFieldWithDefault(t, 4, 0),
              groupUserListList: r.Message.toObjectList(
                t.getGroupUserListList(),
                n.User.toObject,
                e
              ),
              version: r.Message.getFieldWithDefault(t, 6, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ChatMatchGroupInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChatMatchGroupInfo();
          return proto.webcast.data.ChatMatchGroupInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChatMatchGroupInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setGroupId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setTagId(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setDisbandTime(a);
                  break;
                case 4:
                  a = t.readEnum();
                  e.setStatus(a);
                  break;
                case 5:
                  a = new n.User();
                  t.readMessage(a, n.User.deserializeBinaryFromReader),
                    e.addGroupUserList(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setVersion(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatMatchGroupInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatMatchGroupInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getGroupId()).length > 0 && t.writeString(1, a),
              (a = e.getTagId()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getDisbandTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              0 !== (a = e.getStatus()) && t.writeEnum(4, a),
              (a = e.getGroupUserListList()).length > 0 &&
                t.writeRepeatedMessage(5, a, n.User.serializeBinaryToWriter),
              (a = e.getVersion()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getGroupId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setGroupId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getTagId =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setTagId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getDisbandTime =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setDisbandTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setStatus = function (
          e
        ) {
          return r.Message.setProto3EnumField(this, 4, e);
        }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getGroupUserListList =
          function () {
            return r.Message.getRepeatedWrapperField(this, n.User, 5);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setGroupUserListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.addGroupUserList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              5,
              e,
              proto.webcast.data.User,
              t
            );
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.clearGroupUserListList =
          function () {
            return this.setGroupUserListList([]);
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.getVersion =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.ChatMatchGroupInfo.prototype.setVersion = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        (proto.webcast.data.ChatMatchGroupStatus = {
          CHAT_MATCH_STATUS_UNKNOWN: 0,
          CHAT_MATCH_STATUS_MATCHING: 1,
          CHAT_MATCH_STATUS_ROOM_TO_BE_CREATED: 2,
          CHAT_MATCH_STATUS_ROOM_CREATED: 3,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    78043: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(76911);
      o.object.extend(proto, s),
        o.exportSymbol("proto.webcast.data.ChorusInfo", null, i),
        o.exportSymbol("proto.webcast.data.ChorusSongInfo", null, i),
        o.exportSymbol("proto.webcast.data.CloseChorusReason", null, i),
        (proto.webcast.data.ChorusInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ChorusInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChorusInfo.displayName =
            "proto.webcast.data.ChorusInfo"),
        (proto.webcast.data.ChorusSongInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ChorusSongInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChorusSongInfo.displayName =
            "proto.webcast.data.ChorusSongInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChorusInfo.prototype.toObject = function (e) {
            return proto.webcast.data.ChorusInfo.toObject(e, this);
          }),
          (proto.webcast.data.ChorusInfo.toObject = function (e, t) {
            var a = {
              chorusId: r.Message.getFieldWithDefault(t, 1, "0"),
              leadSingerId: r.Message.getFieldWithDefault(t, 2, "0"),
              startTime: r.Message.getFieldWithDefault(t, 3, "0"),
              finishTime: r.Message.getFieldWithDefault(t, 4, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ChorusInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChorusInfo();
          return proto.webcast.data.ChorusInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChorusInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt64String();
                e.setChorusId(a);
                break;
              case 2:
                a = t.readInt64String();
                e.setLeadSingerId(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setStartTime(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setFinishTime(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.ChorusInfo.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.ChorusInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.ChorusInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getChorusId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getLeadSingerId()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getStartTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            (a = e.getFinishTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a);
        }),
        (proto.webcast.data.ChorusInfo.prototype.getChorusId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.ChorusInfo.prototype.setChorusId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.ChorusInfo.prototype.getLeadSingerId = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.ChorusInfo.prototype.setLeadSingerId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.ChorusInfo.prototype.getStartTime = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.ChorusInfo.prototype.setStartTime = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.ChorusInfo.prototype.getFinishTime = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.ChorusInfo.prototype.setFinishTime = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChorusSongInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.ChorusSongInfo.toObject(e, this);
          }),
          (proto.webcast.data.ChorusSongInfo.toObject = function (e, t) {
            var a,
              o = {
                music: (a = t.getMusic()) && s.KtvSongStruct.toObject(e, a),
                isSelfSeeing: r.Message.getBooleanFieldWithDefault(t, 2, !1),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ChorusSongInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChorusSongInfo();
          return proto.webcast.data.ChorusSongInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChorusSongInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.KtvSongStruct();
                  t.readMessage(a, s.KtvSongStruct.deserializeBinaryFromReader),
                    e.setMusic(a);
                  break;
                case 2:
                  a = t.readBool();
                  e.setIsSelfSeeing(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ChorusSongInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChorusSongInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChorusSongInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getMusic()) &&
            t.writeMessage(1, a, s.KtvSongStruct.serializeBinaryToWriter),
            (a = e.getIsSelfSeeing()) && t.writeBool(2, a);
        }),
        (proto.webcast.data.ChorusSongInfo.prototype.getMusic = function () {
          return r.Message.getWrapperField(this, s.KtvSongStruct, 1);
        }),
        (proto.webcast.data.ChorusSongInfo.prototype.setMusic = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.ChorusSongInfo.prototype.clearMusic = function () {
          return this.setMusic(void 0);
        }),
        (proto.webcast.data.ChorusSongInfo.prototype.hasMusic = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.ChorusSongInfo.prototype.getIsSelfSeeing =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1);
          }),
        (proto.webcast.data.ChorusSongInfo.prototype.setIsSelfSeeing =
          function (e) {
            return r.Message.setProto3BooleanField(this, 2, e);
          }),
        (proto.webcast.data.CloseChorusReason = {
          CLOSECHORUSREASON_NONE: 0,
          CLOSECHORUSREASON_NORMAL: 1,
          CLOSECHORUSREASON_ANCHOR_JOIN: 2,
          CLOSECHORUSREASON_ANCHOR_LEAVE: 3,
          CLOSECHORUSREASON_SWITCH_SCENE: 4,
          CLOSECHORUSREASON_LINKMIC_CLOSE: 5,
          CLOSECHORUSREASON_LEAD_LEAVE: 6,
          CLOSECHORUSREASON_AGAIN: 7,
          CLOSECHORUSREASON_FALLBACK: 8,
          CLOSECHORUSREASON_RTC_SERVER_MIX_FALLBACK: 9,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    22621: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      o.exportSymbol("proto.webcast.data.AnimConfig", null, i),
        o.exportSymbol("proto.webcast.data.AnimConfig.EnterAnimType", null, i),
        o.exportSymbol("proto.webcast.data.AnimConfig.ExitAnimType", null, i),
        o.exportSymbol("proto.webcast.data.BottomRightCardArea", null, i),
        o.exportSymbol(
          "proto.webcast.data.BottomRightCardArea.MockType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.CardCondition", null, i),
        o.exportSymbol(
          "proto.webcast.data.CardCondition.ConditionType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.CardDisplayInfo", null, i),
        o.exportSymbol(
          "proto.webcast.data.CardDisplayInfo.ContainerType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.CardPreDefeatStrategy", null, i),
        o.exportSymbol(
          "proto.webcast.data.CardPreDefeatStrategy.StrategyType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.CardShowDefeatStrategy", null, i),
        o.exportSymbol(
          "proto.webcast.data.CardShowDefeatStrategy.StrategyType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.CardTrigger", null, i),
        o.exportSymbol("proto.webcast.data.CardTrigger.TriggerType", null, i),
        o.exportSymbol("proto.webcast.data.CardTriggerConfig", null, i),
        o.exportSymbol("proto.webcast.data.CombineType", null, i),
        o.exportSymbol("proto.webcast.data.LandScapeConfig", null, i),
        (proto.webcast.data.BottomRightCardArea = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.BottomRightCardArea, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BottomRightCardArea.displayName =
            "proto.webcast.data.BottomRightCardArea"),
        (proto.webcast.data.AnimConfig = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AnimConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AnimConfig.displayName =
            "proto.webcast.data.AnimConfig"),
        (proto.webcast.data.CombineType = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CombineType, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CombineType.displayName =
            "proto.webcast.data.CombineType"),
        (proto.webcast.data.CardDisplayInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CardDisplayInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.CardDisplayInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardDisplayInfo.displayName =
            "proto.webcast.data.CardDisplayInfo"),
        (proto.webcast.data.LandScapeConfig = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LandScapeConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LandScapeConfig.displayName =
            "proto.webcast.data.LandScapeConfig"),
        (proto.webcast.data.CardTriggerConfig = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CardTriggerConfig.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.CardTriggerConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardTriggerConfig.displayName =
            "proto.webcast.data.CardTriggerConfig"),
        (proto.webcast.data.CardTrigger = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CardTrigger, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardTrigger.displayName =
            "proto.webcast.data.CardTrigger"),
        (proto.webcast.data.CardCondition = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CardCondition, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardCondition.displayName =
            "proto.webcast.data.CardCondition"),
        (proto.webcast.data.CardPreDefeatStrategy = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CardPreDefeatStrategy, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardPreDefeatStrategy.displayName =
            "proto.webcast.data.CardPreDefeatStrategy"),
        (proto.webcast.data.CardShowDefeatStrategy = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CardShowDefeatStrategy, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CardShowDefeatStrategy.displayName =
            "proto.webcast.data.CardShowDefeatStrategy"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BottomRightCardArea.prototype.toObject =
            function (e) {
              return proto.webcast.data.BottomRightCardArea.toObject(e, this);
            }),
          (proto.webcast.data.BottomRightCardArea.toObject = function (e, t) {
            var a,
              o = {
                type: r.Message.getFieldWithDefault(t, 1, 0),
                priority: r.Message.getFieldWithDefault(t, 2, 0),
                toolbarType: r.Message.getFieldWithDefault(t, 3, 0),
                combineType:
                  (a = t.getCombineType()) &&
                  proto.webcast.data.CombineType.toObject(e, a),
                cardDisplayInfo:
                  (a = t.getCardDisplayInfo()) &&
                  proto.webcast.data.CardDisplayInfo.toObject(e, a),
                animConfig:
                  (a = t.getAnimConfig()) &&
                  proto.webcast.data.AnimConfig.toObject(e, a),
                isPreloading: r.Message.getBooleanFieldWithDefault(t, 62, !1),
                mockType: r.Message.getFieldWithDefault(t, 6, 0),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BottomRightCardArea.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BottomRightCardArea();
          return proto.webcast.data.BottomRightCardArea.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BottomRightCardArea.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setType(a);
                  break;
                case 2:
                  a = t.readUint32();
                  e.setPriority(a);
                  break;
                case 3:
                  a = t.readInt32();
                  e.setToolbarType(a);
                  break;
                case 4:
                  a = new proto.webcast.data.CombineType();
                  t.readMessage(
                    a,
                    proto.webcast.data.CombineType.deserializeBinaryFromReader
                  ),
                    e.setCombineType(a);
                  break;
                case 5:
                  a = new proto.webcast.data.CardDisplayInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardDisplayInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setCardDisplayInfo(a);
                  break;
                case 61:
                  a = new proto.webcast.data.AnimConfig();
                  t.readMessage(
                    a,
                    proto.webcast.data.AnimConfig.deserializeBinaryFromReader
                  ),
                    e.setAnimConfig(a);
                  break;
                case 62:
                  a = t.readBool();
                  e.setIsPreloading(a);
                  break;
                case 6:
                  a = t.readInt32();
                  e.setMockType(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.BottomRightCardArea.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.BottomRightCardArea.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getType()) && t.writeInt32(1, a),
              0 !== (a = e.getPriority()) && t.writeUint32(2, a),
              0 !== (a = e.getToolbarType()) && t.writeInt32(3, a),
              null != (a = e.getCombineType()) &&
                t.writeMessage(
                  4,
                  a,
                  proto.webcast.data.CombineType.serializeBinaryToWriter
                ),
              null != (a = e.getCardDisplayInfo()) &&
                t.writeMessage(
                  5,
                  a,
                  proto.webcast.data.CardDisplayInfo.serializeBinaryToWriter
                ),
              null != (a = e.getAnimConfig()) &&
                t.writeMessage(
                  61,
                  a,
                  proto.webcast.data.AnimConfig.serializeBinaryToWriter
                ),
              (a = e.getIsPreloading()) && t.writeBool(62, a),
              0 !== (a = e.getMockType()) && t.writeInt32(6, a);
          }),
        (proto.webcast.data.BottomRightCardArea.MockType = {
          NOMOCK: 0,
          MOCK: 1,
        }),
        (proto.webcast.data.BottomRightCardArea.prototype.getType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setType = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.BottomRightCardArea.prototype.getPriority =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setPriority =
          function (e) {
            return r.Message.setProto3IntField(this, 2, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getToolbarType =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setToolbarType =
          function (e) {
            return r.Message.setProto3IntField(this, 3, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getCombineType =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CombineType,
              4
            );
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setCombineType =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.clearCombineType =
          function () {
            return this.setCombineType(void 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.hasCombineType =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getCardDisplayInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CardDisplayInfo,
              5
            );
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setCardDisplayInfo =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.clearCardDisplayInfo =
          function () {
            return this.setCardDisplayInfo(void 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.hasCardDisplayInfo =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getAnimConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AnimConfig,
              61
            );
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setAnimConfig =
          function (e) {
            return r.Message.setWrapperField(this, 61, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.clearAnimConfig =
          function () {
            return this.setAnimConfig(void 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.hasAnimConfig =
          function () {
            return null != r.Message.getField(this, 61);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getIsPreloading =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 62, !1);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setIsPreloading =
          function (e) {
            return r.Message.setProto3BooleanField(this, 62, e);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.getMockType =
          function () {
            return r.Message.getFieldWithDefault(this, 6, 0);
          }),
        (proto.webcast.data.BottomRightCardArea.prototype.setMockType =
          function (e) {
            return r.Message.setProto3IntField(this, 6, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AnimConfig.prototype.toObject = function (e) {
            return proto.webcast.data.AnimConfig.toObject(e, this);
          }),
          (proto.webcast.data.AnimConfig.toObject = function (e, t) {
            var a = {
              isAnimSupported: r.Message.getBooleanFieldWithDefault(t, 1, !1),
              enterAnimType: r.Message.getFieldWithDefault(t, 2, 0),
              exitAnimType: r.Message.getFieldWithDefault(t, 3, 0),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.AnimConfig.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AnimConfig();
          return proto.webcast.data.AnimConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AnimConfig.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readBool();
                e.setIsAnimSupported(a);
                break;
              case 2:
                a = t.readEnum();
                e.setEnterAnimType(a);
                break;
              case 3:
                a = t.readEnum();
                e.setExitAnimType(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.AnimConfig.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.AnimConfig.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.AnimConfig.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getIsAnimSupported()) && t.writeBool(1, a),
            0 !== (a = e.getEnterAnimType()) && t.writeEnum(2, a),
            0 !== (a = e.getExitAnimType()) && t.writeEnum(3, a);
        }),
        (proto.webcast.data.AnimConfig.EnterAnimType = { DEFAULTENTERTYPE: 0 }),
        (proto.webcast.data.AnimConfig.ExitAnimType = { DEFAULTEXITTYPE: 0 }),
        (proto.webcast.data.AnimConfig.prototype.getIsAnimSupported =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1);
          }),
        (proto.webcast.data.AnimConfig.prototype.setIsAnimSupported = function (
          e
        ) {
          return r.Message.setProto3BooleanField(this, 1, e);
        }),
        (proto.webcast.data.AnimConfig.prototype.getEnterAnimType =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.webcast.data.AnimConfig.prototype.setEnterAnimType = function (
          e
        ) {
          return r.Message.setProto3EnumField(this, 2, e);
        }),
        (proto.webcast.data.AnimConfig.prototype.getExitAnimType = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.webcast.data.AnimConfig.prototype.setExitAnimType = function (
          e
        ) {
          return r.Message.setProto3EnumField(this, 3, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CombineType.prototype.toObject = function (e) {
            return proto.webcast.data.CombineType.toObject(e, this);
          }),
          (proto.webcast.data.CombineType.toObject = function (e, t) {
            var a = {
              areaType: r.Message.getFieldWithDefault(t, 1, 0),
              areaSubType: r.Message.getFieldWithDefault(t, 2, 0),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CombineType.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CombineType();
          return proto.webcast.data.CombineType.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CombineType.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt32();
                e.setAreaType(a);
                break;
              case 2:
                a = t.readInt32();
                e.setAreaSubType(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.CombineType.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CombineType.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CombineType.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getAreaType()) && t.writeInt32(1, a),
            0 !== (a = e.getAreaSubType()) && t.writeInt32(2, a);
        }),
        (proto.webcast.data.CombineType.prototype.getAreaType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.CombineType.prototype.setAreaType = function (e) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.CombineType.prototype.getAreaSubType = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.CombineType.prototype.setAreaSubType = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.CardDisplayInfo.repeatedFields_ = [31]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardDisplayInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.CardDisplayInfo.toObject(e, this);
          }),
          (proto.webcast.data.CardDisplayInfo.toObject = function (e, t) {
            var a,
              o = {
                cardId: r.Message.getFieldWithDefault(t, 1, 0),
                url: r.Message.getFieldWithDefault(t, 2, ""),
                fallbackUrl: r.Message.getFieldWithDefault(t, 3, ""),
                containerType: r.Message.getFieldWithDefault(t, 4, 0),
                durationMs: r.Message.getFieldWithDefault(t, 5, "0"),
                width: r.Message.getFieldWithDefault(t, 10, 0),
                height: r.Message.getFieldWithDefault(t, 11, 0),
                bottom: r.Message.getFieldWithDefault(t, 12, 0),
                right: r.Message.getFieldWithDefault(t, 13, 0),
                containerPayload: r.Message.getFieldWithDefault(t, 20, ""),
                triggerConfig:
                  (a = t.getTriggerConfig()) &&
                  proto.webcast.data.CardTriggerConfig.toObject(e, a),
                conditionListList: r.Message.toObjectList(
                  t.getConditionListList(),
                  proto.webcast.data.CardCondition.toObject,
                  e
                ),
                preDefeatStrategy:
                  (a = t.getPreDefeatStrategy()) &&
                  proto.webcast.data.CardPreDefeatStrategy.toObject(e, a),
                showDefeatStrategy:
                  (a = t.getShowDefeatStrategy()) &&
                  proto.webcast.data.CardShowDefeatStrategy.toObject(e, a),
                landscapeConfig:
                  (a = t.getLandscapeConfig()) &&
                  proto.webcast.data.LandScapeConfig.toObject(e, a),
                accessibleName: r.Message.getFieldWithDefault(t, 50, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.CardDisplayInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CardDisplayInfo();
          return proto.webcast.data.CardDisplayInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CardDisplayInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setCardId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setUrl(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setFallbackUrl(a);
                  break;
                case 4:
                  a = t.readEnum();
                  e.setContainerType(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setDurationMs(a);
                  break;
                case 10:
                  a = t.readUint32();
                  e.setWidth(a);
                  break;
                case 11:
                  a = t.readUint32();
                  e.setHeight(a);
                  break;
                case 12:
                  a = t.readUint32();
                  e.setBottom(a);
                  break;
                case 13:
                  a = t.readUint32();
                  e.setRight(a);
                  break;
                case 20:
                  a = t.readString();
                  e.setContainerPayload(a);
                  break;
                case 30:
                  a = new proto.webcast.data.CardTriggerConfig();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardTriggerConfig
                      .deserializeBinaryFromReader
                  ),
                    e.setTriggerConfig(a);
                  break;
                case 31:
                  a = new proto.webcast.data.CardCondition();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardCondition.deserializeBinaryFromReader
                  ),
                    e.addConditionList(a);
                  break;
                case 40:
                  a = new proto.webcast.data.CardPreDefeatStrategy();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardPreDefeatStrategy
                      .deserializeBinaryFromReader
                  ),
                    e.setPreDefeatStrategy(a);
                  break;
                case 41:
                  a = new proto.webcast.data.CardShowDefeatStrategy();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardShowDefeatStrategy
                      .deserializeBinaryFromReader
                  ),
                    e.setShowDefeatStrategy(a);
                  break;
                case 60:
                  a = new proto.webcast.data.LandScapeConfig();
                  t.readMessage(
                    a,
                    proto.webcast.data.LandScapeConfig
                      .deserializeBinaryFromReader
                  ),
                    e.setLandscapeConfig(a);
                  break;
                case 50:
                  a = t.readString();
                  e.setAccessibleName(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardDisplayInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardDisplayInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getCardId()) && t.writeInt32(1, a),
            (a = e.getUrl()).length > 0 && t.writeString(2, a),
            (a = e.getFallbackUrl()).length > 0 && t.writeString(3, a),
            0 !== (a = e.getContainerType()) && t.writeEnum(4, a),
            (a = e.getDurationMs()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a),
            0 !== (a = e.getWidth()) && t.writeUint32(10, a),
            0 !== (a = e.getHeight()) && t.writeUint32(11, a),
            0 !== (a = e.getBottom()) && t.writeUint32(12, a),
            0 !== (a = e.getRight()) && t.writeUint32(13, a),
            (a = e.getContainerPayload()).length > 0 && t.writeString(20, a),
            null != (a = e.getTriggerConfig()) &&
              t.writeMessage(
                30,
                a,
                proto.webcast.data.CardTriggerConfig.serializeBinaryToWriter
              ),
            (a = e.getConditionListList()).length > 0 &&
              t.writeRepeatedMessage(
                31,
                a,
                proto.webcast.data.CardCondition.serializeBinaryToWriter
              ),
            null != (a = e.getPreDefeatStrategy()) &&
              t.writeMessage(
                40,
                a,
                proto.webcast.data.CardPreDefeatStrategy.serializeBinaryToWriter
              ),
            null != (a = e.getShowDefeatStrategy()) &&
              t.writeMessage(
                41,
                a,
                proto.webcast.data.CardShowDefeatStrategy
                  .serializeBinaryToWriter
              ),
            null != (a = e.getLandscapeConfig()) &&
              t.writeMessage(
                60,
                a,
                proto.webcast.data.LandScapeConfig.serializeBinaryToWriter
              ),
            (a = e.getAccessibleName()).length > 0 && t.writeString(50, a);
        }),
        (proto.webcast.data.CardDisplayInfo.ContainerType = {
          UNKNOWNCONTAINERTYPE: 0,
          LYNX: 1,
          WEBVIEW: 2,
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getCardId = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setCardId = function (e) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getUrl = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setUrl = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getFallbackUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setFallbackUrl =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getContainerType =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setContainerType =
          function (e) {
            return r.Message.setProto3EnumField(this, 4, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getDurationMs =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setDurationMs = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getWidth = function () {
          return r.Message.getFieldWithDefault(this, 10, 0);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setWidth = function (e) {
          return r.Message.setProto3IntField(this, 10, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getHeight = function () {
          return r.Message.getFieldWithDefault(this, 11, 0);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setHeight = function (e) {
          return r.Message.setProto3IntField(this, 11, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getBottom = function () {
          return r.Message.getFieldWithDefault(this, 12, 0);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setBottom = function (e) {
          return r.Message.setProto3IntField(this, 12, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getRight = function () {
          return r.Message.getFieldWithDefault(this, 13, 0);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.setRight = function (e) {
          return r.Message.setProto3IntField(this, 13, e);
        }),
        (proto.webcast.data.CardDisplayInfo.prototype.getContainerPayload =
          function () {
            return r.Message.getFieldWithDefault(this, 20, "");
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setContainerPayload =
          function (e) {
            return r.Message.setProto3StringField(this, 20, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getTriggerConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CardTriggerConfig,
              30
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setTriggerConfig =
          function (e) {
            return r.Message.setWrapperField(this, 30, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.clearTriggerConfig =
          function () {
            return this.setTriggerConfig(void 0);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.hasTriggerConfig =
          function () {
            return null != r.Message.getField(this, 30);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getConditionListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.CardCondition,
              31
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setConditionListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 31, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.addConditionList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              31,
              e,
              proto.webcast.data.CardCondition,
              t
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.clearConditionListList =
          function () {
            return this.setConditionListList([]);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getPreDefeatStrategy =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CardPreDefeatStrategy,
              40
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setPreDefeatStrategy =
          function (e) {
            return r.Message.setWrapperField(this, 40, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.clearPreDefeatStrategy =
          function () {
            return this.setPreDefeatStrategy(void 0);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.hasPreDefeatStrategy =
          function () {
            return null != r.Message.getField(this, 40);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getShowDefeatStrategy =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CardShowDefeatStrategy,
              41
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setShowDefeatStrategy =
          function (e) {
            return r.Message.setWrapperField(this, 41, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.clearShowDefeatStrategy =
          function () {
            return this.setShowDefeatStrategy(void 0);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.hasShowDefeatStrategy =
          function () {
            return null != r.Message.getField(this, 41);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getLandscapeConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LandScapeConfig,
              60
            );
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setLandscapeConfig =
          function (e) {
            return r.Message.setWrapperField(this, 60, e);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.clearLandscapeConfig =
          function () {
            return this.setLandscapeConfig(void 0);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.hasLandscapeConfig =
          function () {
            return null != r.Message.getField(this, 60);
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.getAccessibleName =
          function () {
            return r.Message.getFieldWithDefault(this, 50, "");
          }),
        (proto.webcast.data.CardDisplayInfo.prototype.setAccessibleName =
          function (e) {
            return r.Message.setProto3StringField(this, 50, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LandScapeConfig.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.LandScapeConfig.toObject(e, this);
          }),
          (proto.webcast.data.LandScapeConfig.toObject = function (e, t) {
            var a = {
              isLandscapeSupported: r.Message.getBooleanFieldWithDefault(
                t,
                1,
                !1
              ),
              width: r.Message.getFieldWithDefault(t, 2, 0),
              height: r.Message.getFieldWithDefault(t, 3, 0),
              bottom: r.Message.getFieldWithDefault(t, 4, 0),
              right: r.Message.getFieldWithDefault(t, 5, 0),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LandScapeConfig.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LandScapeConfig();
          return proto.webcast.data.LandScapeConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LandScapeConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readBool();
                  e.setIsLandscapeSupported(a);
                  break;
                case 2:
                  a = t.readUint32();
                  e.setWidth(a);
                  break;
                case 3:
                  a = t.readUint32();
                  e.setHeight(a);
                  break;
                case 4:
                  a = t.readUint32();
                  e.setBottom(a);
                  break;
                case 5:
                  a = t.readUint32();
                  e.setRight(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LandScapeConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LandScapeConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LandScapeConfig.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getIsLandscapeSupported()) && t.writeBool(1, a),
            0 !== (a = e.getWidth()) && t.writeUint32(2, a),
            0 !== (a = e.getHeight()) && t.writeUint32(3, a),
            0 !== (a = e.getBottom()) && t.writeUint32(4, a),
            0 !== (a = e.getRight()) && t.writeUint32(5, a);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.getIsLandscapeSupported =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1);
          }),
        (proto.webcast.data.LandScapeConfig.prototype.setIsLandscapeSupported =
          function (e) {
            return r.Message.setProto3BooleanField(this, 1, e);
          }),
        (proto.webcast.data.LandScapeConfig.prototype.getWidth = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.setWidth = function (e) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.getHeight = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.setHeight = function (e) {
          return r.Message.setProto3IntField(this, 3, e);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.getBottom = function () {
          return r.Message.getFieldWithDefault(this, 4, 0);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.setBottom = function (e) {
          return r.Message.setProto3IntField(this, 4, e);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.getRight = function () {
          return r.Message.getFieldWithDefault(this, 5, 0);
        }),
        (proto.webcast.data.LandScapeConfig.prototype.setRight = function (e) {
          return r.Message.setProto3IntField(this, 5, e);
        }),
        (proto.webcast.data.CardTriggerConfig.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardTriggerConfig.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.CardTriggerConfig.toObject(e, this);
          }),
          (proto.webcast.data.CardTriggerConfig.toObject = function (e, t) {
            var a,
              o = {
                strategy: r.Message.getFieldWithDefault(t, 1, 0),
                commontriggerlistList: r.Message.toObjectList(
                  t.getCommontriggerlistList(),
                  proto.webcast.data.CardTrigger.toObject,
                  e
                ),
                customtriggermapMap: (a = t.getCustomtriggermapMap())
                  ? a.toObject(e, void 0)
                  : [],
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.CardTriggerConfig.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CardTriggerConfig();
          return proto.webcast.data.CardTriggerConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CardTriggerConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readUint32();
                  e.setStrategy(a);
                  break;
                case 2:
                  a = new proto.webcast.data.CardTrigger();
                  t.readMessage(
                    a,
                    proto.webcast.data.CardTrigger.deserializeBinaryFromReader
                  ),
                    e.addCommontriggerlist(a);
                  break;
                case 3:
                  a = e.getCustomtriggermapMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readString,
                      r.BinaryReader.prototype.readString,
                      null,
                      "",
                      ""
                    );
                  });
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardTriggerConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardTriggerConfig.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getStrategy()) && t.writeUint32(1, a),
              (a = e.getCommontriggerlistList()).length > 0 &&
                t.writeRepeatedMessage(
                  2,
                  a,
                  proto.webcast.data.CardTrigger.serializeBinaryToWriter
                ),
              (a = e.getCustomtriggermapMap(!0)) &&
                a.getLength() > 0 &&
                a.serializeBinary(
                  3,
                  t,
                  r.BinaryWriter.prototype.writeString,
                  r.BinaryWriter.prototype.writeString
                );
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.getStrategy =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.setStrategy = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.CardTriggerConfig.prototype.getCommontriggerlistList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.CardTrigger,
              2
            );
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.setCommontriggerlistList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e);
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.addCommontriggerlist =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              2,
              e,
              proto.webcast.data.CardTrigger,
              t
            );
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.clearCommontriggerlistList =
          function () {
            return this.setCommontriggerlistList([]);
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.getCustomtriggermapMap =
          function (e) {
            return r.Message.getMapField(this, 3, e, null);
          }),
        (proto.webcast.data.CardTriggerConfig.prototype.clearCustomtriggermapMap =
          function () {
            return this.getCustomtriggermapMap().clear(), this;
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardTrigger.prototype.toObject = function (e) {
            return proto.webcast.data.CardTrigger.toObject(e, this);
          }),
          (proto.webcast.data.CardTrigger.toObject = function (e, t) {
            var a = {
              type: r.Message.getFieldWithDefault(t, 1, 0),
              value: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CardTrigger.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CardTrigger();
          return proto.webcast.data.CardTrigger.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CardTrigger.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readEnum();
                e.setType(a);
                break;
              case 2:
                a = t.readInt64String();
                e.setValue(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.CardTrigger.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardTrigger.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardTrigger.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getType()) && t.writeEnum(1, a),
            (a = e.getValue()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a);
        }),
        (proto.webcast.data.CardTrigger.TriggerType = {
          UNKNOWNTRIGGERTYPE: 0,
          COMBINETOOLBAR: -1,
          DELAYDISPLAY: 1,
        }),
        (proto.webcast.data.CardTrigger.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.CardTrigger.prototype.setType = function (e) {
          return r.Message.setProto3EnumField(this, 1, e);
        }),
        (proto.webcast.data.CardTrigger.prototype.getValue = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.CardTrigger.prototype.setValue = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardCondition.prototype.toObject = function (e) {
            return proto.webcast.data.CardCondition.toObject(e, this);
          }),
          (proto.webcast.data.CardCondition.toObject = function (e, t) {
            var a = {
              type: r.Message.getFieldWithDefault(t, 1, 0),
              value: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CardCondition.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CardCondition();
          return proto.webcast.data.CardCondition.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CardCondition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readEnum();
                  e.setType(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setValue(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CardCondition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardCondition.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardCondition.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getType()) && t.writeEnum(1, a),
            (a = e.getValue()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a);
        }),
        (proto.webcast.data.CardCondition.ConditionType = {
          UNKNOWNCONTAINERTYPE: 0,
          DISPLAYGAP: 1,
          MAXIMUMCLOSE: 2,
        }),
        (proto.webcast.data.CardCondition.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.CardCondition.prototype.setType = function (e) {
          return r.Message.setProto3EnumField(this, 1, e);
        }),
        (proto.webcast.data.CardCondition.prototype.getValue = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.CardCondition.prototype.setValue = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardPreDefeatStrategy.prototype.toObject =
            function (e) {
              return proto.webcast.data.CardPreDefeatStrategy.toObject(e, this);
            }),
          (proto.webcast.data.CardPreDefeatStrategy.toObject = function (e, t) {
            var a = {
              type: r.Message.getFieldWithDefault(t, 1, 0),
              value: r.Message.getFieldWithDefault(t, 2, "0"),
              extra: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CardPreDefeatStrategy.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CardPreDefeatStrategy();
          return proto.webcast.data.CardPreDefeatStrategy.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CardPreDefeatStrategy.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setType(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setValue(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setExtra(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardPreDefeatStrategy.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardPreDefeatStrategy.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getType()) && t.writeInt32(1, a),
              (a = e.getValue()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getExtra()).length > 0 && t.writeString(3, a);
          }),
        (proto.webcast.data.CardPreDefeatStrategy.StrategyType = {
          UNKNOWNTYPE: 0,
          INQUEUE: 1,
          IGNORE: 2,
        }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.getType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.setType = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.getValue =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.setValue =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.getExtra =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.CardPreDefeatStrategy.prototype.setExtra =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CardShowDefeatStrategy.prototype.toObject =
            function (e) {
              return proto.webcast.data.CardShowDefeatStrategy.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.CardShowDefeatStrategy.toObject = function (
            e,
            t
          ) {
            var a = {
              type: r.Message.getFieldWithDefault(t, 1, 0),
              value: r.Message.getFieldWithDefault(t, 2, "0"),
              extra: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CardShowDefeatStrategy.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.CardShowDefeatStrategy();
            return proto.webcast.data.CardShowDefeatStrategy.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.CardShowDefeatStrategy.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setType(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setValue(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setExtra(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CardShowDefeatStrategy.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CardShowDefeatStrategy.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getType()) && t.writeInt32(1, a),
              (a = e.getValue()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getExtra()).length > 0 && t.writeString(3, a);
          }),
        (proto.webcast.data.CardShowDefeatStrategy.StrategyType = {
          UNKNOWNTYPE: 0,
          INQUEUE: 1,
          IGNORE: 2,
        }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.getType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.setType =
          function (e) {
            return r.Message.setProto3IntField(this, 1, e);
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.getValue =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.setValue =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.getExtra =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.CardShowDefeatStrategy.prototype.setExtra =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        o.object.extend(t, proto.webcast.data);
    },
    82034: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(40355);
      o.object.extend(proto, s);
      var n = a(47857);
      o.object.extend(proto, n);
      var d = a(42245);
      o.object.extend(proto, d),
        o.exportSymbol("proto.webcast.data.ItemDetail", null, i),
        o.exportSymbol("proto.webcast.data.MarkDetail", null, i),
        o.exportSymbol("proto.webcast.data.PriceInfo", null, i),
        (proto.webcast.data.PriceInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.PriceInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.PriceInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.PriceInfo.displayName =
            "proto.webcast.data.PriceInfo"),
        (proto.webcast.data.ItemDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ItemDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ItemDetail.displayName =
            "proto.webcast.data.ItemDetail"),
        (proto.webcast.data.MarkDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MarkDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MarkDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MarkDetail.displayName =
            "proto.webcast.data.MarkDetail"),
        (proto.webcast.data.PriceInfo.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.PriceInfo.prototype.toObject = function (e) {
            return proto.webcast.data.PriceInfo.toObject(e, this);
          }),
          (proto.webcast.data.PriceInfo.toObject = function (e, t) {
            var a = {
              pricelistList: r.Message.toObjectList(
                t.getPricelistList(),
                s.StandardMoney.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.PriceInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.PriceInfo();
          return proto.webcast.data.PriceInfo.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.PriceInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            if (1 === t.getFieldNumber()) {
              var a = new s.StandardMoney();
              t.readMessage(a, s.StandardMoney.deserializeBinaryFromReader),
                e.addPricelist(a);
            } else t.skipField();
          }
          return e;
        }),
        (proto.webcast.data.PriceInfo.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.PriceInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.PriceInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a;
          (a = e.getPricelistList()).length > 0 &&
            t.writeRepeatedMessage(
              1,
              a,
              s.StandardMoney.serializeBinaryToWriter
            );
        }),
        (proto.webcast.data.PriceInfo.prototype.getPricelistList = function () {
          return r.Message.getRepeatedWrapperField(this, s.StandardMoney, 1);
        }),
        (proto.webcast.data.PriceInfo.prototype.setPricelistList = function (
          e
        ) {
          return r.Message.setRepeatedWrapperField(this, 1, e);
        }),
        (proto.webcast.data.PriceInfo.prototype.addPricelist = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.StandardMoney,
            t
          );
        }),
        (proto.webcast.data.PriceInfo.prototype.clearPricelistList =
          function () {
            return this.setPricelistList([]);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ItemDetail.prototype.toObject = function (e) {
            return proto.webcast.data.ItemDetail.toObject(e, this);
          }),
          (proto.webcast.data.ItemDetail.toObject = function (e, t) {
            var a,
              o = {
                ordertype: r.Message.getFieldWithDefault(t, 1, 0),
                itemtype: r.Message.getFieldWithDefault(t, 2, 0),
                itemid: r.Message.getFieldWithDefault(t, 3, ""),
                itemsku: r.Message.getFieldWithDefault(t, 4, ""),
                itemtitle: r.Message.getFieldWithDefault(t, 5, ""),
                itemiconuri: r.Message.getFieldWithDefault(t, 6, ""),
                description: r.Message.getFieldWithDefault(t, 7, ""),
                isforbidrefund: r.Message.getFieldWithDefault(t, 8, ""),
                refundstarttime: r.Message.getFieldWithDefault(t, 9, "0"),
                refundendtime: r.Message.getFieldWithDefault(t, 10, "0"),
                salerefundstarttime: r.Message.getFieldWithDefault(t, 11, "0"),
                salerefundendtime: r.Message.getFieldWithDefault(t, 12, "0"),
                validity: r.Message.getFieldWithDefault(t, 13, "0"),
                validstarttime: r.Message.getFieldWithDefault(t, 14, "0"),
                validendtime: r.Message.getFieldWithDefault(t, 15, "0"),
                status: r.Message.getFieldWithDefault(t, 16, 0),
                extra: r.Message.getFieldWithDefault(t, 17, ""),
                platformpricelistMap: (a = t.getPlatformpricelistMap())
                  ? a.toObject(e, proto.webcast.data.PriceInfo.toObject)
                  : [],
                markinfo:
                  (a = t.getMarkinfo()) &&
                  proto.webcast.data.MarkDetail.toObject(e, a),
                itemicon: (a = t.getItemicon()) && d.Image.toObject(e, a),
                itemsaletype: r.Message.getFieldWithDefault(t, 21, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ItemDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ItemDetail();
          return proto.webcast.data.ItemDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ItemDetail.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt32();
                e.setOrdertype(a);
                break;
              case 2:
                a = t.readInt32();
                e.setItemtype(a);
                break;
              case 3:
                a = t.readString();
                e.setItemid(a);
                break;
              case 4:
                a = t.readString();
                e.setItemsku(a);
                break;
              case 5:
                a = t.readString();
                e.setItemtitle(a);
                break;
              case 6:
                a = t.readString();
                e.setItemiconuri(a);
                break;
              case 7:
                a = t.readString();
                e.setDescription(a);
                break;
              case 8:
                a = t.readString();
                e.setIsforbidrefund(a);
                break;
              case 9:
                a = t.readInt64String();
                e.setRefundstarttime(a);
                break;
              case 10:
                a = t.readInt64String();
                e.setRefundendtime(a);
                break;
              case 11:
                a = t.readInt64String();
                e.setSalerefundstarttime(a);
                break;
              case 12:
                a = t.readInt64String();
                e.setSalerefundendtime(a);
                break;
              case 13:
                a = t.readInt64String();
                e.setValidity(a);
                break;
              case 14:
                a = t.readInt64String();
                e.setValidstarttime(a);
                break;
              case 15:
                a = t.readInt64String();
                e.setValidendtime(a);
                break;
              case 16:
                a = t.readInt32();
                e.setStatus(a);
                break;
              case 17:
                a = t.readString();
                e.setExtra(a);
                break;
              case 18:
                a = e.getPlatformpricelistMap();
                t.readMessage(a, function (e, t) {
                  r.Map.deserializeBinary(
                    e,
                    t,
                    r.BinaryReader.prototype.readInt32,
                    r.BinaryReader.prototype.readMessage,
                    proto.webcast.data.PriceInfo.deserializeBinaryFromReader,
                    0,
                    new proto.webcast.data.PriceInfo()
                  );
                });
                break;
              case 19:
                a = new proto.webcast.data.MarkDetail();
                t.readMessage(
                  a,
                  proto.webcast.data.MarkDetail.deserializeBinaryFromReader
                ),
                  e.setMarkinfo(a);
                break;
              case 20:
                a = new d.Image();
                t.readMessage(a, d.Image.deserializeBinaryFromReader),
                  e.setItemicon(a);
                break;
              case 21:
                a = t.readInt64String();
                e.setItemsaletype(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.ItemDetail.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.ItemDetail.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.ItemDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getOrdertype()) && t.writeInt32(1, a),
            0 !== (a = e.getItemtype()) && t.writeInt32(2, a),
            (a = e.getItemid()).length > 0 && t.writeString(3, a),
            (a = e.getItemsku()).length > 0 && t.writeString(4, a),
            (a = e.getItemtitle()).length > 0 && t.writeString(5, a),
            (a = e.getItemiconuri()).length > 0 && t.writeString(6, a),
            (a = e.getDescription()).length > 0 && t.writeString(7, a),
            (a = e.getIsforbidrefund()).length > 0 && t.writeString(8, a),
            (a = e.getRefundstarttime()),
            0 !== parseInt(a, 10) && t.writeInt64String(9, a),
            (a = e.getRefundendtime()),
            0 !== parseInt(a, 10) && t.writeInt64String(10, a),
            (a = e.getSalerefundstarttime()),
            0 !== parseInt(a, 10) && t.writeInt64String(11, a),
            (a = e.getSalerefundendtime()),
            0 !== parseInt(a, 10) && t.writeInt64String(12, a),
            (a = e.getValidity()),
            0 !== parseInt(a, 10) && t.writeInt64String(13, a),
            (a = e.getValidstarttime()),
            0 !== parseInt(a, 10) && t.writeInt64String(14, a),
            (a = e.getValidendtime()),
            0 !== parseInt(a, 10) && t.writeInt64String(15, a),
            0 !== (a = e.getStatus()) && t.writeInt32(16, a),
            (a = e.getExtra()).length > 0 && t.writeString(17, a),
            (a = e.getPlatformpricelistMap(!0)) &&
              a.getLength() > 0 &&
              a.serializeBinary(
                18,
                t,
                r.BinaryWriter.prototype.writeInt32,
                r.BinaryWriter.prototype.writeMessage,
                proto.webcast.data.PriceInfo.serializeBinaryToWriter
              ),
            null != (a = e.getMarkinfo()) &&
              t.writeMessage(
                19,
                a,
                proto.webcast.data.MarkDetail.serializeBinaryToWriter
              ),
            null != (a = e.getItemicon()) &&
              t.writeMessage(20, a, d.Image.serializeBinaryToWriter),
            (a = e.getItemsaletype()),
            0 !== parseInt(a, 10) && t.writeInt64String(21, a);
        }),
        (proto.webcast.data.ItemDetail.prototype.getOrdertype = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.ItemDetail.prototype.setOrdertype = function (e) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemtype = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemtype = function (e) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemid = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemid = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemsku = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemsku = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemtitle = function () {
          return r.Message.getFieldWithDefault(this, 5, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemtitle = function (e) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemiconuri = function () {
          return r.Message.getFieldWithDefault(this, 6, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemiconuri = function (e) {
          return r.Message.setProto3StringField(this, 6, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getDescription = function () {
          return r.Message.getFieldWithDefault(this, 7, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setDescription = function (e) {
          return r.Message.setProto3StringField(this, 7, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getIsforbidrefund =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "");
          }),
        (proto.webcast.data.ItemDetail.prototype.setIsforbidrefund = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 8, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getRefundstarttime =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "0");
          }),
        (proto.webcast.data.ItemDetail.prototype.setRefundstarttime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 9, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getRefundendtime =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.ItemDetail.prototype.setRefundendtime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 10, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getSalerefundstarttime =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "0");
          }),
        (proto.webcast.data.ItemDetail.prototype.setSalerefundstarttime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 11, e);
          }),
        (proto.webcast.data.ItemDetail.prototype.getSalerefundendtime =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "0");
          }),
        (proto.webcast.data.ItemDetail.prototype.setSalerefundendtime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 12, e);
          }),
        (proto.webcast.data.ItemDetail.prototype.getValidity = function () {
          return r.Message.getFieldWithDefault(this, 13, "0");
        }),
        (proto.webcast.data.ItemDetail.prototype.setValidity = function (e) {
          return r.Message.setProto3StringIntField(this, 13, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getValidstarttime =
          function () {
            return r.Message.getFieldWithDefault(this, 14, "0");
          }),
        (proto.webcast.data.ItemDetail.prototype.setValidstarttime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 14, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getValidendtime = function () {
          return r.Message.getFieldWithDefault(this, 15, "0");
        }),
        (proto.webcast.data.ItemDetail.prototype.setValidendtime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 15, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getStatus = function () {
          return r.Message.getFieldWithDefault(this, 16, 0);
        }),
        (proto.webcast.data.ItemDetail.prototype.setStatus = function (e) {
          return r.Message.setProto3IntField(this, 16, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getExtra = function () {
          return r.Message.getFieldWithDefault(this, 17, "");
        }),
        (proto.webcast.data.ItemDetail.prototype.setExtra = function (e) {
          return r.Message.setProto3StringField(this, 17, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.getPlatformpricelistMap =
          function (e) {
            return r.Message.getMapField(
              this,
              18,
              e,
              proto.webcast.data.PriceInfo
            );
          }),
        (proto.webcast.data.ItemDetail.prototype.clearPlatformpricelistMap =
          function () {
            return this.getPlatformpricelistMap().clear(), this;
          }),
        (proto.webcast.data.ItemDetail.prototype.getMarkinfo = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.MarkDetail,
            19
          );
        }),
        (proto.webcast.data.ItemDetail.prototype.setMarkinfo = function (e) {
          return r.Message.setWrapperField(this, 19, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.clearMarkinfo = function () {
          return this.setMarkinfo(void 0);
        }),
        (proto.webcast.data.ItemDetail.prototype.hasMarkinfo = function () {
          return null != r.Message.getField(this, 19);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemicon = function () {
          return r.Message.getWrapperField(this, d.Image, 20);
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemicon = function (e) {
          return r.Message.setWrapperField(this, 20, e);
        }),
        (proto.webcast.data.ItemDetail.prototype.clearItemicon = function () {
          return this.setItemicon(void 0);
        }),
        (proto.webcast.data.ItemDetail.prototype.hasItemicon = function () {
          return null != r.Message.getField(this, 20);
        }),
        (proto.webcast.data.ItemDetail.prototype.getItemsaletype = function () {
          return r.Message.getFieldWithDefault(this, 21, "0");
        }),
        (proto.webcast.data.ItemDetail.prototype.setItemsaletype = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 21, e);
        }),
        (proto.webcast.data.MarkDetail.repeatedFields_ = [1, 2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MarkDetail.prototype.toObject = function (e) {
            return proto.webcast.data.MarkDetail.toObject(e, this);
          }),
          (proto.webcast.data.MarkDetail.toObject = function (e, t) {
            var a,
              o = {
                itemMarkListV1List:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                itemMarkListV2List:
                  null == (a = r.Message.getRepeatedField(t, 2)) ? void 0 : a,
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MarkDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MarkDetail();
          return proto.webcast.data.MarkDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MarkDetail.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.addItemMarkListV1(a);
                break;
              case 2:
                a = t.readString();
                e.addItemMarkListV2(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.MarkDetail.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.MarkDetail.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.MarkDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getItemMarkListV1List()).length > 0 &&
            t.writeRepeatedString(1, a),
            (a = e.getItemMarkListV2List()).length > 0 &&
              t.writeRepeatedString(2, a);
        }),
        (proto.webcast.data.MarkDetail.prototype.getItemMarkListV1List =
          function () {
            return r.Message.getRepeatedField(this, 1);
          }),
        (proto.webcast.data.MarkDetail.prototype.setItemMarkListV1List =
          function (e) {
            return r.Message.setField(this, 1, e || []);
          }),
        (proto.webcast.data.MarkDetail.prototype.addItemMarkListV1 = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 1, e, t);
        }),
        (proto.webcast.data.MarkDetail.prototype.clearItemMarkListV1List =
          function () {
            return this.setItemMarkListV1List([]);
          }),
        (proto.webcast.data.MarkDetail.prototype.getItemMarkListV2List =
          function () {
            return r.Message.getRepeatedField(this, 2);
          }),
        (proto.webcast.data.MarkDetail.prototype.setItemMarkListV2List =
          function (e) {
            return r.Message.setField(this, 2, e || []);
          }),
        (proto.webcast.data.MarkDetail.prototype.addItemMarkListV2 = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 2, e, t);
        }),
        (proto.webcast.data.MarkDetail.prototype.clearItemMarkListV2List =
          function () {
            return this.setItemMarkListV2List([]);
          }),
        o.object.extend(t, proto.webcast.data);
    },
    4382: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      o.exportSymbol("proto.webcast.data.BizType", null, i),
        o.exportSymbol("proto.webcast.data.GameImage", null, i),
        o.exportSymbol("proto.webcast.data.GameUser", null, i),
        (proto.webcast.data.GameUser = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.GameUser, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GameUser.displayName =
            "proto.webcast.data.GameUser"),
        (proto.webcast.data.GameImage = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.GameImage.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.GameImage, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GameImage.displayName =
            "proto.webcast.data.GameImage"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GameUser.prototype.toObject = function (e) {
            return proto.webcast.data.GameUser.toObject(e, this);
          }),
          (proto.webcast.data.GameUser.toObject = function (e, t) {
            var a,
              o = {
                userId: r.Message.getFieldWithDefault(t, 1, ""),
                openId: r.Message.getFieldWithDefault(t, 2, ""),
                nickname: r.Message.getFieldWithDefault(t, 3, ""),
                avatarThumb:
                  (a = t.getAvatarThumb()) &&
                  proto.webcast.data.GameImage.toObject(e, a),
                secUserId: r.Message.getFieldWithDefault(t, 5, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GameUser.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.GameUser();
          return proto.webcast.data.GameUser.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.GameUser.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.setUserId(a);
                break;
              case 2:
                a = t.readString();
                e.setOpenId(a);
                break;
              case 3:
                a = t.readString();
                e.setNickname(a);
                break;
              case 4:
                a = new proto.webcast.data.GameImage();
                t.readMessage(
                  a,
                  proto.webcast.data.GameImage.deserializeBinaryFromReader
                ),
                  e.setAvatarThumb(a);
                break;
              case 5:
                a = t.readString();
                e.setSecUserId(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.GameUser.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.GameUser.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.GameUser.serializeBinaryToWriter = function (e, t) {
          var a = void 0;
          (a = e.getUserId()).length > 0 && t.writeString(1, a),
            (a = e.getOpenId()).length > 0 && t.writeString(2, a),
            (a = e.getNickname()).length > 0 && t.writeString(3, a),
            null != (a = e.getAvatarThumb()) &&
              t.writeMessage(
                4,
                a,
                proto.webcast.data.GameImage.serializeBinaryToWriter
              ),
            (a = e.getSecUserId()).length > 0 && t.writeString(5, a);
        }),
        (proto.webcast.data.GameUser.prototype.getUserId = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.GameUser.prototype.setUserId = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.GameUser.prototype.getOpenId = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.GameUser.prototype.setOpenId = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.GameUser.prototype.getNickname = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.GameUser.prototype.setNickname = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.GameUser.prototype.getAvatarThumb = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.GameImage,
            4
          );
        }),
        (proto.webcast.data.GameUser.prototype.setAvatarThumb = function (e) {
          return r.Message.setWrapperField(this, 4, e);
        }),
        (proto.webcast.data.GameUser.prototype.clearAvatarThumb = function () {
          return this.setAvatarThumb(void 0);
        }),
        (proto.webcast.data.GameUser.prototype.hasAvatarThumb = function () {
          return null != r.Message.getField(this, 4);
        }),
        (proto.webcast.data.GameUser.prototype.getSecUserId = function () {
          return r.Message.getFieldWithDefault(this, 5, "");
        }),
        (proto.webcast.data.GameUser.prototype.setSecUserId = function (e) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.GameImage.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GameImage.prototype.toObject = function (e) {
            return proto.webcast.data.GameImage.toObject(e, this);
          }),
          (proto.webcast.data.GameImage.toObject = function (e, t) {
            var a,
              o = {
                urlListList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                uri: r.Message.getFieldWithDefault(t, 2, ""),
                height: r.Message.getFieldWithDefault(t, 3, "0"),
                width: r.Message.getFieldWithDefault(t, 4, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GameImage.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.GameImage();
          return proto.webcast.data.GameImage.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.GameImage.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.addUrlList(a);
                break;
              case 2:
                a = t.readString();
                e.setUri(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setHeight(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setWidth(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.GameImage.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.GameImage.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.GameImage.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getUrlListList()).length > 0 && t.writeRepeatedString(1, a),
            (a = e.getUri()).length > 0 && t.writeString(2, a),
            (a = e.getHeight()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            (a = e.getWidth()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a);
        }),
        (proto.webcast.data.GameImage.prototype.getUrlListList = function () {
          return r.Message.getRepeatedField(this, 1);
        }),
        (proto.webcast.data.GameImage.prototype.setUrlListList = function (e) {
          return r.Message.setField(this, 1, e || []);
        }),
        (proto.webcast.data.GameImage.prototype.addUrlList = function (e, t) {
          return r.Message.addToRepeatedField(this, 1, e, t);
        }),
        (proto.webcast.data.GameImage.prototype.clearUrlListList = function () {
          return this.setUrlListList([]);
        }),
        (proto.webcast.data.GameImage.prototype.getUri = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.GameImage.prototype.setUri = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.GameImage.prototype.getHeight = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.GameImage.prototype.setHeight = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.GameImage.prototype.getWidth = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.GameImage.prototype.setWidth = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.BizType = { GAMECP: 0, STAR: 1 }),
        o.object.extend(t, proto.webcast.data);
    },
    91214: (e, t, a) => {
      var r = a(47865),
        o = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== o
            ? o
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      r.exportSymbol("proto.webcast.data.GameStageType", null, o),
        (proto.webcast.data.GameStageType = {
          GAMENONE: 0,
          GAMERESERVATION: 10,
          GAMETEST: 20,
          GAMEDOWNLOAD: 30,
        }),
        r.object.extend(t, proto.webcast.data);
    },
    43738: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(42245);
      o.object.extend(proto, s);
      var n = a(47857);
      o.object.extend(proto, n),
        o.exportSymbol("proto.webcast.data.BannerDetail", null, i),
        o.exportSymbol("proto.webcast.data.BannerFeedbackView", null, i),
        o.exportSymbol("proto.webcast.data.BannerView", null, i),
        o.exportSymbol("proto.webcast.data.BasicProps", null, i),
        o.exportSymbol("proto.webcast.data.CommonDetail", null, i),
        o.exportSymbol("proto.webcast.data.DiamondListBannerDetail", null, i),
        o.exportSymbol("proto.webcast.data.DynamicInfo", null, i),
        o.exportSymbol("proto.webcast.data.ElementListProps", null, i),
        o.exportSymbol("proto.webcast.data.FeedbackProps", null, i),
        o.exportSymbol("proto.webcast.data.FreqCtrlParams", null, i),
        o.exportSymbol("proto.webcast.data.FreqCtrlStrategy", null, i),
        o.exportSymbol("proto.webcast.data.GiftPanelEntranceDetail", null, i),
        o.exportSymbol("proto.webcast.data.GiftPanelTopDetail", null, i),
        o.exportSymbol("proto.webcast.data.ImageProps", null, i),
        o.exportSymbol("proto.webcast.data.LightInfo", null, i),
        o.exportSymbol("proto.webcast.data.MultiStageProgressBar", null, i),
        o.exportSymbol("proto.webcast.data.Position", null, i),
        o.exportSymbol("proto.webcast.data.ProConfProps", null, i),
        o.exportSymbol("proto.webcast.data.ProgressBar", null, i),
        o.exportSymbol("proto.webcast.data.ProgressBarStage", null, i),
        o.exportSymbol("proto.webcast.data.RefreshMechanism", null, i),
        o.exportSymbol("proto.webcast.data.RefreshParams", null, i),
        o.exportSymbol("proto.webcast.data.RichText", null, i),
        o.exportSymbol("proto.webcast.data.RichTextType", null, i),
        o.exportSymbol("proto.webcast.data.TaskProps", null, i),
        o.exportSymbol("proto.webcast.data.Time2Picture", null, i),
        o.exportSymbol("proto.webcast.data.TouchButton", null, i),
        o.exportSymbol("proto.webcast.data.TouchPosition", null, i),
        o.exportSymbol("proto.webcast.data.TouchPositionDetail", null, i),
        o.exportSymbol("proto.webcast.data.TouchPositionMeta", null, i),
        o.exportSymbol("proto.webcast.data.TouchPositions", null, i),
        o.exportSymbol("proto.webcast.data.TouchRewardStatus", null, i),
        o.exportSymbol("proto.webcast.data.TreasureDetail", null, i),
        o.exportSymbol(
          "proto.webcast.data.TreasureDetail.TriggerTiming",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.View", null, i),
        (proto.webcast.data.RichText = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.RichText, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.RichText.displayName =
            "proto.webcast.data.RichText"),
        (proto.webcast.data.ProgressBar = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ProgressBar, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ProgressBar.displayName =
            "proto.webcast.data.ProgressBar"),
        (proto.webcast.data.ProgressBarStage = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ProgressBarStage.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ProgressBarStage, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ProgressBarStage.displayName =
            "proto.webcast.data.ProgressBarStage"),
        (proto.webcast.data.MultiStageProgressBar = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MultiStageProgressBar.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MultiStageProgressBar, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MultiStageProgressBar.displayName =
            "proto.webcast.data.MultiStageProgressBar"),
        (proto.webcast.data.TouchButton = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.TouchButton.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.TouchButton, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TouchButton.displayName =
            "proto.webcast.data.TouchButton"),
        (proto.webcast.data.GiftPanelTopDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.GiftPanelTopDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.GiftPanelTopDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GiftPanelTopDetail.displayName =
            "proto.webcast.data.GiftPanelTopDetail"),
        (proto.webcast.data.DiamondListBannerDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.DiamondListBannerDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.DiamondListBannerDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.DiamondListBannerDetail.displayName =
            "proto.webcast.data.DiamondListBannerDetail"),
        (proto.webcast.data.CommonDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CommonDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.CommonDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CommonDetail.displayName =
            "proto.webcast.data.CommonDetail"),
        (proto.webcast.data.TreasureDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.TreasureDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TreasureDetail.displayName =
            "proto.webcast.data.TreasureDetail"),
        (proto.webcast.data.LightInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LightInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LightInfo.displayName =
            "proto.webcast.data.LightInfo"),
        (proto.webcast.data.DynamicInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.DynamicInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.DynamicInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.DynamicInfo.displayName =
            "proto.webcast.data.DynamicInfo"),
        (proto.webcast.data.GiftPanelEntranceDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.GiftPanelEntranceDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.GiftPanelEntranceDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GiftPanelEntranceDetail.displayName =
            "proto.webcast.data.GiftPanelEntranceDetail"),
        (proto.webcast.data.FreqCtrlParams = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.FreqCtrlParams, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.FreqCtrlParams.displayName =
            "proto.webcast.data.FreqCtrlParams"),
        (proto.webcast.data.RefreshParams = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.RefreshParams, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.RefreshParams.displayName =
            "proto.webcast.data.RefreshParams"),
        (proto.webcast.data.TouchPositionMeta = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.TouchPositionMeta.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.TouchPositionMeta, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TouchPositionMeta.displayName =
            "proto.webcast.data.TouchPositionMeta"),
        (proto.webcast.data.TouchPositionDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.TouchPositionDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TouchPositionDetail.displayName =
            "proto.webcast.data.TouchPositionDetail"),
        (proto.webcast.data.BannerDetail = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.BannerDetail.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.BannerDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BannerDetail.displayName =
            "proto.webcast.data.BannerDetail"),
        (proto.webcast.data.Time2Picture = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.Time2Picture, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.Time2Picture.displayName =
            "proto.webcast.data.Time2Picture"),
        (proto.webcast.data.View = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.View.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.View, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.View.displayName = "proto.webcast.data.View"),
        (proto.webcast.data.BannerFeedbackView = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.BannerFeedbackView, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BannerFeedbackView.displayName =
            "proto.webcast.data.BannerFeedbackView"),
        (proto.webcast.data.FeedbackProps = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.FeedbackProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.FeedbackProps.displayName =
            "proto.webcast.data.FeedbackProps"),
        (proto.webcast.data.BannerView = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.BannerView, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BannerView.displayName =
            "proto.webcast.data.BannerView"),
        (proto.webcast.data.ImageProps = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ImageProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ImageProps.displayName =
            "proto.webcast.data.ImageProps"),
        (proto.webcast.data.BasicProps = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.BasicProps.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.BasicProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BasicProps.displayName =
            "proto.webcast.data.BasicProps"),
        (proto.webcast.data.TaskProps = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.TaskProps.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.TaskProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TaskProps.displayName =
            "proto.webcast.data.TaskProps"),
        (proto.webcast.data.ElementListProps = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ElementListProps.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ElementListProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ElementListProps.displayName =
            "proto.webcast.data.ElementListProps"),
        (proto.webcast.data.ProConfProps = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ProConfProps, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ProConfProps.displayName =
            "proto.webcast.data.ProConfProps"),
        (proto.webcast.data.TouchPosition = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.TouchPosition, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TouchPosition.displayName =
            "proto.webcast.data.TouchPosition"),
        (proto.webcast.data.TouchPositions = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.TouchPositions.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.TouchPositions, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TouchPositions.displayName =
            "proto.webcast.data.TouchPositions"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.RichText.prototype.toObject = function (e) {
            return proto.webcast.data.RichText.toObject(e, this);
          }),
          (proto.webcast.data.RichText.toObject = function (e, t) {
            var a,
              o = {
                type: r.Message.getFieldWithDefault(t, 1, 0),
                text: r.Message.getFieldWithDefault(t, 2, ""),
                img: (a = t.getImg()) && s.Image.toObject(e, a),
                fontSize: r.Message.getFieldWithDefault(t, 4, "0"),
                fontColor: r.Message.getFieldWithDefault(t, 5, ""),
                weight: r.Message.getFieldWithDefault(t, 6, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.RichText.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.RichText();
          return proto.webcast.data.RichText.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.RichText.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readEnum();
                e.setType(a);
                break;
              case 2:
                a = t.readString();
                e.setText(a);
                break;
              case 3:
                a = new s.Image();
                t.readMessage(a, s.Image.deserializeBinaryFromReader),
                  e.setImg(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setFontSize(a);
                break;
              case 5:
                a = t.readString();
                e.setFontColor(a);
                break;
              case 6:
                a = t.readInt64String();
                e.setWeight(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.RichText.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.RichText.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.RichText.serializeBinaryToWriter = function (e, t) {
          var a = void 0;
          0 !== (a = e.getType()) && t.writeEnum(1, a),
            (a = e.getText()).length > 0 && t.writeString(2, a),
            null != (a = e.getImg()) &&
              t.writeMessage(3, a, s.Image.serializeBinaryToWriter),
            (a = e.getFontSize()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a),
            (a = e.getFontColor()).length > 0 && t.writeString(5, a),
            (a = e.getWeight()),
            0 !== parseInt(a, 10) && t.writeInt64String(6, a);
        }),
        (proto.webcast.data.RichText.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.RichText.prototype.setType = function (e) {
          return r.Message.setProto3EnumField(this, 1, e);
        }),
        (proto.webcast.data.RichText.prototype.getText = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.RichText.prototype.setText = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.RichText.prototype.getImg = function () {
          return r.Message.getWrapperField(this, s.Image, 3);
        }),
        (proto.webcast.data.RichText.prototype.setImg = function (e) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.RichText.prototype.clearImg = function () {
          return this.setImg(void 0);
        }),
        (proto.webcast.data.RichText.prototype.hasImg = function () {
          return null != r.Message.getField(this, 3);
        }),
        (proto.webcast.data.RichText.prototype.getFontSize = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.RichText.prototype.setFontSize = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.RichText.prototype.getFontColor = function () {
          return r.Message.getFieldWithDefault(this, 5, "");
        }),
        (proto.webcast.data.RichText.prototype.setFontColor = function (e) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.RichText.prototype.getWeight = function () {
          return r.Message.getFieldWithDefault(this, 6, "0");
        }),
        (proto.webcast.data.RichText.prototype.setWeight = function (e) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ProgressBar.prototype.toObject = function (e) {
            return proto.webcast.data.ProgressBar.toObject(e, this);
          }),
          (proto.webcast.data.ProgressBar.toObject = function (e, t) {
            var a = {
              currentValue: r.Message.getFieldWithDefault(t, 1, ""),
              targetValue: r.Message.getFieldWithDefault(t, 2, ""),
              progressRate: r.Message.getFieldWithDefault(t, 3, "0"),
              color: r.Message.getFieldWithDefault(t, 4, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ProgressBar.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ProgressBar();
          return proto.webcast.data.ProgressBar.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ProgressBar.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.setCurrentValue(a);
                break;
              case 2:
                a = t.readString();
                e.setTargetValue(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setProgressRate(a);
                break;
              case 4:
                a = t.readString();
                e.setColor(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.ProgressBar.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ProgressBar.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ProgressBar.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getCurrentValue()).length > 0 && t.writeString(1, a),
            (a = e.getTargetValue()).length > 0 && t.writeString(2, a),
            (a = e.getProgressRate()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            (a = e.getColor()).length > 0 && t.writeString(4, a);
        }),
        (proto.webcast.data.ProgressBar.prototype.getCurrentValue =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.ProgressBar.prototype.setCurrentValue = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.ProgressBar.prototype.getTargetValue = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.ProgressBar.prototype.setTargetValue = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.ProgressBar.prototype.getProgressRate =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.ProgressBar.prototype.setProgressRate = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.ProgressBar.prototype.getColor = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.ProgressBar.prototype.setColor = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.ProgressBarStage.repeatedFields_ = [2, 3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ProgressBarStage.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.ProgressBarStage.toObject(e, this);
          }),
          (proto.webcast.data.ProgressBarStage.toObject = function (e, t) {
            var a,
              o = {
                icon: (a = t.getIcon()) && s.Image.toObject(e, a),
                iconTextList: r.Message.toObjectList(
                  t.getIconTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                bottomTextList: r.Message.toObjectList(
                  t.getBottomTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                rewardStatus: r.Message.getFieldWithDefault(t, 4, 0),
                currentValue: r.Message.getFieldWithDefault(t, 5, "0"),
                targetValue: r.Message.getFieldWithDefault(t, 6, "0"),
                jumpSchema: r.Message.getFieldWithDefault(t, 7, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ProgressBarStage.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ProgressBarStage();
          return proto.webcast.data.ProgressBarStage.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ProgressBarStage.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setIcon(a);
                  break;
                case 2:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addIconText(a);
                  break;
                case 3:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addBottomText(a);
                  break;
                case 4:
                  a = t.readEnum();
                  e.setRewardStatus(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setCurrentValue(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setTargetValue(a);
                  break;
                case 7:
                  a = t.readString();
                  e.setJumpSchema(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ProgressBarStage.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ProgressBarStage.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ProgressBarStage.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getIcon()) &&
              t.writeMessage(1, a, s.Image.serializeBinaryToWriter),
              (a = e.getIconTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  2,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              (a = e.getBottomTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  3,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              0 !== (a = e.getRewardStatus()) && t.writeEnum(4, a),
              (a = e.getCurrentValue()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getTargetValue()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getJumpSchema()).length > 0 && t.writeString(7, a);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getIcon = function () {
          return r.Message.getWrapperField(this, s.Image, 1);
        }),
        (proto.webcast.data.ProgressBarStage.prototype.setIcon = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.ProgressBarStage.prototype.clearIcon = function () {
          return this.setIcon(void 0);
        }),
        (proto.webcast.data.ProgressBarStage.prototype.hasIcon = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.ProgressBarStage.prototype.getIconTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              2
            );
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setIconTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.addIconText = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.ProgressBarStage.prototype.clearIconTextList =
          function () {
            return this.setIconTextList([]);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getBottomTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              3
            );
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setBottomTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.addBottomText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              3,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.ProgressBarStage.prototype.clearBottomTextList =
          function () {
            return this.setBottomTextList([]);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getRewardStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setRewardStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 4, e);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getCurrentValue =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setCurrentValue =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getTargetValue =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setTargetValue =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.ProgressBarStage.prototype.getJumpSchema =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.ProgressBarStage.prototype.setJumpSchema =
          function (e) {
            return r.Message.setProto3StringField(this, 7, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.repeatedFields_ = [3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MultiStageProgressBar.prototype.toObject =
            function (e) {
              return proto.webcast.data.MultiStageProgressBar.toObject(e, this);
            }),
          (proto.webcast.data.MultiStageProgressBar.toObject = function (e, t) {
            var a,
              o = {
                progressColor: r.Message.getFieldWithDefault(t, 1, ""),
                progressBackgroundColor: r.Message.getFieldWithDefault(
                  t,
                  2,
                  ""
                ),
                stageListList: r.Message.toObjectList(
                  t.getStageListList(),
                  proto.webcast.data.ProgressBarStage.toObject,
                  e
                ),
                cardBackgroundColor: r.Message.getFieldWithDefault(t, 4, ""),
                cardBackgroundIcon:
                  (a = t.getCardBackgroundIcon()) && s.Image.toObject(e, a),
                completedStage: r.Message.getFieldWithDefault(t, 6, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MultiStageProgressBar.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MultiStageProgressBar();
          return proto.webcast.data.MultiStageProgressBar.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MultiStageProgressBar.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setProgressColor(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setProgressBackgroundColor(a);
                  break;
                case 3:
                  a = new proto.webcast.data.ProgressBarStage();
                  t.readMessage(
                    a,
                    proto.webcast.data.ProgressBarStage
                      .deserializeBinaryFromReader
                  ),
                    e.addStageList(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setCardBackgroundColor(a);
                  break;
                case 5:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setCardBackgroundIcon(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setCompletedStage(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MultiStageProgressBar.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MultiStageProgressBar.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getProgressColor()).length > 0 && t.writeString(1, a),
              (a = e.getProgressBackgroundColor()).length > 0 &&
                t.writeString(2, a),
              (a = e.getStageListList()).length > 0 &&
                t.writeRepeatedMessage(
                  3,
                  a,
                  proto.webcast.data.ProgressBarStage.serializeBinaryToWriter
                ),
              (a = e.getCardBackgroundColor()).length > 0 &&
                t.writeString(4, a),
              null != (a = e.getCardBackgroundIcon()) &&
                t.writeMessage(5, a, s.Image.serializeBinaryToWriter),
              (a = e.getCompletedStage()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getProgressColor =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setProgressColor =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getProgressBackgroundColor =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setProgressBackgroundColor =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getStageListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.ProgressBarStage,
              3
            );
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setStageListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.addStageList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              3,
              e,
              proto.webcast.data.ProgressBarStage,
              t
            );
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.clearStageListList =
          function () {
            return this.setStageListList([]);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getCardBackgroundColor =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setCardBackgroundColor =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getCardBackgroundIcon =
          function () {
            return r.Message.getWrapperField(this, s.Image, 5);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setCardBackgroundIcon =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.clearCardBackgroundIcon =
          function () {
            return this.setCardBackgroundIcon(void 0);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.hasCardBackgroundIcon =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.getCompletedStage =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.MultiStageProgressBar.prototype.setCompletedStage =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.TouchButton.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TouchButton.prototype.toObject = function (e) {
            return proto.webcast.data.TouchButton.toObject(e, this);
          }),
          (proto.webcast.data.TouchButton.toObject = function (e, t) {
            var a,
              o = {
                textList: r.Message.toObjectList(
                  t.getTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                bgImg: (a = t.getBgImg()) && s.Image.toObject(e, a),
                jumpUrl: r.Message.getFieldWithDefault(t, 3, ""),
                buttonType: r.Message.getFieldWithDefault(t, 4, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.TouchButton.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TouchButton();
          return proto.webcast.data.TouchButton.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TouchButton.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = new proto.webcast.data.RichText();
                t.readMessage(
                  a,
                  proto.webcast.data.RichText.deserializeBinaryFromReader
                ),
                  e.addText(a);
                break;
              case 2:
                a = new s.Image();
                t.readMessage(a, s.Image.deserializeBinaryFromReader),
                  e.setBgImg(a);
                break;
              case 3:
                a = t.readString();
                e.setJumpUrl(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setButtonType(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.TouchButton.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TouchButton.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TouchButton.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getTextList()).length > 0 &&
            t.writeRepeatedMessage(
              1,
              a,
              proto.webcast.data.RichText.serializeBinaryToWriter
            ),
            null != (a = e.getBgImg()) &&
              t.writeMessage(2, a, s.Image.serializeBinaryToWriter),
            (a = e.getJumpUrl()).length > 0 && t.writeString(3, a),
            (a = e.getButtonType()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a);
        }),
        (proto.webcast.data.TouchButton.prototype.getTextList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.webcast.data.RichText,
            1
          );
        }),
        (proto.webcast.data.TouchButton.prototype.setTextList = function (e) {
          return r.Message.setRepeatedWrapperField(this, 1, e);
        }),
        (proto.webcast.data.TouchButton.prototype.addText = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.TouchButton.prototype.clearTextList = function () {
          return this.setTextList([]);
        }),
        (proto.webcast.data.TouchButton.prototype.getBgImg = function () {
          return r.Message.getWrapperField(this, s.Image, 2);
        }),
        (proto.webcast.data.TouchButton.prototype.setBgImg = function (e) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.TouchButton.prototype.clearBgImg = function () {
          return this.setBgImg(void 0);
        }),
        (proto.webcast.data.TouchButton.prototype.hasBgImg = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.webcast.data.TouchButton.prototype.getJumpUrl = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.TouchButton.prototype.setJumpUrl = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.TouchButton.prototype.getButtonType = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.TouchButton.prototype.setButtonType = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.GiftPanelTopDetail.repeatedFields_ = [2, 3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GiftPanelTopDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.GiftPanelTopDetail.toObject(e, this);
            }),
          (proto.webcast.data.GiftPanelTopDetail.toObject = function (e, t) {
            var a,
              o = {
                icon: (a = t.getIcon()) && s.Image.toObject(e, a),
                mainTextList: r.Message.toObjectList(
                  t.getMainTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                deputyTextList: r.Message.toObjectList(
                  t.getDeputyTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                progressBar:
                  (a = t.getProgressBar()) &&
                  proto.webcast.data.ProgressBar.toObject(e, a),
                button:
                  (a = t.getButton()) &&
                  proto.webcast.data.TouchButton.toObject(e, a),
                bgImg: (a = t.getBgImg()) && s.Image.toObject(e, a),
                mainTextBgAttr: r.Message.getFieldWithDefault(t, 7, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GiftPanelTopDetail.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.GiftPanelTopDetail();
          return proto.webcast.data.GiftPanelTopDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.GiftPanelTopDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setIcon(a);
                  break;
                case 2:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addMainText(a);
                  break;
                case 3:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addDeputyText(a);
                  break;
                case 4:
                  a = new proto.webcast.data.ProgressBar();
                  t.readMessage(
                    a,
                    proto.webcast.data.ProgressBar.deserializeBinaryFromReader
                  ),
                    e.setProgressBar(a);
                  break;
                case 5:
                  a = new proto.webcast.data.TouchButton();
                  t.readMessage(
                    a,
                    proto.webcast.data.TouchButton.deserializeBinaryFromReader
                  ),
                    e.setButton(a);
                  break;
                case 6:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setBgImg(a);
                  break;
                case 7:
                  a = t.readString();
                  e.setMainTextBgAttr(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.GiftPanelTopDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getIcon()) &&
              t.writeMessage(1, a, s.Image.serializeBinaryToWriter),
              (a = e.getMainTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  2,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              (a = e.getDeputyTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  3,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              null != (a = e.getProgressBar()) &&
                t.writeMessage(
                  4,
                  a,
                  proto.webcast.data.ProgressBar.serializeBinaryToWriter
                ),
              null != (a = e.getButton()) &&
                t.writeMessage(
                  5,
                  a,
                  proto.webcast.data.TouchButton.serializeBinaryToWriter
                ),
              null != (a = e.getBgImg()) &&
                t.writeMessage(6, a, s.Image.serializeBinaryToWriter),
              (a = e.getMainTextBgAttr()).length > 0 && t.writeString(7, a);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getIcon = function () {
          return r.Message.getWrapperField(this, s.Image, 1);
        }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setIcon = function (
          e
        ) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearIcon =
          function () {
            return this.setIcon(void 0);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.hasIcon = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getMainTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              2
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setMainTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 2, e);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.addMainText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              2,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearMainTextList =
          function () {
            return this.setMainTextList([]);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getDeputyTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              3
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setDeputyTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.addDeputyText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              3,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearDeputyTextList =
          function () {
            return this.setDeputyTextList([]);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getProgressBar =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.ProgressBar,
              4
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setProgressBar =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearProgressBar =
          function () {
            return this.setProgressBar(void 0);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.hasProgressBar =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getButton =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.TouchButton,
              5
            );
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setButton = function (
          e
        ) {
          return r.Message.setWrapperField(this, 5, e);
        }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearButton =
          function () {
            return this.setButton(void 0);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.hasButton =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getBgImg =
          function () {
            return r.Message.getWrapperField(this, s.Image, 6);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setBgImg = function (
          e
        ) {
          return r.Message.setWrapperField(this, 6, e);
        }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.clearBgImg =
          function () {
            return this.setBgImg(void 0);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.hasBgImg =
          function () {
            return null != r.Message.getField(this, 6);
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.getMainTextBgAttr =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.GiftPanelTopDetail.prototype.setMainTextBgAttr =
          function (e) {
            return r.Message.setProto3StringField(this, 7, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.repeatedFields_ = [
          1, 3, 6,
        ]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.DiamondListBannerDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.DiamondListBannerDetail.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.DiamondListBannerDetail.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                mainTextList: r.Message.toObjectList(
                  t.getMainTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                mainTextButton:
                  (a = t.getMainTextButton()) &&
                  proto.webcast.data.TouchButton.toObject(e, a),
                deputyTextList: r.Message.toObjectList(
                  t.getDeputyTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                bgImg: (a = t.getBgImg()) && s.Image.toObject(e, a),
                progressBar:
                  (a = t.getProgressBar()) &&
                  proto.webcast.data.ProgressBar.toObject(e, a),
                upperRightTextList: r.Message.toObjectList(
                  t.getUpperRightTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.DiamondListBannerDetail.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.DiamondListBannerDetail();
            return proto.webcast.data.DiamondListBannerDetail.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addMainText(a);
                  break;
                case 2:
                  a = new proto.webcast.data.TouchButton();
                  t.readMessage(
                    a,
                    proto.webcast.data.TouchButton.deserializeBinaryFromReader
                  ),
                    e.setMainTextButton(a);
                  break;
                case 3:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addDeputyText(a);
                  break;
                case 4:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setBgImg(a);
                  break;
                case 5:
                  a = new proto.webcast.data.ProgressBar();
                  t.readMessage(
                    a,
                    proto.webcast.data.ProgressBar.deserializeBinaryFromReader
                  ),
                    e.setProgressBar(a);
                  break;
                case 6:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addUpperRightText(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.DiamondListBannerDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getMainTextList()).length > 0 &&
              t.writeRepeatedMessage(
                1,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
              null != (a = e.getMainTextButton()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.TouchButton.serializeBinaryToWriter
                ),
              (a = e.getDeputyTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  3,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              null != (a = e.getBgImg()) &&
                t.writeMessage(4, a, s.Image.serializeBinaryToWriter),
              null != (a = e.getProgressBar()) &&
                t.writeMessage(
                  5,
                  a,
                  proto.webcast.data.ProgressBar.serializeBinaryToWriter
                ),
              (a = e.getUpperRightTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  6,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getMainTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              1
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setMainTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.addMainText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              1,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearMainTextList =
          function () {
            return this.setMainTextList([]);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getMainTextButton =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.TouchButton,
              2
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setMainTextButton =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearMainTextButton =
          function () {
            return this.setMainTextButton(void 0);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.hasMainTextButton =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getDeputyTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              3
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setDeputyTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.addDeputyText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              3,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearDeputyTextList =
          function () {
            return this.setDeputyTextList([]);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getBgImg =
          function () {
            return r.Message.getWrapperField(this, s.Image, 4);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setBgImg =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearBgImg =
          function () {
            return this.setBgImg(void 0);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.hasBgImg =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getProgressBar =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.ProgressBar,
              5
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setProgressBar =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearProgressBar =
          function () {
            return this.setProgressBar(void 0);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.hasProgressBar =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.getUpperRightTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              6
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.setUpperRightTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e);
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.addUpperRightText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              6,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.DiamondListBannerDetail.prototype.clearUpperRightTextList =
          function () {
            return this.setUpperRightTextList([]);
          }),
        (proto.webcast.data.CommonDetail.repeatedFields_ = [2, 3, 5, 6]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CommonDetail.prototype.toObject = function (e) {
            return proto.webcast.data.CommonDetail.toObject(e, this);
          }),
          (proto.webcast.data.CommonDetail.toObject = function (e, t) {
            var a,
              o = {
                leftIcon: (a = t.getLeftIcon()) && s.Image.toObject(e, a),
                mainTextList: r.Message.toObjectList(
                  t.getMainTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                deputyTextList: r.Message.toObjectList(
                  t.getDeputyTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                rightButton:
                  (a = t.getRightButton()) &&
                  proto.webcast.data.TouchButton.toObject(e, a),
                upperLeftTextList: r.Message.toObjectList(
                  t.getUpperLeftTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                mainTextDescList: r.Message.toObjectList(
                  t.getMainTextDescList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                progressBar:
                  (a = t.getProgressBar()) &&
                  proto.webcast.data.ProgressBar.toObject(e, a),
                bgImg: (a = t.getBgImg()) && s.Image.toObject(e, a),
                multiStageProgressBar:
                  (a = t.getMultiStageProgressBar()) &&
                  proto.webcast.data.MultiStageProgressBar.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.CommonDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CommonDetail();
          return proto.webcast.data.CommonDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CommonDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setLeftIcon(a);
                  break;
                case 2:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addMainText(a);
                  break;
                case 3:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addDeputyText(a);
                  break;
                case 4:
                  a = new proto.webcast.data.TouchButton();
                  t.readMessage(
                    a,
                    proto.webcast.data.TouchButton.deserializeBinaryFromReader
                  ),
                    e.setRightButton(a);
                  break;
                case 5:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addUpperLeftText(a);
                  break;
                case 6:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addMainTextDesc(a);
                  break;
                case 255:
                  a = new proto.webcast.data.ProgressBar();
                  t.readMessage(
                    a,
                    proto.webcast.data.ProgressBar.deserializeBinaryFromReader
                  ),
                    e.setProgressBar(a);
                  break;
                case 256:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setBgImg(a);
                  break;
                case 257:
                  a = new proto.webcast.data.MultiStageProgressBar();
                  t.readMessage(
                    a,
                    proto.webcast.data.MultiStageProgressBar
                      .deserializeBinaryFromReader
                  ),
                    e.setMultiStageProgressBar(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CommonDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CommonDetail.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CommonDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getLeftIcon()) &&
            t.writeMessage(1, a, s.Image.serializeBinaryToWriter),
            (a = e.getMainTextList()).length > 0 &&
              t.writeRepeatedMessage(
                2,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
            (a = e.getDeputyTextList()).length > 0 &&
              t.writeRepeatedMessage(
                3,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
            null != (a = e.getRightButton()) &&
              t.writeMessage(
                4,
                a,
                proto.webcast.data.TouchButton.serializeBinaryToWriter
              ),
            (a = e.getUpperLeftTextList()).length > 0 &&
              t.writeRepeatedMessage(
                5,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
            (a = e.getMainTextDescList()).length > 0 &&
              t.writeRepeatedMessage(
                6,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
            null != (a = e.getProgressBar()) &&
              t.writeMessage(
                255,
                a,
                proto.webcast.data.ProgressBar.serializeBinaryToWriter
              ),
            null != (a = e.getBgImg()) &&
              t.writeMessage(256, a, s.Image.serializeBinaryToWriter),
            null != (a = e.getMultiStageProgressBar()) &&
              t.writeMessage(
                257,
                a,
                proto.webcast.data.MultiStageProgressBar.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.CommonDetail.prototype.getLeftIcon = function () {
          return r.Message.getWrapperField(this, s.Image, 1);
        }),
        (proto.webcast.data.CommonDetail.prototype.setLeftIcon = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.CommonDetail.prototype.clearLeftIcon = function () {
          return this.setLeftIcon(void 0);
        }),
        (proto.webcast.data.CommonDetail.prototype.hasLeftIcon = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.CommonDetail.prototype.getMainTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              2
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setMainTextList = function (
          e
        ) {
          return r.Message.setRepeatedWrapperField(this, 2, e);
        }),
        (proto.webcast.data.CommonDetail.prototype.addMainText = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.CommonDetail.prototype.clearMainTextList =
          function () {
            return this.setMainTextList([]);
          }),
        (proto.webcast.data.CommonDetail.prototype.getDeputyTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              3
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setDeputyTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.CommonDetail.prototype.addDeputyText = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            3,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.CommonDetail.prototype.clearDeputyTextList =
          function () {
            return this.setDeputyTextList([]);
          }),
        (proto.webcast.data.CommonDetail.prototype.getRightButton =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.TouchButton,
              4
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setRightButton = function (
          e
        ) {
          return r.Message.setWrapperField(this, 4, e);
        }),
        (proto.webcast.data.CommonDetail.prototype.clearRightButton =
          function () {
            return this.setRightButton(void 0);
          }),
        (proto.webcast.data.CommonDetail.prototype.hasRightButton =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.CommonDetail.prototype.getUpperLeftTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              5
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setUpperLeftTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e);
          }),
        (proto.webcast.data.CommonDetail.prototype.addUpperLeftText = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            5,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.CommonDetail.prototype.clearUpperLeftTextList =
          function () {
            return this.setUpperLeftTextList([]);
          }),
        (proto.webcast.data.CommonDetail.prototype.getMainTextDescList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              6
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setMainTextDescList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e);
          }),
        (proto.webcast.data.CommonDetail.prototype.addMainTextDesc = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            6,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.CommonDetail.prototype.clearMainTextDescList =
          function () {
            return this.setMainTextDescList([]);
          }),
        (proto.webcast.data.CommonDetail.prototype.getProgressBar =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.ProgressBar,
              255
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setProgressBar = function (
          e
        ) {
          return r.Message.setWrapperField(this, 255, e);
        }),
        (proto.webcast.data.CommonDetail.prototype.clearProgressBar =
          function () {
            return this.setProgressBar(void 0);
          }),
        (proto.webcast.data.CommonDetail.prototype.hasProgressBar =
          function () {
            return null != r.Message.getField(this, 255);
          }),
        (proto.webcast.data.CommonDetail.prototype.getBgImg = function () {
          return r.Message.getWrapperField(this, s.Image, 256);
        }),
        (proto.webcast.data.CommonDetail.prototype.setBgImg = function (e) {
          return r.Message.setWrapperField(this, 256, e);
        }),
        (proto.webcast.data.CommonDetail.prototype.clearBgImg = function () {
          return this.setBgImg(void 0);
        }),
        (proto.webcast.data.CommonDetail.prototype.hasBgImg = function () {
          return null != r.Message.getField(this, 256);
        }),
        (proto.webcast.data.CommonDetail.prototype.getMultiStageProgressBar =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.MultiStageProgressBar,
              257
            );
          }),
        (proto.webcast.data.CommonDetail.prototype.setMultiStageProgressBar =
          function (e) {
            return r.Message.setWrapperField(this, 257, e);
          }),
        (proto.webcast.data.CommonDetail.prototype.clearMultiStageProgressBar =
          function () {
            return this.setMultiStageProgressBar(void 0);
          }),
        (proto.webcast.data.CommonDetail.prototype.hasMultiStageProgressBar =
          function () {
            return null != r.Message.getField(this, 257);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TreasureDetail.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.TreasureDetail.toObject(e, this);
          }),
          (proto.webcast.data.TreasureDetail.toObject = function (e, t) {
            var a = {
              key: r.Message.getFieldWithDefault(t, 1, ""),
              content: r.Message.getFieldWithDefault(t, 2, ""),
              countDown: r.Message.getFieldWithDefault(t, 3, "0"),
              triggerTiming: r.Message.getFieldWithDefault(t, 4, 0),
              countDownKey: r.Message.getFieldWithDefault(t, 5, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.TreasureDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TreasureDetail();
          return proto.webcast.data.TreasureDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TreasureDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setKey(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setContent(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setCountDown(a);
                  break;
                case 4:
                  a = t.readEnum();
                  e.setTriggerTiming(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setCountDownKey(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.TreasureDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TreasureDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TreasureDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getKey()).length > 0 && t.writeString(1, a),
            (a = e.getContent()).length > 0 && t.writeString(2, a),
            (a = e.getCountDown()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            0 !== (a = e.getTriggerTiming()) && t.writeEnum(4, a),
            (a = e.getCountDownKey()).length > 0 && t.writeString(5, a);
        }),
        (proto.webcast.data.TreasureDetail.TriggerTiming = {
          DEFAULT: 0,
          ENTERROOM: 1,
          CLOSETASKPANEL: 2,
          FINISHTASK: 3,
          OPENGIFTPANEL: 4,
          OPENFANSCLUBPANEL: 5,
          PUSHMESSAGE: 6,
        }),
        (proto.webcast.data.TreasureDetail.prototype.getKey = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.TreasureDetail.prototype.setKey = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.TreasureDetail.prototype.getContent = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.TreasureDetail.prototype.setContent = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.TreasureDetail.prototype.getCountDown =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.TreasureDetail.prototype.setCountDown = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.TreasureDetail.prototype.getTriggerTiming =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.webcast.data.TreasureDetail.prototype.setTriggerTiming =
          function (e) {
            return r.Message.setProto3EnumField(this, 4, e);
          }),
        (proto.webcast.data.TreasureDetail.prototype.getCountDownKey =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.TreasureDetail.prototype.setCountDownKey =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LightInfo.prototype.toObject = function (e) {
            return proto.webcast.data.LightInfo.toObject(e, this);
          }),
          (proto.webcast.data.LightInfo.toObject = function (e, t) {
            var a,
              o = {
                isOn: r.Message.getBooleanFieldWithDefault(t, 1, !1),
                image: (a = t.getImage()) && s.Image.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LightInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LightInfo();
          return proto.webcast.data.LightInfo.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.LightInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readBool();
                e.setIsOn(a);
                break;
              case 2:
                a = new s.Image();
                t.readMessage(a, s.Image.deserializeBinaryFromReader),
                  e.setImage(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.LightInfo.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.LightInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.LightInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getIsOn()) && t.writeBool(1, a),
            null != (a = e.getImage()) &&
              t.writeMessage(2, a, s.Image.serializeBinaryToWriter);
        }),
        (proto.webcast.data.LightInfo.prototype.getIsOn = function () {
          return r.Message.getBooleanFieldWithDefault(this, 1, !1);
        }),
        (proto.webcast.data.LightInfo.prototype.setIsOn = function (e) {
          return r.Message.setProto3BooleanField(this, 1, e);
        }),
        (proto.webcast.data.LightInfo.prototype.getImage = function () {
          return r.Message.getWrapperField(this, s.Image, 2);
        }),
        (proto.webcast.data.LightInfo.prototype.setImage = function (e) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.LightInfo.prototype.clearImage = function () {
          return this.setImage(void 0);
        }),
        (proto.webcast.data.LightInfo.prototype.hasImage = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.webcast.data.DynamicInfo.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.DynamicInfo.prototype.toObject = function (e) {
            return proto.webcast.data.DynamicInfo.toObject(e, this);
          }),
          (proto.webcast.data.DynamicInfo.toObject = function (e, t) {
            var a = {
              showAfterTimeMs: r.Message.getFieldWithDefault(t, 1, 0),
              textList: r.Message.toObjectList(
                t.getTextList(),
                proto.webcast.data.RichText.toObject,
                e
              ),
              durationMs: r.Message.getFieldWithDefault(t, 3, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.DynamicInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.DynamicInfo();
          return proto.webcast.data.DynamicInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.DynamicInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt64();
                e.setShowAfterTimeMs(a);
                break;
              case 2:
                a = new proto.webcast.data.RichText();
                t.readMessage(
                  a,
                  proto.webcast.data.RichText.deserializeBinaryFromReader
                ),
                  e.addText(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setDurationMs(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.DynamicInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.DynamicInfo.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.DynamicInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getShowAfterTimeMs()) && t.writeInt64(1, a),
            (a = e.getTextList()).length > 0 &&
              t.writeRepeatedMessage(
                2,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
            (a = e.getDurationMs()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a);
        }),
        (proto.webcast.data.DynamicInfo.prototype.getShowAfterTimeMs =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.DynamicInfo.prototype.setShowAfterTimeMs =
          function (e) {
            return r.Message.setProto3IntField(this, 1, e);
          }),
        (proto.webcast.data.DynamicInfo.prototype.getTextList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.webcast.data.RichText,
            2
          );
        }),
        (proto.webcast.data.DynamicInfo.prototype.setTextList = function (e) {
          return r.Message.setRepeatedWrapperField(this, 2, e);
        }),
        (proto.webcast.data.DynamicInfo.prototype.addText = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            e,
            proto.webcast.data.RichText,
            t
          );
        }),
        (proto.webcast.data.DynamicInfo.prototype.clearTextList = function () {
          return this.setTextList([]);
        }),
        (proto.webcast.data.DynamicInfo.prototype.getDurationMs = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.DynamicInfo.prototype.setDurationMs = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.GiftPanelEntranceDetail.repeatedFields_ = [
          1, 3, 6,
        ]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GiftPanelEntranceDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.GiftPanelEntranceDetail.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.GiftPanelEntranceDetail.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                panelDetailList: r.Message.toObjectList(
                  t.getPanelDetailList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                panelUrl: r.Message.getFieldWithDefault(t, 2, ""),
                bubbleTextList: r.Message.toObjectList(
                  t.getBubbleTextList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                bubbleBackgroundImg:
                  (a = t.getBubbleBackgroundImg()) && s.Image.toObject(e, a),
                bubbleUrl: r.Message.getFieldWithDefault(t, 5, ""),
                awardTipsList: r.Message.toObjectList(
                  t.getAwardTipsList(),
                  proto.webcast.data.RichText.toObject,
                  e
                ),
                lightInfo:
                  (a = t.getLightInfo()) &&
                  proto.webcast.data.LightInfo.toObject(e, a),
                dynamicInfo:
                  (a = t.getDynamicInfo()) &&
                  proto.webcast.data.DynamicInfo.toObject(e, a),
                extraMap: (a = t.getExtraMap()) ? a.toObject(e, void 0) : [],
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GiftPanelEntranceDetail.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.GiftPanelEntranceDetail();
            return proto.webcast.data.GiftPanelEntranceDetail.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addPanelDetail(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setPanelUrl(a);
                  break;
                case 3:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addBubbleText(a);
                  break;
                case 4:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setBubbleBackgroundImg(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setBubbleUrl(a);
                  break;
                case 6:
                  a = new proto.webcast.data.RichText();
                  t.readMessage(
                    a,
                    proto.webcast.data.RichText.deserializeBinaryFromReader
                  ),
                    e.addAwardTips(a);
                  break;
                case 7:
                  a = new proto.webcast.data.LightInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.LightInfo.deserializeBinaryFromReader
                  ),
                    e.setLightInfo(a);
                  break;
                case 8:
                  a = new proto.webcast.data.DynamicInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.DynamicInfo.deserializeBinaryFromReader
                  ),
                    e.setDynamicInfo(a);
                  break;
                case 9:
                  a = e.getExtraMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readString,
                      r.BinaryReader.prototype.readString,
                      null,
                      "",
                      ""
                    );
                  });
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.GiftPanelEntranceDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getPanelDetailList()).length > 0 &&
              t.writeRepeatedMessage(
                1,
                a,
                proto.webcast.data.RichText.serializeBinaryToWriter
              ),
              (a = e.getPanelUrl()).length > 0 && t.writeString(2, a),
              (a = e.getBubbleTextList()).length > 0 &&
                t.writeRepeatedMessage(
                  3,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              null != (a = e.getBubbleBackgroundImg()) &&
                t.writeMessage(4, a, s.Image.serializeBinaryToWriter),
              (a = e.getBubbleUrl()).length > 0 && t.writeString(5, a),
              (a = e.getAwardTipsList()).length > 0 &&
                t.writeRepeatedMessage(
                  6,
                  a,
                  proto.webcast.data.RichText.serializeBinaryToWriter
                ),
              null != (a = e.getLightInfo()) &&
                t.writeMessage(
                  7,
                  a,
                  proto.webcast.data.LightInfo.serializeBinaryToWriter
                ),
              null != (a = e.getDynamicInfo()) &&
                t.writeMessage(
                  8,
                  a,
                  proto.webcast.data.DynamicInfo.serializeBinaryToWriter
                ),
              (a = e.getExtraMap(!0)) &&
                a.getLength() > 0 &&
                a.serializeBinary(
                  9,
                  t,
                  r.BinaryWriter.prototype.writeString,
                  r.BinaryWriter.prototype.writeString
                );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getPanelDetailList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              1
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setPanelDetailList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.addPanelDetail =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              1,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearPanelDetailList =
          function () {
            return this.setPanelDetailList([]);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getPanelUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setPanelUrl =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getBubbleTextList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              3
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setBubbleTextList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.addBubbleText =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              3,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearBubbleTextList =
          function () {
            return this.setBubbleTextList([]);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getBubbleBackgroundImg =
          function () {
            return r.Message.getWrapperField(this, s.Image, 4);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setBubbleBackgroundImg =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearBubbleBackgroundImg =
          function () {
            return this.setBubbleBackgroundImg(void 0);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.hasBubbleBackgroundImg =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getBubbleUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setBubbleUrl =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getAwardTipsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RichText,
              6
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setAwardTipsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 6, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.addAwardTips =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              6,
              e,
              proto.webcast.data.RichText,
              t
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearAwardTipsList =
          function () {
            return this.setAwardTipsList([]);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getLightInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LightInfo,
              7
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setLightInfo =
          function (e) {
            return r.Message.setWrapperField(this, 7, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearLightInfo =
          function () {
            return this.setLightInfo(void 0);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.hasLightInfo =
          function () {
            return null != r.Message.getField(this, 7);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getDynamicInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.DynamicInfo,
              8
            );
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.setDynamicInfo =
          function (e) {
            return r.Message.setWrapperField(this, 8, e);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearDynamicInfo =
          function () {
            return this.setDynamicInfo(void 0);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.hasDynamicInfo =
          function () {
            return null != r.Message.getField(this, 8);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.getExtraMap =
          function (e) {
            return r.Message.getMapField(this, 9, e, null);
          }),
        (proto.webcast.data.GiftPanelEntranceDetail.prototype.clearExtraMap =
          function () {
            return this.getExtraMap().clear(), this;
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.FreqCtrlParams.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.FreqCtrlParams.toObject(e, this);
          }),
          (proto.webcast.data.FreqCtrlParams.toObject = function (e, t) {
            var a = {
              strategy: r.Message.getFieldWithDefault(t, 1, 0),
              limit: r.Message.getFieldWithDefault(t, 2, "0"),
              key: r.Message.getFieldWithDefault(t, 3, ""),
              cur: r.Message.getFieldWithDefault(t, 4, "0"),
              duration: r.Message.getFieldWithDefault(t, 5, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.FreqCtrlParams.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.FreqCtrlParams();
          return proto.webcast.data.FreqCtrlParams.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.FreqCtrlParams.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readEnum();
                  e.setStrategy(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setLimit(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setKey(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setCur(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setDuration(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.FreqCtrlParams.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.FreqCtrlParams.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.FreqCtrlParams.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getStrategy()) && t.writeEnum(1, a),
            (a = e.getLimit()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getKey()).length > 0 && t.writeString(3, a),
            (a = e.getCur()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a),
            (a = e.getDuration()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.getStrategy = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.setStrategy = function (
          e
        ) {
          return r.Message.setProto3EnumField(this, 1, e);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.getLimit = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.setLimit = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.getKey = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.setKey = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.getCur = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.setCur = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.getDuration = function () {
          return r.Message.getFieldWithDefault(this, 5, "0");
        }),
        (proto.webcast.data.FreqCtrlParams.prototype.setDuration = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.RefreshParams.prototype.toObject = function (e) {
            return proto.webcast.data.RefreshParams.toObject(e, this);
          }),
          (proto.webcast.data.RefreshParams.toObject = function (e, t) {
            var a = {
              refreshMechanism: r.Message.getFieldWithDefault(t, 1, 0),
              pollingInterval: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.RefreshParams.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.RefreshParams();
          return proto.webcast.data.RefreshParams.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.RefreshParams.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readEnum();
                  e.setRefreshMechanism(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setPollingInterval(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.RefreshParams.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.RefreshParams.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.RefreshParams.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getRefreshMechanism()) && t.writeEnum(1, a),
            (a = e.getPollingInterval()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a);
        }),
        (proto.webcast.data.RefreshParams.prototype.getRefreshMechanism =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.RefreshParams.prototype.setRefreshMechanism =
          function (e) {
            return r.Message.setProto3EnumField(this, 1, e);
          }),
        (proto.webcast.data.RefreshParams.prototype.getPollingInterval =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.RefreshParams.prototype.setPollingInterval =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.TouchPositionMeta.repeatedFields_ = [5, 7]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TouchPositionMeta.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.TouchPositionMeta.toObject(e, this);
          }),
          (proto.webcast.data.TouchPositionMeta.toObject = function (e, t) {
            var a = {
              id: r.Message.getFieldWithDefault(t, 1, "0"),
              metaId: r.Message.getFieldWithDefault(t, 2, "0"),
              position: r.Message.getFieldWithDefault(t, 3, 0),
              template: r.Message.getFieldWithDefault(t, 4, "0"),
              freqCtrlParamsListList: r.Message.toObjectList(
                t.getFreqCtrlParamsListList(),
                proto.webcast.data.FreqCtrlParams.toObject,
                e
              ),
              duration: r.Message.getFieldWithDefault(t, 6, "0"),
              refreshParamsListList: r.Message.toObjectList(
                t.getRefreshParamsListList(),
                proto.webcast.data.RefreshParams.toObject,
                e
              ),
              priority: r.Message.getFieldWithDefault(t, 8, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.TouchPositionMeta.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TouchPositionMeta();
          return proto.webcast.data.TouchPositionMeta.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TouchPositionMeta.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setMetaId(a);
                  break;
                case 3:
                  a = t.readEnum();
                  e.setPosition(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setTemplate(a);
                  break;
                case 5:
                  a = new proto.webcast.data.FreqCtrlParams();
                  t.readMessage(
                    a,
                    proto.webcast.data.FreqCtrlParams
                      .deserializeBinaryFromReader
                  ),
                    e.addFreqCtrlParamsList(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setDuration(a);
                  break;
                case 7:
                  a = new proto.webcast.data.RefreshParams();
                  t.readMessage(
                    a,
                    proto.webcast.data.RefreshParams.deserializeBinaryFromReader
                  ),
                    e.addRefreshParamsList(a);
                  break;
                case 8:
                  a = t.readInt64String();
                  e.setPriority(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TouchPositionMeta.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TouchPositionMeta.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getMetaId()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              0 !== (a = e.getPosition()) && t.writeEnum(3, a),
              (a = e.getTemplate()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getFreqCtrlParamsListList()).length > 0 &&
                t.writeRepeatedMessage(
                  5,
                  a,
                  proto.webcast.data.FreqCtrlParams.serializeBinaryToWriter
                ),
              (a = e.getDuration()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getRefreshParamsListList()).length > 0 &&
                t.writeRepeatedMessage(
                  7,
                  a,
                  proto.webcast.data.RefreshParams.serializeBinaryToWriter
                ),
              (a = e.getPriority()),
              0 !== parseInt(a, 10) && t.writeInt64String(8, a);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.getId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.setId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.getMetaId =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setMetaId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.getPosition =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setPosition = function (
          e
        ) {
          return r.Message.setProto3EnumField(this, 3, e);
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.getTemplate =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setTemplate = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.getFreqCtrlParamsListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.FreqCtrlParams,
              5
            );
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setFreqCtrlParamsListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.addFreqCtrlParamsList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              5,
              e,
              proto.webcast.data.FreqCtrlParams,
              t
            );
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.clearFreqCtrlParamsListList =
          function () {
            return this.setFreqCtrlParamsListList([]);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.getDuration =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setDuration = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        (proto.webcast.data.TouchPositionMeta.prototype.getRefreshParamsListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RefreshParams,
              7
            );
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setRefreshParamsListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 7, e);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.addRefreshParamsList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              7,
              e,
              proto.webcast.data.RefreshParams,
              t
            );
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.clearRefreshParamsListList =
          function () {
            return this.setRefreshParamsListList([]);
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.getPriority =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "0");
          }),
        (proto.webcast.data.TouchPositionMeta.prototype.setPriority = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 8, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TouchPositionDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.TouchPositionDetail.toObject(e, this);
            }),
          (proto.webcast.data.TouchPositionDetail.toObject = function (e, t) {
            var a,
              r = {
                giftPanelTopDetail:
                  (a = t.getGiftPanelTopDetail()) &&
                  proto.webcast.data.GiftPanelTopDetail.toObject(e, a),
                diamondListBannerDetail:
                  (a = t.getDiamondListBannerDetail()) &&
                  proto.webcast.data.DiamondListBannerDetail.toObject(e, a),
                commonDetail:
                  (a = t.getCommonDetail()) &&
                  proto.webcast.data.CommonDetail.toObject(e, a),
                bannerDetail:
                  (a = t.getBannerDetail()) &&
                  proto.webcast.data.BannerDetail.toObject(e, a),
                giftPanelEntranceDetail:
                  (a = t.getGiftPanelEntranceDetail()) &&
                  proto.webcast.data.GiftPanelEntranceDetail.toObject(e, a),
              };
            return e && (r.$jspbMessageInstance = t), r;
          })),
        (proto.webcast.data.TouchPositionDetail.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TouchPositionDetail();
          return proto.webcast.data.TouchPositionDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TouchPositionDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.GiftPanelTopDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.GiftPanelTopDetail
                      .deserializeBinaryFromReader
                  ),
                    e.setGiftPanelTopDetail(a);
                  break;
                case 2:
                  a = new proto.webcast.data.DiamondListBannerDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.DiamondListBannerDetail
                      .deserializeBinaryFromReader
                  ),
                    e.setDiamondListBannerDetail(a);
                  break;
                case 3:
                  a = new proto.webcast.data.CommonDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.CommonDetail.deserializeBinaryFromReader
                  ),
                    e.setCommonDetail(a);
                  break;
                case 4:
                  a = new proto.webcast.data.BannerDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.BannerDetail.deserializeBinaryFromReader
                  ),
                    e.setBannerDetail(a);
                  break;
                case 5:
                  a = new proto.webcast.data.GiftPanelEntranceDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.GiftPanelEntranceDetail
                      .deserializeBinaryFromReader
                  ),
                    e.setGiftPanelEntranceDetail(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TouchPositionDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TouchPositionDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getGiftPanelTopDetail()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.GiftPanelTopDetail.serializeBinaryToWriter
              ),
              null != (a = e.getDiamondListBannerDetail()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.DiamondListBannerDetail
                    .serializeBinaryToWriter
                ),
              null != (a = e.getCommonDetail()) &&
                t.writeMessage(
                  3,
                  a,
                  proto.webcast.data.CommonDetail.serializeBinaryToWriter
                ),
              null != (a = e.getBannerDetail()) &&
                t.writeMessage(
                  4,
                  a,
                  proto.webcast.data.BannerDetail.serializeBinaryToWriter
                ),
              null != (a = e.getGiftPanelEntranceDetail()) &&
                t.writeMessage(
                  5,
                  a,
                  proto.webcast.data.GiftPanelEntranceDetail
                    .serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.getGiftPanelTopDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.GiftPanelTopDetail,
              1
            );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.setGiftPanelTopDetail =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.clearGiftPanelTopDetail =
          function () {
            return this.setGiftPanelTopDetail(void 0);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.hasGiftPanelTopDetail =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.getDiamondListBannerDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.DiamondListBannerDetail,
              2
            );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.setDiamondListBannerDetail =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.clearDiamondListBannerDetail =
          function () {
            return this.setDiamondListBannerDetail(void 0);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.hasDiamondListBannerDetail =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.getCommonDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CommonDetail,
              3
            );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.setCommonDetail =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.clearCommonDetail =
          function () {
            return this.setCommonDetail(void 0);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.hasCommonDetail =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.getBannerDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.BannerDetail,
              4
            );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.setBannerDetail =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.clearBannerDetail =
          function () {
            return this.setBannerDetail(void 0);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.hasBannerDetail =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.getGiftPanelEntranceDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.GiftPanelEntranceDetail,
              5
            );
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.setGiftPanelEntranceDetail =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.clearGiftPanelEntranceDetail =
          function () {
            return this.setGiftPanelEntranceDetail(void 0);
          }),
        (proto.webcast.data.TouchPositionDetail.prototype.hasGiftPanelEntranceDetail =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.BannerDetail.repeatedFields_ = [3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BannerDetail.prototype.toObject = function (e) {
            return proto.webcast.data.BannerDetail.toObject(e, this);
          }),
          (proto.webcast.data.BannerDetail.toObject = function (e, t) {
            var a,
              o = {
                role: r.Message.getFieldWithDefault(t, 1, ""),
                role2viewsMap: (a = t.getRole2viewsMap())
                  ? a.toObject(e, proto.webcast.data.View.toObject)
                  : [],
                time2pictureList: r.Message.toObjectList(
                  t.getTime2pictureList(),
                  proto.webcast.data.Time2Picture.toObject,
                  e
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BannerDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BannerDetail();
          return proto.webcast.data.BannerDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BannerDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setRole(a);
                  break;
                case 2:
                  a = e.getRole2viewsMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readString,
                      r.BinaryReader.prototype.readMessage,
                      proto.webcast.data.View.deserializeBinaryFromReader,
                      "",
                      new proto.webcast.data.View()
                    );
                  });
                  break;
                case 3:
                  a = new proto.webcast.data.Time2Picture();
                  t.readMessage(
                    a,
                    proto.webcast.data.Time2Picture.deserializeBinaryFromReader
                  ),
                    e.addTime2picture(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.BannerDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.BannerDetail.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.BannerDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getRole()).length > 0 && t.writeString(1, a),
            (a = e.getRole2viewsMap(!0)) &&
              a.getLength() > 0 &&
              a.serializeBinary(
                2,
                t,
                r.BinaryWriter.prototype.writeString,
                r.BinaryWriter.prototype.writeMessage,
                proto.webcast.data.View.serializeBinaryToWriter
              ),
            (a = e.getTime2pictureList()).length > 0 &&
              t.writeRepeatedMessage(
                3,
                a,
                proto.webcast.data.Time2Picture.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.BannerDetail.prototype.getRole = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.BannerDetail.prototype.setRole = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.BannerDetail.prototype.getRole2viewsMap = function (
          e
        ) {
          return r.Message.getMapField(this, 2, e, proto.webcast.data.View);
        }),
        (proto.webcast.data.BannerDetail.prototype.clearRole2viewsMap =
          function () {
            return this.getRole2viewsMap().clear(), this;
          }),
        (proto.webcast.data.BannerDetail.prototype.getTime2pictureList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.Time2Picture,
              3
            );
          }),
        (proto.webcast.data.BannerDetail.prototype.setTime2pictureList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 3, e);
          }),
        (proto.webcast.data.BannerDetail.prototype.addTime2picture = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            3,
            e,
            proto.webcast.data.Time2Picture,
            t
          );
        }),
        (proto.webcast.data.BannerDetail.prototype.clearTime2pictureList =
          function () {
            return this.setTime2pictureList([]);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.Time2Picture.prototype.toObject = function (e) {
            return proto.webcast.data.Time2Picture.toObject(e, this);
          }),
          (proto.webcast.data.Time2Picture.toObject = function (e, t) {
            var a = {
              startTime: r.Message.getFieldWithDefault(t, 1, "0"),
              endTime: r.Message.getFieldWithDefault(t, 2, "0"),
              pictureUrl: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.Time2Picture.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.Time2Picture();
          return proto.webcast.data.Time2Picture.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.Time2Picture.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setStartTime(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setEndTime(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setPictureUrl(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.Time2Picture.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.Time2Picture.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.Time2Picture.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getStartTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getEndTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getPictureUrl()).length > 0 && t.writeString(3, a);
        }),
        (proto.webcast.data.Time2Picture.prototype.getStartTime = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.Time2Picture.prototype.setStartTime = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.Time2Picture.prototype.getEndTime = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.Time2Picture.prototype.setEndTime = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.Time2Picture.prototype.getPictureUrl = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.Time2Picture.prototype.setPictureUrl = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.View.repeatedFields_ = [1, 2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.View.prototype.toObject = function (e) {
            return proto.webcast.data.View.toObject(e, this);
          }),
          (proto.webcast.data.View.toObject = function (e, t) {
            var a = {
              bannersList: r.Message.toObjectList(
                t.getBannersList(),
                proto.webcast.data.BannerView.toObject,
                e
              ),
              feedbacksList: r.Message.toObjectList(
                t.getFeedbacksList(),
                proto.webcast.data.BannerFeedbackView.toObject,
                e
              ),
              expireTime: r.Message.getFieldWithDefault(t, 3, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.View.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.View();
          return proto.webcast.data.View.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.View.deserializeBinaryFromReader = function (e, t) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = new proto.webcast.data.BannerView();
                t.readMessage(
                  a,
                  proto.webcast.data.BannerView.deserializeBinaryFromReader
                ),
                  e.addBanners(a);
                break;
              case 2:
                a = new proto.webcast.data.BannerFeedbackView();
                t.readMessage(
                  a,
                  proto.webcast.data.BannerFeedbackView
                    .deserializeBinaryFromReader
                ),
                  e.addFeedbacks(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setExpireTime(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.View.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.View.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.View.serializeBinaryToWriter = function (e, t) {
          var a = void 0;
          (a = e.getBannersList()).length > 0 &&
            t.writeRepeatedMessage(
              1,
              a,
              proto.webcast.data.BannerView.serializeBinaryToWriter
            ),
            (a = e.getFeedbacksList()).length > 0 &&
              t.writeRepeatedMessage(
                2,
                a,
                proto.webcast.data.BannerFeedbackView.serializeBinaryToWriter
              ),
            (a = e.getExpireTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a);
        }),
        (proto.webcast.data.View.prototype.getBannersList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.webcast.data.BannerView,
            1
          );
        }),
        (proto.webcast.data.View.prototype.setBannersList = function (e) {
          return r.Message.setRepeatedWrapperField(this, 1, e);
        }),
        (proto.webcast.data.View.prototype.addBanners = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.BannerView,
            t
          );
        }),
        (proto.webcast.data.View.prototype.clearBannersList = function () {
          return this.setBannersList([]);
        }),
        (proto.webcast.data.View.prototype.getFeedbacksList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.webcast.data.BannerFeedbackView,
            2
          );
        }),
        (proto.webcast.data.View.prototype.setFeedbacksList = function (e) {
          return r.Message.setRepeatedWrapperField(this, 2, e);
        }),
        (proto.webcast.data.View.prototype.addFeedbacks = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            e,
            proto.webcast.data.BannerFeedbackView,
            t
          );
        }),
        (proto.webcast.data.View.prototype.clearFeedbacksList = function () {
          return this.setFeedbacksList([]);
        }),
        (proto.webcast.data.View.prototype.getExpireTime = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.View.prototype.setExpireTime = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BannerFeedbackView.prototype.toObject =
            function (e) {
              return proto.webcast.data.BannerFeedbackView.toObject(e, this);
            }),
          (proto.webcast.data.BannerFeedbackView.toObject = function (e, t) {
            var a,
              o = {
                component: r.Message.getFieldWithDefault(t, 1, ""),
                schemaUrl: r.Message.getFieldWithDefault(t, 2, ""),
                isKeepLast: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                uniqueId: r.Message.getFieldWithDefault(t, 4, ""),
                feedbackProps:
                  (a = t.getFeedbackProps()) &&
                  proto.webcast.data.FeedbackProps.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BannerFeedbackView.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BannerFeedbackView();
          return proto.webcast.data.BannerFeedbackView.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BannerFeedbackView.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setComponent(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setSchemaUrl(a);
                  break;
                case 3:
                  a = t.readBool();
                  e.setIsKeepLast(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setUniqueId(a);
                  break;
                case 100:
                  a = new proto.webcast.data.FeedbackProps();
                  t.readMessage(
                    a,
                    proto.webcast.data.FeedbackProps.deserializeBinaryFromReader
                  ),
                    e.setFeedbackProps(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.BannerFeedbackView.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.BannerFeedbackView.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getComponent()).length > 0 && t.writeString(1, a),
              (a = e.getSchemaUrl()).length > 0 && t.writeString(2, a),
              (a = e.getIsKeepLast()) && t.writeBool(3, a),
              (a = e.getUniqueId()).length > 0 && t.writeString(4, a),
              null != (a = e.getFeedbackProps()) &&
                t.writeMessage(
                  100,
                  a,
                  proto.webcast.data.FeedbackProps.serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.getComponent =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.setComponent =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.getSchemaUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.setSchemaUrl =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.getIsKeepLast =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.setIsKeepLast =
          function (e) {
            return r.Message.setProto3BooleanField(this, 3, e);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.getUniqueId =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.setUniqueId =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.getFeedbackProps =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.FeedbackProps,
              100
            );
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.setFeedbackProps =
          function (e) {
            return r.Message.setWrapperField(this, 100, e);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.clearFeedbackProps =
          function () {
            return this.setFeedbackProps(void 0);
          }),
        (proto.webcast.data.BannerFeedbackView.prototype.hasFeedbackProps =
          function () {
            return null != r.Message.getField(this, 100);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.FeedbackProps.prototype.toObject = function (e) {
            return proto.webcast.data.FeedbackProps.toObject(e, this);
          }),
          (proto.webcast.data.FeedbackProps.toObject = function (e, t) {
            var a = {
              feedbackImage: r.Message.getFieldWithDefault(t, 1, ""),
              height: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.FeedbackProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.FeedbackProps();
          return proto.webcast.data.FeedbackProps.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.FeedbackProps.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setFeedbackImage(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setHeight(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.FeedbackProps.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.FeedbackProps.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.FeedbackProps.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getFeedbackImage()).length > 0 && t.writeString(1, a),
            (a = e.getHeight()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a);
        }),
        (proto.webcast.data.FeedbackProps.prototype.getFeedbackImage =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.FeedbackProps.prototype.setFeedbackImage =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.FeedbackProps.prototype.getHeight = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.FeedbackProps.prototype.setHeight = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BannerView.prototype.toObject = function (e) {
            return proto.webcast.data.BannerView.toObject(e, this);
          }),
          (proto.webcast.data.BannerView.toObject = function (e, t) {
            var a,
              o = {
                component: r.Message.getFieldWithDefault(t, 1, ""),
                schemaUrl: r.Message.getFieldWithDefault(t, 2, ""),
                isKeepLast: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                subBannerId: r.Message.getFieldWithDefault(t, 4, "0"),
                taskProps:
                  (a = t.getTaskProps()) &&
                  proto.webcast.data.TaskProps.toObject(e, a),
                imageProps:
                  (a = t.getImageProps()) &&
                  proto.webcast.data.ImageProps.toObject(e, a),
                basicProps:
                  (a = t.getBasicProps()) &&
                  proto.webcast.data.BasicProps.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BannerView.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BannerView();
          return proto.webcast.data.BannerView.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BannerView.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.setComponent(a);
                break;
              case 2:
                a = t.readString();
                e.setSchemaUrl(a);
                break;
              case 3:
                a = t.readBool();
                e.setIsKeepLast(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setSubBannerId(a);
                break;
              case 100:
                a = new proto.webcast.data.TaskProps();
                t.readMessage(
                  a,
                  proto.webcast.data.TaskProps.deserializeBinaryFromReader
                ),
                  e.setTaskProps(a);
                break;
              case 101:
                a = new proto.webcast.data.ImageProps();
                t.readMessage(
                  a,
                  proto.webcast.data.ImageProps.deserializeBinaryFromReader
                ),
                  e.setImageProps(a);
                break;
              case 102:
                a = new proto.webcast.data.BasicProps();
                t.readMessage(
                  a,
                  proto.webcast.data.BasicProps.deserializeBinaryFromReader
                ),
                  e.setBasicProps(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.BannerView.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.BannerView.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.BannerView.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getComponent()).length > 0 && t.writeString(1, a),
            (a = e.getSchemaUrl()).length > 0 && t.writeString(2, a),
            (a = e.getIsKeepLast()) && t.writeBool(3, a),
            (a = e.getSubBannerId()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a),
            null != (a = e.getTaskProps()) &&
              t.writeMessage(
                100,
                a,
                proto.webcast.data.TaskProps.serializeBinaryToWriter
              ),
            null != (a = e.getImageProps()) &&
              t.writeMessage(
                101,
                a,
                proto.webcast.data.ImageProps.serializeBinaryToWriter
              ),
            null != (a = e.getBasicProps()) &&
              t.writeMessage(
                102,
                a,
                proto.webcast.data.BasicProps.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.BannerView.prototype.getComponent = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.BannerView.prototype.setComponent = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.BannerView.prototype.getSchemaUrl = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.BannerView.prototype.setSchemaUrl = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.BannerView.prototype.getIsKeepLast = function () {
          return r.Message.getBooleanFieldWithDefault(this, 3, !1);
        }),
        (proto.webcast.data.BannerView.prototype.setIsKeepLast = function (e) {
          return r.Message.setProto3BooleanField(this, 3, e);
        }),
        (proto.webcast.data.BannerView.prototype.getSubBannerId = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.BannerView.prototype.setSubBannerId = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.BannerView.prototype.getTaskProps = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.TaskProps,
            100
          );
        }),
        (proto.webcast.data.BannerView.prototype.setTaskProps = function (e) {
          return r.Message.setWrapperField(this, 100, e);
        }),
        (proto.webcast.data.BannerView.prototype.clearTaskProps = function () {
          return this.setTaskProps(void 0);
        }),
        (proto.webcast.data.BannerView.prototype.hasTaskProps = function () {
          return null != r.Message.getField(this, 100);
        }),
        (proto.webcast.data.BannerView.prototype.getImageProps = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.ImageProps,
            101
          );
        }),
        (proto.webcast.data.BannerView.prototype.setImageProps = function (e) {
          return r.Message.setWrapperField(this, 101, e);
        }),
        (proto.webcast.data.BannerView.prototype.clearImageProps = function () {
          return this.setImageProps(void 0);
        }),
        (proto.webcast.data.BannerView.prototype.hasImageProps = function () {
          return null != r.Message.getField(this, 101);
        }),
        (proto.webcast.data.BannerView.prototype.getBasicProps = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.BasicProps,
            102
          );
        }),
        (proto.webcast.data.BannerView.prototype.setBasicProps = function (e) {
          return r.Message.setWrapperField(this, 102, e);
        }),
        (proto.webcast.data.BannerView.prototype.clearBasicProps = function () {
          return this.setBasicProps(void 0);
        }),
        (proto.webcast.data.BannerView.prototype.hasBasicProps = function () {
          return null != r.Message.getField(this, 102);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ImageProps.prototype.toObject = function (e) {
            return proto.webcast.data.ImageProps.toObject(e, this);
          }),
          (proto.webcast.data.ImageProps.toObject = function (e, t) {
            var a = {
              src: r.Message.getFieldWithDefault(t, 1, ""),
              hideEar: r.Message.getBooleanFieldWithDefault(t, 2, !1),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ImageProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ImageProps();
          return proto.webcast.data.ImageProps.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ImageProps.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.setSrc(a);
                break;
              case 2:
                a = t.readBool();
                e.setHideEar(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.ImageProps.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.ImageProps.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.ImageProps.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getSrc()).length > 0 && t.writeString(1, a),
            (a = e.getHideEar()) && t.writeBool(2, a);
        }),
        (proto.webcast.data.ImageProps.prototype.getSrc = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.ImageProps.prototype.setSrc = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.ImageProps.prototype.getHideEar = function () {
          return r.Message.getBooleanFieldWithDefault(this, 2, !1);
        }),
        (proto.webcast.data.ImageProps.prototype.setHideEar = function (e) {
          return r.Message.setProto3BooleanField(this, 2, e);
        }),
        (proto.webcast.data.BasicProps.repeatedFields_ = [1, 2, 3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BasicProps.prototype.toObject = function (e) {
            return proto.webcast.data.BasicProps.toObject(e, this);
          }),
          (proto.webcast.data.BasicProps.toObject = function (e, t) {
            var a,
              o = {
                titleList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                descList:
                  null == (a = r.Message.getRepeatedField(t, 2)) ? void 0 : a,
                iconSrcList:
                  null == (a = r.Message.getRepeatedField(t, 3)) ? void 0 : a,
                duration: r.Message.getFieldWithDefault(t, 4, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BasicProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BasicProps();
          return proto.webcast.data.BasicProps.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BasicProps.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.addTitle(a);
                break;
              case 2:
                a = t.readString();
                e.addDesc(a);
                break;
              case 3:
                a = t.readString();
                e.addIconSrc(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setDuration(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.BasicProps.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.BasicProps.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.BasicProps.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getTitleList()).length > 0 && t.writeRepeatedString(1, a),
            (a = e.getDescList()).length > 0 && t.writeRepeatedString(2, a),
            (a = e.getIconSrcList()).length > 0 && t.writeRepeatedString(3, a),
            (a = e.getDuration()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a);
        }),
        (proto.webcast.data.BasicProps.prototype.getTitleList = function () {
          return r.Message.getRepeatedField(this, 1);
        }),
        (proto.webcast.data.BasicProps.prototype.setTitleList = function (e) {
          return r.Message.setField(this, 1, e || []);
        }),
        (proto.webcast.data.BasicProps.prototype.addTitle = function (e, t) {
          return r.Message.addToRepeatedField(this, 1, e, t);
        }),
        (proto.webcast.data.BasicProps.prototype.clearTitleList = function () {
          return this.setTitleList([]);
        }),
        (proto.webcast.data.BasicProps.prototype.getDescList = function () {
          return r.Message.getRepeatedField(this, 2);
        }),
        (proto.webcast.data.BasicProps.prototype.setDescList = function (e) {
          return r.Message.setField(this, 2, e || []);
        }),
        (proto.webcast.data.BasicProps.prototype.addDesc = function (e, t) {
          return r.Message.addToRepeatedField(this, 2, e, t);
        }),
        (proto.webcast.data.BasicProps.prototype.clearDescList = function () {
          return this.setDescList([]);
        }),
        (proto.webcast.data.BasicProps.prototype.getIconSrcList = function () {
          return r.Message.getRepeatedField(this, 3);
        }),
        (proto.webcast.data.BasicProps.prototype.setIconSrcList = function (e) {
          return r.Message.setField(this, 3, e || []);
        }),
        (proto.webcast.data.BasicProps.prototype.addIconSrc = function (e, t) {
          return r.Message.addToRepeatedField(this, 3, e, t);
        }),
        (proto.webcast.data.BasicProps.prototype.clearIconSrcList =
          function () {
            return this.setIconSrcList([]);
          }),
        (proto.webcast.data.BasicProps.prototype.getDuration = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.BasicProps.prototype.setDuration = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.TaskProps.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TaskProps.prototype.toObject = function (e) {
            return proto.webcast.data.TaskProps.toObject(e, this);
          }),
          (proto.webcast.data.TaskProps.toObject = function (e, t) {
            var a = {
              elementlistPropsList: r.Message.toObjectList(
                t.getElementlistPropsList(),
                proto.webcast.data.ElementListProps.toObject,
                e
              ),
              className: r.Message.getFieldWithDefault(t, 2, ""),
              currentBgColor: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.TaskProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TaskProps();
          return proto.webcast.data.TaskProps.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.TaskProps.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = new proto.webcast.data.ElementListProps();
                t.readMessage(
                  a,
                  proto.webcast.data.ElementListProps
                    .deserializeBinaryFromReader
                ),
                  e.addElementlistProps(a);
                break;
              case 2:
                a = t.readString();
                e.setClassName(a);
                break;
              case 3:
                a = t.readString();
                e.setCurrentBgColor(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.TaskProps.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.TaskProps.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.TaskProps.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getElementlistPropsList()).length > 0 &&
            t.writeRepeatedMessage(
              1,
              a,
              proto.webcast.data.ElementListProps.serializeBinaryToWriter
            ),
            (a = e.getClassName()).length > 0 && t.writeString(2, a),
            (a = e.getCurrentBgColor()).length > 0 && t.writeString(3, a);
        }),
        (proto.webcast.data.TaskProps.prototype.getElementlistPropsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.ElementListProps,
              1
            );
          }),
        (proto.webcast.data.TaskProps.prototype.setElementlistPropsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.TaskProps.prototype.addElementlistProps = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.ElementListProps,
            t
          );
        }),
        (proto.webcast.data.TaskProps.prototype.clearElementlistPropsList =
          function () {
            return this.setElementlistPropsList([]);
          }),
        (proto.webcast.data.TaskProps.prototype.getClassName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.TaskProps.prototype.setClassName = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.TaskProps.prototype.getCurrentBgColor =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.TaskProps.prototype.setCurrentBgColor = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.ElementListProps.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ElementListProps.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.ElementListProps.toObject(e, this);
          }),
          (proto.webcast.data.ElementListProps.toObject = function (e, t) {
            var a,
              o = {
                conditionTextList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                proConf:
                  (a = t.getProConf()) &&
                  proto.webcast.data.ProConfProps.toObject(e, a),
                levelText: r.Message.getFieldWithDefault(t, 3, ""),
                awardIcon: r.Message.getFieldWithDefault(t, 4, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ElementListProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ElementListProps();
          return proto.webcast.data.ElementListProps.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ElementListProps.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.addConditionText(a);
                  break;
                case 2:
                  a = new proto.webcast.data.ProConfProps();
                  t.readMessage(
                    a,
                    proto.webcast.data.ProConfProps.deserializeBinaryFromReader
                  ),
                    e.setProConf(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setLevelText(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setAwardIcon(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ElementListProps.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ElementListProps.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ElementListProps.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getConditionTextList()).length > 0 &&
              t.writeRepeatedString(1, a),
              null != (a = e.getProConf()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.ProConfProps.serializeBinaryToWriter
                ),
              (a = e.getLevelText()).length > 0 && t.writeString(3, a),
              (a = e.getAwardIcon()).length > 0 && t.writeString(4, a);
          }),
        (proto.webcast.data.ElementListProps.prototype.getConditionTextList =
          function () {
            return r.Message.getRepeatedField(this, 1);
          }),
        (proto.webcast.data.ElementListProps.prototype.setConditionTextList =
          function (e) {
            return r.Message.setField(this, 1, e || []);
          }),
        (proto.webcast.data.ElementListProps.prototype.addConditionText =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 1, e, t);
          }),
        (proto.webcast.data.ElementListProps.prototype.clearConditionTextList =
          function () {
            return this.setConditionTextList([]);
          }),
        (proto.webcast.data.ElementListProps.prototype.getProConf =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.ProConfProps,
              2
            );
          }),
        (proto.webcast.data.ElementListProps.prototype.setProConf = function (
          e
        ) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.ElementListProps.prototype.clearProConf =
          function () {
            return this.setProConf(void 0);
          }),
        (proto.webcast.data.ElementListProps.prototype.hasProConf =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.ElementListProps.prototype.getLevelText =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.ElementListProps.prototype.setLevelText = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.ElementListProps.prototype.getAwardIcon =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.ElementListProps.prototype.setAwardIcon = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ProConfProps.prototype.toObject = function (e) {
            return proto.webcast.data.ProConfProps.toObject(e, this);
          }),
          (proto.webcast.data.ProConfProps.toObject = function (e, t) {
            var a = {
              current: r.Message.getFieldWithDefault(t, 1, "0"),
              target: r.Message.getFieldWithDefault(t, 2, "0"),
              unitText: r.Message.getFieldWithDefault(t, 3, ""),
              showFloat: r.Message.getBooleanFieldWithDefault(t, 4, !1),
              formatFixed: r.Message.getFieldWithDefault(t, 5, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ProConfProps.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ProConfProps();
          return proto.webcast.data.ProConfProps.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ProConfProps.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setCurrent(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setTarget(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setUnitText(a);
                  break;
                case 4:
                  a = t.readBool();
                  e.setShowFloat(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setFormatFixed(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ProConfProps.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ProConfProps.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ProConfProps.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getCurrent()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getTarget()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getUnitText()).length > 0 && t.writeString(3, a),
            (a = e.getShowFloat()) && t.writeBool(4, a),
            (a = e.getFormatFixed()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a);
        }),
        (proto.webcast.data.ProConfProps.prototype.getCurrent = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.ProConfProps.prototype.setCurrent = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.ProConfProps.prototype.getTarget = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.ProConfProps.prototype.setTarget = function (e) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.ProConfProps.prototype.getUnitText = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.ProConfProps.prototype.setUnitText = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.ProConfProps.prototype.getShowFloat = function () {
          return r.Message.getBooleanFieldWithDefault(this, 4, !1);
        }),
        (proto.webcast.data.ProConfProps.prototype.setShowFloat = function (e) {
          return r.Message.setProto3BooleanField(this, 4, e);
        }),
        (proto.webcast.data.ProConfProps.prototype.getFormatFixed =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.ProConfProps.prototype.setFormatFixed = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TouchPosition.prototype.toObject = function (e) {
            return proto.webcast.data.TouchPosition.toObject(e, this);
          }),
          (proto.webcast.data.TouchPosition.toObject = function (e, t) {
            var a,
              r = {
                meta:
                  (a = t.getMeta()) &&
                  proto.webcast.data.TouchPositionMeta.toObject(e, a),
                detail:
                  (a = t.getDetail()) &&
                  proto.webcast.data.TouchPositionDetail.toObject(e, a),
                bizExtraMap: (a = t.getBizExtraMap())
                  ? a.toObject(e, void 0)
                  : [],
              };
            return e && (r.$jspbMessageInstance = t), r;
          })),
        (proto.webcast.data.TouchPosition.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TouchPosition();
          return proto.webcast.data.TouchPosition.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TouchPosition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.TouchPositionMeta();
                  t.readMessage(
                    a,
                    proto.webcast.data.TouchPositionMeta
                      .deserializeBinaryFromReader
                  ),
                    e.setMeta(a);
                  break;
                case 2:
                  a = new proto.webcast.data.TouchPositionDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.TouchPositionDetail
                      .deserializeBinaryFromReader
                  ),
                    e.setDetail(a);
                  break;
                case 3:
                  a = e.getBizExtraMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readString,
                      r.BinaryReader.prototype.readString,
                      null,
                      "",
                      ""
                    );
                  });
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.TouchPosition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TouchPosition.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TouchPosition.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getMeta()) &&
            t.writeMessage(
              1,
              a,
              proto.webcast.data.TouchPositionMeta.serializeBinaryToWriter
            ),
            null != (a = e.getDetail()) &&
              t.writeMessage(
                2,
                a,
                proto.webcast.data.TouchPositionDetail.serializeBinaryToWriter
              ),
            (a = e.getBizExtraMap(!0)) &&
              a.getLength() > 0 &&
              a.serializeBinary(
                3,
                t,
                r.BinaryWriter.prototype.writeString,
                r.BinaryWriter.prototype.writeString
              );
        }),
        (proto.webcast.data.TouchPosition.prototype.getMeta = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.TouchPositionMeta,
            1
          );
        }),
        (proto.webcast.data.TouchPosition.prototype.setMeta = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.TouchPosition.prototype.clearMeta = function () {
          return this.setMeta(void 0);
        }),
        (proto.webcast.data.TouchPosition.prototype.hasMeta = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.TouchPosition.prototype.getDetail = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.TouchPositionDetail,
            2
          );
        }),
        (proto.webcast.data.TouchPosition.prototype.setDetail = function (e) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.TouchPosition.prototype.clearDetail = function () {
          return this.setDetail(void 0);
        }),
        (proto.webcast.data.TouchPosition.prototype.hasDetail = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.webcast.data.TouchPosition.prototype.getBizExtraMap = function (
          e
        ) {
          return r.Message.getMapField(this, 3, e, null);
        }),
        (proto.webcast.data.TouchPosition.prototype.clearBizExtraMap =
          function () {
            return this.getBizExtraMap().clear(), this;
          }),
        (proto.webcast.data.TouchPositions.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TouchPositions.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.TouchPositions.toObject(e, this);
          }),
          (proto.webcast.data.TouchPositions.toObject = function (e, t) {
            var a = {
              dataList: r.Message.toObjectList(
                t.getDataList(),
                proto.webcast.data.TouchPosition.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.TouchPositions.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TouchPositions();
          return proto.webcast.data.TouchPositions.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TouchPositions.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a = new proto.webcast.data.TouchPosition();
                t.readMessage(
                  a,
                  proto.webcast.data.TouchPosition.deserializeBinaryFromReader
                ),
                  e.addData(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.TouchPositions.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TouchPositions.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TouchPositions.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a;
          (a = e.getDataList()).length > 0 &&
            t.writeRepeatedMessage(
              1,
              a,
              proto.webcast.data.TouchPosition.serializeBinaryToWriter
            );
        }),
        (proto.webcast.data.TouchPositions.prototype.getDataList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.webcast.data.TouchPosition,
            1
          );
        }),
        (proto.webcast.data.TouchPositions.prototype.setDataList = function (
          e
        ) {
          return r.Message.setRepeatedWrapperField(this, 1, e);
        }),
        (proto.webcast.data.TouchPositions.prototype.addData = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.TouchPosition,
            t
          );
        }),
        (proto.webcast.data.TouchPositions.prototype.clearDataList =
          function () {
            return this.setDataList([]);
          }),
        (proto.webcast.data.Position = {
          POSITIONUNKNOWN: 0,
          POSITIONGIFTPANELTOP: 1,
          POSITIONDIAMONDLISTBANNER: 2,
          POSITIONGIFTPANELENTRANCE: 22,
        }),
        (proto.webcast.data.RichTextType = {
          RICHTEXTTYPEUNKNOWN: 0,
          RICHTEXTTYPETEXT: 1,
          RICHTEXTTYPEIMG: 2,
        }),
        (proto.webcast.data.TouchRewardStatus = {
          TOUCHREWARDSTATUSUNKNOWN: 0,
          TOUCHREWARDSTATUSUNSEND: 1,
          TOUCHREWARDSTATUSSUCCESS: 2,
          TOUCHREWARDSTATUSSENDFAILED: 3,
        }),
        (proto.webcast.data.FreqCtrlStrategy = {
          STRATEGYUNKNOWN: 0,
          STRATEGYDAILYLIMITBYUID: 1,
          STRATEGYROOMLIMITBYUID: 2,
          STRATEGYPERROOMLIMITBYUID: 3,
          STRATEGYTOTALLIMITBYUID: 4,
        }),
        (proto.webcast.data.RefreshMechanism = {
          MECHANISMUNKNOWN: 0,
          MECHANISMIM: 1,
          MECHANISMPOLLING: 2,
          MECHANISMSENDGIFTJSBCALLBACK: 3,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    31674: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(42245);
      o.object.extend(proto, s);
      var n = a(54782);
      o.object.extend(proto, n);
      var d = a(55836);
      o.object.extend(proto, d),
        o.exportSymbol("proto.webcast.data.ChatEmojiGuideInfo", null, i),
        o.exportSymbol(
          "proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.ChatImageGuideInfo", null, i),
        o.exportSymbol(
          "proto.webcast.data.ChatImageGuideInfo.ImageGuideConf",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.InteractionUserInfo", null, i),
        o.exportSymbol("proto.webcast.data.LikeIconInfo", null, i),
        o.exportSymbol("proto.webcast.data.LikeIconInfo.IconList", null, i),
        o.exportSymbol("proto.webcast.data.MatchChatInfo", null, i),
        o.exportSymbol("proto.webcast.data.RecommendShortcutEmoji", null, i),
        o.exportSymbol(
          "proto.webcast.data.RecommendShortcutEmoji.EmojiItem",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.ShareItemStyle", null, i),
        (proto.webcast.data.LikeIconInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LikeIconInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LikeIconInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LikeIconInfo.displayName =
            "proto.webcast.data.LikeIconInfo"),
        (proto.webcast.data.LikeIconInfo.IconList = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LikeIconInfo.IconList.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LikeIconInfo.IconList, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LikeIconInfo.IconList.displayName =
            "proto.webcast.data.LikeIconInfo.IconList"),
        (proto.webcast.data.ChatEmojiGuideInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ChatEmojiGuideInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ChatEmojiGuideInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatEmojiGuideInfo.displayName =
            "proto.webcast.data.ChatEmojiGuideInfo"),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf
              .repeatedFields_,
            null
          );
        }),
        o.inherits(
          proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.displayName =
            "proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf"),
        (proto.webcast.data.ChatImageGuideInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ChatImageGuideInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ChatImageGuideInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatImageGuideInfo.displayName =
            "proto.webcast.data.ChatImageGuideInfo"),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ChatImageGuideInfo.ImageGuideConf
              .repeatedFields_,
            null
          );
        }),
        o.inherits(
          proto.webcast.data.ChatImageGuideInfo.ImageGuideConf,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.displayName =
            "proto.webcast.data.ChatImageGuideInfo.ImageGuideConf"),
        (proto.webcast.data.MatchChatInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MatchChatInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MatchChatInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MatchChatInfo.displayName =
            "proto.webcast.data.MatchChatInfo"),
        (proto.webcast.data.ShareItemStyle = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ShareItemStyle, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ShareItemStyle.displayName =
            "proto.webcast.data.ShareItemStyle"),
        (proto.webcast.data.RecommendShortcutEmoji = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.RecommendShortcutEmoji.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.RecommendShortcutEmoji, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.RecommendShortcutEmoji.displayName =
            "proto.webcast.data.RecommendShortcutEmoji"),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(
          proto.webcast.data.RecommendShortcutEmoji.EmojiItem,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.displayName =
            "proto.webcast.data.RecommendShortcutEmoji.EmojiItem"),
        (proto.webcast.data.InteractionUserInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.InteractionUserInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.InteractionUserInfo.displayName =
            "proto.webcast.data.InteractionUserInfo"),
        (proto.webcast.data.LikeIconInfo.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LikeIconInfo.prototype.toObject = function (e) {
            return proto.webcast.data.LikeIconInfo.toObject(e, this);
          }),
          (proto.webcast.data.LikeIconInfo.toObject = function (e, t) {
            var a,
              o = {
                iconsList: r.Message.toObjectList(
                  t.getIconsList(),
                  s.Image.toObject,
                  e
                ),
                componentRelatedIconsMap: (a = t.getComponentRelatedIconsMap())
                  ? a.toObject(
                      e,
                      proto.webcast.data.LikeIconInfo.IconList.toObject
                    )
                  : [],
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LikeIconInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LikeIconInfo();
          return proto.webcast.data.LikeIconInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LikeIconInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.addIcons(a);
                  break;
                case 2:
                  a = e.getComponentRelatedIconsMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readInt64,
                      r.BinaryReader.prototype.readMessage,
                      proto.webcast.data.LikeIconInfo.IconList
                        .deserializeBinaryFromReader,
                      0,
                      new proto.webcast.data.LikeIconInfo.IconList()
                    );
                  });
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LikeIconInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LikeIconInfo.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LikeIconInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getIconsList()).length > 0 &&
            t.writeRepeatedMessage(1, a, s.Image.serializeBinaryToWriter),
            (a = e.getComponentRelatedIconsMap(!0)) &&
              a.getLength() > 0 &&
              a.serializeBinary(
                2,
                t,
                r.BinaryWriter.prototype.writeInt64,
                r.BinaryWriter.prototype.writeMessage,
                proto.webcast.data.LikeIconInfo.IconList.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.LikeIconInfo.IconList.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LikeIconInfo.IconList.prototype.toObject =
            function (e) {
              return proto.webcast.data.LikeIconInfo.IconList.toObject(e, this);
            }),
          (proto.webcast.data.LikeIconInfo.IconList.toObject = function (e, t) {
            var a = {
              iconsList: r.Message.toObjectList(
                t.getIconsList(),
                s.Image.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LikeIconInfo.IconList.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LikeIconInfo.IconList();
          return proto.webcast.data.LikeIconInfo.IconList.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LikeIconInfo.IconList.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a = new s.Image();
                t.readMessage(a, s.Image.deserializeBinaryFromReader),
                  e.addIcons(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.LikeIconInfo.IconList.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LikeIconInfo.IconList.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LikeIconInfo.IconList.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getIconsList()).length > 0 &&
              t.writeRepeatedMessage(1, a, s.Image.serializeBinaryToWriter);
          }),
        (proto.webcast.data.LikeIconInfo.IconList.prototype.getIconsList =
          function () {
            return r.Message.getRepeatedWrapperField(this, s.Image, 1);
          }),
        (proto.webcast.data.LikeIconInfo.IconList.prototype.setIconsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.LikeIconInfo.IconList.prototype.addIcons =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              1,
              e,
              proto.webcast.data.Image,
              t
            );
          }),
        (proto.webcast.data.LikeIconInfo.IconList.prototype.clearIconsList =
          function () {
            return this.setIconsList([]);
          }),
        (proto.webcast.data.LikeIconInfo.prototype.getIconsList = function () {
          return r.Message.getRepeatedWrapperField(this, s.Image, 1);
        }),
        (proto.webcast.data.LikeIconInfo.prototype.setIconsList = function (e) {
          return r.Message.setRepeatedWrapperField(this, 1, e);
        }),
        (proto.webcast.data.LikeIconInfo.prototype.addIcons = function (e, t) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.Image,
            t
          );
        }),
        (proto.webcast.data.LikeIconInfo.prototype.clearIconsList =
          function () {
            return this.setIconsList([]);
          }),
        (proto.webcast.data.LikeIconInfo.prototype.getComponentRelatedIconsMap =
          function (e) {
            return r.Message.getMapField(
              this,
              2,
              e,
              proto.webcast.data.LikeIconInfo.IconList
            );
          }),
        (proto.webcast.data.LikeIconInfo.prototype.clearComponentRelatedIconsMap =
          function () {
            return this.getComponentRelatedIconsMap().clear(), this;
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatEmojiGuideInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.ChatEmojiGuideInfo.toObject(e, this);
            }),
          (proto.webcast.data.ChatEmojiGuideInfo.toObject = function (e, t) {
            var a = {
              emojisList: r.Message.toObjectList(
                t.getEmojisList(),
                proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ChatEmojiGuideInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChatEmojiGuideInfo();
          return proto.webcast.data.ChatEmojiGuideInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChatEmojiGuideInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a =
                  new proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf();
                t.readMessage(
                  a,
                  proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf
                    .deserializeBinaryFromReader
                ),
                  e.addEmojis(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatEmojiGuideInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getEmojisList()).length > 0 &&
              t.writeRepeatedMessage(
                1,
                a,
                proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf
                  .serializeBinaryToWriter
              );
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.repeatedFields_ =
          [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.toObject =
            function (e) {
              return proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.toObject =
            function (e, t) {
              var a,
                o = {
                  emoji: r.Message.getFieldWithDefault(t, 1, ""),
                  triggerWordsList:
                    null == (a = r.Message.getRepeatedField(t, 2)) ? void 0 : a,
                  beginTime: r.Message.getFieldWithDefault(t, 10, "0"),
                  endTime: r.Message.getFieldWithDefault(t, 11, "0"),
                };
              return e && (o.$jspbMessageInstance = t), o;
            })),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf();
            return proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setEmoji(a);
                  break;
                case 2:
                  a = t.readString();
                  e.addTriggerWords(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setBeginTime(a);
                  break;
                case 11:
                  a = t.readInt64String();
                  e.setEndTime(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getEmoji()).length > 0 && t.writeString(1, a),
              (a = e.getTriggerWordsList()).length > 0 &&
                t.writeRepeatedString(2, a),
              (a = e.getBeginTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getEndTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(11, a);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.getEmoji =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.setEmoji =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.getTriggerWordsList =
          function () {
            return r.Message.getRepeatedField(this, 2);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.setTriggerWordsList =
          function (e) {
            return r.Message.setField(this, 2, e || []);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.addTriggerWords =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.clearTriggerWordsList =
          function () {
            return this.setTriggerWordsList([]);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.getBeginTime =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.setBeginTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.getEndTime =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "0");
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf.prototype.setEndTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 11, e);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.prototype.getEmojisList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf,
              1
            );
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.prototype.setEmojisList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.ChatEmojiGuideInfo.prototype.addEmojis = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.ChatEmojiGuideInfo.EmojiGuideConf,
            t
          );
        }),
        (proto.webcast.data.ChatEmojiGuideInfo.prototype.clearEmojisList =
          function () {
            return this.setEmojisList([]);
          }),
        (proto.webcast.data.ChatImageGuideInfo.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatImageGuideInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.ChatImageGuideInfo.toObject(e, this);
            }),
          (proto.webcast.data.ChatImageGuideInfo.toObject = function (e, t) {
            var a = {
              imagesList: r.Message.toObjectList(
                t.getImagesList(),
                proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ChatImageGuideInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ChatImageGuideInfo();
          return proto.webcast.data.ChatImageGuideInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ChatImageGuideInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a =
                  new proto.webcast.data.ChatImageGuideInfo.ImageGuideConf();
                t.readMessage(
                  a,
                  proto.webcast.data.ChatImageGuideInfo.ImageGuideConf
                    .deserializeBinaryFromReader
                ),
                  e.addImages(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.ChatImageGuideInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatImageGuideInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatImageGuideInfo.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getImagesList()).length > 0 &&
              t.writeRepeatedMessage(
                1,
                a,
                proto.webcast.data.ChatImageGuideInfo.ImageGuideConf
                  .serializeBinaryToWriter
              );
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.repeatedFields_ =
          [4]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.toObject =
            function (e) {
              return proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.toObject =
            function (e, t) {
              var a,
                o = {
                  imageId: r.Message.getFieldWithDefault(t, 1, ""),
                  image: (a = t.getImage()) && s.Image.toObject(e, a),
                  text: r.Message.getFieldWithDefault(t, 3, ""),
                  triggerWordsList:
                    null == (a = r.Message.getRepeatedField(t, 4)) ? void 0 : a,
                  beginTime: r.Message.getFieldWithDefault(t, 10, "0"),
                  endTime: r.Message.getFieldWithDefault(t, 11, "0"),
                };
              return e && (o.$jspbMessageInstance = t), o;
            })),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.ChatImageGuideInfo.ImageGuideConf();
            return proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setImageId(a);
                  break;
                case 2:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setImage(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setText(a);
                  break;
                case 4:
                  a = t.readString();
                  e.addTriggerWords(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setBeginTime(a);
                  break;
                case 11:
                  a = t.readInt64String();
                  e.setEndTime(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getImageId()).length > 0 && t.writeString(1, a),
              null != (a = e.getImage()) &&
                t.writeMessage(2, a, s.Image.serializeBinaryToWriter),
              (a = e.getText()).length > 0 && t.writeString(3, a),
              (a = e.getTriggerWordsList()).length > 0 &&
                t.writeRepeatedString(4, a),
              (a = e.getBeginTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getEndTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(11, a);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getImageId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setImageId =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getImage =
          function () {
            return r.Message.getWrapperField(this, s.Image, 2);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setImage =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.clearImage =
          function () {
            return this.setImage(void 0);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.hasImage =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getText =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setText =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getTriggerWordsList =
          function () {
            return r.Message.getRepeatedField(this, 4);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setTriggerWordsList =
          function (e) {
            return r.Message.setField(this, 4, e || []);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.addTriggerWords =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 4, e, t);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.clearTriggerWordsList =
          function () {
            return this.setTriggerWordsList([]);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getBeginTime =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setBeginTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.getEndTime =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "0");
          }),
        (proto.webcast.data.ChatImageGuideInfo.ImageGuideConf.prototype.setEndTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 11, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.prototype.getImagesList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.ChatImageGuideInfo.ImageGuideConf,
              1
            );
          }),
        (proto.webcast.data.ChatImageGuideInfo.prototype.setImagesList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.ChatImageGuideInfo.prototype.addImages = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            e,
            proto.webcast.data.ChatImageGuideInfo.ImageGuideConf,
            t
          );
        }),
        (proto.webcast.data.ChatImageGuideInfo.prototype.clearImagesList =
          function () {
            return this.setImagesList([]);
          }),
        (proto.webcast.data.MatchChatInfo.repeatedFields_ = [5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MatchChatInfo.prototype.toObject = function (e) {
            return proto.webcast.data.MatchChatInfo.toObject(e, this);
          }),
          (proto.webcast.data.MatchChatInfo.toObject = function (e, t) {
            var a,
              o = {
                mainGroupIcon:
                  (a = t.getMainGroupIcon()) && s.Image.toObject(e, a),
                mainGroupBackground:
                  (a = t.getMainGroupBackground()) && s.Image.toObject(e, a),
                guestGroupIcon:
                  (a = t.getGuestGroupIcon()) && s.Image.toObject(e, a),
                guestGroupBackground:
                  (a = t.getGuestGroupBackground()) && s.Image.toObject(e, a),
                aggregateIconList: r.Message.toObjectList(
                  t.getAggregateIconList(),
                  s.Image.toObject,
                  e
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MatchChatInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MatchChatInfo();
          return proto.webcast.data.MatchChatInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MatchChatInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setMainGroupIcon(a);
                  break;
                case 2:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setMainGroupBackground(a);
                  break;
                case 3:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setGuestGroupIcon(a);
                  break;
                case 4:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setGuestGroupBackground(a);
                  break;
                case 5:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.addAggregateIcon(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MatchChatInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MatchChatInfo.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MatchChatInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getMainGroupIcon()) &&
            t.writeMessage(1, a, s.Image.serializeBinaryToWriter),
            null != (a = e.getMainGroupBackground()) &&
              t.writeMessage(2, a, s.Image.serializeBinaryToWriter),
            null != (a = e.getGuestGroupIcon()) &&
              t.writeMessage(3, a, s.Image.serializeBinaryToWriter),
            null != (a = e.getGuestGroupBackground()) &&
              t.writeMessage(4, a, s.Image.serializeBinaryToWriter),
            (a = e.getAggregateIconList()).length > 0 &&
              t.writeRepeatedMessage(5, a, s.Image.serializeBinaryToWriter);
        }),
        (proto.webcast.data.MatchChatInfo.prototype.getMainGroupIcon =
          function () {
            return r.Message.getWrapperField(this, s.Image, 1);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.setMainGroupIcon =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.clearMainGroupIcon =
          function () {
            return this.setMainGroupIcon(void 0);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.hasMainGroupIcon =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.getMainGroupBackground =
          function () {
            return r.Message.getWrapperField(this, s.Image, 2);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.setMainGroupBackground =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.clearMainGroupBackground =
          function () {
            return this.setMainGroupBackground(void 0);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.hasMainGroupBackground =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.getGuestGroupIcon =
          function () {
            return r.Message.getWrapperField(this, s.Image, 3);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.setGuestGroupIcon =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.clearGuestGroupIcon =
          function () {
            return this.setGuestGroupIcon(void 0);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.hasGuestGroupIcon =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.getGuestGroupBackground =
          function () {
            return r.Message.getWrapperField(this, s.Image, 4);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.setGuestGroupBackground =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.clearGuestGroupBackground =
          function () {
            return this.setGuestGroupBackground(void 0);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.hasGuestGroupBackground =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.getAggregateIconList =
          function () {
            return r.Message.getRepeatedWrapperField(this, s.Image, 5);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.setAggregateIconList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 5, e);
          }),
        (proto.webcast.data.MatchChatInfo.prototype.addAggregateIcon =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              5,
              e,
              proto.webcast.data.Image,
              t
            );
          }),
        (proto.webcast.data.MatchChatInfo.prototype.clearAggregateIconList =
          function () {
            return this.setAggregateIconList([]);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ShareItemStyle.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.ShareItemStyle.toObject(e, this);
          }),
          (proto.webcast.data.ShareItemStyle.toObject = function (e, t) {
            var a,
              o = {
                itemType: r.Message.getFieldWithDefault(t, 1, ""),
                itemId: r.Message.getFieldWithDefault(t, 2, ""),
                icon: (a = t.getIcon()) && s.Image.toObject(e, a),
                name: r.Message.getFieldWithDefault(t, 4, ""),
                nameColor: r.Message.getFieldWithDefault(t, 5, ""),
                schema: r.Message.getFieldWithDefault(t, 6, ""),
                description: r.Message.getFieldWithDefault(t, 7, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ShareItemStyle.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ShareItemStyle();
          return proto.webcast.data.ShareItemStyle.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ShareItemStyle.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setItemType(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setItemId(a);
                  break;
                case 3:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setIcon(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setName(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setNameColor(a);
                  break;
                case 6:
                  a = t.readString();
                  e.setSchema(a);
                  break;
                case 7:
                  a = t.readString();
                  e.setDescription(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ShareItemStyle.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ShareItemStyle.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ShareItemStyle.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getItemType()).length > 0 && t.writeString(1, a),
            (a = e.getItemId()).length > 0 && t.writeString(2, a),
            null != (a = e.getIcon()) &&
              t.writeMessage(3, a, s.Image.serializeBinaryToWriter),
            (a = e.getName()).length > 0 && t.writeString(4, a),
            (a = e.getNameColor()).length > 0 && t.writeString(5, a),
            (a = e.getSchema()).length > 0 && t.writeString(6, a),
            (a = e.getDescription()).length > 0 && t.writeString(7, a);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getItemType = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.ShareItemStyle.prototype.setItemType = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getItemId = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.ShareItemStyle.prototype.setItemId = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getIcon = function () {
          return r.Message.getWrapperField(this, s.Image, 3);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.setIcon = function (e) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.clearIcon = function () {
          return this.setIcon(void 0);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.hasIcon = function () {
          return null != r.Message.getField(this, 3);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.ShareItemStyle.prototype.setName = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getNameColor =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.ShareItemStyle.prototype.setNameColor = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getSchema = function () {
          return r.Message.getFieldWithDefault(this, 6, "");
        }),
        (proto.webcast.data.ShareItemStyle.prototype.setSchema = function (e) {
          return r.Message.setProto3StringField(this, 6, e);
        }),
        (proto.webcast.data.ShareItemStyle.prototype.getDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.ShareItemStyle.prototype.setDescription = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 7, e);
        }),
        (proto.webcast.data.RecommendShortcutEmoji.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.RecommendShortcutEmoji.prototype.toObject =
            function (e) {
              return proto.webcast.data.RecommendShortcutEmoji.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.RecommendShortcutEmoji.toObject = function (
            e,
            t
          ) {
            var a = {
              emojiItemsList: r.Message.toObjectList(
                t.getEmojiItemsList(),
                proto.webcast.data.RecommendShortcutEmoji.EmojiItem.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.RecommendShortcutEmoji.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.RecommendShortcutEmoji();
            return proto.webcast.data.RecommendShortcutEmoji.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a =
                  new proto.webcast.data.RecommendShortcutEmoji.EmojiItem();
                t.readMessage(
                  a,
                  proto.webcast.data.RecommendShortcutEmoji.EmojiItem
                    .deserializeBinaryFromReader
                ),
                  e.addEmojiItems(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.RecommendShortcutEmoji.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.RecommendShortcutEmoji.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getEmojiItemsList()).length > 0 &&
              t.writeRepeatedMessage(
                1,
                a,
                proto.webcast.data.RecommendShortcutEmoji.EmojiItem
                  .serializeBinaryToWriter
              );
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.toObject =
            function (e) {
              return proto.webcast.data.RecommendShortcutEmoji.EmojiItem.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.toObject =
            function (e, t) {
              var a = {
                content: r.Message.getFieldWithDefault(t, 1, ""),
                score: r.Message.getFieldWithDefault(t, 2, "0"),
              };
              return e && (a.$jspbMessageInstance = t), a;
            })),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.RecommendShortcutEmoji.EmojiItem();
            return proto.webcast.data.RecommendShortcutEmoji.EmojiItem.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setContent(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setScore(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.RecommendShortcutEmoji.EmojiItem.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getContent()).length > 0 && t.writeString(1, a),
              (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a);
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.getContent =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.setContent =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.getScore =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.RecommendShortcutEmoji.EmojiItem.prototype.setScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.RecommendShortcutEmoji.prototype.getEmojiItemsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.RecommendShortcutEmoji.EmojiItem,
              1
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.prototype.setEmojiItemsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 1, e);
          }),
        (proto.webcast.data.RecommendShortcutEmoji.prototype.addEmojiItems =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              1,
              e,
              proto.webcast.data.RecommendShortcutEmoji.EmojiItem,
              t
            );
          }),
        (proto.webcast.data.RecommendShortcutEmoji.prototype.clearEmojiItemsList =
          function () {
            return this.setEmojiItemsList([]);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.InteractionUserInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.InteractionUserInfo.toObject(e, this);
            }),
          (proto.webcast.data.InteractionUserInfo.toObject = function (e, t) {
            var a,
              o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                userInfo: (a = t.getUserInfo()) && n.User.toObject(e, a),
                adminUserInfo:
                  (a = t.getAdminUserInfo()) && d.AdminUser.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.InteractionUserInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.InteractionUserInfo();
          return proto.webcast.data.InteractionUserInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.InteractionUserInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 2:
                  a = new n.User();
                  t.readMessage(a, n.User.deserializeBinaryFromReader),
                    e.setUserInfo(a);
                  break;
                case 3:
                  a = new d.AdminUser();
                  t.readMessage(a, d.AdminUser.deserializeBinaryFromReader),
                    e.setAdminUserInfo(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.InteractionUserInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.InteractionUserInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              null != (a = e.getUserInfo()) &&
                t.writeMessage(2, a, n.User.serializeBinaryToWriter),
              null != (a = e.getAdminUserInfo()) &&
                t.writeMessage(3, a, d.AdminUser.serializeBinaryToWriter);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.getUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.setUserId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.InteractionUserInfo.prototype.getUserInfo =
          function () {
            return r.Message.getWrapperField(this, n.User, 2);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.setUserInfo =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.clearUserInfo =
          function () {
            return this.setUserInfo(void 0);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.hasUserInfo =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.getAdminUserInfo =
          function () {
            return r.Message.getWrapperField(this, d.AdminUser, 3);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.setAdminUserInfo =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.clearAdminUserInfo =
          function () {
            return this.setAdminUserInfo(void 0);
          }),
        (proto.webcast.data.InteractionUserInfo.prototype.hasAdminUserInfo =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        o.object.extend(t, proto.webcast.data);
    },
    48862: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(54820);
      o.object.extend(proto, s);
      var n = a(42245);
      o.object.extend(proto, n),
        o.exportSymbol("proto.webcast.data.AddDressPrompt", null, i),
        o.exportSymbol("proto.webcast.data.BackgroundMaterial", null, i),
        o.exportSymbol("proto.webcast.data.BuoyMaterial", null, i),
        o.exportSymbol("proto.webcast.data.ChangeDressMode", null, i),
        o.exportSymbol("proto.webcast.data.DressPageItemCommon", null, i),
        o.exportSymbol("proto.webcast.data.FeedbackMaterial", null, i),
        o.exportSymbol("proto.webcast.data.GetDressPageListMode", null, i),
        o.exportSymbol("proto.webcast.data.KTVDressType", null, i),
        o.exportSymbol("proto.webcast.data.MidiSkinDressInfo", null, i),
        o.exportSymbol("proto.webcast.data.MidiSkinDressPageItem", null, i),
        o.exportSymbol("proto.webcast.data.MidiSkinMaterial", null, i),
        o.exportSymbol("proto.webcast.data.MidiSkinOwnerDegree", null, i),
        o.exportSymbol("proto.webcast.data.TagDressPageItem", null, i),
        (proto.webcast.data.BuoyMaterial = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.BuoyMaterial, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BuoyMaterial.displayName =
            "proto.webcast.data.BuoyMaterial"),
        (proto.webcast.data.BackgroundMaterial = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.BackgroundMaterial, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.BackgroundMaterial.displayName =
            "proto.webcast.data.BackgroundMaterial"),
        (proto.webcast.data.FeedbackMaterial = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.FeedbackMaterial, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.FeedbackMaterial.displayName =
            "proto.webcast.data.FeedbackMaterial"),
        (proto.webcast.data.MidiSkinMaterial = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MidiSkinMaterial, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MidiSkinMaterial.displayName =
            "proto.webcast.data.MidiSkinMaterial"),
        (proto.webcast.data.AddDressPrompt = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AddDressPrompt, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AddDressPrompt.displayName =
            "proto.webcast.data.AddDressPrompt"),
        (proto.webcast.data.DressPageItemCommon = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.DressPageItemCommon, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.DressPageItemCommon.displayName =
            "proto.webcast.data.DressPageItemCommon"),
        (proto.webcast.data.TagDressPageItem = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.TagDressPageItem, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TagDressPageItem.displayName =
            "proto.webcast.data.TagDressPageItem"),
        (proto.webcast.data.MidiSkinDressPageItem = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MidiSkinDressPageItem, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MidiSkinDressPageItem.displayName =
            "proto.webcast.data.MidiSkinDressPageItem"),
        (proto.webcast.data.MidiSkinDressInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MidiSkinDressInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MidiSkinDressInfo.displayName =
            "proto.webcast.data.MidiSkinDressInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BuoyMaterial.prototype.toObject = function (e) {
            return proto.webcast.data.BuoyMaterial.toObject(e, this);
          }),
          (proto.webcast.data.BuoyMaterial.toObject = function (e, t) {
            var a,
              r = {
                buoyBall: (a = t.getBuoyBall()) && n.Image.toObject(e, a),
                buoyTailing: (a = t.getBuoyTailing()) && n.Image.toObject(e, a),
                univScatterDecoA:
                  (a = t.getUnivScatterDecoA()) && n.Image.toObject(e, a),
                univScatterDecoB:
                  (a = t.getUnivScatterDecoB()) && n.Image.toObject(e, a),
                univScatterDecoC:
                  (a = t.getUnivScatterDecoC()) && n.Image.toObject(e, a),
                advanScatterDecoA:
                  (a = t.getAdvanScatterDecoA()) && n.Image.toObject(e, a),
                advanScatterDecoB:
                  (a = t.getAdvanScatterDecoB()) && n.Image.toObject(e, a),
              };
            return e && (r.$jspbMessageInstance = t), r;
          })),
        (proto.webcast.data.BuoyMaterial.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BuoyMaterial();
          return proto.webcast.data.BuoyMaterial.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BuoyMaterial.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setBuoyBall(a);
                  break;
                case 2:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setBuoyTailing(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setUnivScatterDecoA(a);
                  break;
                case 4:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setUnivScatterDecoB(a);
                  break;
                case 5:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setUnivScatterDecoC(a);
                  break;
                case 6:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setAdvanScatterDecoA(a);
                  break;
                case 7:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setAdvanScatterDecoB(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.BuoyMaterial.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.BuoyMaterial.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.BuoyMaterial.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          null != (a = e.getBuoyBall()) &&
            t.writeMessage(1, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getBuoyTailing()) &&
              t.writeMessage(2, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getUnivScatterDecoA()) &&
              t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getUnivScatterDecoB()) &&
              t.writeMessage(4, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getUnivScatterDecoC()) &&
              t.writeMessage(5, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getAdvanScatterDecoA()) &&
              t.writeMessage(6, a, n.Image.serializeBinaryToWriter),
            null != (a = e.getAdvanScatterDecoB()) &&
              t.writeMessage(7, a, n.Image.serializeBinaryToWriter);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.getBuoyBall = function () {
          return r.Message.getWrapperField(this, n.Image, 1);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.setBuoyBall = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.clearBuoyBall = function () {
          return this.setBuoyBall(void 0);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.hasBuoyBall = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.getBuoyTailing =
          function () {
            return r.Message.getWrapperField(this, n.Image, 2);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setBuoyTailing = function (
          e
        ) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.BuoyMaterial.prototype.clearBuoyTailing =
          function () {
            return this.setBuoyTailing(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasBuoyTailing =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.getUnivScatterDecoA =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setUnivScatterDecoA =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.clearUnivScatterDecoA =
          function () {
            return this.setUnivScatterDecoA(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasUnivScatterDecoA =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.getUnivScatterDecoB =
          function () {
            return r.Message.getWrapperField(this, n.Image, 4);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setUnivScatterDecoB =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.clearUnivScatterDecoB =
          function () {
            return this.setUnivScatterDecoB(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasUnivScatterDecoB =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.getUnivScatterDecoC =
          function () {
            return r.Message.getWrapperField(this, n.Image, 5);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setUnivScatterDecoC =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.clearUnivScatterDecoC =
          function () {
            return this.setUnivScatterDecoC(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasUnivScatterDecoC =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.getAdvanScatterDecoA =
          function () {
            return r.Message.getWrapperField(this, n.Image, 6);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setAdvanScatterDecoA =
          function (e) {
            return r.Message.setWrapperField(this, 6, e);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.clearAdvanScatterDecoA =
          function () {
            return this.setAdvanScatterDecoA(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasAdvanScatterDecoA =
          function () {
            return null != r.Message.getField(this, 6);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.getAdvanScatterDecoB =
          function () {
            return r.Message.getWrapperField(this, n.Image, 7);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.setAdvanScatterDecoB =
          function (e) {
            return r.Message.setWrapperField(this, 7, e);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.clearAdvanScatterDecoB =
          function () {
            return this.setAdvanScatterDecoB(void 0);
          }),
        (proto.webcast.data.BuoyMaterial.prototype.hasAdvanScatterDecoB =
          function () {
            return null != r.Message.getField(this, 7);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.BackgroundMaterial.prototype.toObject =
            function (e) {
              return proto.webcast.data.BackgroundMaterial.toObject(e, this);
            }),
          (proto.webcast.data.BackgroundMaterial.toObject = function (e, t) {
            var a,
              o = {
                buoyAreaBg: (a = t.getBuoyAreaBg()) && n.Image.toObject(e, a),
                globalBg: (a = t.getGlobalBg()) && n.Image.toObject(e, a),
                scoreboardBg:
                  (a = t.getScoreboardBg()) && n.Image.toObject(e, a),
                toneLineStart: r.Message.getFieldWithDefault(t, 4, ""),
                toneLineEnd: r.Message.getFieldWithDefault(t, 5, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.BackgroundMaterial.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.BackgroundMaterial();
          return proto.webcast.data.BackgroundMaterial.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.BackgroundMaterial.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setBuoyAreaBg(a);
                  break;
                case 2:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setGlobalBg(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setScoreboardBg(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setToneLineStart(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setToneLineEnd(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.BackgroundMaterial.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.BackgroundMaterial.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getBuoyAreaBg()) &&
              t.writeMessage(1, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getGlobalBg()) &&
                t.writeMessage(2, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getScoreboardBg()) &&
                t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
              (a = e.getToneLineStart()).length > 0 && t.writeString(4, a),
              (a = e.getToneLineEnd()).length > 0 && t.writeString(5, a);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.getBuoyAreaBg =
          function () {
            return r.Message.getWrapperField(this, n.Image, 1);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.setBuoyAreaBg =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.clearBuoyAreaBg =
          function () {
            return this.setBuoyAreaBg(void 0);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.hasBuoyAreaBg =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.getGlobalBg =
          function () {
            return r.Message.getWrapperField(this, n.Image, 2);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.setGlobalBg =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.clearGlobalBg =
          function () {
            return this.setGlobalBg(void 0);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.hasGlobalBg =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.getScoreboardBg =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.setScoreboardBg =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.clearScoreboardBg =
          function () {
            return this.setScoreboardBg(void 0);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.hasScoreboardBg =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.getToneLineStart =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.setToneLineStart =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.getToneLineEnd =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.BackgroundMaterial.prototype.setToneLineEnd =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.FeedbackMaterial.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.FeedbackMaterial.toObject(e, this);
          }),
          (proto.webcast.data.FeedbackMaterial.toObject = function (e, t) {
            var a,
              r = {
                nice: (a = t.getNice()) && n.Image.toObject(e, a),
                good: (a = t.getGood()) && n.Image.toObject(e, a),
                perfect: (a = t.getPerfect()) && n.Image.toObject(e, a),
                advanPerfectBg:
                  (a = t.getAdvanPerfectBg()) && n.Image.toObject(e, a),
                advanPerfectTx:
                  (a = t.getAdvanPerfectTx()) && n.Image.toObject(e, a),
              };
            return e && (r.$jspbMessageInstance = t), r;
          })),
        (proto.webcast.data.FeedbackMaterial.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.FeedbackMaterial();
          return proto.webcast.data.FeedbackMaterial.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.FeedbackMaterial.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setNice(a);
                  break;
                case 2:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setGood(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setPerfect(a);
                  break;
                case 4:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setAdvanPerfectBg(a);
                  break;
                case 5:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setAdvanPerfectTx(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.FeedbackMaterial.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.FeedbackMaterial.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getNice()) &&
              t.writeMessage(1, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getGood()) &&
                t.writeMessage(2, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getPerfect()) &&
                t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getAdvanPerfectBg()) &&
                t.writeMessage(4, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getAdvanPerfectTx()) &&
                t.writeMessage(5, a, n.Image.serializeBinaryToWriter);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.getNice = function () {
          return r.Message.getWrapperField(this, n.Image, 1);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.setNice = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.clearNice = function () {
          return this.setNice(void 0);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.hasNice = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.getGood = function () {
          return r.Message.getWrapperField(this, n.Image, 2);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.setGood = function (e) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.clearGood = function () {
          return this.setGood(void 0);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.hasGood = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.getPerfect =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.setPerfect = function (
          e
        ) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.FeedbackMaterial.prototype.clearPerfect =
          function () {
            return this.setPerfect(void 0);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.hasPerfect =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.getAdvanPerfectBg =
          function () {
            return r.Message.getWrapperField(this, n.Image, 4);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.setAdvanPerfectBg =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.clearAdvanPerfectBg =
          function () {
            return this.setAdvanPerfectBg(void 0);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.hasAdvanPerfectBg =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.getAdvanPerfectTx =
          function () {
            return r.Message.getWrapperField(this, n.Image, 5);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.setAdvanPerfectTx =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.clearAdvanPerfectTx =
          function () {
            return this.setAdvanPerfectTx(void 0);
          }),
        (proto.webcast.data.FeedbackMaterial.prototype.hasAdvanPerfectTx =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MidiSkinMaterial.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MidiSkinMaterial.toObject(e, this);
          }),
          (proto.webcast.data.MidiSkinMaterial.toObject = function (e, t) {
            var a,
              o = {
                buoy:
                  (a = t.getBuoy()) &&
                  proto.webcast.data.BuoyMaterial.toObject(e, a),
                bg:
                  (a = t.getBg()) &&
                  proto.webcast.data.BackgroundMaterial.toObject(e, a),
                feedback:
                  (a = t.getFeedback()) &&
                  proto.webcast.data.FeedbackMaterial.toObject(e, a),
                lyricColorValue: r.Message.getFieldWithDefault(t, 4, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MidiSkinMaterial.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MidiSkinMaterial();
          return proto.webcast.data.MidiSkinMaterial.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MidiSkinMaterial.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.BuoyMaterial();
                  t.readMessage(
                    a,
                    proto.webcast.data.BuoyMaterial.deserializeBinaryFromReader
                  ),
                    e.setBuoy(a);
                  break;
                case 2:
                  a = new proto.webcast.data.BackgroundMaterial();
                  t.readMessage(
                    a,
                    proto.webcast.data.BackgroundMaterial
                      .deserializeBinaryFromReader
                  ),
                    e.setBg(a);
                  break;
                case 3:
                  a = new proto.webcast.data.FeedbackMaterial();
                  t.readMessage(
                    a,
                    proto.webcast.data.FeedbackMaterial
                      .deserializeBinaryFromReader
                  ),
                    e.setFeedback(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setLyricColorValue(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MidiSkinMaterial.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MidiSkinMaterial.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getBuoy()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.BuoyMaterial.serializeBinaryToWriter
              ),
              null != (a = e.getBg()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.BackgroundMaterial.serializeBinaryToWriter
                ),
              null != (a = e.getFeedback()) &&
                t.writeMessage(
                  3,
                  a,
                  proto.webcast.data.FeedbackMaterial.serializeBinaryToWriter
                ),
              (a = e.getLyricColorValue()).length > 0 && t.writeString(4, a);
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.getBuoy = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.BuoyMaterial,
            1
          );
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.setBuoy = function (e) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.clearBuoy = function () {
          return this.setBuoy(void 0);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.hasBuoy = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.getBg = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.BackgroundMaterial,
            2
          );
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.setBg = function (e) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.clearBg = function () {
          return this.setBg(void 0);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.hasBg = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.getFeedback =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.FeedbackMaterial,
              3
            );
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.setFeedback = function (
          e
        ) {
          return r.Message.setWrapperField(this, 3, e);
        }),
        (proto.webcast.data.MidiSkinMaterial.prototype.clearFeedback =
          function () {
            return this.setFeedback(void 0);
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.hasFeedback =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.getLyricColorValue =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.MidiSkinMaterial.prototype.setLyricColorValue =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AddDressPrompt.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.AddDressPrompt.toObject(e, this);
          }),
          (proto.webcast.data.AddDressPrompt.toObject = function (e, t) {
            var a = {
              hasAddDress: r.Message.getBooleanFieldWithDefault(t, 1, !1),
              addDressVersion: r.Message.getFieldWithDefault(t, 2, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.AddDressPrompt.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AddDressPrompt();
          return proto.webcast.data.AddDressPrompt.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AddDressPrompt.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readBool();
                  e.setHasAddDress(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setAddDressVersion(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AddDressPrompt.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AddDressPrompt.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AddDressPrompt.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getHasAddDress()) && t.writeBool(1, a),
            (a = e.getAddDressVersion()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a);
        }),
        (proto.webcast.data.AddDressPrompt.prototype.getHasAddDress =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1);
          }),
        (proto.webcast.data.AddDressPrompt.prototype.setHasAddDress = function (
          e
        ) {
          return r.Message.setProto3BooleanField(this, 1, e);
        }),
        (proto.webcast.data.AddDressPrompt.prototype.getAddDressVersion =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.AddDressPrompt.prototype.setAddDressVersion =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.DressPageItemCommon.prototype.toObject =
            function (e) {
              return proto.webcast.data.DressPageItemCommon.toObject(e, this);
            }),
          (proto.webcast.data.DressPageItemCommon.toObject = function (e, t) {
            var a = {
              dressId: r.Message.getFieldWithDefault(t, 1, ""),
              expireText: r.Message.getFieldWithDefault(t, 2, ""),
              isSelected: r.Message.getBooleanFieldWithDefault(t, 3, !1),
              isUnlocked: r.Message.getBooleanFieldWithDefault(t, 4, !1),
              schema: r.Message.getFieldWithDefault(t, 5, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.DressPageItemCommon.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.DressPageItemCommon();
          return proto.webcast.data.DressPageItemCommon.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.DressPageItemCommon.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setDressId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setExpireText(a);
                  break;
                case 3:
                  a = t.readBool();
                  e.setIsSelected(a);
                  break;
                case 4:
                  a = t.readBool();
                  e.setIsUnlocked(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setSchema(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.DressPageItemCommon.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.DressPageItemCommon.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getDressId()).length > 0 && t.writeString(1, a),
              (a = e.getExpireText()).length > 0 && t.writeString(2, a),
              (a = e.getIsSelected()) && t.writeBool(3, a),
              (a = e.getIsUnlocked()) && t.writeBool(4, a),
              (a = e.getSchema()).length > 0 && t.writeString(5, a);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.getDressId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.setDressId =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.getExpireText =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.setExpireText =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.getIsSelected =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.setIsSelected =
          function (e) {
            return r.Message.setProto3BooleanField(this, 3, e);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.getIsUnlocked =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.setIsUnlocked =
          function (e) {
            return r.Message.setProto3BooleanField(this, 4, e);
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.getSchema =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.DressPageItemCommon.prototype.setSchema = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TagDressPageItem.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.TagDressPageItem.toObject(e, this);
          }),
          (proto.webcast.data.TagDressPageItem.toObject = function (e, t) {
            var a,
              r = {
                common:
                  (a = t.getCommon()) &&
                  proto.webcast.data.DressPageItemCommon.toObject(e, a),
                micPosTagInfo:
                  (a = t.getMicPosTagInfo()) && s.MicPosTagInfo.toObject(e, a),
              };
            return e && (r.$jspbMessageInstance = t), r;
          })),
        (proto.webcast.data.TagDressPageItem.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TagDressPageItem();
          return proto.webcast.data.TagDressPageItem.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TagDressPageItem.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.DressPageItemCommon();
                  t.readMessage(
                    a,
                    proto.webcast.data.DressPageItemCommon
                      .deserializeBinaryFromReader
                  ),
                    e.setCommon(a);
                  break;
                case 2:
                  a = new s.MicPosTagInfo();
                  t.readMessage(a, s.MicPosTagInfo.deserializeBinaryFromReader),
                    e.setMicPosTagInfo(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.TagDressPageItem.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.TagDressPageItem.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.TagDressPageItem.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getCommon()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.DressPageItemCommon.serializeBinaryToWriter
              ),
              null != (a = e.getMicPosTagInfo()) &&
                t.writeMessage(2, a, s.MicPosTagInfo.serializeBinaryToWriter);
          }),
        (proto.webcast.data.TagDressPageItem.prototype.getCommon = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.DressPageItemCommon,
            1
          );
        }),
        (proto.webcast.data.TagDressPageItem.prototype.setCommon = function (
          e
        ) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.TagDressPageItem.prototype.clearCommon =
          function () {
            return this.setCommon(void 0);
          }),
        (proto.webcast.data.TagDressPageItem.prototype.hasCommon = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.webcast.data.TagDressPageItem.prototype.getMicPosTagInfo =
          function () {
            return r.Message.getWrapperField(this, s.MicPosTagInfo, 2);
          }),
        (proto.webcast.data.TagDressPageItem.prototype.setMicPosTagInfo =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.TagDressPageItem.prototype.clearMicPosTagInfo =
          function () {
            return this.setMicPosTagInfo(void 0);
          }),
        (proto.webcast.data.TagDressPageItem.prototype.hasMicPosTagInfo =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MidiSkinDressPageItem.prototype.toObject =
            function (e) {
              return proto.webcast.data.MidiSkinDressPageItem.toObject(e, this);
            }),
          (proto.webcast.data.MidiSkinDressPageItem.toObject = function (e, t) {
            var a,
              o = {
                common:
                  (a = t.getCommon()) &&
                  proto.webcast.data.DressPageItemCommon.toObject(e, a),
                thumbnail: (a = t.getThumbnail()) && n.Image.toObject(e, a),
                topRightImage:
                  (a = t.getTopRightImage()) && n.Image.toObject(e, a),
                ownerDegree: r.Message.getFieldWithDefault(t, 4, 0),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MidiSkinDressPageItem.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MidiSkinDressPageItem();
          return proto.webcast.data.MidiSkinDressPageItem.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MidiSkinDressPageItem.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.DressPageItemCommon();
                  t.readMessage(
                    a,
                    proto.webcast.data.DressPageItemCommon
                      .deserializeBinaryFromReader
                  ),
                    e.setCommon(a);
                  break;
                case 2:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setThumbnail(a);
                  break;
                case 3:
                  a = new n.Image();
                  t.readMessage(a, n.Image.deserializeBinaryFromReader),
                    e.setTopRightImage(a);
                  break;
                case 4:
                  a = t.readEnum();
                  e.setOwnerDegree(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MidiSkinDressPageItem.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MidiSkinDressPageItem.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getCommon()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.DressPageItemCommon.serializeBinaryToWriter
              ),
              null != (a = e.getThumbnail()) &&
                t.writeMessage(2, a, n.Image.serializeBinaryToWriter),
              null != (a = e.getTopRightImage()) &&
                t.writeMessage(3, a, n.Image.serializeBinaryToWriter),
              0 !== (a = e.getOwnerDegree()) && t.writeEnum(4, a);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.getCommon =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.DressPageItemCommon,
              1
            );
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.setCommon =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.clearCommon =
          function () {
            return this.setCommon(void 0);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.hasCommon =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.getThumbnail =
          function () {
            return r.Message.getWrapperField(this, n.Image, 2);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.setThumbnail =
          function (e) {
            return r.Message.setWrapperField(this, 2, e);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.clearThumbnail =
          function () {
            return this.setThumbnail(void 0);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.hasThumbnail =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.getTopRightImage =
          function () {
            return r.Message.getWrapperField(this, n.Image, 3);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.setTopRightImage =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.clearTopRightImage =
          function () {
            return this.setTopRightImage(void 0);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.hasTopRightImage =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.getOwnerDegree =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.webcast.data.MidiSkinDressPageItem.prototype.setOwnerDegree =
          function (e) {
            return r.Message.setProto3EnumField(this, 4, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MidiSkinDressInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MidiSkinDressInfo.toObject(e, this);
          }),
          (proto.webcast.data.MidiSkinDressInfo.toObject = function (e, t) {
            var a,
              o = {
                dressId: r.Message.getFieldWithDefault(t, 1, ""),
                material:
                  (a = t.getMaterial()) &&
                  proto.webcast.data.MidiSkinMaterial.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MidiSkinDressInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MidiSkinDressInfo();
          return proto.webcast.data.MidiSkinDressInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MidiSkinDressInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setDressId(a);
                  break;
                case 2:
                  a = new proto.webcast.data.MidiSkinMaterial();
                  t.readMessage(
                    a,
                    proto.webcast.data.MidiSkinMaterial
                      .deserializeBinaryFromReader
                  ),
                    e.setMaterial(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MidiSkinDressInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MidiSkinDressInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getDressId()).length > 0 && t.writeString(1, a),
              null != (a = e.getMaterial()) &&
                t.writeMessage(
                  2,
                  a,
                  proto.webcast.data.MidiSkinMaterial.serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.getDressId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.setDressId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.getMaterial =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.MidiSkinMaterial,
              2
            );
          }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.setMaterial = function (
          e
        ) {
          return r.Message.setWrapperField(this, 2, e);
        }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.clearMaterial =
          function () {
            return this.setMaterial(void 0);
          }),
        (proto.webcast.data.MidiSkinDressInfo.prototype.hasMaterial =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.webcast.data.KTVDressType = {
          KTVDRESSTYPE_UNKNOWN: 0,
          KTVDRESSTYPE_TAG: 1,
          KTVDRESSTYPE_MIDISKIN: 2,
        }),
        (proto.webcast.data.GetDressPageListMode = {
          LIST_MODE_UNKNOWN: 0,
          LIST_MODE_PREVIEW: 1,
          LIST_MODE_FULL: 2,
        }),
        (proto.webcast.data.ChangeDressMode = {
          CHANGE_MODE_UNKNOWN: 0,
          CHANGE_MODE_UPDATE: 1,
          CHANGE_MODE_UNDRESS: 2,
        }),
        (proto.webcast.data.MidiSkinOwnerDegree = {
          OWNER_UNKNOWN: 0,
          OWNER_ANCHOR_GLOBAL: 1,
          OWNER_NON_ANCHOR_GLOBAL: 2,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    8090: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(42245);
      o.object.extend(proto, s),
        o.exportSymbol("proto.webcast.data.SelfDisciplineLikeSource", null, i),
        o.exportSymbol("proto.webcast.data.SelfDisciplineLikeStatus", null, i),
        o.exportSymbol(
          "proto.webcast.data.SelfDisciplinePrivacyStatus",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.SelfDisciplinePunchStatus", null, i),
        o.exportSymbol(
          "proto.webcast.data.SelfDisciplineSignalContentType",
          null,
          i
        ),
        o.exportSymbol(
          "proto.webcast.data.SelfDisciplineSwitchStatus",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.SelfDisciplineUserBase", null, i),
        o.exportSymbol(
          "proto.webcast.data.SelfDisciplineUserBase.FollowInfo",
          null,
          i
        ),
        (proto.webcast.data.SelfDisciplineUserBase = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.SelfDisciplineUserBase, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.SelfDisciplineUserBase.displayName =
            "proto.webcast.data.SelfDisciplineUserBase"),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(
          proto.webcast.data.SelfDisciplineUserBase.FollowInfo,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.displayName =
            "proto.webcast.data.SelfDisciplineUserBase.FollowInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.SelfDisciplineUserBase.prototype.toObject =
            function (e) {
              return proto.webcast.data.SelfDisciplineUserBase.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.SelfDisciplineUserBase.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                id: r.Message.getFieldWithDefault(t, 1, "0"),
                nickname: r.Message.getFieldWithDefault(t, 2, ""),
                avatarThumb: (a = t.getAvatarThumb()) && s.Image.toObject(e, a),
                followInfo:
                  (a = t.getFollowInfo()) &&
                  proto.webcast.data.SelfDisciplineUserBase.FollowInfo.toObject(
                    e,
                    a
                  ),
                secret: r.Message.getFieldWithDefault(t, 5, 0),
                secUid: r.Message.getFieldWithDefault(t, 6, ""),
                mysteryman: r.Message.getFieldWithDefault(t, 7, 0),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.SelfDisciplineUserBase.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.SelfDisciplineUserBase();
            return proto.webcast.data.SelfDisciplineUserBase.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.SelfDisciplineUserBase.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setNickname(a);
                  break;
                case 3:
                  a = new s.Image();
                  t.readMessage(a, s.Image.deserializeBinaryFromReader),
                    e.setAvatarThumb(a);
                  break;
                case 4:
                  a =
                    new proto.webcast.data.SelfDisciplineUserBase.FollowInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.SelfDisciplineUserBase.FollowInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setFollowInfo(a);
                  break;
                case 5:
                  a = t.readInt32();
                  e.setSecret(a);
                  break;
                case 6:
                  a = t.readString();
                  e.setSecUid(a);
                  break;
                case 7:
                  a = t.readInt32();
                  e.setMysteryman(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.SelfDisciplineUserBase.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.SelfDisciplineUserBase.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getNickname()).length > 0 && t.writeString(2, a),
              null != (a = e.getAvatarThumb()) &&
                t.writeMessage(3, a, s.Image.serializeBinaryToWriter),
              null != (a = e.getFollowInfo()) &&
                t.writeMessage(
                  4,
                  a,
                  proto.webcast.data.SelfDisciplineUserBase.FollowInfo
                    .serializeBinaryToWriter
                ),
              0 !== (a = e.getSecret()) && t.writeInt32(5, a),
              (a = e.getSecUid()).length > 0 && t.writeString(6, a),
              0 !== (a = e.getMysteryman()) && t.writeInt32(7, a);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.SelfDisciplineUserBase.FollowInfo.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.toObject =
            function (e, t) {
              var a = {
                followStatus: r.Message.getFieldWithDefault(t, 1, "0"),
                remarkName: r.Message.getFieldWithDefault(t, 2, ""),
              };
              return e && (a.$jspbMessageInstance = t), a;
            })),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.SelfDisciplineUserBase.FollowInfo();
            return proto.webcast.data.SelfDisciplineUserBase.FollowInfo.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setFollowStatus(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setRemarkName(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.SelfDisciplineUserBase.FollowInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getFollowStatus()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getRemarkName()).length > 0 && t.writeString(2, a);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.getFollowStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.setFollowStatus =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.getRemarkName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.SelfDisciplineUserBase.FollowInfo.prototype.setRemarkName =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getNickname =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setNickname =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getAvatarThumb =
          function () {
            return r.Message.getWrapperField(this, s.Image, 3);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setAvatarThumb =
          function (e) {
            return r.Message.setWrapperField(this, 3, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.clearAvatarThumb =
          function () {
            return this.setAvatarThumb(void 0);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.hasAvatarThumb =
          function () {
            return null != r.Message.getField(this, 3);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getFollowInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.SelfDisciplineUserBase.FollowInfo,
              4
            );
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setFollowInfo =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.clearFollowInfo =
          function () {
            return this.setFollowInfo(void 0);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.hasFollowInfo =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getSecret =
          function () {
            return r.Message.getFieldWithDefault(this, 5, 0);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setSecret =
          function (e) {
            return r.Message.setProto3IntField(this, 5, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getSecUid =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "");
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setSecUid =
          function (e) {
            return r.Message.setProto3StringField(this, 6, e);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.getMysteryman =
          function () {
            return r.Message.getFieldWithDefault(this, 7, 0);
          }),
        (proto.webcast.data.SelfDisciplineUserBase.prototype.setMysteryman =
          function (e) {
            return r.Message.setProto3IntField(this, 7, e);
          }),
        (proto.webcast.data.SelfDisciplineSwitchStatus = {
          SELF_DISCIPLINE_SWITCH_UNKNOWN: 0,
          SELF_DISCIPLINE_SWITCH_OPEN: 1,
          SELF_DISCIPLINE_SWITCH_OFF: 2,
          SELF_DISCIPLINE_SWITCH_STATUS_CHANGE: 3,
          SELF_DISCIPLINE_SWITCH_ROOM_CONTINUE_OPEN: 4,
        }),
        (proto.webcast.data.SelfDisciplineLikeStatus = {
          SELF_DISCIPLINE_STATUS_UNKNOWN: 0,
          SELF_DISCIPLINE_STATUS_LIKED: 1,
          SELF_DISCIPLINE_STATUS_NONE_LIKE: 2,
        }),
        (proto.webcast.data.SelfDisciplinePrivacyStatus = {
          SELF_DISCIPLINE_PRIVACY_STATUS_UNKNOWN: 0,
          SELF_DISCIPLINE_PRIVACY_STATUS_OPEN: 1,
          SELF_DISCIPLINE_PRIVACY_STATUS_OFF: 2,
        }),
        (proto.webcast.data.SelfDisciplineLikeSource = {
          SELF_DISCIPLINE_LIKE_SOURCE_UNKNOWN: 0,
          SELF_DISCIPLINE_LIKE_SOURCE_WEEKLY_RANK: 1,
          SELF_DISCIPLINE_LIKE_SOURCE_PERSONAL_PANEL: 2,
        }),
        (proto.webcast.data.SelfDisciplinePunchStatus = {
          SELF_DISCIPLINE_PUNCH_STATUS_UNKNOWN: 0,
          SELF_DISCIPLINE_PUNCH_STATUS_PUNCHING: 1,
          SELF_DISCIPLINE_PUNCH_STATUS_PUNCHED: 2,
          SELF_DISCIPLINE_PUNCH_STATUS_TIME_SETTLED: 3,
        }),
        (proto.webcast.data.SelfDisciplineSignalContentType = {
          SELF_DISCIPLINE_SIGNAL_CONTENT_TYPE_UNKNOWN: 0,
          SELF_DISCIPLINE_SIGNAL_CONTENT_TYPE_BACKGROUND: 1,
          SELF_DISCIPLINE_SIGNAL_CONTENT_TYPE_FORGROUND: 2,
          SELF_DISCIPLINE_SIGNAL_CONTENT_TYPE_SMALL_WINDOW: 3,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    95432: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(54782);
      o.object.extend(proto, s),
        o.exportSymbol("proto.webcast.data.SelectionType", null, i),
        o.exportSymbol("proto.webcast.data.ThemeType", null, i),
        o.exportSymbol("proto.webcast.data.ThemedCompetitionInfo", null, i),
        o.exportSymbol(
          "proto.webcast.data.ThemedCompetitionInfo.Score",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.ThemedCompetitionSetting", null, i),
        o.exportSymbol("proto.webcast.data.ThemedCompetitionStatus", null, i),
        o.exportSymbol("proto.webcast.data.ThemedCompetitionWinType", null, i),
        (proto.webcast.data.ThemedCompetitionSetting = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.ThemedCompetitionSetting.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.ThemedCompetitionSetting, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ThemedCompetitionSetting.displayName =
            "proto.webcast.data.ThemedCompetitionSetting"),
        (proto.webcast.data.ThemedCompetitionInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ThemedCompetitionInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ThemedCompetitionInfo.displayName =
            "proto.webcast.data.ThemedCompetitionInfo"),
        (proto.webcast.data.ThemedCompetitionInfo.Score = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ThemedCompetitionInfo.Score, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ThemedCompetitionInfo.Score.displayName =
            "proto.webcast.data.ThemedCompetitionInfo.Score"),
        (proto.webcast.data.ThemedCompetitionSetting.repeatedFields_ = [
          5, 8, 12,
        ]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ThemedCompetitionSetting.prototype.toObject =
            function (e) {
              return proto.webcast.data.ThemedCompetitionSetting.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.ThemedCompetitionSetting.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                theme: r.Message.getFieldWithDefault(t, 1, ""),
                themeType: r.Message.getFieldWithDefault(t, 2, 0),
                selectionType: r.Message.getFieldWithDefault(t, 3, 0),
                winCount: r.Message.getFieldWithDefault(t, 4, "0"),
                judgesUserIdListList:
                  null == (a = r.Message.getRepeatedField(t, 5)) ? void 0 : a,
                maxJudgesCount: r.Message.getFieldWithDefault(t, 6, "0"),
                maxWinCount: r.Message.getFieldWithDefault(t, 7, "0"),
                serverThemeListList:
                  null == (a = r.Message.getRepeatedField(t, 8)) ? void 0 : a,
                customTheme: r.Message.getFieldWithDefault(t, 9, ""),
                maxScore: r.Message.getFieldWithDefault(t, 10, "0"),
                canEditScore: r.Message.getBooleanFieldWithDefault(t, 11, !1),
                maxScoreCandidatesList:
                  null == (a = r.Message.getRepeatedField(t, 12)) ? void 0 : a,
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ThemedCompetitionSetting.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.ThemedCompetitionSetting();
            return proto.webcast.data.ThemedCompetitionSetting.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.ThemedCompetitionSetting.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setTheme(a);
                  break;
                case 2:
                  a = t.readEnum();
                  e.setThemeType(a);
                  break;
                case 3:
                  a = t.readEnum();
                  e.setSelectionType(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setWinCount(a);
                  break;
                case 5:
                  for (
                    var r = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addJudgesUserIdList(r[o]);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setMaxJudgesCount(a);
                  break;
                case 7:
                  a = t.readInt64String();
                  e.setMaxWinCount(a);
                  break;
                case 8:
                  a = t.readString();
                  e.addServerThemeList(a);
                  break;
                case 9:
                  a = t.readString();
                  e.setCustomTheme(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setMaxScore(a);
                  break;
                case 11:
                  a = t.readBool();
                  e.setCanEditScore(a);
                  break;
                case 12:
                  for (
                    r = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addMaxScoreCandidates(r[o]);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ThemedCompetitionSetting.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ThemedCompetitionSetting.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getTheme()).length > 0 && t.writeString(1, a),
              0 !== (a = e.getThemeType()) && t.writeEnum(2, a),
              0 !== (a = e.getSelectionType()) && t.writeEnum(3, a),
              (a = e.getWinCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getJudgesUserIdListList()).length > 0 &&
                t.writePackedInt64String(5, a),
              (a = e.getMaxJudgesCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getMaxWinCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(7, a),
              (a = e.getServerThemeListList()).length > 0 &&
                t.writeRepeatedString(8, a),
              (a = e.getCustomTheme()).length > 0 && t.writeString(9, a),
              (a = e.getMaxScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getCanEditScore()) && t.writeBool(11, a),
              (a = e.getMaxScoreCandidatesList()).length > 0 &&
                t.writePackedInt64String(12, a);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getTheme =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setTheme =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getThemeType =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setThemeType =
          function (e) {
            return r.Message.setProto3EnumField(this, 2, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getSelectionType =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setSelectionType =
          function (e) {
            return r.Message.setProto3EnumField(this, 3, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getWinCount =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setWinCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getJudgesUserIdListList =
          function () {
            return r.Message.getRepeatedField(this, 5);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setJudgesUserIdListList =
          function (e) {
            return r.Message.setField(this, 5, e || []);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.addJudgesUserIdList =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 5, e, t);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.clearJudgesUserIdListList =
          function () {
            return this.setJudgesUserIdListList([]);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getMaxJudgesCount =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setMaxJudgesCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getMaxWinCount =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "0");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setMaxWinCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 7, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getServerThemeListList =
          function () {
            return r.Message.getRepeatedField(this, 8);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setServerThemeListList =
          function (e) {
            return r.Message.setField(this, 8, e || []);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.addServerThemeList =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 8, e, t);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.clearServerThemeListList =
          function () {
            return this.setServerThemeListList([]);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getCustomTheme =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setCustomTheme =
          function (e) {
            return r.Message.setProto3StringField(this, 9, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getMaxScore =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setMaxScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getCanEditScore =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 11, !1);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setCanEditScore =
          function (e) {
            return r.Message.setProto3BooleanField(this, 11, e);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.getMaxScoreCandidatesList =
          function () {
            return r.Message.getRepeatedField(this, 12);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.setMaxScoreCandidatesList =
          function (e) {
            return r.Message.setField(this, 12, e || []);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.addMaxScoreCandidates =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 12, e, t);
          }),
        (proto.webcast.data.ThemedCompetitionSetting.prototype.clearMaxScoreCandidatesList =
          function () {
            return this.setMaxScoreCandidatesList([]);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ThemedCompetitionInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.ThemedCompetitionInfo.toObject(e, this);
            }),
          (proto.webcast.data.ThemedCompetitionInfo.toObject = function (e, t) {
            var a,
              o = {
                setting:
                  (a = t.getSetting()) &&
                  proto.webcast.data.ThemedCompetitionSetting.toObject(e, a),
                userIdToScoreMap: (a = t.getUserIdToScoreMap())
                  ? a.toObject(
                      e,
                      proto.webcast.data.ThemedCompetitionInfo.Score.toObject
                    )
                  : [],
                status: r.Message.getFieldWithDefault(t, 3, 0),
                competitionId: r.Message.getFieldWithDefault(t, 4, "0"),
                currentPerformerUserId: r.Message.getFieldWithDefault(
                  t,
                  5,
                  "0"
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.ThemedCompetitionInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ThemedCompetitionInfo();
          return proto.webcast.data.ThemedCompetitionInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ThemedCompetitionInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.ThemedCompetitionSetting();
                  t.readMessage(
                    a,
                    proto.webcast.data.ThemedCompetitionSetting
                      .deserializeBinaryFromReader
                  ),
                    e.setSetting(a);
                  break;
                case 2:
                  a = e.getUserIdToScoreMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readInt64,
                      r.BinaryReader.prototype.readMessage,
                      proto.webcast.data.ThemedCompetitionInfo.Score
                        .deserializeBinaryFromReader,
                      0,
                      new proto.webcast.data.ThemedCompetitionInfo.Score()
                    );
                  });
                  break;
                case 3:
                  a = t.readEnum();
                  e.setStatus(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setCompetitionId(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setCurrentPerformerUserId(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ThemedCompetitionInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ThemedCompetitionInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getSetting()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.ThemedCompetitionSetting
                  .serializeBinaryToWriter
              ),
              (a = e.getUserIdToScoreMap(!0)) &&
                a.getLength() > 0 &&
                a.serializeBinary(
                  2,
                  t,
                  r.BinaryWriter.prototype.writeInt64,
                  r.BinaryWriter.prototype.writeMessage,
                  proto.webcast.data.ThemedCompetitionInfo.Score
                    .serializeBinaryToWriter
                ),
              0 !== (a = e.getStatus()) && t.writeEnum(3, a),
              (a = e.getCompetitionId()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getCurrentPerformerUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ThemedCompetitionInfo.Score.prototype.toObject =
            function (e) {
              return proto.webcast.data.ThemedCompetitionInfo.Score.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.ThemedCompetitionInfo.Score.toObject = function (
            e,
            t
          ) {
            var a = {
              score: r.Message.getFieldWithDefault(t, 1, "0"),
              scoreFuzz: r.Message.getFieldWithDefault(t, 2, ""),
              winType: r.Message.getFieldWithDefault(t, 3, 0),
              rank: r.Message.getFieldWithDefault(t, 4, "0"),
              showEffect: r.Message.getBooleanFieldWithDefault(t, 5, !1),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ThemedCompetitionInfo.Score.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.ThemedCompetitionInfo.Score();
            return proto.webcast.data.ThemedCompetitionInfo.Score.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setScore(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setScoreFuzz(a);
                  break;
                case 3:
                  a = t.readEnum();
                  e.setWinType(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setRank(a);
                  break;
                case 5:
                  a = t.readBool();
                  e.setShowEffect(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ThemedCompetitionInfo.Score.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getScoreFuzz()).length > 0 && t.writeString(2, a),
              0 !== (a = e.getWinType()) && t.writeEnum(3, a),
              (a = e.getRank()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getShowEffect()) && t.writeBool(5, a);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.getScore =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.setScore =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.getScoreFuzz =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.setScoreFuzz =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.getWinType =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.setWinType =
          function (e) {
            return r.Message.setProto3EnumField(this, 3, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.getRank =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.setRank =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.getShowEffect =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.Score.prototype.setShowEffect =
          function (e) {
            return r.Message.setProto3BooleanField(this, 5, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.getSetting =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.ThemedCompetitionSetting,
              1
            );
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.setSetting =
          function (e) {
            return r.Message.setWrapperField(this, 1, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.clearSetting =
          function () {
            return this.setSetting(void 0);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.hasSetting =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.getUserIdToScoreMap =
          function (e) {
            return r.Message.getMapField(
              this,
              2,
              e,
              proto.webcast.data.ThemedCompetitionInfo.Score
            );
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.clearUserIdToScoreMap =
          function () {
            return this.getUserIdToScoreMap().clear(), this;
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.getStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.setStatus =
          function (e) {
            return r.Message.setProto3EnumField(this, 3, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.getCompetitionId =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.setCompetitionId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.getCurrentPerformerUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.ThemedCompetitionInfo.prototype.setCurrentPerformerUserId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.SelectionType = {
          SELECTIONTYPE_UNKNOWN: 0,
          SELECTIONTYPE_NORMAL: 1,
          SELECTIONTYPE_SCORING: 2,
        }),
        (proto.webcast.data.ThemeType = {
          THEMETYPE_UNKNOWN: 0,
          THEMETYPE_NORMAL: 1,
          THEMETYPE_CUSTOM: 2,
        }),
        (proto.webcast.data.ThemedCompetitionStatus = {
          THEMEDCOMPETITIONSTATUS_UNKNOWN: 0,
          THEMEDCOMPETITIONSTATUS_START: 1,
          THEMEDCOMPETITIONSTATUS_FINISH: 2,
          THEMEDCOMPETITIONSTATUS_SHOWTIME: 3,
        }),
        (proto.webcast.data.ThemedCompetitionWinType = {
          THEMEDCOMPETITIONWINTYPE_NOT_WIN: 0,
          THEMEDCOMPETITIONWINTYPE_WIN: 1,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    98190: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      o.exportSymbol("proto.webcast.data.CandidateUser", null, i),
        o.exportSymbol("proto.webcast.data.CustomizableOption", null, i),
        o.exportSymbol("proto.webcast.data.CustomizedCondition", null, i),
        o.exportSymbol(
          "proto.webcast.data.CustomizedConditionActionMessage",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.ExpandLotteryConfig", null, i),
        o.exportSymbol("proto.webcast.data.ExpandPrizeType", null, i),
        o.exportSymbol("proto.webcast.data.GiftInfo", null, i),
        o.exportSymbol("proto.webcast.data.IdTypeForFudaiBiz", null, i),
        o.exportSymbol("proto.webcast.data.LaunchTaskInfo", null, i),
        o.exportSymbol("proto.webcast.data.LotteryCondition", null, i),
        o.exportSymbol("proto.webcast.data.LotteryConfig", null, i),
        o.exportSymbol("proto.webcast.data.LotteryDefaultConfig", null, i),
        o.exportSymbol("proto.webcast.data.LotteryExpandActivityInfo", null, i),
        o.exportSymbol("proto.webcast.data.LotteryFansLevelConfig", null, i),
        o.exportSymbol("proto.webcast.data.LotteryGiftGuide", null, i),
        o.exportSymbol("proto.webcast.data.LotteryInfo", null, i),
        o.exportSymbol("proto.webcast.data.LotteryLuckyUser", null, i),
        o.exportSymbol("proto.webcast.data.LotteryLuckyUser.Award", null, i),
        o.exportSymbol(
          "proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail",
          null,
          i
        ),
        o.exportSymbol(
          "proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.InterestShowType",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.LotteryPrize", null, i),
        o.exportSymbol("proto.webcast.data.LotteryRegularlyConfig", null, i),
        o.exportSymbol("proto.webcast.data.LotteryRewardDetail", null, i),
        o.exportSymbol("proto.webcast.data.LotterySendType", null, i),
        o.exportSymbol("proto.webcast.data.LotteryUserCondition", null, i),
        o.exportSymbol(
          "proto.webcast.data.LotteryUserCustomizedCondition",
          null,
          i
        ),
        o.exportSymbol("proto.webcast.data.RoomExtraLotteryInfo", null, i),
        o.exportSymbol("proto.webcast.data.VoucherPrizeInfo", null, i),
        (proto.webcast.data.LotteryUserCondition = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryUserCondition, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryUserCondition.displayName =
            "proto.webcast.data.LotteryUserCondition"),
        (proto.webcast.data.LotteryUserCustomizedCondition = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(
          proto.webcast.data.LotteryUserCustomizedCondition,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryUserCustomizedCondition.displayName =
            "proto.webcast.data.LotteryUserCustomizedCondition"),
        (proto.webcast.data.CandidateUser = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.CandidateUser, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CandidateUser.displayName =
            "proto.webcast.data.CandidateUser"),
        (proto.webcast.data.LotteryDefaultConfig = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LotteryDefaultConfig.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LotteryDefaultConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryDefaultConfig.displayName =
            "proto.webcast.data.LotteryDefaultConfig"),
        (proto.webcast.data.GiftInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.GiftInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GiftInfo.displayName =
            "proto.webcast.data.GiftInfo"),
        (proto.webcast.data.CustomizableOption = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CustomizableOption.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.CustomizableOption, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CustomizableOption.displayName =
            "proto.webcast.data.CustomizableOption"),
        (proto.webcast.data.LotteryConfig = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LotteryConfig.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LotteryConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryConfig.displayName =
            "proto.webcast.data.LotteryConfig"),
        (proto.webcast.data.CustomizedCondition = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CustomizedCondition.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.CustomizedCondition, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CustomizedCondition.displayName =
            "proto.webcast.data.CustomizedCondition"),
        (proto.webcast.data.LotteryRewardDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryRewardDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryRewardDetail.displayName =
            "proto.webcast.data.LotteryRewardDetail"),
        (proto.webcast.data.LotteryExpandActivityInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryExpandActivityInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryExpandActivityInfo.displayName =
            "proto.webcast.data.LotteryExpandActivityInfo"),
        (proto.webcast.data.ExpandLotteryConfig = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ExpandLotteryConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ExpandLotteryConfig.displayName =
            "proto.webcast.data.ExpandLotteryConfig"),
        (proto.webcast.data.LotteryFansLevelConfig = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryFansLevelConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryFansLevelConfig.displayName =
            "proto.webcast.data.LotteryFansLevelConfig"),
        (proto.webcast.data.LotteryRegularlyConfig = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryRegularlyConfig, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryRegularlyConfig.displayName =
            "proto.webcast.data.LotteryRegularlyConfig"),
        (proto.webcast.data.LotteryInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LotteryInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LotteryInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryInfo.displayName =
            "proto.webcast.data.LotteryInfo"),
        (proto.webcast.data.LaunchTaskInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LaunchTaskInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LaunchTaskInfo.displayName =
            "proto.webcast.data.LaunchTaskInfo"),
        (proto.webcast.data.LotteryPrize = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryPrize, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryPrize.displayName =
            "proto.webcast.data.LotteryPrize"),
        (proto.webcast.data.LotteryCondition = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryCondition, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryCondition.displayName =
            "proto.webcast.data.LotteryCondition"),
        (proto.webcast.data.LotteryLuckyUser = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LotteryLuckyUser.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LotteryLuckyUser, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryLuckyUser.displayName =
            "proto.webcast.data.LotteryLuckyUser"),
        (proto.webcast.data.LotteryLuckyUser.Award = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.LotteryLuckyUser.Award.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.LotteryLuckyUser.Award, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryLuckyUser.Award.displayName =
            "proto.webcast.data.LotteryLuckyUser.Award"),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(
          proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.displayName =
            "proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail"),
        (proto.webcast.data.VoucherPrizeInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.VoucherPrizeInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.VoucherPrizeInfo.displayName =
            "proto.webcast.data.VoucherPrizeInfo"),
        (proto.webcast.data.LotteryGiftGuide = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.LotteryGiftGuide, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.LotteryGiftGuide.displayName =
            "proto.webcast.data.LotteryGiftGuide"),
        (proto.webcast.data.CustomizedConditionActionMessage = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.CustomizedConditionActionMessage.repeatedFields_,
            null
          );
        }),
        o.inherits(
          proto.webcast.data.CustomizedConditionActionMessage,
          r.Message
        ),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.CustomizedConditionActionMessage.displayName =
            "proto.webcast.data.CustomizedConditionActionMessage"),
        (proto.webcast.data.RoomExtraLotteryInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.RoomExtraLotteryInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.RoomExtraLotteryInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.RoomExtraLotteryInfo.displayName =
            "proto.webcast.data.RoomExtraLotteryInfo"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryUserCondition.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryUserCondition.toObject(e, this);
            }),
          (proto.webcast.data.LotteryUserCondition.toObject = function (e, t) {
            var a = {
              isWatching: r.Message.getBooleanFieldWithDefault(t, 1, !1),
              hasCommand: r.Message.getBooleanFieldWithDefault(t, 2, !1),
              hasFollow: r.Message.getBooleanFieldWithDefault(t, 3, !1),
              isFansclubMember: r.Message.getBooleanFieldWithDefault(t, 4, !1),
              hasGift: r.Message.getBooleanFieldWithDefault(t, 5, !1),
              fansLevel: r.Message.getFieldWithDefault(t, 6, "0"),
              fansclubStatusActive: r.Message.getBooleanFieldWithDefault(
                t,
                7,
                !1
              ),
              hasShared: r.Message.getBooleanFieldWithDefault(t, 8, !1),
              hasHelpWish: r.Message.getBooleanFieldWithDefault(t, 9, !1),
              hasActivated: r.Message.getBooleanFieldWithDefault(t, 10, !1),
              isSubscribeMember: r.Message.getBooleanFieldWithDefault(
                t,
                11,
                !1
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryUserCondition.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryUserCondition();
          return proto.webcast.data.LotteryUserCondition.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryUserCondition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readBool();
                  e.setIsWatching(a);
                  break;
                case 2:
                  a = t.readBool();
                  e.setHasCommand(a);
                  break;
                case 3:
                  a = t.readBool();
                  e.setHasFollow(a);
                  break;
                case 4:
                  a = t.readBool();
                  e.setIsFansclubMember(a);
                  break;
                case 5:
                  a = t.readBool();
                  e.setHasGift(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setFansLevel(a);
                  break;
                case 7:
                  a = t.readBool();
                  e.setFansclubStatusActive(a);
                  break;
                case 8:
                  a = t.readBool();
                  e.setHasShared(a);
                  break;
                case 9:
                  a = t.readBool();
                  e.setHasHelpWish(a);
                  break;
                case 10:
                  a = t.readBool();
                  e.setHasActivated(a);
                  break;
                case 11:
                  a = t.readBool();
                  e.setIsSubscribeMember(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryUserCondition.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryUserCondition.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getIsWatching()) && t.writeBool(1, a),
              (a = e.getHasCommand()) && t.writeBool(2, a),
              (a = e.getHasFollow()) && t.writeBool(3, a),
              (a = e.getIsFansclubMember()) && t.writeBool(4, a),
              (a = e.getHasGift()) && t.writeBool(5, a),
              (a = e.getFansLevel()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getFansclubStatusActive()) && t.writeBool(7, a),
              (a = e.getHasShared()) && t.writeBool(8, a),
              (a = e.getHasHelpWish()) && t.writeBool(9, a),
              (a = e.getHasActivated()) && t.writeBool(10, a),
              (a = e.getIsSubscribeMember()) && t.writeBool(11, a);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getIsWatching =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setIsWatching =
          function (e) {
            return r.Message.setProto3BooleanField(this, 1, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasCommand =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasCommand =
          function (e) {
            return r.Message.setProto3BooleanField(this, 2, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasFollow =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasFollow =
          function (e) {
            return r.Message.setProto3BooleanField(this, 3, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getIsFansclubMember =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setIsFansclubMember =
          function (e) {
            return r.Message.setProto3BooleanField(this, 4, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasGift =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 5, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasGift =
          function (e) {
            return r.Message.setProto3BooleanField(this, 5, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getFansLevel =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setFansLevel =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getFansclubStatusActive =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 7, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setFansclubStatusActive =
          function (e) {
            return r.Message.setProto3BooleanField(this, 7, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasShared =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 8, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasShared =
          function (e) {
            return r.Message.setProto3BooleanField(this, 8, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasHelpWish =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 9, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasHelpWish =
          function (e) {
            return r.Message.setProto3BooleanField(this, 9, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getHasActivated =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 10, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setHasActivated =
          function (e) {
            return r.Message.setProto3BooleanField(this, 10, e);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.getIsSubscribeMember =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 11, !1);
          }),
        (proto.webcast.data.LotteryUserCondition.prototype.setIsSubscribeMember =
          function (e) {
            return r.Message.setProto3BooleanField(this, 11, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryUserCustomizedCondition.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryUserCustomizedCondition.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryUserCustomizedCondition.toObject =
            function (e, t) {
              var a = {
                conditionType: r.Message.getFieldWithDefault(t, 1, 0),
                canParticipate: r.Message.getBooleanFieldWithDefault(t, 2, !1),
                rejectDesc: r.Message.getFieldWithDefault(t, 3, ""),
                hasMeetCondition: r.Message.getBooleanFieldWithDefault(
                  t,
                  4,
                  !1
                ),
                guideText: r.Message.getFieldWithDefault(t, 5, ""),
                guideSchema: r.Message.getFieldWithDefault(t, 6, ""),
              };
              return e && (a.$jspbMessageInstance = t), a;
            })),
        (proto.webcast.data.LotteryUserCustomizedCondition.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryUserCustomizedCondition();
            return proto.webcast.data.LotteryUserCustomizedCondition.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setConditionType(a);
                  break;
                case 2:
                  a = t.readBool();
                  e.setCanParticipate(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setRejectDesc(a);
                  break;
                case 4:
                  a = t.readBool();
                  e.setHasMeetCondition(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setGuideText(a);
                  break;
                case 6:
                  a = t.readString();
                  e.setGuideSchema(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryUserCustomizedCondition.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getConditionType()) && t.writeInt32(1, a),
              (a = e.getCanParticipate()) && t.writeBool(2, a),
              (a = e.getRejectDesc()).length > 0 && t.writeString(3, a),
              (a = e.getHasMeetCondition()) && t.writeBool(4, a),
              (a = e.getGuideText()).length > 0 && t.writeString(5, a),
              (a = e.getGuideSchema()).length > 0 && t.writeString(6, a);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getConditionType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setConditionType =
          function (e) {
            return r.Message.setProto3IntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getCanParticipate =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 2, !1);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setCanParticipate =
          function (e) {
            return r.Message.setProto3BooleanField(this, 2, e);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getRejectDesc =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setRejectDesc =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getHasMeetCondition =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setHasMeetCondition =
          function (e) {
            return r.Message.setProto3BooleanField(this, 4, e);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getGuideText =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setGuideText =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.getGuideSchema =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "");
          }),
        (proto.webcast.data.LotteryUserCustomizedCondition.prototype.setGuideSchema =
          function (e) {
            return r.Message.setProto3StringField(this, 6, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CandidateUser.prototype.toObject = function (e) {
            return proto.webcast.data.CandidateUser.toObject(e, this);
          }),
          (proto.webcast.data.CandidateUser.toObject = function (e, t) {
            var a = {
              userId: r.Message.getFieldWithDefault(t, 1, "0"),
              userName: r.Message.getFieldWithDefault(t, 2, ""),
              avatarUrl: r.Message.getFieldWithDefault(t, 3, ""),
              secUserId: r.Message.getFieldWithDefault(t, 4, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.CandidateUser.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CandidateUser();
          return proto.webcast.data.CandidateUser.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CandidateUser.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setUserName(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setAvatarUrl(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setSecUserId(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CandidateUser.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CandidateUser.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CandidateUser.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getUserId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getUserName()).length > 0 && t.writeString(2, a),
            (a = e.getAvatarUrl()).length > 0 && t.writeString(3, a),
            (a = e.getSecUserId()).length > 0 && t.writeString(4, a);
        }),
        (proto.webcast.data.CandidateUser.prototype.getUserId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.CandidateUser.prototype.setUserId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.CandidateUser.prototype.getUserName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.CandidateUser.prototype.setUserName = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.CandidateUser.prototype.getAvatarUrl = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.CandidateUser.prototype.setAvatarUrl = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.CandidateUser.prototype.getSecUserId = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.CandidateUser.prototype.setSecUserId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.LotteryDefaultConfig.repeatedFields_ = [9]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryDefaultConfig.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryDefaultConfig.toObject(e, this);
            }),
          (proto.webcast.data.LotteryDefaultConfig.toObject = function (e, t) {
            var a,
              o = {
                countDown: r.Message.getFieldWithDefault(t, 1, "0"),
                userNum: r.Message.getFieldWithDefault(t, 2, "0"),
                prizeCount: r.Message.getFieldWithDefault(t, 3, "0"),
                giftId: r.Message.getFieldWithDefault(t, 4, "0"),
                giftCount: r.Message.getFieldWithDefault(t, 5, "0"),
                isFirstLottery: r.Message.getFieldWithDefault(t, 6, "0"),
                command: r.Message.getFieldWithDefault(t, 7, ""),
                prizeName: r.Message.getFieldWithDefault(t, 8, ""),
                conditionTypesList:
                  null == (a = r.Message.getRepeatedField(t, 9)) ? void 0 : a,
                prizeAverage: r.Message.getFieldWithDefault(t, 10, "0"),
                prizeDescription: r.Message.getFieldWithDefault(t, 11, ""),
                minFansLevel: r.Message.getFieldWithDefault(t, 12, "0"),
                phoneNum: r.Message.getFieldWithDefault(t, 13, ""),
                bytepayVoucherSwitcher: r.Message.getFieldWithDefault(
                  t,
                  14,
                  "0"
                ),
                sendType: r.Message.getFieldWithDefault(t, 15, 0),
                regularlyConfig:
                  (a = t.getRegularlyConfig()) &&
                  proto.webcast.data.LotteryRegularlyConfig.toObject(e, a),
                countDownV2: r.Message.getFieldWithDefault(t, 101, "0"),
                userNumV2: r.Message.getFieldWithDefault(t, 102, "0"),
                prizeAverageV2: r.Message.getFieldWithDefault(t, 103, "0"),
                minFansLevelV2: r.Message.getFieldWithDefault(t, 104, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LotteryDefaultConfig.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryDefaultConfig();
          return proto.webcast.data.LotteryDefaultConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryDefaultConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setCountDown(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setUserNum(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setPrizeCount(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setGiftId(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setGiftCount(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setIsFirstLottery(a);
                  break;
                case 7:
                  a = t.readString();
                  e.setCommand(a);
                  break;
                case 8:
                  a = t.readString();
                  e.setPrizeName(a);
                  break;
                case 9:
                  for (
                    var r = t.isDelimited()
                        ? t.readPackedInt32()
                        : [t.readInt32()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addConditionTypes(r[o]);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setPrizeAverage(a);
                  break;
                case 11:
                  a = t.readString();
                  e.setPrizeDescription(a);
                  break;
                case 12:
                  a = t.readInt64String();
                  e.setMinFansLevel(a);
                  break;
                case 13:
                  a = t.readString();
                  e.setPhoneNum(a);
                  break;
                case 14:
                  a = t.readInt64String();
                  e.setBytepayVoucherSwitcher(a);
                  break;
                case 15:
                  a = t.readEnum();
                  e.setSendType(a);
                  break;
                case 16:
                  a = new proto.webcast.data.LotteryRegularlyConfig();
                  t.readMessage(
                    a,
                    proto.webcast.data.LotteryRegularlyConfig
                      .deserializeBinaryFromReader
                  ),
                    e.setRegularlyConfig(a);
                  break;
                case 101:
                  a = t.readInt64String();
                  e.setCountDownV2(a);
                  break;
                case 102:
                  a = t.readInt64String();
                  e.setUserNumV2(a);
                  break;
                case 103:
                  a = t.readInt64String();
                  e.setPrizeAverageV2(a);
                  break;
                case 104:
                  a = t.readInt64String();
                  e.setMinFansLevelV2(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryDefaultConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryDefaultConfig.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getCountDown()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getUserNum()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getPrizeCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getGiftId()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getGiftCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getIsFirstLottery()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getCommand()).length > 0 && t.writeString(7, a),
              (a = e.getPrizeName()).length > 0 && t.writeString(8, a),
              (a = e.getConditionTypesList()).length > 0 &&
                t.writePackedInt32(9, a),
              (a = e.getPrizeAverage()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getPrizeDescription()).length > 0 && t.writeString(11, a),
              (a = e.getMinFansLevel()),
              0 !== parseInt(a, 10) && t.writeInt64String(12, a),
              (a = e.getPhoneNum()).length > 0 && t.writeString(13, a),
              (a = e.getBytepayVoucherSwitcher()),
              0 !== parseInt(a, 10) && t.writeInt64String(14, a),
              0 !== (a = e.getSendType()) && t.writeEnum(15, a),
              null != (a = e.getRegularlyConfig()) &&
                t.writeMessage(
                  16,
                  a,
                  proto.webcast.data.LotteryRegularlyConfig
                    .serializeBinaryToWriter
                ),
              (a = e.getCountDownV2()),
              0 !== parseInt(a, 10) && t.writeInt64String(101, a),
              (a = e.getUserNumV2()),
              0 !== parseInt(a, 10) && t.writeInt64String(102, a),
              (a = e.getPrizeAverageV2()),
              0 !== parseInt(a, 10) && t.writeInt64String(103, a),
              (a = e.getMinFansLevelV2()),
              0 !== parseInt(a, 10) && t.writeInt64String(104, a);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getCountDown =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setCountDown =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getUserNum =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setUserNum =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPrizeCount =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPrizeCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getGiftId =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setGiftId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getGiftCount =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setGiftCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getIsFirstLottery =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setIsFirstLottery =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getCommand =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setCommand =
          function (e) {
            return r.Message.setProto3StringField(this, 7, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPrizeName =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPrizeName =
          function (e) {
            return r.Message.setProto3StringField(this, 8, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getConditionTypesList =
          function () {
            return r.Message.getRepeatedField(this, 9);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setConditionTypesList =
          function (e) {
            return r.Message.setField(this, 9, e || []);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.addConditionTypes =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 9, e, t);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.clearConditionTypesList =
          function () {
            return this.setConditionTypesList([]);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPrizeAverage =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPrizeAverage =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPrizeDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPrizeDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 11, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getMinFansLevel =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setMinFansLevel =
          function (e) {
            return r.Message.setProto3StringIntField(this, 12, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPhoneNum =
          function () {
            return r.Message.getFieldWithDefault(this, 13, "");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPhoneNum =
          function (e) {
            return r.Message.setProto3StringField(this, 13, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getBytepayVoucherSwitcher =
          function () {
            return r.Message.getFieldWithDefault(this, 14, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setBytepayVoucherSwitcher =
          function (e) {
            return r.Message.setProto3StringIntField(this, 14, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getSendType =
          function () {
            return r.Message.getFieldWithDefault(this, 15, 0);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setSendType =
          function (e) {
            return r.Message.setProto3EnumField(this, 15, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getRegularlyConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LotteryRegularlyConfig,
              16
            );
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setRegularlyConfig =
          function (e) {
            return r.Message.setWrapperField(this, 16, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.clearRegularlyConfig =
          function () {
            return this.setRegularlyConfig(void 0);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.hasRegularlyConfig =
          function () {
            return null != r.Message.getField(this, 16);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getCountDownV2 =
          function () {
            return r.Message.getFieldWithDefault(this, 101, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setCountDownV2 =
          function (e) {
            return r.Message.setProto3StringIntField(this, 101, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getUserNumV2 =
          function () {
            return r.Message.getFieldWithDefault(this, 102, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setUserNumV2 =
          function (e) {
            return r.Message.setProto3StringIntField(this, 102, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getPrizeAverageV2 =
          function () {
            return r.Message.getFieldWithDefault(this, 103, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setPrizeAverageV2 =
          function (e) {
            return r.Message.setProto3StringIntField(this, 103, e);
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.getMinFansLevelV2 =
          function () {
            return r.Message.getFieldWithDefault(this, 104, "0");
          }),
        (proto.webcast.data.LotteryDefaultConfig.prototype.setMinFansLevelV2 =
          function (e) {
            return r.Message.setProto3StringIntField(this, 104, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GiftInfo.prototype.toObject = function (e) {
            return proto.webcast.data.GiftInfo.toObject(e, this);
          }),
          (proto.webcast.data.GiftInfo.toObject = function (e, t) {
            var a = {
              giftId: r.Message.getFieldWithDefault(t, 1, "0"),
              giftName: r.Message.getFieldWithDefault(t, 2, ""),
              giftImgUrl: r.Message.getFieldWithDefault(t, 3, ""),
              diamondCount: r.Message.getFieldWithDefault(t, 4, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.GiftInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.GiftInfo();
          return proto.webcast.data.GiftInfo.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.GiftInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt64String();
                e.setGiftId(a);
                break;
              case 2:
                a = t.readString();
                e.setGiftName(a);
                break;
              case 3:
                a = t.readString();
                e.setGiftImgUrl(a);
                break;
              case 4:
                a = t.readInt64String();
                e.setDiamondCount(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.GiftInfo.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.GiftInfo.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.GiftInfo.serializeBinaryToWriter = function (e, t) {
          var a = void 0;
          (a = e.getGiftId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getGiftName()).length > 0 && t.writeString(2, a),
            (a = e.getGiftImgUrl()).length > 0 && t.writeString(3, a),
            (a = e.getDiamondCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(4, a);
        }),
        (proto.webcast.data.GiftInfo.prototype.getGiftId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.GiftInfo.prototype.setGiftId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.GiftInfo.prototype.getGiftName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.GiftInfo.prototype.setGiftName = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.GiftInfo.prototype.getGiftImgUrl = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.GiftInfo.prototype.setGiftImgUrl = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.GiftInfo.prototype.getDiamondCount = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.GiftInfo.prototype.setDiamondCount = function (e) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.CustomizableOption.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CustomizableOption.prototype.toObject =
            function (e) {
              return proto.webcast.data.CustomizableOption.toObject(e, this);
            }),
          (proto.webcast.data.CustomizableOption.toObject = function (e, t) {
            var a,
              o = {
                fixedOptionList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                upperLimit: r.Message.getFieldWithDefault(t, 2, "0"),
                lowerLimit: r.Message.getFieldWithDefault(t, 3, "0"),
                supportCustomInput: r.Message.getBooleanFieldWithDefault(
                  t,
                  4,
                  !1
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.CustomizableOption.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CustomizableOption();
          return proto.webcast.data.CustomizableOption.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CustomizableOption.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  for (
                    var a = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addFixedOption(a[r]);
                  break;
                case 2:
                  var o = t.readInt64String();
                  e.setUpperLimit(o);
                  break;
                case 3:
                  o = t.readInt64String();
                  e.setLowerLimit(o);
                  break;
                case 4:
                  o = t.readBool();
                  e.setSupportCustomInput(o);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CustomizableOption.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CustomizableOption.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CustomizableOption.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getFixedOptionList()).length > 0 &&
              t.writePackedInt64String(1, a),
              (a = e.getUpperLimit()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getLowerLimit()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getSupportCustomInput()) && t.writeBool(4, a);
          }),
        (proto.webcast.data.CustomizableOption.prototype.getFixedOptionList =
          function () {
            return r.Message.getRepeatedField(this, 1);
          }),
        (proto.webcast.data.CustomizableOption.prototype.setFixedOptionList =
          function (e) {
            return r.Message.setField(this, 1, e || []);
          }),
        (proto.webcast.data.CustomizableOption.prototype.addFixedOption =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 1, e, t);
          }),
        (proto.webcast.data.CustomizableOption.prototype.clearFixedOptionList =
          function () {
            return this.setFixedOptionList([]);
          }),
        (proto.webcast.data.CustomizableOption.prototype.getUpperLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.CustomizableOption.prototype.setUpperLimit =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.CustomizableOption.prototype.getLowerLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.CustomizableOption.prototype.setLowerLimit =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.CustomizableOption.prototype.getSupportCustomInput =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 4, !1);
          }),
        (proto.webcast.data.CustomizableOption.prototype.setSupportCustomInput =
          function (e) {
            return r.Message.setProto3BooleanField(this, 4, e);
          }),
        (proto.webcast.data.LotteryConfig.repeatedFields_ = [
          3, 1, 2, 7, 8, 9, 10, 11, 12, 14, 17, 21, 22, 23, 50, 102,
        ]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryConfig.prototype.toObject = function (e) {
            return proto.webcast.data.LotteryConfig.toObject(e, this);
          }),
          (proto.webcast.data.LotteryConfig.toObject = function (e, t) {
            var a,
              o = {
                countDownsList:
                  null == (a = r.Message.getRepeatedField(t, 3)) ? void 0 : a,
                userNumsList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                prizeCountsList:
                  null == (a = r.Message.getRepeatedField(t, 2)) ? void 0 : a,
                defaultConfig:
                  (a = t.getDefaultConfig()) &&
                  proto.webcast.data.LotteryDefaultConfig.toObject(e, a),
                prizeType: r.Message.getFieldWithDefault(t, 5, 0),
                prizeName: r.Message.getFieldWithDefault(t, 6, ""),
                userConditionTypesList:
                  null == (a = r.Message.getRepeatedField(t, 7)) ? void 0 : a,
                lotteryConditionTypesList:
                  null == (a = r.Message.getRepeatedField(t, 8)) ? void 0 : a,
                giftInfoListList: r.Message.toObjectList(
                  t.getGiftInfoListList(),
                  proto.webcast.data.GiftInfo.toObject,
                  e
                ),
                giftCountsList:
                  null == (a = r.Message.getRepeatedField(t, 10)) ? void 0 : a,
                whiteListList:
                  null == (a = r.Message.getRepeatedField(t, 11)) ? void 0 : a,
                blackListList:
                  null == (a = r.Message.getRepeatedField(t, 12)) ? void 0 : a,
                enable: r.Message.getFieldWithDefault(t, 13, "0"),
                prizeAveragesList:
                  null == (a = r.Message.getRepeatedField(t, 14)) ? void 0 : a,
                lotteryConfigType: r.Message.getFieldWithDefault(t, 15, "0"),
                prizeDescription: r.Message.getFieldWithDefault(t, 16, ""),
                fansLevelConfigListList: r.Message.toObjectList(
                  t.getFansLevelConfigListList(),
                  proto.webcast.data.LotteryFansLevelConfig.toObject,
                  e
                ),
                accountScores: r.Message.getFieldWithDefault(t, 18, "0"),
                needRechargeAmount: r.Message.getFieldWithDefault(t, 19, "0"),
                rechargeSwitch: r.Message.getBooleanFieldWithDefault(t, 20, !1),
                expandActivityInfoListList: r.Message.toObjectList(
                  t.getExpandActivityInfoListList(),
                  proto.webcast.data.LotteryExpandActivityInfo.toObject,
                  e
                ),
                sendCountsList:
                  null == (a = r.Message.getRepeatedField(t, 22)) ? void 0 : a,
                sendIntervalList:
                  null == (a = r.Message.getRepeatedField(t, 23)) ? void 0 : a,
                supportLaunchTask: r.Message.getBooleanFieldWithDefault(
                  t,
                  26,
                  !1
                ),
                usedCount: r.Message.getFieldWithDefault(t, 27, 0),
                dailyCountLimit: r.Message.getFieldWithDefault(t, 28, 0),
                customizedConditionTypesList: r.Message.toObjectList(
                  t.getCustomizedConditionTypesList(),
                  proto.webcast.data.CustomizedCondition.toObject,
                  e
                ),
                userNumsV2:
                  (a = t.getUserNumsV2()) &&
                  proto.webcast.data.CustomizableOption.toObject(e, a),
                countDownsV2List:
                  null == (a = r.Message.getRepeatedField(t, 102)) ? void 0 : a,
                prizeAveragesV2:
                  (a = t.getPrizeAveragesV2()) &&
                  proto.webcast.data.CustomizableOption.toObject(e, a),
                fansLevelConfigListV2:
                  (a = t.getFansLevelConfigListV2()) &&
                  proto.webcast.data.CustomizableOption.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LotteryConfig.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryConfig();
          return proto.webcast.data.LotteryConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 3:
                  for (
                    var a = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addCountDowns(a[r]);
                  break;
                case 1:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addUserNums(a[r]);
                  break;
                case 2:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addPrizeCounts(a[r]);
                  break;
                case 4:
                  var o = new proto.webcast.data.LotteryDefaultConfig();
                  t.readMessage(
                    o,
                    proto.webcast.data.LotteryDefaultConfig
                      .deserializeBinaryFromReader
                  ),
                    e.setDefaultConfig(o);
                  break;
                case 5:
                  o = t.readInt32();
                  e.setPrizeType(o);
                  break;
                case 6:
                  o = t.readString();
                  e.setPrizeName(o);
                  break;
                case 7:
                  for (
                    a = t.isDelimited() ? t.readPackedInt32() : [t.readInt32()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addUserConditionTypes(a[r]);
                  break;
                case 8:
                  for (
                    a = t.isDelimited() ? t.readPackedInt32() : [t.readInt32()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addLotteryConditionTypes(a[r]);
                  break;
                case 9:
                  o = new proto.webcast.data.GiftInfo();
                  t.readMessage(
                    o,
                    proto.webcast.data.GiftInfo.deserializeBinaryFromReader
                  ),
                    e.addGiftInfoList(o);
                  break;
                case 10:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addGiftCounts(a[r]);
                  break;
                case 11:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addWhiteList(a[r]);
                  break;
                case 12:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addBlackList(a[r]);
                  break;
                case 13:
                  o = t.readInt64String();
                  e.setEnable(o);
                  break;
                case 14:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addPrizeAverages(a[r]);
                  break;
                case 15:
                  o = t.readInt64String();
                  e.setLotteryConfigType(o);
                  break;
                case 16:
                  o = t.readString();
                  e.setPrizeDescription(o);
                  break;
                case 17:
                  o = new proto.webcast.data.LotteryFansLevelConfig();
                  t.readMessage(
                    o,
                    proto.webcast.data.LotteryFansLevelConfig
                      .deserializeBinaryFromReader
                  ),
                    e.addFansLevelConfigList(o);
                  break;
                case 18:
                  o = t.readInt64String();
                  e.setAccountScores(o);
                  break;
                case 19:
                  o = t.readInt64String();
                  e.setNeedRechargeAmount(o);
                  break;
                case 20:
                  o = t.readBool();
                  e.setRechargeSwitch(o);
                  break;
                case 21:
                  o = new proto.webcast.data.LotteryExpandActivityInfo();
                  t.readMessage(
                    o,
                    proto.webcast.data.LotteryExpandActivityInfo
                      .deserializeBinaryFromReader
                  ),
                    e.addExpandActivityInfoList(o);
                  break;
                case 22:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addSendCounts(a[r]);
                  break;
                case 23:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addSendInterval(a[r]);
                  break;
                case 26:
                  o = t.readBool();
                  e.setSupportLaunchTask(o);
                  break;
                case 27:
                  o = t.readInt32();
                  e.setUsedCount(o);
                  break;
                case 28:
                  o = t.readInt32();
                  e.setDailyCountLimit(o);
                  break;
                case 50:
                  o = new proto.webcast.data.CustomizedCondition();
                  t.readMessage(
                    o,
                    proto.webcast.data.CustomizedCondition
                      .deserializeBinaryFromReader
                  ),
                    e.addCustomizedConditionTypes(o);
                  break;
                case 101:
                  o = new proto.webcast.data.CustomizableOption();
                  t.readMessage(
                    o,
                    proto.webcast.data.CustomizableOption
                      .deserializeBinaryFromReader
                  ),
                    e.setUserNumsV2(o);
                  break;
                case 102:
                  for (
                    a = t.isDelimited()
                      ? t.readPackedInt64String()
                      : [t.readInt64String()],
                      r = 0;
                    r < a.length;
                    r++
                  )
                    e.addCountDownsV2(a[r]);
                  break;
                case 103:
                  o = new proto.webcast.data.CustomizableOption();
                  t.readMessage(
                    o,
                    proto.webcast.data.CustomizableOption
                      .deserializeBinaryFromReader
                  ),
                    e.setPrizeAveragesV2(o);
                  break;
                case 104:
                  o = new proto.webcast.data.CustomizableOption();
                  t.readMessage(
                    o,
                    proto.webcast.data.CustomizableOption
                      .deserializeBinaryFromReader
                  ),
                    e.setFansLevelConfigListV2(o);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryConfig.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryConfig.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getCountDownsList()).length > 0 &&
            t.writePackedInt64String(3, a),
            (a = e.getUserNumsList()).length > 0 &&
              t.writePackedInt64String(1, a),
            (a = e.getPrizeCountsList()).length > 0 &&
              t.writePackedInt64String(2, a),
            null != (a = e.getDefaultConfig()) &&
              t.writeMessage(
                4,
                a,
                proto.webcast.data.LotteryDefaultConfig.serializeBinaryToWriter
              ),
            0 !== (a = e.getPrizeType()) && t.writeInt32(5, a),
            (a = e.getPrizeName()).length > 0 && t.writeString(6, a),
            (a = e.getUserConditionTypesList()).length > 0 &&
              t.writePackedInt32(7, a),
            (a = e.getLotteryConditionTypesList()).length > 0 &&
              t.writePackedInt32(8, a),
            (a = e.getGiftInfoListList()).length > 0 &&
              t.writeRepeatedMessage(
                9,
                a,
                proto.webcast.data.GiftInfo.serializeBinaryToWriter
              ),
            (a = e.getGiftCountsList()).length > 0 &&
              t.writePackedInt64String(10, a),
            (a = e.getWhiteListList()).length > 0 &&
              t.writePackedInt64String(11, a),
            (a = e.getBlackListList()).length > 0 &&
              t.writePackedInt64String(12, a),
            (a = e.getEnable()),
            0 !== parseInt(a, 10) && t.writeInt64String(13, a),
            (a = e.getPrizeAveragesList()).length > 0 &&
              t.writePackedInt64String(14, a),
            (a = e.getLotteryConfigType()),
            0 !== parseInt(a, 10) && t.writeInt64String(15, a),
            (a = e.getPrizeDescription()).length > 0 && t.writeString(16, a),
            (a = e.getFansLevelConfigListList()).length > 0 &&
              t.writeRepeatedMessage(
                17,
                a,
                proto.webcast.data.LotteryFansLevelConfig
                  .serializeBinaryToWriter
              ),
            (a = e.getAccountScores()),
            0 !== parseInt(a, 10) && t.writeInt64String(18, a),
            (a = e.getNeedRechargeAmount()),
            0 !== parseInt(a, 10) && t.writeInt64String(19, a),
            (a = e.getRechargeSwitch()) && t.writeBool(20, a),
            (a = e.getExpandActivityInfoListList()).length > 0 &&
              t.writeRepeatedMessage(
                21,
                a,
                proto.webcast.data.LotteryExpandActivityInfo
                  .serializeBinaryToWriter
              ),
            (a = e.getSendCountsList()).length > 0 &&
              t.writePackedInt64String(22, a),
            (a = e.getSendIntervalList()).length > 0 &&
              t.writePackedInt64String(23, a),
            (a = e.getSupportLaunchTask()) && t.writeBool(26, a),
            0 !== (a = e.getUsedCount()) && t.writeInt32(27, a),
            0 !== (a = e.getDailyCountLimit()) && t.writeInt32(28, a),
            (a = e.getCustomizedConditionTypesList()).length > 0 &&
              t.writeRepeatedMessage(
                50,
                a,
                proto.webcast.data.CustomizedCondition.serializeBinaryToWriter
              ),
            null != (a = e.getUserNumsV2()) &&
              t.writeMessage(
                101,
                a,
                proto.webcast.data.CustomizableOption.serializeBinaryToWriter
              ),
            (a = e.getCountDownsV2List()).length > 0 &&
              t.writePackedInt64String(102, a),
            null != (a = e.getPrizeAveragesV2()) &&
              t.writeMessage(
                103,
                a,
                proto.webcast.data.CustomizableOption.serializeBinaryToWriter
              ),
            null != (a = e.getFansLevelConfigListV2()) &&
              t.writeMessage(
                104,
                a,
                proto.webcast.data.CustomizableOption.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.LotteryConfig.prototype.getCountDownsList =
          function () {
            return r.Message.getRepeatedField(this, 3);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setCountDownsList =
          function (e) {
            return r.Message.setField(this, 3, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addCountDowns = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 3, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearCountDownsList =
          function () {
            return this.setCountDownsList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getUserNumsList =
          function () {
            return r.Message.getRepeatedField(this, 1);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setUserNumsList = function (
          e
        ) {
          return r.Message.setField(this, 1, e || []);
        }),
        (proto.webcast.data.LotteryConfig.prototype.addUserNums = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 1, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearUserNumsList =
          function () {
            return this.setUserNumsList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeCountsList =
          function () {
            return r.Message.getRepeatedField(this, 2);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeCountsList =
          function (e) {
            return r.Message.setField(this, 2, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addPrizeCounts = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 2, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearPrizeCountsList =
          function () {
            return this.setPrizeCountsList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getDefaultConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LotteryDefaultConfig,
              4
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setDefaultConfig =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearDefaultConfig =
          function () {
            return this.setDefaultConfig(void 0);
          }),
        (proto.webcast.data.LotteryConfig.prototype.hasDefaultConfig =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeType = function () {
          return r.Message.getFieldWithDefault(this, 5, 0);
        }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeType = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 5, e);
        }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeName = function () {
          return r.Message.getFieldWithDefault(this, 6, "");
        }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 6, e);
        }),
        (proto.webcast.data.LotteryConfig.prototype.getUserConditionTypesList =
          function () {
            return r.Message.getRepeatedField(this, 7);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setUserConditionTypesList =
          function (e) {
            return r.Message.setField(this, 7, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addUserConditionTypes =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 7, e, t);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearUserConditionTypesList =
          function () {
            return this.setUserConditionTypesList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getLotteryConditionTypesList =
          function () {
            return r.Message.getRepeatedField(this, 8);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setLotteryConditionTypesList =
          function (e) {
            return r.Message.setField(this, 8, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addLotteryConditionTypes =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 8, e, t);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearLotteryConditionTypesList =
          function () {
            return this.setLotteryConditionTypesList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getGiftInfoListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.GiftInfo,
              9
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setGiftInfoListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 9, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addGiftInfoList = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            9,
            e,
            proto.webcast.data.GiftInfo,
            t
          );
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearGiftInfoListList =
          function () {
            return this.setGiftInfoListList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getGiftCountsList =
          function () {
            return r.Message.getRepeatedField(this, 10);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setGiftCountsList =
          function (e) {
            return r.Message.setField(this, 10, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addGiftCounts = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 10, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearGiftCountsList =
          function () {
            return this.setGiftCountsList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getWhiteListList =
          function () {
            return r.Message.getRepeatedField(this, 11);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setWhiteListList =
          function (e) {
            return r.Message.setField(this, 11, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addWhiteList = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 11, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearWhiteListList =
          function () {
            return this.setWhiteListList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getBlackListList =
          function () {
            return r.Message.getRepeatedField(this, 12);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setBlackListList =
          function (e) {
            return r.Message.setField(this, 12, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addBlackList = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 12, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearBlackListList =
          function () {
            return this.setBlackListList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getEnable = function () {
          return r.Message.getFieldWithDefault(this, 13, "0");
        }),
        (proto.webcast.data.LotteryConfig.prototype.setEnable = function (e) {
          return r.Message.setProto3StringIntField(this, 13, e);
        }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeAveragesList =
          function () {
            return r.Message.getRepeatedField(this, 14);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeAveragesList =
          function (e) {
            return r.Message.setField(this, 14, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addPrizeAverages =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 14, e, t);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearPrizeAveragesList =
          function () {
            return this.setPrizeAveragesList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getLotteryConfigType =
          function () {
            return r.Message.getFieldWithDefault(this, 15, "0");
          }),
        (proto.webcast.data.LotteryConfig.prototype.setLotteryConfigType =
          function (e) {
            return r.Message.setProto3StringIntField(this, 15, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 16, "");
          }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 16, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getFansLevelConfigListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryFansLevelConfig,
              17
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setFansLevelConfigListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 17, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addFansLevelConfigList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              17,
              e,
              proto.webcast.data.LotteryFansLevelConfig,
              t
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearFansLevelConfigListList =
          function () {
            return this.setFansLevelConfigListList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getAccountScores =
          function () {
            return r.Message.getFieldWithDefault(this, 18, "0");
          }),
        (proto.webcast.data.LotteryConfig.prototype.setAccountScores =
          function (e) {
            return r.Message.setProto3StringIntField(this, 18, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getNeedRechargeAmount =
          function () {
            return r.Message.getFieldWithDefault(this, 19, "0");
          }),
        (proto.webcast.data.LotteryConfig.prototype.setNeedRechargeAmount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 19, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getRechargeSwitch =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 20, !1);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setRechargeSwitch =
          function (e) {
            return r.Message.setProto3BooleanField(this, 20, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getExpandActivityInfoListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryExpandActivityInfo,
              21
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setExpandActivityInfoListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 21, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addExpandActivityInfoList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              21,
              e,
              proto.webcast.data.LotteryExpandActivityInfo,
              t
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearExpandActivityInfoListList =
          function () {
            return this.setExpandActivityInfoListList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getSendCountsList =
          function () {
            return r.Message.getRepeatedField(this, 22);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setSendCountsList =
          function (e) {
            return r.Message.setField(this, 22, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addSendCounts = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 22, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearSendCountsList =
          function () {
            return this.setSendCountsList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getSendIntervalList =
          function () {
            return r.Message.getRepeatedField(this, 23);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setSendIntervalList =
          function (e) {
            return r.Message.setField(this, 23, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addSendInterval = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 23, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearSendIntervalList =
          function () {
            return this.setSendIntervalList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getSupportLaunchTask =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 26, !1);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setSupportLaunchTask =
          function (e) {
            return r.Message.setProto3BooleanField(this, 26, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getUsedCount = function () {
          return r.Message.getFieldWithDefault(this, 27, 0);
        }),
        (proto.webcast.data.LotteryConfig.prototype.setUsedCount = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 27, e);
        }),
        (proto.webcast.data.LotteryConfig.prototype.getDailyCountLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 28, 0);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setDailyCountLimit =
          function (e) {
            return r.Message.setProto3IntField(this, 28, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getCustomizedConditionTypesList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.CustomizedCondition,
              50
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setCustomizedConditionTypesList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 50, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addCustomizedConditionTypes =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              50,
              e,
              proto.webcast.data.CustomizedCondition,
              t
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearCustomizedConditionTypesList =
          function () {
            return this.setCustomizedConditionTypesList([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getUserNumsV2 =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CustomizableOption,
              101
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setUserNumsV2 = function (
          e
        ) {
          return r.Message.setWrapperField(this, 101, e);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearUserNumsV2 =
          function () {
            return this.setUserNumsV2(void 0);
          }),
        (proto.webcast.data.LotteryConfig.prototype.hasUserNumsV2 =
          function () {
            return null != r.Message.getField(this, 101);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getCountDownsV2List =
          function () {
            return r.Message.getRepeatedField(this, 102);
          }),
        (proto.webcast.data.LotteryConfig.prototype.setCountDownsV2List =
          function (e) {
            return r.Message.setField(this, 102, e || []);
          }),
        (proto.webcast.data.LotteryConfig.prototype.addCountDownsV2 = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 102, e, t);
        }),
        (proto.webcast.data.LotteryConfig.prototype.clearCountDownsV2List =
          function () {
            return this.setCountDownsV2List([]);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getPrizeAveragesV2 =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CustomizableOption,
              103
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setPrizeAveragesV2 =
          function (e) {
            return r.Message.setWrapperField(this, 103, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearPrizeAveragesV2 =
          function () {
            return this.setPrizeAveragesV2(void 0);
          }),
        (proto.webcast.data.LotteryConfig.prototype.hasPrizeAveragesV2 =
          function () {
            return null != r.Message.getField(this, 103);
          }),
        (proto.webcast.data.LotteryConfig.prototype.getFansLevelConfigListV2 =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.CustomizableOption,
              104
            );
          }),
        (proto.webcast.data.LotteryConfig.prototype.setFansLevelConfigListV2 =
          function (e) {
            return r.Message.setWrapperField(this, 104, e);
          }),
        (proto.webcast.data.LotteryConfig.prototype.clearFansLevelConfigListV2 =
          function () {
            return this.setFansLevelConfigListV2(void 0);
          }),
        (proto.webcast.data.LotteryConfig.prototype.hasFansLevelConfigListV2 =
          function () {
            return null != r.Message.getField(this, 104);
          }),
        (proto.webcast.data.CustomizedCondition.repeatedFields_ = [4]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CustomizedCondition.prototype.toObject =
            function (e) {
              return proto.webcast.data.CustomizedCondition.toObject(e, this);
            }),
          (proto.webcast.data.CustomizedCondition.toObject = function (e, t) {
            var a,
              o = {
                conditionType: r.Message.getFieldWithDefault(t, 1, 0),
                description: r.Message.getFieldWithDefault(t, 2, ""),
                remarks: r.Message.getFieldWithDefault(t, 3, ""),
                countDownsList:
                  null == (a = r.Message.getRepeatedField(t, 4)) ? void 0 : a,
                bizInfo: r.Message.getFieldWithDefault(t, 50, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.CustomizedCondition.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.CustomizedCondition();
          return proto.webcast.data.CustomizedCondition.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.CustomizedCondition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setConditionType(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setDescription(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setRemarks(a);
                  break;
                case 4:
                  for (
                    var r = t.isDelimited()
                        ? t.readPackedInt64String()
                        : [t.readInt64String()],
                      o = 0;
                    o < r.length;
                    o++
                  )
                    e.addCountDowns(r[o]);
                  break;
                case 50:
                  a = t.readString();
                  e.setBizInfo(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CustomizedCondition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CustomizedCondition.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CustomizedCondition.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getConditionType()) && t.writeInt32(1, a),
              (a = e.getDescription()).length > 0 && t.writeString(2, a),
              (a = e.getRemarks()).length > 0 && t.writeString(3, a),
              (a = e.getCountDownsList()).length > 0 &&
                t.writePackedInt64String(4, a),
              (a = e.getBizInfo()).length > 0 && t.writeString(50, a);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.getConditionType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.setConditionType =
          function (e) {
            return r.Message.setProto3IntField(this, 1, e);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.getDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.CustomizedCondition.prototype.setDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.getRemarks =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.CustomizedCondition.prototype.setRemarks =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.getCountDownsList =
          function () {
            return r.Message.getRepeatedField(this, 4);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.setCountDownsList =
          function (e) {
            return r.Message.setField(this, 4, e || []);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.addCountDowns =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 4, e, t);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.clearCountDownsList =
          function () {
            return this.setCountDownsList([]);
          }),
        (proto.webcast.data.CustomizedCondition.prototype.getBizInfo =
          function () {
            return r.Message.getFieldWithDefault(this, 50, "");
          }),
        (proto.webcast.data.CustomizedCondition.prototype.setBizInfo =
          function (e) {
            return r.Message.setProto3StringField(this, 50, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryRewardDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryRewardDetail.toObject(e, this);
            }),
          (proto.webcast.data.LotteryRewardDetail.toObject = function (e, t) {
            var a = {
              prizeType: r.Message.getFieldWithDefault(t, 1, "0"),
              prizeName: r.Message.getFieldWithDefault(t, 2, ""),
              grantCount: r.Message.getFieldWithDefault(t, 3, "0"),
              expireTime: r.Message.getFieldWithDefault(t, 4, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryRewardDetail.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryRewardDetail();
          return proto.webcast.data.LotteryRewardDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryRewardDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setPrizeType(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setPrizeName(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setGrantCount(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setExpireTime(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryRewardDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryRewardDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getPrizeType()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getPrizeName()).length > 0 && t.writeString(2, a),
              (a = e.getGrantCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getExpireTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a);
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.getPrizeType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.setPrizeType =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.getPrizeName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.setPrizeName =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.getGrantCount =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.setGrantCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.getExpireTime =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.LotteryRewardDetail.prototype.setExpireTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryExpandActivityInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryExpandActivityInfo.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryExpandActivityInfo.toObject = function (
            e,
            t
          ) {
            var a,
              o = {
                bizId: r.Message.getFieldWithDefault(t, 1, "0"),
                expandActivityId: r.Message.getFieldWithDefault(t, 2, ""),
                ruleText: r.Message.getFieldWithDefault(t, 3, ""),
                tipsText: r.Message.getFieldWithDefault(t, 4, ""),
                expandLuckyCount: r.Message.getFieldWithDefault(t, 5, "0"),
                expandGrantCount: r.Message.getFieldWithDefault(t, 6, "0"),
                extraMap: (a = t.getExtraMap()) ? a.toObject(e, void 0) : [],
                extraGiftBag: r.Message.getFieldWithDefault(t, 10, ""),
                bytepayVoucherSwitcher: r.Message.getFieldWithDefault(
                  t,
                  11,
                  "0"
                ),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LotteryExpandActivityInfo.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryExpandActivityInfo();
            return proto.webcast.data.LotteryExpandActivityInfo.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setBizId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setExpandActivityId(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setRuleText(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setTipsText(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setExpandLuckyCount(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setExpandGrantCount(a);
                  break;
                case 7:
                  a = e.getExtraMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readString,
                      r.BinaryReader.prototype.readString,
                      null,
                      "",
                      ""
                    );
                  });
                  break;
                case 10:
                  a = t.readString();
                  e.setExtraGiftBag(a);
                  break;
                case 11:
                  a = t.readInt64String();
                  e.setBytepayVoucherSwitcher(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryExpandActivityInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getBizId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getExpandActivityId()).length > 0 && t.writeString(2, a),
              (a = e.getRuleText()).length > 0 && t.writeString(3, a),
              (a = e.getTipsText()).length > 0 && t.writeString(4, a),
              (a = e.getExpandLuckyCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getExpandGrantCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getExtraMap(!0)) &&
                a.getLength() > 0 &&
                a.serializeBinary(
                  7,
                  t,
                  r.BinaryWriter.prototype.writeString,
                  r.BinaryWriter.prototype.writeString
                ),
              (a = e.getExtraGiftBag()).length > 0 && t.writeString(10, a),
              (a = e.getBytepayVoucherSwitcher()),
              0 !== parseInt(a, 10) && t.writeInt64String(11, a);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getBizId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setBizId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getExpandActivityId =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setExpandActivityId =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getRuleText =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setRuleText =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getTipsText =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setTipsText =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getExpandLuckyCount =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setExpandLuckyCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getExpandGrantCount =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setExpandGrantCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getExtraMap =
          function (e) {
            return r.Message.getMapField(this, 7, e, null);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.clearExtraMap =
          function () {
            return this.getExtraMap().clear(), this;
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getExtraGiftBag =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setExtraGiftBag =
          function (e) {
            return r.Message.setProto3StringField(this, 10, e);
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.getBytepayVoucherSwitcher =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "0");
          }),
        (proto.webcast.data.LotteryExpandActivityInfo.prototype.setBytepayVoucherSwitcher =
          function (e) {
            return r.Message.setProto3StringIntField(this, 11, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ExpandLotteryConfig.prototype.toObject =
            function (e) {
              return proto.webcast.data.ExpandLotteryConfig.toObject(e, this);
            }),
          (proto.webcast.data.ExpandLotteryConfig.toObject = function (e, t) {
            var a = {
              expandPrizeType: r.Message.getFieldWithDefault(t, 1, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ExpandLotteryConfig.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.ExpandLotteryConfig();
          return proto.webcast.data.ExpandLotteryConfig.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.ExpandLotteryConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a = t.readInt64String();
                e.setExpandPrizeType(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.ExpandLotteryConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ExpandLotteryConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ExpandLotteryConfig.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getExpandPrizeType()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a);
          }),
        (proto.webcast.data.ExpandLotteryConfig.prototype.getExpandPrizeType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.ExpandLotteryConfig.prototype.setExpandPrizeType =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryFansLevelConfig.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryFansLevelConfig.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryFansLevelConfig.toObject = function (
            e,
            t
          ) {
            var a = {
              level: r.Message.getFieldWithDefault(t, 1, "0"),
              dailyLimit: r.Message.getFieldWithDefault(t, 2, "0"),
              dailySendNum: r.Message.getFieldWithDefault(t, 3, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryFansLevelConfig.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryFansLevelConfig();
            return proto.webcast.data.LotteryFansLevelConfig.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryFansLevelConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setLevel(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setDailyLimit(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setDailySendNum(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryFansLevelConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryFansLevelConfig.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getLevel()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getDailyLimit()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getDailySendNum()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a);
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.getLevel =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.setLevel =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.getDailyLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.setDailyLimit =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.getDailySendNum =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.LotteryFansLevelConfig.prototype.setDailySendNum =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryRegularlyConfig.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryRegularlyConfig.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryRegularlyConfig.toObject = function (
            e,
            t
          ) {
            var a = {
              times: r.Message.getFieldWithDefault(t, 1, 0),
              interval: r.Message.getFieldWithDefault(t, 2, 0),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryRegularlyConfig.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryRegularlyConfig();
            return proto.webcast.data.LotteryRegularlyConfig.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryRegularlyConfig.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setTimes(a);
                  break;
                case 2:
                  a = t.readInt32();
                  e.setInterval(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryRegularlyConfig.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryRegularlyConfig.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryRegularlyConfig.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getTimes()) && t.writeInt32(1, a),
              0 !== (a = e.getInterval()) && t.writeInt32(2, a);
          }),
        (proto.webcast.data.LotteryRegularlyConfig.prototype.getTimes =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.LotteryRegularlyConfig.prototype.setTimes =
          function (e) {
            return r.Message.setProto3IntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryRegularlyConfig.prototype.getInterval =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.webcast.data.LotteryRegularlyConfig.prototype.setInterval =
          function (e) {
            return r.Message.setProto3IntField(this, 2, e);
          }),
        (proto.webcast.data.LotteryInfo.repeatedFields_ = [8, 19, 26]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryInfo.prototype.toObject = function (e) {
            return proto.webcast.data.LotteryInfo.toObject(e, this);
          }),
          (proto.webcast.data.LotteryInfo.toObject = function (e, t) {
            var a,
              o = {
                lotteryId: r.Message.getFieldWithDefault(t, 1, "0"),
                ownerUserId: r.Message.getFieldWithDefault(t, 2, "0"),
                anchorId: r.Message.getFieldWithDefault(t, 3, "0"),
                ownerType: r.Message.getFieldWithDefault(t, 4, 0),
                roomId: r.Message.getFieldWithDefault(t, 5, "0"),
                status: r.Message.getFieldWithDefault(t, 6, 0),
                prizeInfo:
                  (a = t.getPrizeInfo()) &&
                  proto.webcast.data.LotteryPrize.toObject(e, a),
                conditionsList: r.Message.toObjectList(
                  t.getConditionsList(),
                  proto.webcast.data.LotteryCondition.toObject,
                  e
                ),
                prizeCount: r.Message.getFieldWithDefault(t, 9, "0"),
                luckyCount: r.Message.getFieldWithDefault(t, 10, "0"),
                countDown: r.Message.getFieldWithDefault(t, 11, "0"),
                startTime: r.Message.getFieldWithDefault(t, 12, "0"),
                drawTime: r.Message.getFieldWithDefault(t, 13, "0"),
                extra: r.Message.getFieldWithDefault(t, 14, ""),
                realLuckyCount: r.Message.getFieldWithDefault(t, 15, "0"),
                totalGrantCount: r.Message.getFieldWithDefault(t, 16, "0"),
                withdrawCount: r.Message.getFieldWithDefault(t, 17, "0"),
                realDrawTime: r.Message.getFieldWithDefault(t, 18, "0"),
                luckyUsersList: r.Message.toObjectList(
                  t.getLuckyUsersList(),
                  proto.webcast.data.LotteryLuckyUser.toObject,
                  e
                ),
                currentTime: r.Message.getFieldWithDefault(t, 20, "0"),
                candidateNum: r.Message.getFieldWithDefault(t, 21, "0"),
                lotteryIdStr: r.Message.getFieldWithDefault(t, 22, ""),
                roomIdStr: r.Message.getFieldWithDefault(t, 23, ""),
                secAnchorId: r.Message.getFieldWithDefault(t, 24, ""),
                secOwnerUserId: r.Message.getFieldWithDefault(t, 25, ""),
                expandActivityInfoListList: r.Message.toObjectList(
                  t.getExpandActivityInfoListList(),
                  proto.webcast.data.LotteryExpandActivityInfo.toObject,
                  e
                ),
                useNewDrawInteraction: r.Message.getBooleanFieldWithDefault(
                  t,
                  27,
                  !1
                ),
                launchTaskId: r.Message.getFieldWithDefault(t, 30, ""),
                index: r.Message.getFieldWithDefault(t, 31, 0),
                launchTaskInfo:
                  (a = t.getLaunchTaskInfo()) &&
                  proto.webcast.data.LaunchTaskInfo.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LotteryInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryInfo();
          return proto.webcast.data.LotteryInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryInfo.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt64String();
                e.setLotteryId(a);
                break;
              case 2:
                a = t.readInt64String();
                e.setOwnerUserId(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setAnchorId(a);
                break;
              case 4:
                a = t.readInt32();
                e.setOwnerType(a);
                break;
              case 5:
                a = t.readInt64String();
                e.setRoomId(a);
                break;
              case 6:
                a = t.readInt32();
                e.setStatus(a);
                break;
              case 7:
                a = new proto.webcast.data.LotteryPrize();
                t.readMessage(
                  a,
                  proto.webcast.data.LotteryPrize.deserializeBinaryFromReader
                ),
                  e.setPrizeInfo(a);
                break;
              case 8:
                a = new proto.webcast.data.LotteryCondition();
                t.readMessage(
                  a,
                  proto.webcast.data.LotteryCondition
                    .deserializeBinaryFromReader
                ),
                  e.addConditions(a);
                break;
              case 9:
                a = t.readInt64String();
                e.setPrizeCount(a);
                break;
              case 10:
                a = t.readInt64String();
                e.setLuckyCount(a);
                break;
              case 11:
                a = t.readInt64String();
                e.setCountDown(a);
                break;
              case 12:
                a = t.readInt64String();
                e.setStartTime(a);
                break;
              case 13:
                a = t.readInt64String();
                e.setDrawTime(a);
                break;
              case 14:
                a = t.readString();
                e.setExtra(a);
                break;
              case 15:
                a = t.readInt64String();
                e.setRealLuckyCount(a);
                break;
              case 16:
                a = t.readInt64String();
                e.setTotalGrantCount(a);
                break;
              case 17:
                a = t.readInt64String();
                e.setWithdrawCount(a);
                break;
              case 18:
                a = t.readInt64String();
                e.setRealDrawTime(a);
                break;
              case 19:
                a = new proto.webcast.data.LotteryLuckyUser();
                t.readMessage(
                  a,
                  proto.webcast.data.LotteryLuckyUser
                    .deserializeBinaryFromReader
                ),
                  e.addLuckyUsers(a);
                break;
              case 20:
                a = t.readInt64String();
                e.setCurrentTime(a);
                break;
              case 21:
                a = t.readInt64String();
                e.setCandidateNum(a);
                break;
              case 22:
                a = t.readString();
                e.setLotteryIdStr(a);
                break;
              case 23:
                a = t.readString();
                e.setRoomIdStr(a);
                break;
              case 24:
                a = t.readString();
                e.setSecAnchorId(a);
                break;
              case 25:
                a = t.readString();
                e.setSecOwnerUserId(a);
                break;
              case 26:
                a = new proto.webcast.data.LotteryExpandActivityInfo();
                t.readMessage(
                  a,
                  proto.webcast.data.LotteryExpandActivityInfo
                    .deserializeBinaryFromReader
                ),
                  e.addExpandActivityInfoList(a);
                break;
              case 27:
                a = t.readBool();
                e.setUseNewDrawInteraction(a);
                break;
              case 30:
                a = t.readString();
                e.setLaunchTaskId(a);
                break;
              case 31:
                a = t.readInt32();
                e.setIndex(a);
                break;
              case 32:
                a = new proto.webcast.data.LaunchTaskInfo();
                t.readMessage(
                  a,
                  proto.webcast.data.LaunchTaskInfo.deserializeBinaryFromReader
                ),
                  e.setLaunchTaskInfo(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.LotteryInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryInfo.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getLotteryId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getOwnerUserId()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getAnchorId()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            0 !== (a = e.getOwnerType()) && t.writeInt32(4, a),
            (a = e.getRoomId()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a),
            0 !== (a = e.getStatus()) && t.writeInt32(6, a),
            null != (a = e.getPrizeInfo()) &&
              t.writeMessage(
                7,
                a,
                proto.webcast.data.LotteryPrize.serializeBinaryToWriter
              ),
            (a = e.getConditionsList()).length > 0 &&
              t.writeRepeatedMessage(
                8,
                a,
                proto.webcast.data.LotteryCondition.serializeBinaryToWriter
              ),
            (a = e.getPrizeCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(9, a),
            (a = e.getLuckyCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(10, a),
            (a = e.getCountDown()),
            0 !== parseInt(a, 10) && t.writeInt64String(11, a),
            (a = e.getStartTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(12, a),
            (a = e.getDrawTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(13, a),
            (a = e.getExtra()).length > 0 && t.writeString(14, a),
            (a = e.getRealLuckyCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(15, a),
            (a = e.getTotalGrantCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(16, a),
            (a = e.getWithdrawCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(17, a),
            (a = e.getRealDrawTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(18, a),
            (a = e.getLuckyUsersList()).length > 0 &&
              t.writeRepeatedMessage(
                19,
                a,
                proto.webcast.data.LotteryLuckyUser.serializeBinaryToWriter
              ),
            (a = e.getCurrentTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(20, a),
            (a = e.getCandidateNum()),
            0 !== parseInt(a, 10) && t.writeInt64String(21, a),
            (a = e.getLotteryIdStr()).length > 0 && t.writeString(22, a),
            (a = e.getRoomIdStr()).length > 0 && t.writeString(23, a),
            (a = e.getSecAnchorId()).length > 0 && t.writeString(24, a),
            (a = e.getSecOwnerUserId()).length > 0 && t.writeString(25, a),
            (a = e.getExpandActivityInfoListList()).length > 0 &&
              t.writeRepeatedMessage(
                26,
                a,
                proto.webcast.data.LotteryExpandActivityInfo
                  .serializeBinaryToWriter
              ),
            (a = e.getUseNewDrawInteraction()) && t.writeBool(27, a),
            (a = e.getLaunchTaskId()).length > 0 && t.writeString(30, a),
            0 !== (a = e.getIndex()) && t.writeInt32(31, a),
            null != (a = e.getLaunchTaskInfo()) &&
              t.writeMessage(
                32,
                a,
                proto.webcast.data.LaunchTaskInfo.serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.LotteryInfo.prototype.getLotteryId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setLotteryId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getOwnerUserId = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setOwnerUserId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getAnchorId = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setAnchorId = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getOwnerType = function () {
          return r.Message.getFieldWithDefault(this, 4, 0);
        }),
        (proto.webcast.data.LotteryInfo.prototype.setOwnerType = function (e) {
          return r.Message.setProto3IntField(this, 4, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getRoomId = function () {
          return r.Message.getFieldWithDefault(this, 5, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setRoomId = function (e) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getStatus = function () {
          return r.Message.getFieldWithDefault(this, 6, 0);
        }),
        (proto.webcast.data.LotteryInfo.prototype.setStatus = function (e) {
          return r.Message.setProto3IntField(this, 6, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getPrizeInfo = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.LotteryPrize,
            7
          );
        }),
        (proto.webcast.data.LotteryInfo.prototype.setPrizeInfo = function (e) {
          return r.Message.setWrapperField(this, 7, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.clearPrizeInfo = function () {
          return this.setPrizeInfo(void 0);
        }),
        (proto.webcast.data.LotteryInfo.prototype.hasPrizeInfo = function () {
          return null != r.Message.getField(this, 7);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getConditionsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryCondition,
              8
            );
          }),
        (proto.webcast.data.LotteryInfo.prototype.setConditionsList = function (
          e
        ) {
          return r.Message.setRepeatedWrapperField(this, 8, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.addConditions = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            8,
            e,
            proto.webcast.data.LotteryCondition,
            t
          );
        }),
        (proto.webcast.data.LotteryInfo.prototype.clearConditionsList =
          function () {
            return this.setConditionsList([]);
          }),
        (proto.webcast.data.LotteryInfo.prototype.getPrizeCount = function () {
          return r.Message.getFieldWithDefault(this, 9, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setPrizeCount = function (e) {
          return r.Message.setProto3StringIntField(this, 9, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getLuckyCount = function () {
          return r.Message.getFieldWithDefault(this, 10, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setLuckyCount = function (e) {
          return r.Message.setProto3StringIntField(this, 10, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getCountDown = function () {
          return r.Message.getFieldWithDefault(this, 11, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setCountDown = function (e) {
          return r.Message.setProto3StringIntField(this, 11, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getStartTime = function () {
          return r.Message.getFieldWithDefault(this, 12, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setStartTime = function (e) {
          return r.Message.setProto3StringIntField(this, 12, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getDrawTime = function () {
          return r.Message.getFieldWithDefault(this, 13, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setDrawTime = function (e) {
          return r.Message.setProto3StringIntField(this, 13, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getExtra = function () {
          return r.Message.getFieldWithDefault(this, 14, "");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setExtra = function (e) {
          return r.Message.setProto3StringField(this, 14, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getRealLuckyCount =
          function () {
            return r.Message.getFieldWithDefault(this, 15, "0");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setRealLuckyCount = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 15, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getTotalGrantCount =
          function () {
            return r.Message.getFieldWithDefault(this, 16, "0");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setTotalGrantCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 16, e);
          }),
        (proto.webcast.data.LotteryInfo.prototype.getWithdrawCount =
          function () {
            return r.Message.getFieldWithDefault(this, 17, "0");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setWithdrawCount = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 17, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getRealDrawTime =
          function () {
            return r.Message.getFieldWithDefault(this, 18, "0");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setRealDrawTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 18, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getLuckyUsersList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryLuckyUser,
              19
            );
          }),
        (proto.webcast.data.LotteryInfo.prototype.setLuckyUsersList = function (
          e
        ) {
          return r.Message.setRepeatedWrapperField(this, 19, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.addLuckyUsers = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            19,
            e,
            proto.webcast.data.LotteryLuckyUser,
            t
          );
        }),
        (proto.webcast.data.LotteryInfo.prototype.clearLuckyUsersList =
          function () {
            return this.setLuckyUsersList([]);
          }),
        (proto.webcast.data.LotteryInfo.prototype.getCurrentTime = function () {
          return r.Message.getFieldWithDefault(this, 20, "0");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setCurrentTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 20, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getCandidateNum =
          function () {
            return r.Message.getFieldWithDefault(this, 21, "0");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setCandidateNum = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 21, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getLotteryIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 22, "");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setLotteryIdStr = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 22, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getRoomIdStr = function () {
          return r.Message.getFieldWithDefault(this, 23, "");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setRoomIdStr = function (e) {
          return r.Message.setProto3StringField(this, 23, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getSecAnchorId = function () {
          return r.Message.getFieldWithDefault(this, 24, "");
        }),
        (proto.webcast.data.LotteryInfo.prototype.setSecAnchorId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 24, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getSecOwnerUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 25, "");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setSecOwnerUserId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 25, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getExpandActivityInfoListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryExpandActivityInfo,
              26
            );
          }),
        (proto.webcast.data.LotteryInfo.prototype.setExpandActivityInfoListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 26, e);
          }),
        (proto.webcast.data.LotteryInfo.prototype.addExpandActivityInfoList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              26,
              e,
              proto.webcast.data.LotteryExpandActivityInfo,
              t
            );
          }),
        (proto.webcast.data.LotteryInfo.prototype.clearExpandActivityInfoListList =
          function () {
            return this.setExpandActivityInfoListList([]);
          }),
        (proto.webcast.data.LotteryInfo.prototype.getUseNewDrawInteraction =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 27, !1);
          }),
        (proto.webcast.data.LotteryInfo.prototype.setUseNewDrawInteraction =
          function (e) {
            return r.Message.setProto3BooleanField(this, 27, e);
          }),
        (proto.webcast.data.LotteryInfo.prototype.getLaunchTaskId =
          function () {
            return r.Message.getFieldWithDefault(this, 30, "");
          }),
        (proto.webcast.data.LotteryInfo.prototype.setLaunchTaskId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 30, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getIndex = function () {
          return r.Message.getFieldWithDefault(this, 31, 0);
        }),
        (proto.webcast.data.LotteryInfo.prototype.setIndex = function (e) {
          return r.Message.setProto3IntField(this, 31, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.getLaunchTaskInfo =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LaunchTaskInfo,
              32
            );
          }),
        (proto.webcast.data.LotteryInfo.prototype.setLaunchTaskInfo = function (
          e
        ) {
          return r.Message.setWrapperField(this, 32, e);
        }),
        (proto.webcast.data.LotteryInfo.prototype.clearLaunchTaskInfo =
          function () {
            return this.setLaunchTaskInfo(void 0);
          }),
        (proto.webcast.data.LotteryInfo.prototype.hasLaunchTaskInfo =
          function () {
            return null != r.Message.getField(this, 32);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LaunchTaskInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.LaunchTaskInfo.toObject(e, this);
          }),
          (proto.webcast.data.LaunchTaskInfo.toObject = function (e, t) {
            var a,
              o = {
                launchTaskId: r.Message.getFieldWithDefault(t, 1, "0"),
                launchTaskIdStr: r.Message.getFieldWithDefault(t, 2, ""),
                launchTaskStatus: r.Message.getFieldWithDefault(t, 3, "0"),
                hadLaunchCount: r.Message.getFieldWithDefault(t, 5, "0"),
                lastLotteryId: r.Message.getFieldWithDefault(t, 6, "0"),
                regularlyConfig:
                  (a = t.getRegularlyConfig()) &&
                  proto.webcast.data.LotteryRegularlyConfig.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LaunchTaskInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LaunchTaskInfo();
          return proto.webcast.data.LaunchTaskInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LaunchTaskInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setLaunchTaskId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setLaunchTaskIdStr(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setLaunchTaskStatus(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setHadLaunchCount(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setLastLotteryId(a);
                  break;
                case 4:
                  a = new proto.webcast.data.LotteryRegularlyConfig();
                  t.readMessage(
                    a,
                    proto.webcast.data.LotteryRegularlyConfig
                      .deserializeBinaryFromReader
                  ),
                    e.setRegularlyConfig(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LaunchTaskInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LaunchTaskInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getLaunchTaskId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getLaunchTaskIdStr()).length > 0 && t.writeString(2, a),
            (a = e.getLaunchTaskStatus()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            (a = e.getHadLaunchCount()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a),
            (a = e.getLastLotteryId()),
            0 !== parseInt(a, 10) && t.writeInt64String(6, a),
            null != (a = e.getRegularlyConfig()) &&
              t.writeMessage(
                4,
                a,
                proto.webcast.data.LotteryRegularlyConfig
                  .serializeBinaryToWriter
              );
        }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getLaunchTaskId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setLaunchTaskId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getLaunchTaskIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setLaunchTaskIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getLaunchTaskStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setLaunchTaskStatus =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getHadLaunchCount =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setHadLaunchCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getLastLotteryId =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setLastLotteryId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.getRegularlyConfig =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.LotteryRegularlyConfig,
              4
            );
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.setRegularlyConfig =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.clearRegularlyConfig =
          function () {
            return this.setRegularlyConfig(void 0);
          }),
        (proto.webcast.data.LaunchTaskInfo.prototype.hasRegularlyConfig =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryPrize.prototype.toObject = function (e) {
            return proto.webcast.data.LotteryPrize.toObject(e, this);
          }),
          (proto.webcast.data.LotteryPrize.toObject = function (e, t) {
            var a = {
              prizeId: r.Message.getFieldWithDefault(t, 1, "0"),
              type: r.Message.getFieldWithDefault(t, 2, 0),
              name: r.Message.getFieldWithDefault(t, 3, ""),
              image: r.Message.getFieldWithDefault(t, 4, ""),
              prizeDescription: r.Message.getFieldWithDefault(t, 5, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryPrize.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryPrize();
          return proto.webcast.data.LotteryPrize.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryPrize.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setPrizeId(a);
                  break;
                case 2:
                  a = t.readInt32();
                  e.setType(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setName(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setImage(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setPrizeDescription(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryPrize.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryPrize.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryPrize.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getPrizeId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            0 !== (a = e.getType()) && t.writeInt32(2, a),
            (a = e.getName()).length > 0 && t.writeString(3, a),
            (a = e.getImage()).length > 0 && t.writeString(4, a),
            (a = e.getPrizeDescription()).length > 0 && t.writeString(5, a);
        }),
        (proto.webcast.data.LotteryPrize.prototype.getPrizeId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.LotteryPrize.prototype.setPrizeId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.LotteryPrize.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.LotteryPrize.prototype.setType = function (e) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.LotteryPrize.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.LotteryPrize.prototype.setName = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.LotteryPrize.prototype.getImage = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.LotteryPrize.prototype.setImage = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.LotteryPrize.prototype.getPrizeDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.LotteryPrize.prototype.setPrizeDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryCondition.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.LotteryCondition.toObject(e, this);
          }),
          (proto.webcast.data.LotteryCondition.toObject = function (e, t) {
            var a = {
              conditionId: r.Message.getFieldWithDefault(t, 1, "0"),
              type: r.Message.getFieldWithDefault(t, 2, 0),
              content: r.Message.getFieldWithDefault(t, 3, ""),
              status: r.Message.getFieldWithDefault(t, 4, 0),
              description: r.Message.getFieldWithDefault(t, 5, ""),
              giftId: r.Message.getFieldWithDefault(t, 6, "0"),
              giftCount: r.Message.getFieldWithDefault(t, 7, "0"),
              giftName: r.Message.getFieldWithDefault(t, 8, ""),
              needDiamondCount: r.Message.getFieldWithDefault(t, 9, "0"),
              minFansLevel: r.Message.getFieldWithDefault(t, 10, "0"),
              remarks: r.Message.getFieldWithDefault(t, 30, ""),
              bizInfo: r.Message.getFieldWithDefault(t, 31, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryCondition.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryCondition();
          return proto.webcast.data.LotteryCondition.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryCondition.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setConditionId(a);
                  break;
                case 2:
                  a = t.readInt32();
                  e.setType(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setContent(a);
                  break;
                case 4:
                  a = t.readInt32();
                  e.setStatus(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setDescription(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setGiftId(a);
                  break;
                case 7:
                  a = t.readInt64String();
                  e.setGiftCount(a);
                  break;
                case 8:
                  a = t.readString();
                  e.setGiftName(a);
                  break;
                case 9:
                  a = t.readInt64String();
                  e.setNeedDiamondCount(a);
                  break;
                case 10:
                  a = t.readInt64String();
                  e.setMinFansLevel(a);
                  break;
                case 30:
                  a = t.readString();
                  e.setRemarks(a);
                  break;
                case 31:
                  a = t.readString();
                  e.setBizInfo(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryCondition.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryCondition.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryCondition.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getConditionId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              0 !== (a = e.getType()) && t.writeInt32(2, a),
              (a = e.getContent()).length > 0 && t.writeString(3, a),
              0 !== (a = e.getStatus()) && t.writeInt32(4, a),
              (a = e.getDescription()).length > 0 && t.writeString(5, a),
              (a = e.getGiftId()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              (a = e.getGiftCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(7, a),
              (a = e.getGiftName()).length > 0 && t.writeString(8, a),
              (a = e.getNeedDiamondCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(9, a),
              (a = e.getMinFansLevel()),
              0 !== parseInt(a, 10) && t.writeInt64String(10, a),
              (a = e.getRemarks()).length > 0 && t.writeString(30, a),
              (a = e.getBizInfo()).length > 0 && t.writeString(31, a);
          }),
        (proto.webcast.data.LotteryCondition.prototype.getConditionId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setConditionId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.LotteryCondition.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.LotteryCondition.prototype.setType = function (e) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getContent =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setContent = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getStatus = function () {
          return r.Message.getFieldWithDefault(this, 4, 0);
        }),
        (proto.webcast.data.LotteryCondition.prototype.setStatus = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 4, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        (proto.webcast.data.LotteryCondition.prototype.getGiftId = function () {
          return r.Message.getFieldWithDefault(this, 6, "0");
        }),
        (proto.webcast.data.LotteryCondition.prototype.setGiftId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getGiftCount =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "0");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setGiftCount = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 7, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getGiftName =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setGiftName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 8, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getNeedDiamondCount =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "0");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setNeedDiamondCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 9, e);
          }),
        (proto.webcast.data.LotteryCondition.prototype.getMinFansLevel =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "0");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setMinFansLevel =
          function (e) {
            return r.Message.setProto3StringIntField(this, 10, e);
          }),
        (proto.webcast.data.LotteryCondition.prototype.getRemarks =
          function () {
            return r.Message.getFieldWithDefault(this, 30, "");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setRemarks = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 30, e);
        }),
        (proto.webcast.data.LotteryCondition.prototype.getBizInfo =
          function () {
            return r.Message.getFieldWithDefault(this, 31, "");
          }),
        (proto.webcast.data.LotteryCondition.prototype.setBizInfo = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 31, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.repeatedFields_ = [14]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryLuckyUser.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.LotteryLuckyUser.toObject(e, this);
          }),
          (proto.webcast.data.LotteryLuckyUser.toObject = function (e, t) {
            var a,
              o = {
                luckyId: r.Message.getFieldWithDefault(t, 1, "0"),
                lotteryId: r.Message.getFieldWithDefault(t, 2, "0"),
                roomId: r.Message.getFieldWithDefault(t, 3, "0"),
                userId: r.Message.getFieldWithDefault(t, 4, "0"),
                userName: r.Message.getFieldWithDefault(t, 5, ""),
                avatarUrl: r.Message.getFieldWithDefault(t, 6, ""),
                grantCount: r.Message.getFieldWithDefault(t, 7, "0"),
                userExtraInfo: r.Message.getFieldWithDefault(t, 8, ""),
                orderInfo: r.Message.getFieldWithDefault(t, 9, ""),
                secUserId: r.Message.getFieldWithDefault(t, 10, ""),
                prizeType: r.Message.getFieldWithDefault(t, 11, "0"),
                prizeName: r.Message.getFieldWithDefault(t, 12, ""),
                expireTime: r.Message.getFieldWithDefault(t, 13, "0"),
                voucherPrizeListList: r.Message.toObjectList(
                  t.getVoucherPrizeListList(),
                  proto.webcast.data.VoucherPrizeInfo.toObject,
                  e
                ),
                useNewAward: r.Message.getBooleanFieldWithDefault(t, 15, !1),
                award:
                  (a = t.getAward()) &&
                  proto.webcast.data.LotteryLuckyUser.Award.toObject(e, a),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.LotteryLuckyUser.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryLuckyUser();
          return proto.webcast.data.LotteryLuckyUser.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryLuckyUser.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setLuckyId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setLotteryId(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setRoomId(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setUserName(a);
                  break;
                case 6:
                  a = t.readString();
                  e.setAvatarUrl(a);
                  break;
                case 7:
                  a = t.readInt64String();
                  e.setGrantCount(a);
                  break;
                case 8:
                  a = t.readString();
                  e.setUserExtraInfo(a);
                  break;
                case 9:
                  a = t.readString();
                  e.setOrderInfo(a);
                  break;
                case 10:
                  a = t.readString();
                  e.setSecUserId(a);
                  break;
                case 11:
                  a = t.readInt64String();
                  e.setPrizeType(a);
                  break;
                case 12:
                  a = t.readString();
                  e.setPrizeName(a);
                  break;
                case 13:
                  a = t.readInt64String();
                  e.setExpireTime(a);
                  break;
                case 14:
                  a = new proto.webcast.data.VoucherPrizeInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.VoucherPrizeInfo
                      .deserializeBinaryFromReader
                  ),
                    e.addVoucherPrizeList(a);
                  break;
                case 15:
                  a = t.readBool();
                  e.setUseNewAward(a);
                  break;
                case 16:
                  a = new proto.webcast.data.LotteryLuckyUser.Award();
                  t.readMessage(
                    a,
                    proto.webcast.data.LotteryLuckyUser.Award
                      .deserializeBinaryFromReader
                  ),
                    e.setAward(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryLuckyUser.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getLuckyId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getLotteryId()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getRoomId()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getUserName()).length > 0 && t.writeString(5, a),
              (a = e.getAvatarUrl()).length > 0 && t.writeString(6, a),
              (a = e.getGrantCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(7, a),
              (a = e.getUserExtraInfo()).length > 0 && t.writeString(8, a),
              (a = e.getOrderInfo()).length > 0 && t.writeString(9, a),
              (a = e.getSecUserId()).length > 0 && t.writeString(10, a),
              (a = e.getPrizeType()),
              0 !== parseInt(a, 10) && t.writeInt64String(11, a),
              (a = e.getPrizeName()).length > 0 && t.writeString(12, a),
              (a = e.getExpireTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(13, a),
              (a = e.getVoucherPrizeListList()).length > 0 &&
                t.writeRepeatedMessage(
                  14,
                  a,
                  proto.webcast.data.VoucherPrizeInfo.serializeBinaryToWriter
                ),
              (a = e.getUseNewAward()) && t.writeBool(15, a),
              null != (a = e.getAward()) &&
                t.writeMessage(
                  16,
                  a,
                  proto.webcast.data.LotteryLuckyUser.Award
                    .serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.repeatedFields_ = [16]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryLuckyUser.Award.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryLuckyUser.Award.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryLuckyUser.Award.toObject = function (
            e,
            t
          ) {
            var a = {
              summaryDescription: r.Message.getFieldWithDefault(t, 15, ""),
              prizeDetailsList: r.Message.toObjectList(
                t.getPrizeDetailsList(),
                proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryLuckyUser.Award.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryLuckyUser.Award();
            return proto.webcast.data.LotteryLuckyUser.Award.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 15:
                  var a = t.readString();
                  e.setSummaryDescription(a);
                  break;
                case 16:
                  a =
                    new proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail
                      .deserializeBinaryFromReader
                  ),
                    e.addPrizeDetails(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryLuckyUser.Award.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getSummaryDescription()).length > 0 && t.writeString(15, a),
              (a = e.getPrizeDetailsList()).length > 0 &&
                t.writeRepeatedMessage(
                  16,
                  a,
                  proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail
                    .serializeBinaryToWriter
                );
          }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.toObject =
            function (e) {
              return proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.toObject =
            function (e, t) {
              var a = {
                interestShowType: r.Message.getFieldWithDefault(t, 1, 0),
                interestShowUnit: r.Message.getFieldWithDefault(t, 2, ""),
                interestValue: r.Message.getFieldWithDefault(t, 3, ""),
                prizeName: r.Message.getFieldWithDefault(t, 4, ""),
                prizeDescription: r.Message.getFieldWithDefault(t, 5, ""),
              };
              return e && (a.$jspbMessageInstance = t), a;
            })),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail();
            return proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readEnum();
                  e.setInterestShowType(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setInterestShowUnit(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setInterestValue(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setPrizeName(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setPrizeDescription(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            0 !== (a = e.getInterestShowType()) && t.writeEnum(1, a),
              (a = e.getInterestShowUnit()).length > 0 && t.writeString(2, a),
              (a = e.getInterestValue()).length > 0 && t.writeString(3, a),
              (a = e.getPrizeName()).length > 0 && t.writeString(4, a),
              (a = e.getPrizeDescription()).length > 0 && t.writeString(5, a);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.InterestShowType =
          {
            INTERESTSHOWTYPEUNKNOWN: 0,
            INTERESTSHOWTYPENUMBERANDUNIT: 1,
            INTERESTSHOWTYPENAMEONLY: 2,
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.getInterestShowType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.setInterestShowType =
          function (e) {
            return r.Message.setProto3EnumField(this, 1, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.getInterestShowUnit =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.setInterestShowUnit =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.getInterestValue =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.setInterestValue =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.getPrizeName =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.setPrizeName =
          function (e) {
            return r.Message.setProto3StringField(this, 4, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.getPrizeDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail.prototype.setPrizeDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.getSummaryDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 15, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.setSummaryDescription =
          function (e) {
            return r.Message.setProto3StringField(this, 15, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.getPrizeDetailsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail,
              16
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.setPrizeDetailsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 16, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.addPrizeDetails =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              16,
              e,
              proto.webcast.data.LotteryLuckyUser.Award.PrizeDetail,
              t
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.Award.prototype.clearPrizeDetailsList =
          function () {
            return this.setPrizeDetailsList([]);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getLuckyId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setLuckyId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getLotteryId =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setLotteryId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getRoomId = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setRoomId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getUserId = function () {
          return r.Message.getFieldWithDefault(this, 4, "0");
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setUserId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getUserName =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setUserName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getAvatarUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setAvatarUrl = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 6, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getGrantCount =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "0");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setGrantCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 7, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getUserExtraInfo =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setUserExtraInfo =
          function (e) {
            return r.Message.setProto3StringField(this, 8, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getOrderInfo =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setOrderInfo = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 9, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getSecUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 10, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setSecUserId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 10, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getPrizeType =
          function () {
            return r.Message.getFieldWithDefault(this, 11, "0");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setPrizeType = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 11, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getPrizeName =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setPrizeName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 12, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getExpireTime =
          function () {
            return r.Message.getFieldWithDefault(this, 13, "0");
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setExpireTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 13, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getVoucherPrizeListList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.VoucherPrizeInfo,
              14
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setVoucherPrizeListList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 14, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.addVoucherPrizeList =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              14,
              e,
              proto.webcast.data.VoucherPrizeInfo,
              t
            );
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.clearVoucherPrizeListList =
          function () {
            return this.setVoucherPrizeListList([]);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getUseNewAward =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 15, !1);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setUseNewAward =
          function (e) {
            return r.Message.setProto3BooleanField(this, 15, e);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.getAward = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.LotteryLuckyUser.Award,
            16
          );
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.setAward = function (e) {
          return r.Message.setWrapperField(this, 16, e);
        }),
        (proto.webcast.data.LotteryLuckyUser.prototype.clearAward =
          function () {
            return this.setAward(void 0);
          }),
        (proto.webcast.data.LotteryLuckyUser.prototype.hasAward = function () {
          return null != r.Message.getField(this, 16);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.VoucherPrizeInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.VoucherPrizeInfo.toObject(e, this);
          }),
          (proto.webcast.data.VoucherPrizeInfo.toObject = function (e, t) {
            var a = {
              prizeAmount: r.Message.getFieldWithDefault(t, 1, ""),
              prizeBatchName: r.Message.getFieldWithDefault(t, 2, ""),
              expireTime: r.Message.getFieldWithDefault(t, 3, "0"),
              prizeUnit: r.Message.getFieldWithDefault(t, 4, ""),
              desc: r.Message.getFieldWithDefault(t, 5, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.VoucherPrizeInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.VoucherPrizeInfo();
          return proto.webcast.data.VoucherPrizeInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.VoucherPrizeInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setPrizeAmount(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setPrizeBatchName(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setExpireTime(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setPrizeUnit(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setDesc(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.VoucherPrizeInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.VoucherPrizeInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getPrizeAmount()).length > 0 && t.writeString(1, a),
              (a = e.getPrizeBatchName()).length > 0 && t.writeString(2, a),
              (a = e.getExpireTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getPrizeUnit()).length > 0 && t.writeString(4, a),
              (a = e.getDesc()).length > 0 && t.writeString(5, a);
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.getPrizeAmount =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.setPrizeAmount =
          function (e) {
            return r.Message.setProto3StringField(this, 1, e);
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.getPrizeBatchName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.setPrizeBatchName =
          function (e) {
            return r.Message.setProto3StringField(this, 2, e);
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.getExpireTime =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.setExpireTime =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.getPrizeUnit =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.setPrizeUnit = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.getDesc = function () {
          return r.Message.getFieldWithDefault(this, 5, "");
        }),
        (proto.webcast.data.VoucherPrizeInfo.prototype.setDesc = function (e) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.LotteryGiftGuide.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.LotteryGiftGuide.toObject(e, this);
          }),
          (proto.webcast.data.LotteryGiftGuide.toObject = function (e, t) {
            var a = {
              giftId: r.Message.getFieldWithDefault(t, 1, "0"),
              giftDiamondCount: r.Message.getFieldWithDefault(t, 2, "0"),
              giftName: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.LotteryGiftGuide.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.LotteryGiftGuide();
          return proto.webcast.data.LotteryGiftGuide.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.LotteryGiftGuide.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setGiftId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setGiftDiamondCount(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setGiftName(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.LotteryGiftGuide.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.LotteryGiftGuide.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.LotteryGiftGuide.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getGiftId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getGiftDiamondCount()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getGiftName()).length > 0 && t.writeString(3, a);
          }),
        (proto.webcast.data.LotteryGiftGuide.prototype.getGiftId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.LotteryGiftGuide.prototype.setGiftId = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.LotteryGiftGuide.prototype.getGiftDiamondCount =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.LotteryGiftGuide.prototype.setGiftDiamondCount =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.LotteryGiftGuide.prototype.getGiftName =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.LotteryGiftGuide.prototype.setGiftName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.CustomizedConditionActionMessage.repeatedFields_ = [
          2,
        ]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.CustomizedConditionActionMessage.prototype.toObject =
            function (e) {
              return proto.webcast.data.CustomizedConditionActionMessage.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.CustomizedConditionActionMessage.toObject =
            function (e, t) {
              var a,
                o = {
                  conditionType: r.Message.getFieldWithDefault(t, 1, "0"),
                  actionKeysList:
                    null == (a = r.Message.getRepeatedField(t, 2)) ? void 0 : a,
                  meetCondition: r.Message.getBooleanFieldWithDefault(t, 3, !1),
                  timestamp: r.Message.getFieldWithDefault(t, 4, "0"),
                  roomId: r.Message.getFieldWithDefault(t, 5, "0"),
                  userId: r.Message.getFieldWithDefault(t, 6, "0"),
                  appId: r.Message.getFieldWithDefault(t, 7, 0),
                  deviceId: r.Message.getFieldWithDefault(t, 8, "0"),
                };
              return e && (o.$jspbMessageInstance = t), o;
            })),
        (proto.webcast.data.CustomizedConditionActionMessage.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.CustomizedConditionActionMessage();
            return proto.webcast.data.CustomizedConditionActionMessage.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setConditionType(a);
                  break;
                case 2:
                  a = t.readString();
                  e.addActionKeys(a);
                  break;
                case 3:
                  a = t.readBool();
                  e.setMeetCondition(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setTimestamp(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setRoomId(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 7:
                  a = t.readInt32();
                  e.setAppId(a);
                  break;
                case 8:
                  a = t.readInt64String();
                  e.setDeviceId(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.CustomizedConditionActionMessage.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getConditionType()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getActionKeysList()).length > 0 &&
                t.writeRepeatedString(2, a),
              (a = e.getMeetCondition()) && t.writeBool(3, a),
              (a = e.getTimestamp()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getRoomId()),
              0 !== parseInt(a, 10) && t.writeInt64String(5, a),
              (a = e.getUserId()),
              0 !== parseInt(a, 10) && t.writeInt64String(6, a),
              0 !== (a = e.getAppId()) && t.writeInt32(7, a),
              (a = e.getDeviceId()),
              0 !== parseInt(a, 10) && t.writeInt64String(8, a);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getConditionType =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setConditionType =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getActionKeysList =
          function () {
            return r.Message.getRepeatedField(this, 2);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setActionKeysList =
          function (e) {
            return r.Message.setField(this, 2, e || []);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.addActionKeys =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 2, e, t);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.clearActionKeysList =
          function () {
            return this.setActionKeysList([]);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getMeetCondition =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 3, !1);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setMeetCondition =
          function (e) {
            return r.Message.setProto3BooleanField(this, 3, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getTimestamp =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setTimestamp =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getRoomId =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "0");
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setRoomId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 5, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getUserId =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setUserId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getAppId =
          function () {
            return r.Message.getFieldWithDefault(this, 7, 0);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setAppId =
          function (e) {
            return r.Message.setProto3IntField(this, 7, e);
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.getDeviceId =
          function () {
            return r.Message.getFieldWithDefault(this, 8, "0");
          }),
        (proto.webcast.data.CustomizedConditionActionMessage.prototype.setDeviceId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 8, e);
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.repeatedFields_ = [4]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.RoomExtraLotteryInfo.prototype.toObject =
            function (e) {
              return proto.webcast.data.RoomExtraLotteryInfo.toObject(e, this);
            }),
          (proto.webcast.data.RoomExtraLotteryInfo.toObject = function (e, t) {
            var a = {
              lotteryId: r.Message.getFieldWithDefault(t, 1, "0"),
              startAt: r.Message.getFieldWithDefault(t, 2, "0"),
              drawAt: r.Message.getFieldWithDefault(t, 3, "0"),
              conditionList: r.Message.toObjectList(
                t.getConditionList(),
                proto.webcast.data.LotteryCondition.toObject,
                e
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.RoomExtraLotteryInfo.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.RoomExtraLotteryInfo();
          return proto.webcast.data.RoomExtraLotteryInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.RoomExtraLotteryInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setLotteryId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setStartAt(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setDrawAt(a);
                  break;
                case 4:
                  a = new proto.webcast.data.LotteryCondition();
                  t.readMessage(
                    a,
                    proto.webcast.data.LotteryCondition
                      .deserializeBinaryFromReader
                  ),
                    e.addCondition(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.RoomExtraLotteryInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getLotteryId()),
              0 !== parseInt(a, 10) && t.writeInt64String(1, a),
              (a = e.getStartAt()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getDrawAt()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getConditionList()).length > 0 &&
                t.writeRepeatedMessage(
                  4,
                  a,
                  proto.webcast.data.LotteryCondition.serializeBinaryToWriter
                );
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.getLotteryId =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.setLotteryId =
          function (e) {
            return r.Message.setProto3StringIntField(this, 1, e);
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.getStartAt =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.setStartAt =
          function (e) {
            return r.Message.setProto3StringIntField(this, 2, e);
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.getDrawAt =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.setDrawAt =
          function (e) {
            return r.Message.setProto3StringIntField(this, 3, e);
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.getConditionList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.LotteryCondition,
              4
            );
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.setConditionList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 4, e);
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.addCondition =
          function (e, t) {
            return r.Message.addToRepeatedWrapperField(
              this,
              4,
              e,
              proto.webcast.data.LotteryCondition,
              t
            );
          }),
        (proto.webcast.data.RoomExtraLotteryInfo.prototype.clearConditionList =
          function () {
            return this.setConditionList([]);
          }),
        (proto.webcast.data.ExpandPrizeType = {
          EXPANDPRIZETYPE_UNKNOWN: 0,
          EXPANDPRIZETYPE_GAME: 100,
        }),
        (proto.webcast.data.LotterySendType = {
          LOTTERYSENDTYPEUNKNOWN: 0,
          LOTTERYSENDTYPEIMMEDIATELY: 1,
          LOTTERYSENDTYPEMANUAL: 2,
          LOTTERYSENDTYPEREGULARLY: 3,
        }),
        (proto.webcast.data.IdTypeForFudaiBiz = {
          IDTYPEFUDAIBIZUNKNOWN: 0,
          IDTYPEFUDAIBIZLOTTERYID: 1,
          IDTYPEFUDAIBIZLAUNCHTASKID: 2,
          IDTYPEFUDAIBIZROOMID: 3,
        }),
        o.object.extend(t, proto.webcast.data);
    },
    48358: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      o.exportSymbol("proto.webcast.data.MoreLiveEntrance", null, i),
        (proto.webcast.data.MoreLiveEntrance = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MoreLiveEntrance, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MoreLiveEntrance.displayName =
            "proto.webcast.data.MoreLiveEntrance"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MoreLiveEntrance.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MoreLiveEntrance.toObject(e, this);
          }),
          (proto.webcast.data.MoreLiveEntrance.toObject = function (e, t) {
            var a = {
              name: r.Message.getFieldWithDefault(t, 1, ""),
              tabType: r.Message.getFieldWithDefault(t, 2, "0"),
              validTime: r.Message.getFieldWithDefault(t, 3, "0"),
              priority: r.Message.getFieldWithDefault(t, 4, "0"),
              extra: r.Message.getFieldWithDefault(t, 5, ""),
              eventExtra: r.Message.getFieldWithDefault(t, 6, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.MoreLiveEntrance.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MoreLiveEntrance();
          return proto.webcast.data.MoreLiveEntrance.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MoreLiveEntrance.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.setName(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setTabType(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setValidTime(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setPriority(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setExtra(a);
                  break;
                case 6:
                  a = t.readString();
                  e.setEventExtra(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MoreLiveEntrance.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MoreLiveEntrance.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getName()).length > 0 && t.writeString(1, a),
              (a = e.getTabType()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getValidTime()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a),
              (a = e.getPriority()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getExtra()).length > 0 && t.writeString(5, a),
              (a = e.getEventExtra()).length > 0 && t.writeString(6, a);
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setName = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getTabType =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setTabType = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getValidTime =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setValidTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getPriority =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setPriority = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 4, e);
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getExtra = function () {
          return r.Message.getFieldWithDefault(this, 5, "");
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setExtra = function (e) {
          return r.Message.setProto3StringField(this, 5, e);
        }),
        (proto.webcast.data.MoreLiveEntrance.prototype.getEventExtra =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "");
          }),
        (proto.webcast.data.MoreLiveEntrance.prototype.setEventExtra =
          function (e) {
            return r.Message.setProto3StringField(this, 6, e);
          }),
        o.object.extend(t, proto.webcast.data);
    },
    2322: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null),
        s = a(47857);
      o.object.extend(proto, s);
      var n = a(54782);
      o.object.extend(proto, n);
      var d = a(42245);
      o.object.extend(proto, d),
        o.exportSymbol("proto.webcast.data.AuctionDetail", null, i),
        o.exportSymbol("proto.webcast.data.Bubble", null, i),
        o.exportSymbol("proto.webcast.data.GoodsBizInfo", null, i),
        o.exportSymbol("proto.webcast.data.MysShopExtraInfo", null, i),
        o.exportSymbol("proto.webcast.data.MysteryRankUserItem", null, i),
        o.exportSymbol("proto.webcast.data.MysteryShopGift", null, i),
        o.exportSymbol("proto.webcast.data.MysteryUserImage", null, i),
        o.exportSymbol("proto.webcast.data.MysteryUserInfo", null, i),
        o.exportSymbol("proto.webcast.data.TaskDetail", null, i),
        (proto.webcast.data.MysteryShopGift = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MysteryShopGift.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MysteryShopGift, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MysteryShopGift.displayName =
            "proto.webcast.data.MysteryShopGift"),
        (proto.webcast.data.Bubble = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.Bubble, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.Bubble.displayName = "proto.webcast.data.Bubble"),
        (proto.webcast.data.MysteryRankUserItem = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MysteryRankUserItem, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MysteryRankUserItem.displayName =
            "proto.webcast.data.MysteryRankUserItem"),
        (proto.webcast.data.MysteryUserImage = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MysteryUserImage.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MysteryUserImage, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MysteryUserImage.displayName =
            "proto.webcast.data.MysteryUserImage"),
        (proto.webcast.data.MysteryUserInfo = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.MysteryUserInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MysteryUserInfo.displayName =
            "proto.webcast.data.MysteryUserInfo"),
        (proto.webcast.data.AuctionDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.AuctionDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.AuctionDetail.displayName =
            "proto.webcast.data.AuctionDetail"),
        (proto.webcast.data.GoodsBizInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.GoodsBizInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.GoodsBizInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.GoodsBizInfo.displayName =
            "proto.webcast.data.GoodsBizInfo"),
        (proto.webcast.data.MysShopExtraInfo = function (e) {
          r.Message.initialize(
            this,
            e,
            0,
            -1,
            proto.webcast.data.MysShopExtraInfo.repeatedFields_,
            null
          );
        }),
        o.inherits(proto.webcast.data.MysShopExtraInfo, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.MysShopExtraInfo.displayName =
            "proto.webcast.data.MysShopExtraInfo"),
        (proto.webcast.data.TaskDetail = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.TaskDetail, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.TaskDetail.displayName =
            "proto.webcast.data.TaskDetail"),
        (proto.webcast.data.MysteryShopGift.repeatedFields_ = [4]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MysteryShopGift.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MysteryShopGift.toObject(e, this);
          }),
          (proto.webcast.data.MysteryShopGift.toObject = function (e, t) {
            var a,
              o = {
                giftId: r.Message.getFieldWithDefault(t, 1, "0"),
                termSeq: r.Message.getFieldWithDefault(t, 2, "0"),
                name: r.Message.getFieldWithDefault(t, 3, ""),
                tagsList:
                  null == (a = r.Message.getRepeatedField(t, 4)) ? void 0 : a,
                marketingCopy: r.Message.getFieldWithDefault(t, 5, ""),
                participants: r.Message.getFieldWithDefault(t, 6, "0"),
                totalAcquired: r.Message.getFieldWithDefault(t, 7, "0"),
                imagesMap: (a = t.getImagesMap()) ? a.toObject(e, void 0) : [],
                price: r.Message.getFieldWithDefault(t, 9, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MysteryShopGift.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MysteryShopGift();
          return proto.webcast.data.MysteryShopGift.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MysteryShopGift.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setGiftId(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setTermSeq(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setName(a);
                  break;
                case 4:
                  a = t.readString();
                  e.addTags(a);
                  break;
                case 5:
                  a = t.readString();
                  e.setMarketingCopy(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setParticipants(a);
                  break;
                case 7:
                  a = t.readInt64String();
                  e.setTotalAcquired(a);
                  break;
                case 8:
                  a = e.getImagesMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readInt64,
                      r.BinaryReader.prototype.readString,
                      null,
                      0,
                      ""
                    );
                  });
                  break;
                case 9:
                  a = t.readInt64String();
                  e.setPrice(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MysteryShopGift.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MysteryShopGift.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MysteryShopGift.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getGiftId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getTermSeq()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getName()).length > 0 && t.writeString(3, a),
            (a = e.getTagsList()).length > 0 && t.writeRepeatedString(4, a),
            (a = e.getMarketingCopy()).length > 0 && t.writeString(5, a),
            (a = e.getParticipants()),
            0 !== parseInt(a, 10) && t.writeInt64String(6, a),
            (a = e.getTotalAcquired()),
            0 !== parseInt(a, 10) && t.writeInt64String(7, a),
            (a = e.getImagesMap(!0)) &&
              a.getLength() > 0 &&
              a.serializeBinary(
                8,
                t,
                r.BinaryWriter.prototype.writeInt64,
                r.BinaryWriter.prototype.writeString
              ),
            (a = e.getPrice()),
            0 !== parseInt(a, 10) && t.writeInt64String(9, a);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.getGiftId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.MysteryShopGift.prototype.setGiftId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.getTermSeq = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.MysteryShopGift.prototype.setTermSeq = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.MysteryShopGift.prototype.setName = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.getTagsList =
          function () {
            return r.Message.getRepeatedField(this, 4);
          }),
        (proto.webcast.data.MysteryShopGift.prototype.setTagsList = function (
          e
        ) {
          return r.Message.setField(this, 4, e || []);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.addTags = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 4, e, t);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.clearTagsList =
          function () {
            return this.setTagsList([]);
          }),
        (proto.webcast.data.MysteryShopGift.prototype.getMarketingCopy =
          function () {
            return r.Message.getFieldWithDefault(this, 5, "");
          }),
        (proto.webcast.data.MysteryShopGift.prototype.setMarketingCopy =
          function (e) {
            return r.Message.setProto3StringField(this, 5, e);
          }),
        (proto.webcast.data.MysteryShopGift.prototype.getParticipants =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.MysteryShopGift.prototype.setParticipants =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.MysteryShopGift.prototype.getTotalAcquired =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "0");
          }),
        (proto.webcast.data.MysteryShopGift.prototype.setTotalAcquired =
          function (e) {
            return r.Message.setProto3StringIntField(this, 7, e);
          }),
        (proto.webcast.data.MysteryShopGift.prototype.getImagesMap = function (
          e
        ) {
          return r.Message.getMapField(this, 8, e, null);
        }),
        (proto.webcast.data.MysteryShopGift.prototype.clearImagesMap =
          function () {
            return this.getImagesMap().clear(), this;
          }),
        (proto.webcast.data.MysteryShopGift.prototype.getPrice = function () {
          return r.Message.getFieldWithDefault(this, 9, "0");
        }),
        (proto.webcast.data.MysteryShopGift.prototype.setPrice = function (e) {
          return r.Message.setProto3StringIntField(this, 9, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.Bubble.prototype.toObject = function (e) {
            return proto.webcast.data.Bubble.toObject(e, this);
          }),
          (proto.webcast.data.Bubble.toObject = function (e, t) {
            var a = {
              key: r.Message.getFieldWithDefault(t, 1, ""),
              keyName: r.Message.getFieldWithDefault(t, 2, ""),
              value: r.Message.getFieldWithDefault(t, 3, ""),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.Bubble.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.Bubble();
          return proto.webcast.data.Bubble.deserializeBinaryFromReader(a, t);
        }),
        (proto.webcast.data.Bubble.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readString();
                e.setKey(a);
                break;
              case 2:
                a = t.readString();
                e.setKeyName(a);
                break;
              case 3:
                a = t.readString();
                e.setValue(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.Bubble.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.Bubble.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.Bubble.serializeBinaryToWriter = function (e, t) {
          var a = void 0;
          (a = e.getKey()).length > 0 && t.writeString(1, a),
            (a = e.getKeyName()).length > 0 && t.writeString(2, a),
            (a = e.getValue()).length > 0 && t.writeString(3, a);
        }),
        (proto.webcast.data.Bubble.prototype.getKey = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.webcast.data.Bubble.prototype.setKey = function (e) {
          return r.Message.setProto3StringField(this, 1, e);
        }),
        (proto.webcast.data.Bubble.prototype.getKeyName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.Bubble.prototype.setKeyName = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.Bubble.prototype.getValue = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.webcast.data.Bubble.prototype.setValue = function (e) {
          return r.Message.setProto3StringField(this, 3, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MysteryRankUserItem.prototype.toObject =
            function (e) {
              return proto.webcast.data.MysteryRankUserItem.toObject(e, this);
            }),
          (proto.webcast.data.MysteryRankUserItem.toObject = function (e, t) {
            var a,
              o = {
                user:
                  (a = t.getUser()) &&
                  proto.webcast.data.MysteryUserInfo.toObject(e, a),
                score: r.Message.getFieldWithDefault(t, 2, "0"),
                rank: r.Message.getFieldWithDefault(t, 3, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MysteryRankUserItem.deserializeBinary = function (
          e
        ) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MysteryRankUserItem();
          return proto.webcast.data.MysteryRankUserItem.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MysteryRankUserItem.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new proto.webcast.data.MysteryUserInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.MysteryUserInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setUser(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setScore(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setRank(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MysteryRankUserItem.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MysteryRankUserItem.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getUser()) &&
              t.writeMessage(
                1,
                a,
                proto.webcast.data.MysteryUserInfo.serializeBinaryToWriter
              ),
              (a = e.getScore()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getRank()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a);
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.getUser =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.MysteryUserInfo,
              1
            );
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.setUser = function (
          e
        ) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.MysteryRankUserItem.prototype.clearUser =
          function () {
            return this.setUser(void 0);
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.hasUser =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.getScore =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "0");
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.setScore = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.MysteryRankUserItem.prototype.getRank =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "0");
          }),
        (proto.webcast.data.MysteryRankUserItem.prototype.setRank = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.MysteryUserImage.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MysteryUserImage.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MysteryUserImage.toObject(e, this);
          }),
          (proto.webcast.data.MysteryUserImage.toObject = function (e, t) {
            var a,
              o = {
                urlListList:
                  null == (a = r.Message.getRepeatedField(t, 1)) ? void 0 : a,
                height: r.Message.getFieldWithDefault(t, 2, "0"),
                width: r.Message.getFieldWithDefault(t, 3, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MysteryUserImage.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MysteryUserImage();
          return proto.webcast.data.MysteryUserImage.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MysteryUserImage.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readString();
                  e.addUrlList(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setHeight(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setWidth(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MysteryUserImage.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MysteryUserImage.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MysteryUserImage.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            (a = e.getUrlListList()).length > 0 && t.writeRepeatedString(1, a),
              (a = e.getHeight()),
              0 !== parseInt(a, 10) && t.writeInt64String(2, a),
              (a = e.getWidth()),
              0 !== parseInt(a, 10) && t.writeInt64String(3, a);
          }),
        (proto.webcast.data.MysteryUserImage.prototype.getUrlListList =
          function () {
            return r.Message.getRepeatedField(this, 1);
          }),
        (proto.webcast.data.MysteryUserImage.prototype.setUrlListList =
          function (e) {
            return r.Message.setField(this, 1, e || []);
          }),
        (proto.webcast.data.MysteryUserImage.prototype.addUrlList = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 1, e, t);
        }),
        (proto.webcast.data.MysteryUserImage.prototype.clearUrlListList =
          function () {
            return this.setUrlListList([]);
          }),
        (proto.webcast.data.MysteryUserImage.prototype.getHeight = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.MysteryUserImage.prototype.setHeight = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.MysteryUserImage.prototype.getWidth = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.MysteryUserImage.prototype.setWidth = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MysteryUserInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MysteryUserInfo.toObject(e, this);
          }),
          (proto.webcast.data.MysteryUserInfo.toObject = function (e, t) {
            var a,
              o = {
                userId: r.Message.getFieldWithDefault(t, 1, "0"),
                idStr: r.Message.getFieldWithDefault(t, 2, ""),
                liveRoomIdStr: r.Message.getFieldWithDefault(t, 3, ""),
                nickName: r.Message.getFieldWithDefault(t, 4, ""),
                avatarThumb:
                  (a = t.getAvatarThumb()) &&
                  proto.webcast.data.MysteryUserImage.toObject(e, a),
                mystery: r.Message.getBooleanFieldWithDefault(t, 6, !1),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MysteryUserInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MysteryUserInfo();
          return proto.webcast.data.MysteryUserInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MysteryUserInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setUserId(a);
                  break;
                case 2:
                  a = t.readString();
                  e.setIdStr(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setLiveRoomIdStr(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setNickName(a);
                  break;
                case 5:
                  a = new proto.webcast.data.MysteryUserImage();
                  t.readMessage(
                    a,
                    proto.webcast.data.MysteryUserImage
                      .deserializeBinaryFromReader
                  ),
                    e.setAvatarThumb(a);
                  break;
                case 6:
                  a = t.readBool();
                  e.setMystery(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MysteryUserInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MysteryUserInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getUserId()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getIdStr()).length > 0 && t.writeString(2, a),
            (a = e.getLiveRoomIdStr()).length > 0 && t.writeString(3, a),
            (a = e.getNickName()).length > 0 && t.writeString(4, a),
            null != (a = e.getAvatarThumb()) &&
              t.writeMessage(
                5,
                a,
                proto.webcast.data.MysteryUserImage.serializeBinaryToWriter
              ),
            (a = e.getMystery()) && t.writeBool(6, a);
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.getUserId = function () {
          return r.Message.getFieldWithDefault(this, 1, "0");
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.setUserId = function (e) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.getIdStr = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.setIdStr = function (e) {
          return r.Message.setProto3StringField(this, 2, e);
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.getLiveRoomIdStr =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.setLiveRoomIdStr =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.getNickName =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.setNickName = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.getAvatarThumb =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.MysteryUserImage,
              5
            );
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.setAvatarThumb =
          function (e) {
            return r.Message.setWrapperField(this, 5, e);
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.clearAvatarThumb =
          function () {
            return this.setAvatarThumb(void 0);
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.hasAvatarThumb =
          function () {
            return null != r.Message.getField(this, 5);
          }),
        (proto.webcast.data.MysteryUserInfo.prototype.getMystery = function () {
          return r.Message.getBooleanFieldWithDefault(this, 6, !1);
        }),
        (proto.webcast.data.MysteryUserInfo.prototype.setMystery = function (
          e
        ) {
          return r.Message.setProto3BooleanField(this, 6, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.AuctionDetail.prototype.toObject = function (e) {
            return proto.webcast.data.AuctionDetail.toObject(e, this);
          }),
          (proto.webcast.data.AuctionDetail.toObject = function (e, t) {
            var a,
              o = {
                startPrice: r.Message.getFieldWithDefault(t, 1, "0"),
                rewardNum: r.Message.getFieldWithDefault(t, 2, "0"),
                applyNumb: r.Message.getFieldWithDefault(t, 3, "0"),
                latestApplyUser:
                  (a = t.getLatestApplyUser()) &&
                  proto.webcast.data.MysteryUserInfo.toObject(e, a),
                coinNum: r.Message.getFieldWithDefault(t, 5, "0"),
                targetCoinNum: r.Message.getFieldWithDefault(t, 6, "0"),
                startTime: r.Message.getFieldWithDefault(t, 7, "0"),
                endTime: r.Message.getFieldWithDefault(t, 8, "0"),
                increment: r.Message.getFieldWithDefault(t, 9, "0"),
                isApply: r.Message.getBooleanFieldWithDefault(t, 10, !1),
                auctionId: r.Message.getFieldWithDefault(t, 11, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.AuctionDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.AuctionDetail();
          return proto.webcast.data.AuctionDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.AuctionDetail.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt64String();
                  e.setStartPrice(a);
                  break;
                case 2:
                  a = t.readInt64String();
                  e.setRewardNum(a);
                  break;
                case 3:
                  a = t.readInt64String();
                  e.setApplyNumb(a);
                  break;
                case 4:
                  a = new proto.webcast.data.MysteryUserInfo();
                  t.readMessage(
                    a,
                    proto.webcast.data.MysteryUserInfo
                      .deserializeBinaryFromReader
                  ),
                    e.setLatestApplyUser(a);
                  break;
                case 5:
                  a = t.readInt64String();
                  e.setCoinNum(a);
                  break;
                case 6:
                  a = t.readInt64String();
                  e.setTargetCoinNum(a);
                  break;
                case 7:
                  a = t.readInt64String();
                  e.setStartTime(a);
                  break;
                case 8:
                  a = t.readInt64String();
                  e.setEndTime(a);
                  break;
                case 9:
                  a = t.readInt64String();
                  e.setIncrement(a);
                  break;
                case 10:
                  a = t.readBool();
                  e.setIsApply(a);
                  break;
                case 11:
                  a = t.readString();
                  e.setAuctionId(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.AuctionDetail.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.AuctionDetail.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.AuctionDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          (a = e.getStartPrice()),
            0 !== parseInt(a, 10) && t.writeInt64String(1, a),
            (a = e.getRewardNum()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getApplyNumb()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            null != (a = e.getLatestApplyUser()) &&
              t.writeMessage(
                4,
                a,
                proto.webcast.data.MysteryUserInfo.serializeBinaryToWriter
              ),
            (a = e.getCoinNum()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a),
            (a = e.getTargetCoinNum()),
            0 !== parseInt(a, 10) && t.writeInt64String(6, a),
            (a = e.getStartTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(7, a),
            (a = e.getEndTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(8, a),
            (a = e.getIncrement()),
            0 !== parseInt(a, 10) && t.writeInt64String(9, a),
            (a = e.getIsApply()) && t.writeBool(10, a),
            (a = e.getAuctionId()).length > 0 && t.writeString(11, a);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getStartPrice =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "0");
          }),
        (proto.webcast.data.AuctionDetail.prototype.setStartPrice = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 1, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getRewardNum = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setRewardNum = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getApplyNumb = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setApplyNumb = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getLatestApplyUser =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.MysteryUserInfo,
              4
            );
          }),
        (proto.webcast.data.AuctionDetail.prototype.setLatestApplyUser =
          function (e) {
            return r.Message.setWrapperField(this, 4, e);
          }),
        (proto.webcast.data.AuctionDetail.prototype.clearLatestApplyUser =
          function () {
            return this.setLatestApplyUser(void 0);
          }),
        (proto.webcast.data.AuctionDetail.prototype.hasLatestApplyUser =
          function () {
            return null != r.Message.getField(this, 4);
          }),
        (proto.webcast.data.AuctionDetail.prototype.getCoinNum = function () {
          return r.Message.getFieldWithDefault(this, 5, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setCoinNum = function (e) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getTargetCoinNum =
          function () {
            return r.Message.getFieldWithDefault(this, 6, "0");
          }),
        (proto.webcast.data.AuctionDetail.prototype.setTargetCoinNum =
          function (e) {
            return r.Message.setProto3StringIntField(this, 6, e);
          }),
        (proto.webcast.data.AuctionDetail.prototype.getStartTime = function () {
          return r.Message.getFieldWithDefault(this, 7, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setStartTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 7, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getEndTime = function () {
          return r.Message.getFieldWithDefault(this, 8, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setEndTime = function (e) {
          return r.Message.setProto3StringIntField(this, 8, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getIncrement = function () {
          return r.Message.getFieldWithDefault(this, 9, "0");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setIncrement = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 9, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getIsApply = function () {
          return r.Message.getBooleanFieldWithDefault(this, 10, !1);
        }),
        (proto.webcast.data.AuctionDetail.prototype.setIsApply = function (e) {
          return r.Message.setProto3BooleanField(this, 10, e);
        }),
        (proto.webcast.data.AuctionDetail.prototype.getAuctionId = function () {
          return r.Message.getFieldWithDefault(this, 11, "");
        }),
        (proto.webcast.data.AuctionDetail.prototype.setAuctionId = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 11, e);
        }),
        (proto.webcast.data.GoodsBizInfo.repeatedFields_ = [10, 11, 16, 33]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.GoodsBizInfo.prototype.toObject = function (e) {
            return proto.webcast.data.GoodsBizInfo.toObject(e, this);
          }),
          (proto.webcast.data.GoodsBizInfo.toObject = function (e, t) {
            var a,
              o = {
                goodsId: r.Message.getFieldWithDefault(t, 1, 0),
                preGoodsId: r.Message.getFieldWithDefault(t, 2, 0),
                giftId: r.Message.getFieldWithDefault(t, 3, 0),
                giftName: r.Message.getFieldWithDefault(t, 4, ""),
                goodsStatus: r.Message.getFieldWithDefault(t, 5, 0),
                goodsSaleStatus: r.Message.getFieldWithDefault(t, 6, 0),
                period: r.Message.getFieldWithDefault(t, 7, ""),
                giftBuffLevel: r.Message.getFieldWithDefault(t, 8, 0),
                baseGiftId: r.Message.getFieldWithDefault(t, 9, 0),
                goodsTagList:
                  null == (a = r.Message.getRepeatedField(t, 10)) ? void 0 : a,
                tagSchemaUrlList:
                  null == (a = r.Message.getRepeatedField(t, 11)) ? void 0 : a,
                purchaseDays: r.Message.getFieldWithDefault(t, 12, 0),
                displayTime: r.Message.getFieldWithDefault(t, 13, "0"),
                endTime: r.Message.getFieldWithDefault(t, 14, "0"),
                expireTime: r.Message.getFieldWithDefault(t, 15, "0"),
                bubbleDetailsList: r.Message.toObjectList(
                  t.getBubbleDetailsList(),
                  proto.webcast.data.Bubble.toObject,
                  e
                ),
                tabIcon: (a = t.getTabIcon()) && d.Image.toObject(e, a),
                grayTabIcon: (a = t.getGrayTabIcon()) && d.Image.toObject(e, a),
                staticIcon: (a = t.getStaticIcon()) && d.Image.toObject(e, a),
                backgroundImage:
                  (a = t.getBackgroundImage()) && d.Image.toObject(e, a),
                descTitle: r.Message.getFieldWithDefault(t, 21, ""),
                imageEnterFrames: r.Message.getFieldWithDefault(t, 22, 0),
                imageRecycleFrames: r.Message.getFieldWithDefault(t, 23, 0),
                image3dFrames: r.Message.getFieldWithDefault(t, 24, 0),
                remainingCount: r.Message.getFieldWithDefault(t, 25, 0),
                imageEnter: r.Message.getFieldWithDefault(t, 26, ""),
                imageRecycle: r.Message.getFieldWithDefault(t, 27, ""),
                image3dLight: r.Message.getFieldWithDefault(t, 28, ""),
                image3dRotate: r.Message.getFieldWithDefault(t, 29, ""),
                image3dParticle: r.Message.getFieldWithDefault(t, 30, ""),
                videoUrl: r.Message.getFieldWithDefault(t, 31, ""),
                auctionDetail:
                  (a = t.getAuctionDetail()) &&
                  proto.webcast.data.AuctionDetail.toObject(e, a),
                lotStoryPreviewUrlListList:
                  null == (a = r.Message.getRepeatedField(t, 33)) ? void 0 : a,
                goodsName: r.Message.getFieldWithDefault(t, 34, ""),
                goodsType: r.Message.getFieldWithDefault(t, 35, 0),
                taskDetail:
                  (a = t.getTaskDetail()) &&
                  proto.webcast.data.TaskDetail.toObject(e, a),
                purchaseNum: r.Message.getFieldWithDefault(t, 37, "0"),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.GoodsBizInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.GoodsBizInfo();
          return proto.webcast.data.GoodsBizInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.GoodsBizInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = t.readInt32();
                  e.setGoodsId(a);
                  break;
                case 2:
                  a = t.readInt32();
                  e.setPreGoodsId(a);
                  break;
                case 3:
                  a = t.readInt32();
                  e.setGiftId(a);
                  break;
                case 4:
                  a = t.readString();
                  e.setGiftName(a);
                  break;
                case 5:
                  a = t.readInt32();
                  e.setGoodsStatus(a);
                  break;
                case 6:
                  a = t.readInt32();
                  e.setGoodsSaleStatus(a);
                  break;
                case 7:
                  a = t.readString();
                  e.setPeriod(a);
                  break;
                case 8:
                  a = t.readInt32();
                  e.setGiftBuffLevel(a);
                  break;
                case 9:
                  a = t.readInt32();
                  e.setBaseGiftId(a);
                  break;
                case 10:
                  a = t.readString();
                  e.addGoodsTag(a);
                  break;
                case 11:
                  a = t.readString();
                  e.addTagSchemaUrl(a);
                  break;
                case 12:
                  a = t.readInt32();
                  e.setPurchaseDays(a);
                  break;
                case 13:
                  a = t.readInt64String();
                  e.setDisplayTime(a);
                  break;
                case 14:
                  a = t.readInt64String();
                  e.setEndTime(a);
                  break;
                case 15:
                  a = t.readInt64String();
                  e.setExpireTime(a);
                  break;
                case 16:
                  a = new proto.webcast.data.Bubble();
                  t.readMessage(
                    a,
                    proto.webcast.data.Bubble.deserializeBinaryFromReader
                  ),
                    e.addBubbleDetails(a);
                  break;
                case 17:
                  a = new d.Image();
                  t.readMessage(a, d.Image.deserializeBinaryFromReader),
                    e.setTabIcon(a);
                  break;
                case 18:
                  a = new d.Image();
                  t.readMessage(a, d.Image.deserializeBinaryFromReader),
                    e.setGrayTabIcon(a);
                  break;
                case 19:
                  a = new d.Image();
                  t.readMessage(a, d.Image.deserializeBinaryFromReader),
                    e.setStaticIcon(a);
                  break;
                case 20:
                  a = new d.Image();
                  t.readMessage(a, d.Image.deserializeBinaryFromReader),
                    e.setBackgroundImage(a);
                  break;
                case 21:
                  a = t.readString();
                  e.setDescTitle(a);
                  break;
                case 22:
                  a = t.readInt32();
                  e.setImageEnterFrames(a);
                  break;
                case 23:
                  a = t.readInt32();
                  e.setImageRecycleFrames(a);
                  break;
                case 24:
                  a = t.readInt32();
                  e.setImage3dFrames(a);
                  break;
                case 25:
                  a = t.readInt64();
                  e.setRemainingCount(a);
                  break;
                case 26:
                  a = t.readString();
                  e.setImageEnter(a);
                  break;
                case 27:
                  a = t.readString();
                  e.setImageRecycle(a);
                  break;
                case 28:
                  a = t.readString();
                  e.setImage3dLight(a);
                  break;
                case 29:
                  a = t.readString();
                  e.setImage3dRotate(a);
                  break;
                case 30:
                  a = t.readString();
                  e.setImage3dParticle(a);
                  break;
                case 31:
                  a = t.readString();
                  e.setVideoUrl(a);
                  break;
                case 32:
                  a = new proto.webcast.data.AuctionDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.AuctionDetail.deserializeBinaryFromReader
                  ),
                    e.setAuctionDetail(a);
                  break;
                case 33:
                  a = t.readString();
                  e.addLotStoryPreviewUrlList(a);
                  break;
                case 34:
                  a = t.readString();
                  e.setGoodsName(a);
                  break;
                case 35:
                  a = t.readInt32();
                  e.setGoodsType(a);
                  break;
                case 36:
                  a = new proto.webcast.data.TaskDetail();
                  t.readMessage(
                    a,
                    proto.webcast.data.TaskDetail.deserializeBinaryFromReader
                  ),
                    e.setTaskDetail(a);
                  break;
                case 37:
                  a = t.readInt64String();
                  e.setPurchaseNum(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.GoodsBizInfo.serializeBinaryToWriter(this, e),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.GoodsBizInfo.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getGoodsId()) && t.writeInt32(1, a),
            0 !== (a = e.getPreGoodsId()) && t.writeInt32(2, a),
            0 !== (a = e.getGiftId()) && t.writeInt32(3, a),
            (a = e.getGiftName()).length > 0 && t.writeString(4, a),
            0 !== (a = e.getGoodsStatus()) && t.writeInt32(5, a),
            0 !== (a = e.getGoodsSaleStatus()) && t.writeInt32(6, a),
            (a = e.getPeriod()).length > 0 && t.writeString(7, a),
            0 !== (a = e.getGiftBuffLevel()) && t.writeInt32(8, a),
            0 !== (a = e.getBaseGiftId()) && t.writeInt32(9, a),
            (a = e.getGoodsTagList()).length > 0 &&
              t.writeRepeatedString(10, a),
            (a = e.getTagSchemaUrlList()).length > 0 &&
              t.writeRepeatedString(11, a),
            0 !== (a = e.getPurchaseDays()) && t.writeInt32(12, a),
            (a = e.getDisplayTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(13, a),
            (a = e.getEndTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(14, a),
            (a = e.getExpireTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(15, a),
            (a = e.getBubbleDetailsList()).length > 0 &&
              t.writeRepeatedMessage(
                16,
                a,
                proto.webcast.data.Bubble.serializeBinaryToWriter
              ),
            null != (a = e.getTabIcon()) &&
              t.writeMessage(17, a, d.Image.serializeBinaryToWriter),
            null != (a = e.getGrayTabIcon()) &&
              t.writeMessage(18, a, d.Image.serializeBinaryToWriter),
            null != (a = e.getStaticIcon()) &&
              t.writeMessage(19, a, d.Image.serializeBinaryToWriter),
            null != (a = e.getBackgroundImage()) &&
              t.writeMessage(20, a, d.Image.serializeBinaryToWriter),
            (a = e.getDescTitle()).length > 0 && t.writeString(21, a),
            0 !== (a = e.getImageEnterFrames()) && t.writeInt32(22, a),
            0 !== (a = e.getImageRecycleFrames()) && t.writeInt32(23, a),
            0 !== (a = e.getImage3dFrames()) && t.writeInt32(24, a),
            0 !== (a = e.getRemainingCount()) && t.writeInt64(25, a),
            (a = e.getImageEnter()).length > 0 && t.writeString(26, a),
            (a = e.getImageRecycle()).length > 0 && t.writeString(27, a),
            (a = e.getImage3dLight()).length > 0 && t.writeString(28, a),
            (a = e.getImage3dRotate()).length > 0 && t.writeString(29, a),
            (a = e.getImage3dParticle()).length > 0 && t.writeString(30, a),
            (a = e.getVideoUrl()).length > 0 && t.writeString(31, a),
            null != (a = e.getAuctionDetail()) &&
              t.writeMessage(
                32,
                a,
                proto.webcast.data.AuctionDetail.serializeBinaryToWriter
              ),
            (a = e.getLotStoryPreviewUrlListList()).length > 0 &&
              t.writeRepeatedString(33, a),
            (a = e.getGoodsName()).length > 0 && t.writeString(34, a),
            0 !== (a = e.getGoodsType()) && t.writeInt32(35, a),
            null != (a = e.getTaskDetail()) &&
              t.writeMessage(
                36,
                a,
                proto.webcast.data.TaskDetail.serializeBinaryToWriter
              ),
            (a = e.getPurchaseNum()),
            0 !== parseInt(a, 10) && t.writeInt64String(37, a);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsId = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsId = function (e) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getPreGoodsId = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setPreGoodsId = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 2, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGiftId = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGiftId = function (e) {
          return r.Message.setProto3IntField(this, 3, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGiftName = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGiftName = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 5, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsStatus = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 5, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsSaleStatus =
          function () {
            return r.Message.getFieldWithDefault(this, 6, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsSaleStatus =
          function (e) {
            return r.Message.setProto3IntField(this, 6, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getPeriod = function () {
          return r.Message.getFieldWithDefault(this, 7, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setPeriod = function (e) {
          return r.Message.setProto3StringField(this, 7, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGiftBuffLevel =
          function () {
            return r.Message.getFieldWithDefault(this, 8, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGiftBuffLevel = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 8, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getBaseGiftId = function () {
          return r.Message.getFieldWithDefault(this, 9, 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setBaseGiftId = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 9, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsTagList =
          function () {
            return r.Message.getRepeatedField(this, 10);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsTagList = function (
          e
        ) {
          return r.Message.setField(this, 10, e || []);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.addGoodsTag = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 10, e, t);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearGoodsTagList =
          function () {
            return this.setGoodsTagList([]);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getTagSchemaUrlList =
          function () {
            return r.Message.getRepeatedField(this, 11);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setTagSchemaUrlList =
          function (e) {
            return r.Message.setField(this, 11, e || []);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.addTagSchemaUrl = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 11, e, t);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearTagSchemaUrlList =
          function () {
            return this.setTagSchemaUrlList([]);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getPurchaseDays =
          function () {
            return r.Message.getFieldWithDefault(this, 12, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setPurchaseDays = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 12, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getDisplayTime =
          function () {
            return r.Message.getFieldWithDefault(this, 13, "0");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setDisplayTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 13, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getEndTime = function () {
          return r.Message.getFieldWithDefault(this, 14, "0");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setEndTime = function (e) {
          return r.Message.setProto3StringIntField(this, 14, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getExpireTime = function () {
          return r.Message.getFieldWithDefault(this, 15, "0");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setExpireTime = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 15, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getBubbleDetailsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.webcast.data.Bubble,
              16
            );
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setBubbleDetailsList =
          function (e) {
            return r.Message.setRepeatedWrapperField(this, 16, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.addBubbleDetails = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            16,
            e,
            proto.webcast.data.Bubble,
            t
          );
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearBubbleDetailsList =
          function () {
            return this.setBubbleDetailsList([]);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getTabIcon = function () {
          return r.Message.getWrapperField(this, d.Image, 17);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setTabIcon = function (e) {
          return r.Message.setWrapperField(this, 17, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearTabIcon = function () {
          return this.setTabIcon(void 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasTabIcon = function () {
          return null != r.Message.getField(this, 17);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGrayTabIcon =
          function () {
            return r.Message.getWrapperField(this, d.Image, 18);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGrayTabIcon = function (
          e
        ) {
          return r.Message.setWrapperField(this, 18, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearGrayTabIcon =
          function () {
            return this.setGrayTabIcon(void 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasGrayTabIcon =
          function () {
            return null != r.Message.getField(this, 18);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getStaticIcon = function () {
          return r.Message.getWrapperField(this, d.Image, 19);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setStaticIcon = function (
          e
        ) {
          return r.Message.setWrapperField(this, 19, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearStaticIcon =
          function () {
            return this.setStaticIcon(void 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasStaticIcon = function () {
          return null != r.Message.getField(this, 19);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getBackgroundImage =
          function () {
            return r.Message.getWrapperField(this, d.Image, 20);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setBackgroundImage =
          function (e) {
            return r.Message.setWrapperField(this, 20, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearBackgroundImage =
          function () {
            return this.setBackgroundImage(void 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasBackgroundImage =
          function () {
            return null != r.Message.getField(this, 20);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getDescTitle = function () {
          return r.Message.getFieldWithDefault(this, 21, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setDescTitle = function (e) {
          return r.Message.setProto3StringField(this, 21, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImageEnterFrames =
          function () {
            return r.Message.getFieldWithDefault(this, 22, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImageEnterFrames =
          function (e) {
            return r.Message.setProto3IntField(this, 22, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImageRecycleFrames =
          function () {
            return r.Message.getFieldWithDefault(this, 23, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImageRecycleFrames =
          function (e) {
            return r.Message.setProto3IntField(this, 23, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImage3dFrames =
          function () {
            return r.Message.getFieldWithDefault(this, 24, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImage3dFrames = function (
          e
        ) {
          return r.Message.setProto3IntField(this, 24, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getRemainingCount =
          function () {
            return r.Message.getFieldWithDefault(this, 25, 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setRemainingCount =
          function (e) {
            return r.Message.setProto3IntField(this, 25, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImageEnter = function () {
          return r.Message.getFieldWithDefault(this, 26, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImageEnter = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 26, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImageRecycle =
          function () {
            return r.Message.getFieldWithDefault(this, 27, "");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImageRecycle = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 27, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImage3dLight =
          function () {
            return r.Message.getFieldWithDefault(this, 28, "");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImage3dLight = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 28, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImage3dRotate =
          function () {
            return r.Message.getFieldWithDefault(this, 29, "");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImage3dRotate = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 29, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getImage3dParticle =
          function () {
            return r.Message.getFieldWithDefault(this, 30, "");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setImage3dParticle =
          function (e) {
            return r.Message.setProto3StringField(this, 30, e);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getVideoUrl = function () {
          return r.Message.getFieldWithDefault(this, 31, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setVideoUrl = function (e) {
          return r.Message.setProto3StringField(this, 31, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getAuctionDetail =
          function () {
            return r.Message.getWrapperField(
              this,
              proto.webcast.data.AuctionDetail,
              32
            );
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setAuctionDetail = function (
          e
        ) {
          return r.Message.setWrapperField(this, 32, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearAuctionDetail =
          function () {
            return this.setAuctionDetail(void 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasAuctionDetail =
          function () {
            return null != r.Message.getField(this, 32);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getLotStoryPreviewUrlListList =
          function () {
            return r.Message.getRepeatedField(this, 33);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setLotStoryPreviewUrlListList =
          function (e) {
            return r.Message.setField(this, 33, e || []);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.addLotStoryPreviewUrlList =
          function (e, t) {
            return r.Message.addToRepeatedField(this, 33, e, t);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearLotStoryPreviewUrlListList =
          function () {
            return this.setLotStoryPreviewUrlListList([]);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsName = function () {
          return r.Message.getFieldWithDefault(this, 34, "");
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsName = function (e) {
          return r.Message.setProto3StringField(this, 34, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getGoodsType = function () {
          return r.Message.getFieldWithDefault(this, 35, 0);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setGoodsType = function (e) {
          return r.Message.setProto3IntField(this, 35, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getTaskDetail = function () {
          return r.Message.getWrapperField(
            this,
            proto.webcast.data.TaskDetail,
            36
          );
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.setTaskDetail = function (
          e
        ) {
          return r.Message.setWrapperField(this, 36, e);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.clearTaskDetail =
          function () {
            return this.setTaskDetail(void 0);
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.hasTaskDetail = function () {
          return null != r.Message.getField(this, 36);
        }),
        (proto.webcast.data.GoodsBizInfo.prototype.getPurchaseNum =
          function () {
            return r.Message.getFieldWithDefault(this, 37, "0");
          }),
        (proto.webcast.data.GoodsBizInfo.prototype.setPurchaseNum = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 37, e);
        }),
        (proto.webcast.data.MysShopExtraInfo.repeatedFields_ = [5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.MysShopExtraInfo.prototype.toObject = function (
            e
          ) {
            return proto.webcast.data.MysShopExtraInfo.toObject(e, this);
          }),
          (proto.webcast.data.MysShopExtraInfo.toObject = function (e, t) {
            var a,
              o = {
                userInfo: (a = t.getUserInfo()) && n.User.toObject(e, a),
                resourceType: r.Message.getFieldWithDefault(t, 2, 0),
                textBottom: r.Message.getFieldWithDefault(t, 3, ""),
                serverTimeStamp: r.Message.getFieldWithDefault(t, 4, "0"),
                orderList:
                  null == (a = r.Message.getRepeatedField(t, 5)) ? void 0 : a,
                goodsBizExtraMap: (a = t.getGoodsBizExtraMap())
                  ? a.toObject(e, proto.webcast.data.GoodsBizInfo.toObject)
                  : [],
                subTitle: r.Message.getFieldWithDefault(t, 7, ""),
              };
            return e && (o.$jspbMessageInstance = t), o;
          })),
        (proto.webcast.data.MysShopExtraInfo.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.MysShopExtraInfo();
          return proto.webcast.data.MysShopExtraInfo.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.MysShopExtraInfo.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              switch (t.getFieldNumber()) {
                case 1:
                  var a = new n.User();
                  t.readMessage(a, n.User.deserializeBinaryFromReader),
                    e.setUserInfo(a);
                  break;
                case 2:
                  a = t.readInt32();
                  e.setResourceType(a);
                  break;
                case 3:
                  a = t.readString();
                  e.setTextBottom(a);
                  break;
                case 4:
                  a = t.readInt64String();
                  e.setServerTimeStamp(a);
                  break;
                case 5:
                  for (
                    var o = t.isDelimited()
                        ? t.readPackedInt32()
                        : [t.readInt32()],
                      i = 0;
                    i < o.length;
                    i++
                  )
                    e.addOrder(o[i]);
                  break;
                case 6:
                  a = e.getGoodsBizExtraMap();
                  t.readMessage(a, function (e, t) {
                    r.Map.deserializeBinary(
                      e,
                      t,
                      r.BinaryReader.prototype.readInt32,
                      r.BinaryReader.prototype.readMessage,
                      proto.webcast.data.GoodsBizInfo
                        .deserializeBinaryFromReader,
                      0,
                      new proto.webcast.data.GoodsBizInfo()
                    );
                  });
                  break;
                case 7:
                  a = t.readString();
                  e.setSubTitle(a);
                  break;
                default:
                  t.skipField();
              }
            }
            return e;
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.MysShopExtraInfo.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.MysShopExtraInfo.serializeBinaryToWriter =
          function (e, t) {
            var a = void 0;
            null != (a = e.getUserInfo()) &&
              t.writeMessage(1, a, n.User.serializeBinaryToWriter),
              0 !== (a = e.getResourceType()) && t.writeInt32(2, a),
              (a = e.getTextBottom()).length > 0 && t.writeString(3, a),
              (a = e.getServerTimeStamp()),
              0 !== parseInt(a, 10) && t.writeInt64String(4, a),
              (a = e.getOrderList()).length > 0 && t.writePackedInt32(5, a),
              (a = e.getGoodsBizExtraMap(!0)) &&
                a.getLength() > 0 &&
                a.serializeBinary(
                  6,
                  t,
                  r.BinaryWriter.prototype.writeInt32,
                  r.BinaryWriter.prototype.writeMessage,
                  proto.webcast.data.GoodsBizInfo.serializeBinaryToWriter
                ),
              (a = e.getSubTitle()).length > 0 && t.writeString(7, a);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getUserInfo =
          function () {
            return r.Message.getWrapperField(this, n.User, 1);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setUserInfo = function (
          e
        ) {
          return r.Message.setWrapperField(this, 1, e);
        }),
        (proto.webcast.data.MysShopExtraInfo.prototype.clearUserInfo =
          function () {
            return this.setUserInfo(void 0);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.hasUserInfo =
          function () {
            return null != r.Message.getField(this, 1);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getResourceType =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setResourceType =
          function (e) {
            return r.Message.setProto3IntField(this, 2, e);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getTextBottom =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setTextBottom =
          function (e) {
            return r.Message.setProto3StringField(this, 3, e);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getServerTimeStamp =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "0");
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setServerTimeStamp =
          function (e) {
            return r.Message.setProto3StringIntField(this, 4, e);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getOrderList =
          function () {
            return r.Message.getRepeatedField(this, 5);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setOrderList = function (
          e
        ) {
          return r.Message.setField(this, 5, e || []);
        }),
        (proto.webcast.data.MysShopExtraInfo.prototype.addOrder = function (
          e,
          t
        ) {
          return r.Message.addToRepeatedField(this, 5, e, t);
        }),
        (proto.webcast.data.MysShopExtraInfo.prototype.clearOrderList =
          function () {
            return this.setOrderList([]);
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getGoodsBizExtraMap =
          function (e) {
            return r.Message.getMapField(
              this,
              6,
              e,
              proto.webcast.data.GoodsBizInfo
            );
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.clearGoodsBizExtraMap =
          function () {
            return this.getGoodsBizExtraMap().clear(), this;
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.getSubTitle =
          function () {
            return r.Message.getFieldWithDefault(this, 7, "");
          }),
        (proto.webcast.data.MysShopExtraInfo.prototype.setSubTitle = function (
          e
        ) {
          return r.Message.setProto3StringField(this, 7, e);
        }),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.TaskDetail.prototype.toObject = function (e) {
            return proto.webcast.data.TaskDetail.toObject(e, this);
          }),
          (proto.webcast.data.TaskDetail.toObject = function (e, t) {
            var a = {
              status: r.Message.getFieldWithDefault(t, 1, 0),
              currentValue: r.Message.getFieldWithDefault(t, 2, "0"),
              targetValue: r.Message.getFieldWithDefault(t, 3, "0"),
              desc: r.Message.getFieldWithDefault(t, 4, ""),
              startTime: r.Message.getFieldWithDefault(t, 5, "0"),
              endTime: r.Message.getFieldWithDefault(t, 6, "0"),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.TaskDetail.deserializeBinary = function (e) {
          var t = new r.BinaryReader(e),
            a = new proto.webcast.data.TaskDetail();
          return proto.webcast.data.TaskDetail.deserializeBinaryFromReader(
            a,
            t
          );
        }),
        (proto.webcast.data.TaskDetail.deserializeBinaryFromReader = function (
          e,
          t
        ) {
          for (; t.nextField() && !t.isEndGroup(); ) {
            switch (t.getFieldNumber()) {
              case 1:
                var a = t.readInt32();
                e.setStatus(a);
                break;
              case 2:
                a = t.readInt64String();
                e.setCurrentValue(a);
                break;
              case 3:
                a = t.readInt64String();
                e.setTargetValue(a);
                break;
              case 4:
                a = t.readString();
                e.setDesc(a);
                break;
              case 5:
                a = t.readInt64String();
                e.setStartTime(a);
                break;
              case 6:
                a = t.readInt64String();
                e.setEndTime(a);
                break;
              default:
                t.skipField();
            }
          }
          return e;
        }),
        (proto.webcast.data.TaskDetail.prototype.serializeBinary = function () {
          var e = new r.BinaryWriter();
          return (
            proto.webcast.data.TaskDetail.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
          );
        }),
        (proto.webcast.data.TaskDetail.serializeBinaryToWriter = function (
          e,
          t
        ) {
          var a = void 0;
          0 !== (a = e.getStatus()) && t.writeInt32(1, a),
            (a = e.getCurrentValue()),
            0 !== parseInt(a, 10) && t.writeInt64String(2, a),
            (a = e.getTargetValue()),
            0 !== parseInt(a, 10) && t.writeInt64String(3, a),
            (a = e.getDesc()).length > 0 && t.writeString(4, a),
            (a = e.getStartTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(5, a),
            (a = e.getEndTime()),
            0 !== parseInt(a, 10) && t.writeInt64String(6, a);
        }),
        (proto.webcast.data.TaskDetail.prototype.getStatus = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.webcast.data.TaskDetail.prototype.setStatus = function (e) {
          return r.Message.setProto3IntField(this, 1, e);
        }),
        (proto.webcast.data.TaskDetail.prototype.getCurrentValue = function () {
          return r.Message.getFieldWithDefault(this, 2, "0");
        }),
        (proto.webcast.data.TaskDetail.prototype.setCurrentValue = function (
          e
        ) {
          return r.Message.setProto3StringIntField(this, 2, e);
        }),
        (proto.webcast.data.TaskDetail.prototype.getTargetValue = function () {
          return r.Message.getFieldWithDefault(this, 3, "0");
        }),
        (proto.webcast.data.TaskDetail.prototype.setTargetValue = function (e) {
          return r.Message.setProto3StringIntField(this, 3, e);
        }),
        (proto.webcast.data.TaskDetail.prototype.getDesc = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.webcast.data.TaskDetail.prototype.setDesc = function (e) {
          return r.Message.setProto3StringField(this, 4, e);
        }),
        (proto.webcast.data.TaskDetail.prototype.getStartTime = function () {
          return r.Message.getFieldWithDefault(this, 5, "0");
        }),
        (proto.webcast.data.TaskDetail.prototype.setStartTime = function (e) {
          return r.Message.setProto3StringIntField(this, 5, e);
        }),
        (proto.webcast.data.TaskDetail.prototype.getEndTime = function () {
          return r.Message.getFieldWithDefault(this, 6, "0");
        }),
        (proto.webcast.data.TaskDetail.prototype.setEndTime = function (e) {
          return r.Message.setProto3StringIntField(this, 6, e);
        }),
        o.object.extend(t, proto.webcast.data);
    },
    63925: (e, t, a) => {
      var r = a(47865),
        o = r,
        i = function () {
          return this
            ? this
            : "undefined" != typeof window
            ? window
            : void 0 !== i
            ? i
            : "undefined" != typeof self
            ? self
            : Function("return this")();
        }.call(null);
      o.exportSymbol("proto.webcast.data.ProfitInteractionSetting", null, i),
        (proto.webcast.data.ProfitInteractionSetting = function (e) {
          r.Message.initialize(this, e, 0, -1, null, null);
        }),
        o.inherits(proto.webcast.data.ProfitInteractionSetting, r.Message),
        o.DEBUG &&
          !COMPILED &&
          (proto.webcast.data.ProfitInteractionSetting.displayName =
            "proto.webcast.data.ProfitInteractionSetting"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.webcast.data.ProfitInteractionSetting.prototype.toObject =
            function (e) {
              return proto.webcast.data.ProfitInteractionSetting.toObject(
                e,
                this
              );
            }),
          (proto.webcast.data.ProfitInteractionSetting.toObject = function (
            e,
            t
          ) {
            var a = {
              showInteractionScoreClose: r.Message.getBooleanFieldWithDefault(
                t,
                1,
                !1
              ),
            };
            return e && (a.$jspbMessageInstance = t), a;
          })),
        (proto.webcast.data.ProfitInteractionSetting.deserializeBinary =
          function (e) {
            var t = new r.BinaryReader(e),
              a = new proto.webcast.data.ProfitInteractionSetting();
            return proto.webcast.data.ProfitInteractionSetting.deserializeBinaryFromReader(
              a,
              t
            );
          }),
        (proto.webcast.data.ProfitInteractionSetting.deserializeBinaryFromReader =
          function (e, t) {
            for (; t.nextField() && !t.isEndGroup(); ) {
              if (1 === t.getFieldNumber()) {
                var a = t.readBool();
                e.setShowInteractionScoreClose(a);
              } else t.skipField();
            }
            return e;
          }),
        (proto.webcast.data.ProfitInteractionSetting.prototype.serializeBinary =
          function () {
            var e = new r.BinaryWriter();
            return (
              proto.webcast.data.ProfitInteractionSetting.serializeBinaryToWriter(
                this,
                e
              ),
              e.getResultBuffer()
            );
          }),
        (proto.webcast.data.ProfitInteractionSetting.serializeBinaryToWriter =
          function (e, t) {
            var a;
            (a = e.getShowInteractionScoreClose()) && t.writeBool(1, a);
          }),
        (proto.webcast.data.ProfitInteractionSetting.prototype.getShowInteractionScoreClose =
          function () {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1);
          }),
        (proto.webcast.data.ProfitInteractionSetting.prototype.setShowInteractionScoreClose =
          function (e) {
            return r.Message.setProto3BooleanField(this, 1, e);
          }),
        o.object.extend(t, proto.webcast.data);
    },
  },
]);
