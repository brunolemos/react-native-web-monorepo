# React Native [Web] + Monorepo

## 100% code sharing between Web, iOS and Android

This is the source code from [this tutorial](https://dev.to/brunolemos/tutorial-100-code-sharing-between-ios-android--web-using-react-native-web-andmonorepo-4pej).

Tech Stack: TypeScript v4, React Native v0.63, Next.js v10 & Create React App v4.
Prettier and ESLint are also configured as pre-commit hooks.

![article-cover](https://user-images.githubusercontent.com/619186/64933790-1fc27680-d81d-11e9-8077-64a1066b7c17.png)

### How to run

- `$ git clone git@github.com:brunolemos/react-native-web-monorepo.git`
- `$ cd react-native-web-monorepo`
- `$ yarn`
- Web
  - [CRA] `$ yarn workspace web-cra start`
  - [Next.js] `$ yarn workspace web-nextjs dev`
- Mobile
  - [iOS]
    - `$ cd packages/mobile/ios && pod update && pod install && cd -`
    - [CLI]
      - `$ yarn ios`
    - [Xcode]
      - `$ yarn workspace mobile start`
      - `yarn xcode`
      - Press the Run button
  - [Android]
    - [CLI]
      - `$ yarn android`
    - [Android Studio]
      - `$ yarn workspace mobile start`
      - `yarn studio`
      - Press the Run button

## Who is using this on production

Check out [DevHub](https://github.com/devhubapp/devhub), which is the project that inspired this repository.

### Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)<br/>

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://github.com/brunolemos.png?size=500" height="100" /></a>
