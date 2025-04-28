# Should pass resolved color instead of resource

![color_resource.png](./img/color_resource.png)

위와같은 문구가 뜨며 `setColor` 메서드가 적용이 되지 않음.

## 해결

ContextCompat을 이용하여 해결

```kotlin
.setColor(ContextCompat.getColor(reactApplicationContext, R.color.uoslife_primarybrand))
```

## 참고문서

- https://royzero.tistory.com/entry/Android-How-to-Get-Colors-from-My-Resource-in-Java
