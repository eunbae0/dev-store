# permission denied 에러

> Error: EACCES: permission denied, mkdir '/Users/eunbae/.expo/native-modules-cache/content-v2/sha512/ec/0f'

expo 환경에서 `expo start` 명령어 실행시 에러 발생

## 원인

### 파일 및 디렉토리 소유자  확인

```bash
$ ls -al | grep .expo
```
```bash
drwxr-xr-x@   7 root  staff     224 Mar  6 15:01 .expo
```

파일의 소유자가 `root`로 설정되어 있기 때문이다.

## 해결

```bash
$ sudo chown -R eunbae:staff .expo
```

소유자를 일반 유저인 `eunbae`로 변경하면 해결.

내 경우 `glustack-ui`를 설치한 이후로 권한이 없는 폴더와 파일이 많아져서 전체 권한을 주는 방식으로 해결했다.

```bash
$ sudo chown -R eunbae:staff .
```


## 참고문서

- https://velog.io/@milkcoke/Node.js-Error-EACCES-permission-denied