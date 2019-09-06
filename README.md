# React Native [Web] + Monorepo
## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

![article-cover](https://user-images.githubusercontent.com/619186/64462961-a1f1c300-d0d8-11e9-872c-cadf68bd1b02.jpg)


### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native)_

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ cd packages/mobile/ios && pod install && cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the mobile app
    - Via CLI
      - `$ yarn workspace mobile react-native run-ios` or `yarn workspace mobile react-native run-android`
    - [iOS] Via Xcode
      - `yarn workspace mobile xcode`
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn workspace mobile studio`
      - Press the Run button

### Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)<br/>

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://github.com/brunolemos.png?size=100" height="100" /></a>


## Who is using this on production

Check out [DevHub](https://github.com/devhubapp/devhub).
The main difference is that it supports Desktop (Electron) in addition to Web, iOS and Android.

![DevHub Desktop](https://user-images.githubusercontent.com/619186/63945240-59d40000-ca49-11e9-98c1-353225f8dcf6.jpg)

![DevHub Menubar](https://user-images.githubusercontent.com/619186/64462861-56d7b000-d0d8-11e9-8a8a-0eb085f248a0.jpg)

<p align="center">
  <img alt="DevHub Mobile - Notifications" height="620" src="https://user-images.githubusercontent.com/619186/64462897-78d13280-d0d8-11e9-92fd-4df3344d4312.jpg" />
  <img alt="DevHub Mobile - Notification Filters" height="620" src="https://user-images.githubusercontent.com/619186/64462909-7ff84080-d0d8-11e9-8a43-390be77644c9.jpg" />
  <img alt="DevHub Mobile - Repository activity" height="620" src="https://user-images.githubusercontent.com/619186/64462915-81c20400-d0d8-11e9-85eb-8322be20671c.jpg" />
</p>

<br/>
