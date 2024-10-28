# Sementic Tag(2)

스크린 리더, 키보드 만을 이용해 접근하는 이용자를 위해 텍스트에 의미있는 태그를 적용할 수 있다.

## 텍스트 서식 관련 태그

### strong

```html title="html"
<p style="font-weight: bold">example</p>
<p><b>example</b></p>
// highlight-next-line
<p><strong>example</strong></p>
```

셋 다 스타일은 strong과 똑같이 적용되지만, strong 태그를 사용한 구문 만이 스크린 리더가 강조하여 읽는다.

### em(emphasize)

```html title="html"
<p style="font-style: italic">example</p>
<i>example</i>
// highlight-next-line
<p><em>example</em></p>
```

strong과 마찬가지로 모든 스타일은 *이탤릭체*가 적용되지만, em 태그를 사용한 구문 만이 스크린 리더가 강조하여 읽는다.

### mark(highlight)

```html title="html"
<p><mark>example</mark></p>
```

### del

```html title="html"
<p><span style="text-decoration: line-through">example</span></p>
// highlight-next-line
<p><del>example</del></p>
```

line-through 속성을 적용한 코드는 똑같이 취소선을 표시하지만, 의미전달은 할 수 없다.

### ins

```html title="html"
<p><span style="text-decoration: underline">example</span></p>
// highlight-next-line
<p><del>example</del></p>
```

underline 속성을 적용한 코드는 똑같이 취소선을 표시하지만, 의미전달은 할 수 없다.

### sub, sup

```html title="html"
<p>X<sub>2</sub></p>
<p>X<sup>2</sup></p>
```

- sub: 아래 첨자
- sup: 위 첨자

## 인용 관련 태그

### blackquote

```html title="html"
<blackquote
	cite="https://www.yna.co.kr/view/AKR20240215137300542?section=culture/travel-leisure"
>
	요약beta 공유 댓글 글자크기조정 인쇄 (서울=연합뉴스) 성연재 기자 = 대한불교
	조계종 제19교구 본사인 전남 구례 화엄사는 제4회 구례 화엄사 홍매화·들매화 사진
	콘테스트 행사를 오는 25일부터 다음 달 23일까지 개최한다고 15일
	밝혔다.</blackquote
>
```

장문의 인용 글 삽입 시 사용할 수 있다. cite에는 인용글의 출처를 기재한다.

### q(quote)

```html title="html"
<q>큰 목표를 이루고 싶으면 허락을 구하지 마라. – 미상/q ></q>
```

짧은 인용 글 삽입 시 사용할 수 있다.

### abbr(약자)

```html title="html"
<abbr title="World Health Organization">WHO</abbr>
```

### address

```html title="html"
<address>
	서울특별시 강남구<br />
	<a href="mailto:asdf@gmail.com">asdf@gmail.com</a><br />
	<a href="tel:01000000000">0100000000</a>
</address>
```

주소, URL, 이메일 주소, 전화번호, SNS 식별자, 좌표 등 어떠한 정보라도 포함될 수 있다. 이 중 연락처가 가리키는 개인, 조직, 단체의 이름은 반드시 포함해야 한다.  
이메일, 전화번호와 같은 경우는 mailto:, tel:을 이용할 수 있다.

### cite

```html title="html"
<p></p>
```

제품, 그림 등의 제목 혹은 명칭

## 참고자료

https://soa-memo.tistory.com/35
