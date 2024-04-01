try {
  (() => {
    var t = __REACT__,
      {
        Children: f,
        Component: P,
        Fragment: R,
        Profiler: L,
        PureComponent: D,
        StrictMode: E,
        Suspense: w,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: v,
        cloneElement: x,
        createContext: H,
        createElement: M,
        createFactory: U,
        createRef: F,
        forwardRef: N,
        isValidElement: G,
        lazy: W,
        memo: u,
        startTransition: K,
        unstable_act: Y,
        useCallback: d,
        useContext: V,
        useDebugValue: q,
        useDeferredValue: Z,
        useEffect: m,
        useId: z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: $,
        useMemo: j,
        useReducer: X,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__;
    var io = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: mo,
        Provider: po,
        addons: l,
        combineParameters: So,
        controlOrMetaKey: Co,
        controlOrMetaSymbol: ho,
        eventMatchesShortcut: Ao,
        eventToShortcut: bo,
        isMacLike: _o,
        isShortcutTaken: To,
        keyToSymbol: go,
        merge: yo,
        mockChannel: Oo,
        optionOrAltSymbol: ko,
        shortcutMatchesShortcut: Bo,
        shortcutToHumanString: fo,
        types: p,
        useAddonState: Po,
        useArgTypes: Ro,
        useArgs: Lo,
        useChannel: Do,
        useGlobalTypes: Eo,
        useGlobals: S,
        useParameter: wo,
        useSharedState: vo,
        useStoryPrepared: xo,
        useStorybookApi: C,
        useStorybookState: Ho,
      } = __STORYBOOK_API__;
    var Go = __STORYBOOK_COMPONENTS__,
      {
        A: Wo,
        ActionBar: Ko,
        AddonPanel: Yo,
        Badge: Vo,
        Bar: qo,
        Blockquote: Zo,
        Button: zo,
        ClipboardCode: Jo,
        Code: Qo,
        DL: $o,
        Div: jo,
        DocumentWrapper: Xo,
        EmptyTabContent: on,
        ErrorFormatter: nn,
        FlexBar: en,
        Form: cn,
        H1: tn,
        H2: rn,
        H3: In,
        H4: an,
        H5: ln,
        H6: sn,
        HR: un,
        IconButton: h,
        IconButtonSkeleton: dn,
        Icons: mn,
        Img: pn,
        LI: Sn,
        Link: Cn,
        ListItem: hn,
        Loader: An,
        OL: bn,
        P: _n,
        Placeholder: Tn,
        Pre: gn,
        ResetWrapper: yn,
        ScrollArea: On,
        Separator: kn,
        Spaced: Bn,
        Span: fn,
        StorybookIcon: Pn,
        StorybookLogo: Rn,
        Symbols: Ln,
        SyntaxHighlighter: Dn,
        TT: En,
        TabBar: wn,
        TabButton: vn,
        TabWrapper: xn,
        Table: Hn,
        Tabs: Mn,
        TabsState: Un,
        TooltipLinkList: Fn,
        TooltipMessage: Nn,
        TooltipNote: Gn,
        UL: Wn,
        WithTooltip: Kn,
        WithTooltipPure: Yn,
        Zoom: Vn,
        codeCommon: qn,
        components: Zn,
        createCopyToClipboardFunction: zn,
        getStoryHref: Jn,
        icons: Qn,
        interleaveSeparators: $n,
        nameSpaceClassNames: jn,
        resetComponents: Xn,
        withReset: oe,
      } = __STORYBOOK_COMPONENTS__;
    var re = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: Ie,
        AccessibilityIcon: ae,
        AddIcon: le,
        AdminIcon: ie,
        AlertAltIcon: se,
        AlertIcon: ue,
        AlignLeftIcon: de,
        AlignRightIcon: me,
        AppleIcon: pe,
        ArrowDownIcon: Se,
        ArrowLeftIcon: Ce,
        ArrowRightIcon: he,
        ArrowSolidDownIcon: Ae,
        ArrowSolidLeftIcon: be,
        ArrowSolidRightIcon: _e,
        ArrowSolidUpIcon: Te,
        ArrowUpIcon: ge,
        AzureDevOpsIcon: ye,
        BackIcon: Oe,
        BasketIcon: ke,
        BatchAcceptIcon: Be,
        BatchDenyIcon: fe,
        BeakerIcon: Pe,
        BellIcon: Re,
        BitbucketIcon: Le,
        BoldIcon: De,
        BookIcon: Ee,
        BookmarkHollowIcon: we,
        BookmarkIcon: ve,
        BottomBarIcon: xe,
        BottomBarToggleIcon: He,
        BoxIcon: Me,
        BranchIcon: Ue,
        BrowserIcon: Fe,
        ButtonIcon: Ne,
        CPUIcon: Ge,
        CalendarIcon: We,
        CameraIcon: Ke,
        CategoryIcon: Ye,
        CertificateIcon: Ve,
        ChangedIcon: qe,
        ChatIcon: Ze,
        CheckIcon: ze,
        ChevronDownIcon: Je,
        ChevronLeftIcon: Qe,
        ChevronRightIcon: $e,
        ChevronSmallDownIcon: je,
        ChevronSmallLeftIcon: Xe,
        ChevronSmallRightIcon: oc,
        ChevronSmallUpIcon: nc,
        ChevronUpIcon: ec,
        ChromaticIcon: cc,
        ChromeIcon: tc,
        CircleHollowIcon: rc,
        CircleIcon: Ic,
        ClearIcon: ac,
        CloseAltIcon: lc,
        CloseIcon: ic,
        CloudHollowIcon: sc,
        CloudIcon: uc,
        CogIcon: dc,
        CollapseIcon: mc,
        CommandIcon: pc,
        CommentAddIcon: Sc,
        CommentIcon: Cc,
        CommentsIcon: hc,
        CommitIcon: Ac,
        CompassIcon: bc,
        ComponentDrivenIcon: _c,
        ComponentIcon: Tc,
        ContrastIcon: gc,
        ControlsIcon: yc,
        CopyIcon: Oc,
        CreditIcon: kc,
        CrossIcon: Bc,
        DashboardIcon: fc,
        DatabaseIcon: Pc,
        DeleteIcon: Rc,
        DiamondIcon: Lc,
        DirectionIcon: Dc,
        DiscordIcon: Ec,
        DocChartIcon: wc,
        DocListIcon: vc,
        DocumentIcon: xc,
        DownloadIcon: Hc,
        DragIcon: Mc,
        EditIcon: Uc,
        EllipsisIcon: Fc,
        EmailIcon: Nc,
        ExpandAltIcon: Gc,
        ExpandIcon: Wc,
        EyeCloseIcon: Kc,
        EyeIcon: Yc,
        FaceHappyIcon: Vc,
        FaceNeutralIcon: qc,
        FaceSadIcon: Zc,
        FacebookIcon: zc,
        FailedIcon: Jc,
        FastForwardIcon: Qc,
        FigmaIcon: $c,
        FilterIcon: jc,
        FlagIcon: Xc,
        FolderIcon: ot,
        FormIcon: nt,
        GDriveIcon: et,
        GithubIcon: ct,
        GitlabIcon: tt,
        GlobeIcon: rt,
        GoogleIcon: It,
        GraphBarIcon: at,
        GraphLineIcon: lt,
        GraphqlIcon: it,
        GridAltIcon: st,
        GridIcon: ut,
        GrowIcon: dt,
        HeartHollowIcon: mt,
        HeartIcon: pt,
        HomeIcon: St,
        HourglassIcon: Ct,
        InfoIcon: ht,
        ItalicIcon: At,
        JumpToIcon: bt,
        KeyIcon: _t,
        LightningIcon: Tt,
        LightningOffIcon: gt,
        LinkBrokenIcon: yt,
        LinkIcon: Ot,
        LinkedinIcon: kt,
        LinuxIcon: Bt,
        ListOrderedIcon: ft,
        ListUnorderedIcon: Pt,
        LocationIcon: Rt,
        LockIcon: Lt,
        MarkdownIcon: Dt,
        MarkupIcon: Et,
        MediumIcon: wt,
        MemoryIcon: vt,
        MenuIcon: xt,
        MergeIcon: Ht,
        MirrorIcon: Mt,
        MobileIcon: Ut,
        MoonIcon: Ft,
        NutIcon: Nt,
        OutboxIcon: Gt,
        OutlineIcon: A,
        PaintBrushIcon: Wt,
        PaperClipIcon: Kt,
        ParagraphIcon: Yt,
        PassedIcon: Vt,
        PhoneIcon: qt,
        PhotoDragIcon: Zt,
        PhotoIcon: zt,
        PinAltIcon: Jt,
        PinIcon: Qt,
        PlayBackIcon: $t,
        PlayIcon: jt,
        PlayNextIcon: Xt,
        PlusIcon: or,
        PointerDefaultIcon: nr,
        PointerHandIcon: er,
        PowerIcon: cr,
        PrintIcon: tr,
        ProceedIcon: rr,
        ProfileIcon: Ir,
        PullRequestIcon: ar,
        QuestionIcon: lr,
        RSSIcon: ir,
        RedirectIcon: sr,
        ReduxIcon: ur,
        RefreshIcon: dr,
        ReplyIcon: mr,
        RepoIcon: pr,
        RequestChangeIcon: Sr,
        RewindIcon: Cr,
        RulerIcon: hr,
        SearchIcon: Ar,
        ShareAltIcon: br,
        ShareIcon: _r,
        ShieldIcon: Tr,
        SideBySideIcon: gr,
        SidebarAltIcon: yr,
        SidebarAltToggleIcon: Or,
        SidebarIcon: kr,
        SidebarToggleIcon: Br,
        SpeakerIcon: fr,
        StackedIcon: Pr,
        StarHollowIcon: Rr,
        StarIcon: Lr,
        StickerIcon: Dr,
        StopAltIcon: Er,
        StopIcon: wr,
        StorybookIcon: vr,
        StructureIcon: xr,
        SubtractIcon: Hr,
        SunIcon: Mr,
        SupportIcon: Ur,
        SwitchAltIcon: Fr,
        SyncIcon: Nr,
        TabletIcon: Gr,
        ThumbsUpIcon: Wr,
        TimeIcon: Kr,
        TimerIcon: Yr,
        TransferIcon: Vr,
        TrashIcon: qr,
        TwitterIcon: Zr,
        TypeIcon: zr,
        UbuntuIcon: Jr,
        UndoIcon: Qr,
        UnfoldIcon: $r,
        UnlockIcon: jr,
        UnpinIcon: Xr,
        UploadIcon: oI,
        UserAddIcon: nI,
        UserAltIcon: eI,
        UserIcon: cI,
        UsersIcon: tI,
        VSCodeIcon: rI,
        VerifiedIcon: II,
        VideoIcon: aI,
        WandIcon: lI,
        WatchIcon: iI,
        WindowsIcon: sI,
        WrenchIcon: uI,
        YoutubeIcon: dI,
        ZoomIcon: mI,
        ZoomOutIcon: pI,
        ZoomResetIcon: SI,
        iconList: CI,
      } = __STORYBOOK_ICONS__;
    var i = "storybook/outline",
      b = "outline",
      _ = u(function () {
        let [c, r] = S(),
          s = C(),
          I = [!0, "true"].includes(c[b]),
          a = d(() => r({ [b]: !I }), [I]);
        return (
          m(() => {
            s.setAddonShortcut(i, {
              label: "Toggle Outline",
              defaultShortcut: ["alt", "O"],
              actionName: "outline",
              showInMenu: !1,
              action: a,
            });
          }, [a, s]),
          t.createElement(
            h,
            {
              key: "outline",
              active: I,
              title: "Apply outlines to the preview",
              onClick: a,
            },
            t.createElement(A, null),
          )
        );
      });
    l.register(i, () => {
      l.add(i, {
        title: "Outline",
        type: p.TOOL,
        match: ({ viewMode: c, tabId: r }) =>
          !!(c && c.match(/^(story|docs)$/)) && !r,
        render: () => t.createElement(_, null),
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
