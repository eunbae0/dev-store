# Error: Unable to upload archive

:::caution
Fastlane : [altool] Error: Unable to upload archive. Failed to get authorization for username and password
:::

fastlane으로 `upload_to_testflight` 실행 시 해당 에러 발생

## 해결

![error_unable_to_upload_archive.png](./img/error_unable_to_upload_archive.png)

1. App-Specific Passwords에서 앱 암호 생성
2. .env파일에 아래 variable 추가

```
FASTLANE_USER=<Apple USER ID>
FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD=<App-Specific Password>
```

:::info
Actually, fastlane does automatically load environment variables when put in an .env file next to the Fastfile: https://docs.fastlane.tools/advanced/other/#environment-variables
:::

## 참고문서

https://github.com/fastlane/fastlane/issues/21060
