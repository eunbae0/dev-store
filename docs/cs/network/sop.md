# Same Origin Policy

동일한 출처의 리소스만 상호작용을 허용하는 정책. 예를들어 A 출처에서 온 문서가 B 출처에서 가져온 리소스와 상호작용하는 것을 차단하는 보안 정책이다.

만약 사용자가 악의적인 JS가 포함되어있는 페이지에 접속하면 사용자가 모르는 사이 개인정보를 해커의 서버로 보내 탈취할 수 있기 때문에 해당 정책이 존재한다.

## CORS(Cross-Origin Resource Sharing)

하지만 개발 시 기능상 어쩔 수 없이 다른 출처 간의 상호작용을 해야하는 케이스가 존재한다. 이를 대비하기위해 SOP의 예외 정책으로 CORS 정책을 마련해 두었다. 따라서 CORS를 이용하면 SOP의 제약을 받지 않게된다.

서버는 데이터 요청에 대해 `Access-Control-Allow-Origin`헤더를 통해 응답해야 한다. 이를 응답받은 브라우저가 CORS 정책 위반 여부를 검사한다. 해당 응답 패킷에서 `Access-Control-Allow-Origin=*`는 모든 도메인에서 접근을 허용한다는 의미이다.

### Preflight Request
본격적인 CORS HTTP 요청 전에 서버 측에서 그 요청의 메서드와 헤더에 대해 인식하고 있는지를 확인하는 CORS 요청. 지금 보내는 요청이 유효한지를 확인하기 위해 `OPTIONS` 메서드로 예비 요청을 보낸다.(`Access-Control-Request-Method`, `Origin` `Access-Control-Request-Headers`(optional)헤더 사용)

만약 데이터의 크기가 큰 요청이 유효하지 않은 요청이라면, 리소스를 낭비하는 것이므로 이를 방지하기 위해 특정 조건인 경우 예비 요청을 먼저 날려 이게 유효한 요청인지 확인을 하는 과정이다.

해당 요청의 조건은 아래와 같다.
- Content-Type이 다음과 같은 GET, HEAD, POST 요청
    - application/x-www-form-urlencoded
    - multipart/form-data
- text/plain
- 요청에 사용된 XMLHttpRequest.upload 객체에 이벤트 리스너가 등록되어 있지 않을 때
- ReadableStream 객체가 요청에서 사용되지 않을 때

`Access-Control-Max-Age` 헤더를 사용하여 동일한 URL을 사용하는 요청에 대해 Preflight Response를 선택적으로 캐시할 수 있다. 이 캐시는 브라우저의 일반 HTTP 캐시에 저장되지 않고 별개인 특정 캐시를 사용한다.

### 취약점
구현할 때 파라미터에 대한 적절한 검증을 거치지 않는다면 Command Injection 또는 SSRF 취약점이 발생하게 된다. 특히 SSRF(Server-side Request Forgery) 취약점이 발생할 가능성이 매우 높음. 개발자는 이를 고려하여 개발해야한다.

:::info
SSRF(Server-side Request Forgery) 취약점은 공격자가 서버측에서 요청하는 도메인을 변조하여 공격자가 원하는 서버로 요청을 하도록 하여 잘못된 응답 값을 가져가도록 하거나, 요청을 변경 또는 내부망 스캐닝 등을 수행할 수 있다.
:::
