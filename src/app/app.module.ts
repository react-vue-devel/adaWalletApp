import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { File } from '@ionic-native/file';
import { NgModule, ErrorHandler } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { AdaRecoveryPhraseVerifyModalPage } from '../pages/ada-recovery-phrase-verify-modal/ada-recovery-phrase-verify-modal';
import { AdaChangeWalletPassphraseModalPage } from '../pages/ada-change-wallet-passphrase-modal/ada-change-wallet-passphrase-modal';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

// crypto pages
import { AdaPage } from '../pages/ada/ada';
import { AdaSettingsPage } from '../pages/ada-settings/ada-settings';
import { AdaTradePage } from '../pages/ada-trade/ada-trade';
import { AdaTransactionsPage } from '../pages/ada-transactions/ada-transactions';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PricesPage } from '../pages/prices/prices';
import { AdaRecoverWalletModalPage } from '../pages/ada-recover-wallet-modal/ada-recover-wallet-modal';
import { AdaBuySellPage } from '../pages/ada-buy-sell/ada-buy-sell';
import { AdaSendPage } from '../pages/ada-send/ada-send';
import { AdaReceivePage } from '../pages/ada-receive/ada-receive';
import { AdaConfirmTransactionPage } from '../pages/ada-confirm-transaction/ada-confirm-transaction';
import { AdaWalletRecoverUsingIdPage } from '../pages/ada-wallet-recover-using-id/ada-wallet-recover-using-id';
import { AdaCreateNewWalletPage } from '../pages/ada-create-new-wallet/ada-create-new-wallet';
import { AdaSendReceivePage } from '../pages/ada-send-receive/ada-send-receive';
import { AdaTransactionDetailPage } from '../pages/ada-transaction-detail/ada-transaction-detail';
import { AdaRedemptionPage } from '../pages/ada-redemption/ada-redemption';
import { AdaTermsOfServiceAgreementPage } from '../pages/ada-terms-of-service-agreement/ada-terms-of-service-agreement';

// crypto providers 
import { BtcProvider } from '../providers/btc/btc';
import { CryptoCompareProvider } from '../providers/crypto-compare/crypto-compare';
import { CoinMarketCapProvider } from '../providers/coin-market-cap/coin-market-cap';
import { PipesModule } from '../pipes/pipes.module';
import { CoinIconsProvider } from '../providers/coin-icons/coin-icons';
import { AdaProvider } from '../providers/ada/ada';
import { LocalStoreProvider } from '../providers/local-store/local-store';

// AWS imports
import { User } from '../providers/user';
import { Cognito } from '../providers/aws.cognito';
import { DynamoDB } from '../providers/aws.dynamodb';
import { ConfirmPage } from '../pages/confirm/confirm';

@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    ConfirmPage,
    PopoverPage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TutorialPage,
    SupportPage,
    AdaPage,
    AdaTradePage,
    AdaTransactionsPage,
    AdaSettingsPage,
    PortfolioPage,
    PricesPage,
    AdaRecoveryPhraseVerifyModalPage,
    AdaChangeWalletPassphraseModalPage,
    AdaRecoverWalletModalPage,
    AdaSendPage,
    AdaReceivePage,
    AdaConfirmTransactionPage,
    AdaWalletRecoverUsingIdPage,
    AdaCreateNewWalletPage,
    AdaBuySellPage,
    AdaSendReceivePage,
    AdaTransactionDetailPage,
    AdaRedemptionPage,
    AdaTermsOfServiceAgreementPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    PipesModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: ConfirmPage, name: 'ConfirmPage', segment: 'confirm-page' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: PortfolioPage, name: 'PortfolioPage', segment: 'portfolio-page' },
        { component: AdaPage, name: 'AdaPage', segment: 'ada-page' },
        { component: AdaTradePage, name: 'AdaTradePage', segment: 'ada-trade-page' },
        { component: AdaTransactionsPage, name: 'AdaTransactionsPage', segment: 'ada-transavtions-page' },
        { component: AdaSettingsPage, name: 'AdaSettingsPage', segment: 'ada-settings-page' },
        { component: PricesPage, name: 'PricesPage', segment: 'prices-page' },
        { component: MapPage, name: 'MapPage', segment: 'map-page' },
        { component: AdaRecoveryPhraseVerifyModalPage, name: 'AdaRecoveryPhraseVerifyModalPage', segment: 'ada-recovery-phrase-verify-modal-page' },
        { component: AdaChangeWalletPassphraseModalPage, name: 'AdaChangeWalletPassphraseModalPage', segment: 'ada-change-wallet-passphrase-modal-page' },
        { component: AdaRecoverWalletModalPage, name: 'AdaRecoverWalletModalPage', segment: 'ada-recover-wallet-modal-page' },
        { component: AdaSendPage, name: 'AdaSendPage', segment: 'ada-send-page' },
        { component: AdaReceivePage, name: 'AdaReceivePage', segment: 'ada-receive-page' },
        { component: AdaConfirmTransactionPage, name: 'AdaConfirmTransactionPage', segment: 'ada-confirm-transaction-page' },
        { component: AdaWalletRecoverUsingIdPage, name: 'AdaWalletRecoverUsingIdPage', segment: 'ada-wallet-recover-using-id-page' },
        { component: AdaCreateNewWalletPage, name: 'AdaCreateNewWalletPage', segment: 'ada-create-new-wallet-page' },
        { component: AdaBuySellPage, name: 'AdaBuySellPage', segment: 'ada-buy-sell-page' },
        { component: AdaSendReceivePage, name: 'AdaSendReceivePage', segment: 'ada-send-receive-page' },
        { component: AdaTransactionDetailPage, name: 'AdaTransactionDetailPage', segment: 'ada-transaction-detail-page' },
        { component: AdaRedemptionPage, name: 'AdaRedemptionPage', segment: 'ada-transaction-detail' },
        { component: AdaTermsOfServiceAgreementPage, name: 'AdaTermsOfServiceAgreementPage', segment: 'ada-terms-of-service-agreement-page' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    ConfirmPage,
    PopoverPage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TutorialPage,
    SupportPage,
    AdaPage,
    AdaTradePage,
    AdaTransactionsPage,
    AdaSettingsPage,
    PortfolioPage,
    PricesPage,
    AdaRecoveryPhraseVerifyModalPage,
    AdaChangeWalletPassphraseModalPage,
    AdaRecoverWalletModalPage,
    AdaSendPage,
    AdaReceivePage,
    AdaConfirmTransactionPage,
    AdaWalletRecoverUsingIdPage,
    AdaCreateNewWalletPage,
    AdaBuySellPage,
    AdaSendReceivePage,
    AdaTransactionDetailPage,
    AdaRedemptionPage,
    AdaTermsOfServiceAgreementPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    BtcProvider,
    CryptoCompareProvider,
    CoinMarketCapProvider,
    CoinIconsProvider,
    AdaProvider,
    AdaRecoverWalletModalPage,
    AdaSendPage,
    AdaReceivePage,
    LocalStoreProvider,
    User,
    Cognito,
    DynamoDB,
    Clipboard,
    BarcodeScanner,
    File
  ]
})
export class AppModule {}

declare var AWS;
AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';