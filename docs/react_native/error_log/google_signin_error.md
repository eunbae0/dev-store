# react native google signin에서 재로그인시 signin이 이미 진행중이라는 오류

Android 기기에서 패키지가 제공하는 기본 모듈 버튼이 아니라, 커스텀 버튼에 signIn을 이용할 경우, 재로그인이 안되는 현상이 발생했다.

> Warning: previous promise did not settle and was overwritten. You've called \"signIn\" while \"signIn\" was already in progress and has not completed yet.

에러코드는 아래와 같다.

> ErrorCode: ASYNC_OP_IN_PROGRESS, 12502


## 원인

몇십분동안 패키지도 뜯어본 결과, 이 부분에서 promise가 존재하기 떄문에 exception이 발생한 문제였다.
```java
public boolean setPromiseWithInProgressCheck(Promise promise, String fromCallsite) { 
  if (this.promise != null) { rejectWithAsyncOperationStillInProgress(promise, fromCallsite);
  return false; 
  } 
  this.promise = promise; 
  nameOfCallInProgress = fromCallsite; 
  return true; 
}
```

Native module의 `GoogleSigninButton`은 EventEmitter로 이벤트로 onPress를 처리할 때 까지 시간이 있는데, 직접 구현할 때는 바로 실행하기 때문에 발생한 문제로 추정된다.


## 해결

```tsx
GoogleSignin.configure({
  webClientId:
    'your_web_client_id',
  });

await GoogleSignin.hasPlayServices({
  showPlayServicesUpdateDialog: true,
});

// add this line
await new Promise((resolve) => setTimeout(resolve, 100));

const response = await GoogleSignin.signIn();
// ...
```

따라서 js단에서 promise를 통해 약간의 delay를 시켜줘서 문제를 해결했다.