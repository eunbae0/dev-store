# Capital Changes of File / Folder Name

대소문자를 감지하지 못한다. 따라서 파일명의 대소문자를 바꾸기 위해서는 아래 명령어가 필요하다.

```bash
$ git mv src/Example/Example.tsx tmp
$ git mv tmp src/example/Example.tsx
```

:::tip
Window 환경에서는 대소문자 구분이 되지 않기 때문에 대소문자 통일, snake case를 사용 권장
:::
