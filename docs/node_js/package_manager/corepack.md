# Corepack

프로젝트에서 사용되고 있는 패키지 매니저의 종류와 버전을 고정할 수 있는 툴.

corepack을 사용하면 yarn, pnpm과 같은 npm 이외의 패키지 매니저를 설치하지 않고도 사용할 수 있다.

```shell
$ corepack enable
```
해당 명령어를 통해 node binary 파일이 구성된 곳에서 symlink를 활성화 하게 되고, 이곳에 패키지 매니저를 사용하기 위해 필요한 정보들을 저장한다.

## 명령어

### 특정 패키지 enable

yarn, pnpm 패키지를 직접적으로 명시할 수 있다.

```shell
$ corepack enable yarn
$ corepack enable pnpm
```

### use

프로젝트에서 사용할 패키지 매니저를 명시할 수 있다. 실행시 package.json 파일에 packageManager로 추가된다.

```shell
$ corepack use yarn@1.22.19
```

### 비활성화

```shell
$ corepack disable
```
