# 쿠키와 세션

## 쿠키

브라우저에 저장된 데이터 조각

1. Server에서 응답 헤더로 `Set-Cookie`를 설정해서 쿠키를 보낼 수 있다.
2. 이 Set-Cookie를 응답으로 받은 Client에서는 요청 헤더에 Cookie가 자동으로 설정된다.
3. 브라우저에 쿠키가 저장되며, 서버에 전달 할 수 있다.

:::info

- 쿠키는 Server와 Client 모두 조작 가능하지만, 보통 서버에서 만료기한 등을 설정하고 컨트롤한다.
- 쿠키의 저장용량은 최대 `4kb`

:::

### 세션 쿠키

`Expires`, `Max-Age` 속성을 지정하지 않은 쿠키. 브라우저가 종료되면 쿠키도 사라진다.

### 영구 쿠키

`Expires`, `Max-Age` 속성을 지정해 특정 날짜 or 기간이 기나면 삭제되는 쿠키. 브라우저를 닫아도 쿠키가 만료되지 않는다.

### 쿠키의 여러가지 속성들

#### secure

쿠키에 `secure` 속성을 추가하면 https로만 쿠키를 주고 받을 수 있도로 한다.

:::info
Chrome v89+, Firefox v75+ 부터는 localhost에서 이 사양을 무시하기 때문에 `secure` 옵션을 걸어도 http로 쿠키를 주고받을 수 있기 때문에 쉽게 테스팅이 가능하다.
:::

#### httponly

Client Side에서 JS를 이용해 `document.cookie`로 접근이 불가능하도록 만들어 외부 공격을 제한할 수 있다.

#### samesite

요청이 동일한 도메인에서 시작된 경우에만 쿠키가 전송되도록 허용한다.

## 세션

세션은 쿠키를 기반하고 있지만, 사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리 세션은 서버 측에서 관리한다.

- Session: 서버와 클라이언트의 연결이 활성화된 상태를 의미
- Session ID: 웹 서버 또는 DB에 저장되는 Client에 대한 유니크한 ID

### 세션 방식의 로그인 유지 과정

1. Client에서 로그인 요청이 들어오면, Server는 session id를 발급한다.
2. 발급한 session id를 응답 헤더에 `Set-Cookie`를 이용해 담고, DB에 저장한다.
3. Client는 로그인 후 서버에 요청을 보낼 때 Cookie에 session id를 자동으로 실어서 보낸다.
4. Server는 요청 Cookie의 session id를 기반으로 DB에서 유저 정보를 찾고 유효성을 검증한다.
5. 유효하다면 로그인 되었다는 상태값을 응답으로 반환한다.

:::info
Session 방식 로그인은 사용자가 많아지면 서버와 메모리 비용이 증가할 수 있다
:::

### 토큰 기반 인증 방식의 로그인 유지 과정

1. Client에서 로그인 요청이 들어오면, Server는 JWT token(access, refresh)을 생성한 후 응답을 보낸다.
2. Client는 access token을 HTTP header - Authorization or Cookie에 담아 요청을 하면 원하는 컨텐츠를 가져올 수 있다.
3. 만약 access token이 만료되었다면 refresh token을 기반으로 access token을 다시 발급받을 수 있다.

### HTTP의 Stateless(무상태성) 특성

HTTP 요청을 통해 데이터를 주고 받을 때 요청이 끝나면 요청한 사용자 정보 등을 유지하지 않는 특징
-> 서버가 클라이언트의 이전 상태를 보존하지 않는다.

### Stateless의 의미를 살펴보면, 세션은 적절한 인증 방법인가?

HTTP의 핵심은 무상태성이지만, 로그인 유지와 같은 작업이 필요하기 때문에 HTTP
ookie를 이용해 stateful한 세션을 이용할 수 있다.
Header의 확장성 덕분에 같은 context, state를 공유할 수 있게 되는 것이다.

:::info
Q. 규모가 커져 서버가 여러 개가 된다면, 세션을 어떻게 관리할 수 있을까?  
A. Sticky Session, Session Clustering, Session Storage를 별도로 두는 방법 등이 존재
:::
