# 카카오톡 인앱 브라우저에서 video 태그의 autoplay시 팝업으로 재생되는 현상

아이폰 카카오톡 브라우저에서 비디오가 전체화면으로 재생되는 문제가 발생함

일반 safari에서는 video 태그 `playsInline` 속성을 추가하면 내부에서 작동한다.

하지만 kakao browser에서는 `playsInline` 속성이 작동하지 않는다.

## 해결

video 태그에 `webkit-playsinline` 속성 추가

```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  webkit-playsinline  // 구버전 iOS 호환성을 위해 추가
  controls={false}
  preload="metadata"
>
  <source src="your-video.mp4" type="video/mp4" />
</video>
```

## 참고 문서

https://logtree.tistory.com/43