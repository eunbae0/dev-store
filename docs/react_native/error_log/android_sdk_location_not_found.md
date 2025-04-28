# Android 환경에서 빌드시, SDK location not found 에러

> SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable

npx expo run:android를 이용했지만 SDK location not found 에러가 발생.

[expo android studio emulator build](https://docs.expo.dev/workflow/android-studio-emulator)문서를 참고하여 .zshrc에 ANDROID_HOME을 이용해 정상적으로 sdk 경로를 설정했으나 에러가 발생했다.

## 해결

터미널에서 아래 입력
> $ source ~/.zshrc

이후 gradlew를 초기화한 다음 빌드, 성공

> $ ./gradlew clean

## 참고문서

https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil