# React Native Crypto Market

_This is a practical project in React Native with Binance API where a user can BUY & Sell Crypto assets_

## Getting Started 🚀

_Clone the project to your local machine._

### Prerequisites 📋

_XCode in order to run the app on the iOS simulator_

_Android Studio or other Android Simulator in order to run the app on the Android simulator_

### Installation 🔧

_Use Yarn and pod install in order to install dependencies_

```
yarn && cd ios && pod install && cd ..
```

### Project Setup (Important) 🔴

_In order to get the Binance API working you will need to add your Api Key & your Api Secret_

In case you don't have a Binance API, you can create one with your GitHub account [here](https://testnet.binance.vision)

```
API keys should be added inside /.config/environments/.env
BINANCE_API_KEY=your-api-key
BINANCE_SECRET_KEY=your-secret-key
```

If after adding the keys in the ENV file the requests still fails.

```
Open the ios folder
Open the CryptoMarket.xcworkspace with XCode
Press Command + Shift + K (in order to clean the cache)
Run the Project again with the following steps
```

### Project Start 📱

_Now you can start the app by using one of this three commands_

```
yarn start --reset-cache
```
```
yarn ios 
```
```
yarn android 
```


## Developed using 🛠️

* [React Native](https://reactnative.dev)
* [React Navigation](https://reactnavigation.org)
* [Formik](https://formik.org)
* [Yup](https://github.com/jquense/yup)
* [React Query](https://tanstack.com/query/latest)
* [Axios](https://github.com/axios/axios)
* [Tailwind](https://tailwindcss.com)



## Author ✒️

* **Leandro Támola** 


## MARKET Demo
| iOS Market | Android Market |
|---|---|
|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/44e73cef-a5db-4b49-b85d-794ecf517c83" alt="iosMarket" width="400"/>|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/431e4d8a-519d-4d15-88d0-ea2607842de6" alt="androidMarket" width="400"/>|


## Limit Demo
| iOS Limit | Android Limit |
|---|---|
|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/f092e0f9-3428-48ad-984b-fd0261545007" alt="iOSLimit" width="400"/>|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/1e72e674-015b-463e-95c8-0cd8e64be206" alt="AndroidLimit" width="400"/>|


