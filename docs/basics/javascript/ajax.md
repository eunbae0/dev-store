# Ajax

- Asynchronous JavaScript and XML
- 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식
- Web API인 XMLHttpRequest 객체를 기반으로 동작한다.

## XMLHttpRequest

브라우저는 주소창이나 HTML의 `form`, `a` 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다.
JS를 이용하여 HTTP 요청을 보내려면 Web API인 XMLHttpRequest 객체를 사용한다.

```javascript
const xhr = new XMLHttpRequest();
```

### HTTP 요청 전송

1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송
