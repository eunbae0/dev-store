# JWT

## Header

- 토큰 유형과 서명 알고리즘
- base64URI로 인코딩

## Payload

- 데이터, 토큰 발급자, 토큰 유효기간
- base64URI로 인코딩

## Signature

- (인코딩된 header + payload) + 비밀 키를 기반으로 Header에 명시된 알고리즘으로 다시 생성한 서명 값

## JWT의 장점

1. 사용자 인증에 필요한 모든 정보는 토큰 자체에 포함되기 때문에 별도의 인증 저장소가 필요하지 않음
2. 다른 유형의 토큰과 비교했을 때 경량화되어있음(SAML에 비해 훨씬 경량화)
3. 디코딩했을 때 JSON이 나오기 때문에 JSON을 기반으로 쉽게 직렬화, 역직렬화가 가능

## 토큰 기반 인증 방식의 로그인 유지 과정

1. Client에서 로그인 요청이 들어오면, Server는 JWT token(access, refresh)을 생성한 후 응답을 보낸다.
2. Client는 access token을 HTTP header - Authorization or Cookie에 담아 요청을 하면 원하는 컨텐츠를 가져올 수 있다.
3. 만약 access token이 만료되었다면 refresh token을 기반으로 access token을 다시 발급받을 수 있다.
