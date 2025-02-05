import {themes} from './themes';

export interface Theme {
  basic: {
    black: string;
    white: string;
    grey: string;
    lightGray: string;
  };
  loyalty: {
    loyaltyPageBackground: string;
  };
  dashboard: {
    iconBackground: string;
    circleBorder: string;
  };
  header: {
    primaryBG: string;
    primaryText: string;
  };
  quickAction: {
    primaryBG: string;
    innerBG: string;
    inActiveText: string;
    activeText: string;
  };
  buttons: {
    primaryButton: string;
    secondaryButton: string;
    secondaryButtonNew: string;
    tertiaryButton: string;
    supportButton: string;
    deleteButton: string;
    categoryButton: string;
    trackerButton: string;
    darkBlue: string;
    nafathGrey: string;
    ctaButton: string;
    loyaltybackground: string;
    primaryBG: string;
    rippleBG: string;
    myAccountButton: string;
  };
  shadow: {
    cardBG: string;
    cardOverlay: string;
    featureCardShadow: string;
    black: string;
    dueBillShadow: string;
    cardShadow: string;
    categoryCardShadow: string;
    accountButtonShadow: string;
    RedeemShadow: string;
    standingOrder: string;
    shadowColor: string;
    shadowGradient: string;
    imageGradientOne: string;
    imageGradientTwo: string;
    blueBayoux: string;
    shadowOffers: string;
    shadowCategory: string;
    offerCategoryCardAndroid: string;
    offerCategoryInfoAndroid: string;
    offerCategoryInfoShadow: string;
    financeBannershadow: string;
    redemptionBottomCard: string;
    redemptionBottomCardAndroid: string;
  };
  text: {
    primaryText: string;
    bodyText: string;
    placeholderText: string;
    disableText: string;
    textNeutral: string;
    segmentText: string;
    segmentControlText: string;
    accountSegment: string;
    brandColor: string;
    searchBarText: string;
    timerText: string;
    white: string;
    accountCardText: string;
    accountCardBody: string;
    h2Bold: string;
    subTitle: string;
    travelCardSubText: string;
    bottomSheetTitleText: string;
    bottomSheetSubTitleText: string;
    featureCardTitleText: string;
    featureCardSubTitleText: string;
    label: string;
    expiredText: string;
    inReview: string;
    btnSecText: string;
    currencyOption: string;
    actionPillText: string;
    black: string;
    accountNickname: string;
    accountBalance: string;
    currenciesText: string;
    accountSectionTitle: string;
    greyText: string;
    subHeaderText: string;
    requestCounterMsg: string;
    circleTimer: string;
    errorMsg: string;
    semanticError: string;
    dueBillTitle: string;
    grayPlaceholder: string;
    dropDownTitleText: string;
    placeholderColor: string;
    gold: string;
    secondaryText: string;
    hyperLinkText: string;
    availableCashText: string;
    yellowSupport: string;
    secondaryTextDark: string;
    undelinePhoneNumber: string;
    description: string;
    outerSpace: string;
  };
  areaChart: {
    dataPointsColor: string;
    startFillColor: string;
    endFillColor: string;
  };
  icons: {
    primaryIcon: string;
    secondaryIcon: string;
    holderBG: string;
    iconBackground: string;
  };
  primaryBackground: {
    primaryBG: string;
    dividerColor: string;
    successScreenBackgroundColor: string;
    secondaryBG: string;
    lightGrey: string;
    tertiaryBG: string;
    skeletonBG: string;
    whiteBackground: string;
    lightGold: string;
  };
  inputFields: {
    bginputDropDown: string;
    otpPinBackgroundColor: string;
    otpPinBackgroundColorDisabled: string;
    bgSearchBar: string;
    dropdownDescription: string;
    otpPinInputBorderColor: string;
  };
  cards: {
    cardsPrimary: string;
    cardsSecondary: string;
    cardsAuxiliar: string;
    cardsHighlight: string;
    alert: string;
    cardIconBG: string;
    budgetCardShadow: string;
    accountCardBG: string;
    cardShadow: string;
    quickAction: string;
    actionPillsBG: string;
    dashboardCardBG: string;
    cardDebitBG: string;
    primaryShareBG: string;
    investmentPortfolioCardBG: string;
    verticalSeperator: string;
    shadowColor: string;
    white: string;
    tooTipBg: string;
    bottomBorder: string;
    cardPrimaryBorder: string;
  };
  gradients: {
    billPaymentStart: string;
    billPaymentEnd: string;
    quickActionsStart: string;
    quickActionsEnd: string;
    dividerGreyGradient: string;
    dividerPrimaryGradientStart: string;
    dividerPrimaryGradientEnd: string;
    timerContainer1: string;
    timerContainer2: string;
    sliver1: string;
    sliver2: string;
    gold1: string;
    gold2: string;
    platinum1: string;
    platinum2: string;
    blackLight: string;
    blackDark: string;
    inactiveCardGradientTop: string;
    inactiveCardGradientBottom: string;
    loyaltyGradient: string;
    liveChatBackground: string;
    whatsAppBackground: string;
    locateUsBackground: string;
  };
  disable: {
    bgDisable: string;
    quickActionsBG: string;
    cardIconBG: string;
  };
  segment: {
    bgActive: string;
    bgInActive: string;
    segmentControlBgActive: string;
    segmentControlBgInActive: string;
    segmentControlBgInActivePoints: string;
    transparent: string;
    lightGrey: string;
    accountSegment: string;
    unfilledColor: string;
  };
  borderOutlines: {
    borderOutlines: string;
    borderOutlinesPoints: string;
    listOutlines: string;
    headerStroke: string;
    listSeperator: string;
    grey: string;
    iconBorder: string;
    borderOutlinesWith30Opacity: string;
    carouselBorder: string;
    checkboxBorderWhite: string;
    ribButton: string;
    dashed: string;
    summaryOutline: string;
    divider: string;
    myAccountBorder: string;
    loadCurrencyDivider: string;
    categoryDivider: string;
  };
  tabs: {
    inActiveTile: string;
    activeTile: string;
    activeText: string;
    inActiveText: string;
    borderOutline: string;
    activeTab: string;
    inActiveTab: string;
  };
  bottomTabBar: {
    bgContainer: string;
    tabInActive: string;
    tabActive: string;
  };
  semantic: {
    error: string;
    errorTint: string;
    success: string;
    successTint: string;
    successIcon: string;
    successDot: string;
    expiredView: string;
    inreviewView: string;
    complaint: string;
    request: string;
    fill: string;
  };
  bottomSheet: {
    handleColor: string;
  };
  statusTile: {
    successTint: string;
    successText: string;
    errorTint: string;
    errorText: string;
    pendingTint: string;
    pendingText: string;
    tintColor: string;
    discountColor: string;
  };
  carousel: {
    carouselActive: string;
    carousedlIndicator: string;
    evenRGB: string;
    oddRGB: string;
    yellow: string;
    grey: string;
  };
  cardList: {
    cardContentBackground: string;
    halfCardBackground: string;
    addViewStyle: string;
  };
  switch: {
    activeColor: string;
    activeColorGreen: string;
    inactiveColor: string;
  };
  restartSeparator: {
    separator: string;
    lightSeparator: string;
  };
  backdrop: {
    loading: string;
  };
  settings: {
    sectionBackgroundColor: string;
    sectionBorderColor: string;
  };
  iconBackground: {
    orange: string;
    purple: string;
    blue: string;
    red: string;
    green: string;
    concrete: string;
  };
  progress: {
    filled: string;
    unfilled: string;
    unfilledBlack: string;
  };
  performanceChart: {
    unfilled: string;
    darkBg: string;
    darkBgGray: string;
    darkBgGrayWithOpacity: string;
    greenShamrok: string;
    yellowCandleLight: string;
  };
  certifcatesBG: {
    clearance: string;
    debit: string;
    iban: string;
    release: string;
  };
  iconsBG: {
    loan: string;
  };
  insights: {
    more: string;
    less: string;
  };
  accountTypeIcons: {
    currentAccount: string;
    eSaveAccount: string;
    travelAccount: string;
  };
  apple: {
    active: string;
    inActive: string;
  };
}

export type ThemeName = keyof typeof themes;

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
