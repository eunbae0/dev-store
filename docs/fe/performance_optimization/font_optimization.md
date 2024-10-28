# 폰트 최적화

폰트 다운이 느려서 늦게 바뀌는 현상 → FOUT(Flash of Unstyled Text) 또는 FOIT(Flash of Invisible Text)라고 한다.

- FOUT: Edge 브라우저에서 폰트를 로드하는 방식
  → 폰트 다운로드 여부와 상관없이 먼저 텍스트를 보여준 다음, 폰트가 다운로드되면 폰트를 적용함
- FOIT: Chrome, Safari, Firefox 브라우저에서 폰트를 로드하는 방식
  → 폰트가 완전히 다운로드되기 전까지 텍스트 자체를 보여주지 않음
  하지만 3초만 기다리는 FOIT이기 때문에 3초를 기다려도 다운로드 되지 않으면 텍스트를 먼저 표시함!!

1. 폰트 적용시점 제어하기

- 중요 텍스트(뉴스 제목)의 경우 FOIT방식이면 텍스트 내용이 사용자에게 빠르게 전달되지 않을 것
- 반면 꼭 전달하지 않아도 되는 텍스트의 경우는 FOUT방식을 사용하면 사용자의 시선을 분산시킬수있음..

CSS의 font-display 속성을 이용하면 폰트가 적용되는 시점을 제어할 수 있다(@font-face에서 설정할 수 있음)

다음과 같은 속성 O

- auto: 브라우저 기본 동작
- block: FOIT(timeout = 3s)
- swap: FOUT
- fallback: FOIT (timeout = 0.1s)
  // 3초 후에도 불러오지 못한 경우 기본폰트 유지, 이후 리로드시 캐시된 폰트 적용
- optional: FOIT (timeout = 0.1s)
  // 이후 네트워크 설정에 따라 기본 폰트 유지할지 결정, 이후 리로드시 캐시된 폰트 적용

> 책에서는 FOIT 방식인 block을 사용.
> 문제는 이렇게 설정하면 안보이던 폰트가 갑자기 나타나서 조금 어색할 수 있다.
> ⇒ fade-in 애니메이션 적용!

폰트가 다운로드 완료되는 시점을 알야야하므로 fontfaceobserver라는 라이브러리를 설치한다(-D 옵션)

```jsx
import FontFaceObserver from 'fontfaceobserver'

const font = new FontFaceObserver('pretendard')

function BannerVideo() {
	const [isFontLoaded, setIsFontLoaded] = useState(false)
	useEffect(() => {
		font.load(null, 20000).then(function () {
			setIsFontLoaded(true)
		})
	}, [])

  //...
	<div style={{opacity: isFontLoaded ? 1 : 0, transition: 'opacity .3s ease'}}>
}
```

1. 폰트 사이즈 줄이기

   1. 압축률이 좋은 폰트 포맷 사용(like WebP, WebM)

      WOFF(Web Open Font Format)

      - 파일 크기: EOT > TTF/OTF > WOFF > WOFF2

      https://transfonter.org

      버전이 낮은 일부 브라우저에서는 WOFF(2)포맷을 지원하지 않을 수 있음

      ```css
      @font-face {
      	font-family: pretendard;
      	src: url('./~.woff2') format('woff2'),
      		url('./~.woff') format('woff'),
      		url('./~.ttf') format('truetype')
      	font-dispaly: block;
      }
      ```

   2. 필요한 문자의 폰트만 로드

      <aside>
      🔥 서브셋 폰트 사용

      </aside>

      → 서브셋: 모든 문자가 아닌 일부 문자의 폰트 정보만 가지고 있는 것!

      위 transfonter서비스에서 Characters 옵션에 필요한 문자(책에서는 KEEP CALM AND RIDE LONGBOARD)를 입력
      → 일부 영문자를 제외한 문자들은 모두 폰트에 x

      file size: 447kb ⇒ 8.1kb로 줄어듦!

폰트를 **파일 형태**가 아닌 **Data-URI 형태**로 CSS 파일에 포함할 수 있다.

Data-URI: data 스킴이 접두어로 붙은 문자열 형태의 데이터

→ 파일을 문자열 형태로 변환하여 문서(html, css, js)에 인라인으로 삽입하는 것!

별도의 네트워크 로드 없이 App.css파일에서 폰틀르 사용가능

⇒ 사용하려면 폰트를 문자열 데이터로 변환해야한다: transfonter서비스 이용!

Base64 encode 옵션을 On으로 설정!

```css
@fontface {
	font-family: pretendard
	src: url('data:font/woff2;charset=utf-8;base64,d09GM...AAA=') format('woff2')
	...
}
```

이렇게 하면 네트워크 탭에서 폰트 파일이 기존과 달리 Data-URI형태로 로드된다. (687ms → 43ms)로 단축

기본적으로 브라우저에서 Data-URI를 네트워크 트래픽으로 인식해 기록하지만 실제론 이미 다른 파일 내부(App.css)에 임베드되어 있으므로 별도의 다운로드시간이 필요하지않다!(네트워크 x)

하지만 여기선 폰트 최적화와 서브셋폰트를 사용했지만, 만약 그렇지 않은 환경인 경우 App.css의 다운로드 시간이 느려질 수 있으므로 유의.
