# React Native [Web] + Monorepo
## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

![article-cover](https://user-images.githubusercontent.com/619186/53903807-69870480-4023-11e9-95bc-98caaca01445.jpg)


### How to run

  - `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
  - `$ cd react-native-web-monorepo`
  - `$ yarn`
  - `$ yarn workspace mobile start`
  - Run the project
    - Via Xcode / Android Studio
      - Open Xcode / Android Studio and press the Run button
    - Via CLI
      -  _Open a new terminal tab_
      - `$ cd packages/mobile`
      - `$ npm un -g react-native-cli`
      - `$ npm i -g @react-native-community/cli`
      - `$ react-native run-ios` or `react-native run-android`

### Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)<br/>

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://github.com/brunolemos.png?size=100" height="100" /></a>


## Who is using this on production

Check out [DevHub](https://github.com/devhubapp/devhub).
The main differences are that it shares TypeScript code instead of JavaScript and also supports Desktop in addition to Web, iOS and Android.

![DevHub Desktop](https://user-images.githubusercontent.com/619186/53792356-4452a300-3f0a-11e9-9aea-bdc7e54bad95.jpg)

![DevHub Menubar](https://user-images.githubusercontent.com/619186/52375458-d9b36200-2a46-11e9-9a50-431293de7fa6.jpg)

<p align="center">
  <img alt="DevHub Mobile - Notifications" height="460" src="https://user-images.githubusercontent.com/619186/52172527-5cdb6c00-2758-11e9-9f2c-d7c28b523045.png" />
  <img alt="DevHub Mobile - Notification Filters" height="460" src="https://user-images.githubusercontent.com/619186/52172528-5cdb6c00-2758-11e9-9072-4ae96c3c1795.png" />
  <img alt="DevHub Mobile - Events" height="460" src="https://user-images.githubusercontent.com/619186/52172529-5cdb6c00-2758-11e9-999e-322f67d44fe1.png" />
  <img alt="DevHub Mobile - Event Filters" height="460" src="https://user-images.githubusercontent.com/619186/52172530-5cdb6c00-2758-11e9-86cf-291a30c37c96.png" />
</p>

<br/>
