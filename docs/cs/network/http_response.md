# HTTP Response Status Code

HTTP 응답 상태 코드는 특정 HTTP 요청이 성공적으로 완료되었는지 알려주며, 5개의 그룹으로 나누어진다. 상태 코드는 [section 10 of RFC 2616](https://datatracker.ietf.org/doc/html/rfc2616#section-10)에 정의되어 있다.

## Information Response

## Successful Response

#### 200 OK

- 요청이 성공적으로 응답됨.
- GET: 리소스를 가져왔고, `message body`로 전송되었다는 것을 의미
- HEAD: `message body` 없이 `representation header`가 응답에 포함되어 있다는 것을 의미
- POST: 리소스가 명시하는 행동의 결과가 `message body`에 전송되었다는 것을 의미

#### 201 Created

- 요청이 성공적이며, 그 결과로 새로운 resource가 생성됨.
- 일반적으로 POST, 일부 PUT 요청 이후에 응답

#### 204 No Content

- 요청이 성공적으로 처리했지만, 요청에 대해 보내줄 수 있는 콘텐츠가 없음
- 헤더는 의미있을 수 있음
- user-agent는 리소스가 캐시된 헤더를 새로운 것으로 업데이트 할 수 있습니다.

#### 205 Reset Content

- 서버가 요청을 성공적으로 처리했지만 콘텐츠를 표시하지 않음
- 204와 달리 이 응답은 요청자가 문서 보기를 재설정할 것을 요구함(ex. 새 입력을 위해 form 내용 비우기)

#### 206 Partial Content

- 서버가 GET 요청의 일부만 성공적으로 처리함

## Redirection messages

#### 300 Multiple Choices

- 요청에 대해 하나 이상의 응답이 가능함

#### 302 Found

- 요청한 리소스의 URI가 일시적으로 변경되었음

#### 304 Not Modified

- 응답이 수정되지 않았음
- Caching을 목적으로 사용되며, Client는 해당 응답을 받으면 브라우저의 캐시를 사용할 수 있음

## Client error responses

#### 400 Bad Request

- 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음

#### 401 Unauthorized

- unauthenticated(미인증)를 의미

#### 403 Forbidden

- 콘텐츠에 접근할 권리를 가지고 있지 않음
- 서버가 클라이언트가 누구인지 알고 있는 것에서 401과 다름

#### 404 Not Found

- 서버가 요청받은 리소스를 찾을 수 없음

#### 408 Request Timeout

- 서버가 사용되지 않는 연결을 끊고 싶어함

#### 413 Payload Too Large

- 요청 entity가 서버에서 정의한 한계보다 큼
- 서버는 연결을 끊거나 혹은 `Retry-After` 헤더 필드로 돌려보낼 수 있음

#### 415 Unsupported Media Type

- 요청한 미디어 포맷은 서버에서 지원하지 않음

#### 429 Too Many Requests

- 사용자가 지정된 시간에 너무 많은 요청을 보냄(rate limiting)

## Server error responses

#### 500 Internal Server Error

- 서버가 처리 방법을 모름(서버 내부 에러)

#### 502 Bad Gateway

- 서버가 요청을 처리하는 데 필요한 응답을 얻기 위해 Gateway로 작업하는 동안 잘못된 응답을 수신함

:::info
직접 응답 상태 코드를 정의해서 사용할 수 있지만, 기존에 정의되어있는 코드의 의미를 변경하면 안된다.
:::
