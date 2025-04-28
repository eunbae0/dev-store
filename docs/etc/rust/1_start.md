# 1. Start

Rust는 _AOT(ahead-of-time-compiled)_ 언어로, 컴파일과 실행이 별개이다.

```shell
$ rustc main.rs
$ ./main
```

Ruby, Javascript 등은 명령어 한 줄로 프로그램을 컴파일하고 실행할 수 있는 동적 프로그래밍 언어이다. 이 언어들은 .rb, .js 파일을 다른 곳에서 실행 시 해당 언어의 구현체를 설치해야만 한다. 반면 Rust는 프로그램을 컴파일하여 만든 실행 파일을 러스트가 설치되지 않은 곳에서도 실행할 수 있다.

## Cargo

Cargo는 러스트 빌드 시스템 및 패키지 매니저이다. 코드 빌드 또는 작성에 필요한 외부 라이브러리를 다운로드 할 때나, 라이브러리를 제작할 때 겪는 귀찮은 일을 상당수 줄여주는 편리한 도구이다.

```shell
$ cargo new hello_cargo
```

### Cargo로 프로젝트 빌드 및 실행

```shell
$ cargo build
$ cargo run
```

#### cargo check

```shell
$ cargo check
```
실행 파일을 생성하는 단계를 건너뛴다. 따라서 `cargo build`보다 훨씬 빠르며, 주기적으로 이 명령어를 실행해 코드에서 컴파일 문제가 발생하지 않는지 확인하고, 실행 파일이 필요한 경우에만 `cargo build`를 사용한다.

#### Release build 생성

```shell
$ cargo build --release
```
일반 빌드와 달리 _target/debug_ 가 아닌 _target/release_ 에 실행 파일이 생성되며, 컴파일 시 최적화를 진행해 컴파일이 오래 걸리는 대신 러스트 코드가 더 빠르게 작동하도록 한다.