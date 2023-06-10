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
|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/7af75dbe-7e0b-4b8f-871a-355e2092f90e" alt="iosMarket" width="400"/>|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/f25f6bab-48a7-4270-a9ad-aa4b6f672a79" alt="androidMarket" width="400"/>|

## Limit Demo
| iOS Limit | Android Limit |
|---|---|
|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/7b53f85d-4803-4cdb-a198-b4efa2f5dcef" alt="simulator" width="400"/>|<img src="https://github.com/LeandroTamola/RNCryptoMarket/assets/67109855/8e0feb58-e6d4-43bd-a35b-81ccca4af600" alt="simulator" width="400"/>|


