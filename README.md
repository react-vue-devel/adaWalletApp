# Daedalus Mobile Client Application

This is purely a front end application layer of Daedalus wallet built with Ionic Hybrid mobile application in TypeScript. It is still in development.


## Important!
**There is no user wallet sensitive data stored by the application at any given time.** This project is a hybrid mobile applications using Ionic framework that makes use of the [Cardano SL Wallet Web API](https://cardanodocs.com/technical/wallet/api/). There are multiple components that conenct together to make this application work which are listed in detail in a later section of this document. 


## Table of Contents
 - [Overall Design/Architecture](#overall-design-architecture)
 - [Getting Started](#getting-started)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `https://github.com/tanzeelrana/adaWalletApp.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: You may need to add “sudo” in front of any global commands to install the utilities._

## Overall Design Architecture
To make the full application work there are multiple components that need to be put into place before it can run properly.

* Daedalus Mobile Client App (Ionic Hybrid App in AngularJS & TypeScript)
* AWS Mobile hub with cognito authentication services 
* [Cardano SL Node](https://github.com/input-output-hk/cardano-sl)
* [Daedalus Wallet](https://github.com/input-output-hk/daedalus)

<img src="resources/screenshots/DaedalusMobileClient.png" alt="Overall Design and Architecture">

## Use Cases

* ADA Tx Fee - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/adaTxFee.ts) ]
* Change Ada Wallet Passphrase - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/changeAdaWalletPassphrase.ts)]
* Delete Ada Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/deleteAdaWallet.ts	)]
* Export Ada Backup JSON - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/exportAdaBackupJSON.ts	)]
* Get Ada History By Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/getAdaHistoryByWallet.ts	)]
* Get Ada Local Time Difference - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/getAdaLocalTimeDifference.ts	)]
* Get Ada Sync Progress - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/getAdaSyncProgress.ts	)]
* Get Ada Wallet Accounts - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/getAdaWalletAccounts.ts	)]
* Import Ada Backup JSON - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/importAdaBackupJSON.ts	)]
* Import Ada Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/importAdaWallet.ts	)]
* Is Valid Ada Address - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/isValidAdaAddress.ts	)]
* New Ada Payment - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/newAdaPayment.ts	)]
* New Ada Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/newAdaWallet.ts	)]
* New Ada Wallet Address - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/newAdaWalletAddress.ts	)]
* Redeem Ada - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/redeemAda.ts	)]
* Redeem Ada Paper Vend - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/redeemAdaPaperVend.ts	)]
* Restore Ada Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/restoreAdaWallet.ts	)]
* Update Ada Wallet - [ [code](https://github.com/tanzeelrana/adaWalletApp/blob/master/src/providers/ada/api/updateAdaWallet.ts	)]

## App Preview

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

- [Schedule Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html)

  <img src="resources/screenshots/SchedulePage.png" alt="Schedule">


- [About Page](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/about/about.html)

  <img src="resources/screenshots/AboutPage.png" alt="Schedule">


- To see more images of the app, check out the [screenshots directory](https://github.com/ionic-team/ionic-conference-app/tree/master/resources/screenshots)!


## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## File Structure of App

```
ionic-conference-app/
├-- .github/                            * GitHub files
│   ├── CONTRIBUTING.md                 * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md               * Template used to populate issues in this repo
|
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |
|    |-- assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                          * Contains all of our pages
│    │    ├── about/                     * About tab page
│    │    │    ├── about.html            * AboutPage template
│    │    │    └── about.ts              * AboutPage code
│    │    │    └── about.scss            * AboutPage stylesheet
│    │    │
│    │    ├── account/                   * Account page
│    │    │    ├── account.html          * AccountPage template
│    │    │    └── account.ts            * AccountPage code
│    │    │    └── account.scss          * AccountPage stylesheet
│    │    │
│    │    │── login/                     * Login page
│    │    │    ├── login.html            * LoginPage template
│    │    │    └── login.ts              * LoginPage code
│    │    │    └── login.scss            * LoginPage stylesheet
│    │    │
│    │    │── map/                       * Map tab page
│    │    │    ├── map.html              * MapPage template
│    │    │    └── map.ts                * MapPage code
│    │    │    └── map.scss              * MapPage stylesheet
│    │    │
│    │    │── schedule/                  * Schedule tab page
│    │    │    ├── schedule.html         * SchedulePage template
│    │    │    └── schedule.ts           * SchedulePage code
│    │    │    └── schedule.scss         * SchedulePage stylesheet
│    │    │
│    │    │── schedule-filter/            * Schedule Filter page
│    │    │    ├── schedule-filter.html   * ScheduleFilterPage template
│    │    │    └── schedule-filter.ts     * ScheduleFilterPage code
│    │    │    └── schedule-filter.scss   * ScheduleFilterPage stylesheet
│    │    │
│    │    │── session-detail/            * Session Detail page
│    │    │    ├── session-detail.html   * SessionDetailPage template
│    │    │    └── session-detail.ts     * SessionDetailPage code
│    │    │
│    │    │── signup/                    * Signup page
│    │    │    ├── signup.html           * SignupPage template
│    │    │    └── signup.ts             * SignupPage code
│    │    │
│    │    │── speaker-detail/            * Speaker Detail page
│    │    │    ├── speaker-detail.html   * SpeakerDetailPage template
│    │    │    └── speaker-detail.ts     * SpeakerDetailPage code
│    │    │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│    │    │
│    │    │── speaker-list/              * Speakers tab page
│    │    │    ├── speaker-list.html     * SpeakerListPage template
│    │    │    └── speaker-list.ts       * SpeakerListPage code
│    │    │    └── speaker-list.scss     * SpeakerListPage stylesheet
|    |    |
│    │    │── support/                   * Support page
│    │    │    ├── support.html          * SupportPage template
│    │    │    └── support.ts            * SupportPage code
│    │    │    └── support.scss          * SupportPage stylesheet
│    │    │
│    │    │── tabs/                      * Tabs page
│    │    │    ├── tabs.html             * TabsPage template
│    │    │    └── tabs.ts               * TabsPage code
│    │    │
│    │    └── tutorial/                  * Tutorial Intro page
│    │         ├── tutorial.html         * TutorialPage template
│    │         └── tutorial.ts           * TutorialPage code
│    │         └── tutorial.scss         * TutorialPage stylesheet
|    |
│    ├── providers/                      * Contains all Injectables
│    │     ├── conference-data.ts        * ConferenceData code
│    │     └── user-data.ts              * UserData code
│    ├── theme/                          * App theme files
|    |     ├── variables.scss            * App Shared Sass Variables
|    |
|    |-- index.html
|
|-- www/
|    ├── assets/
|    |    ├── data/
|    |    |    └── data.json
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2
|    |    |
|    |    ├── img/
|    |
|    └── build/
|    └── index.html
|
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── LICENSE                             * Apache License
├── README.md                           * This file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
├── tslint.json                         * Defines the rules for the TypeScript linter
```
