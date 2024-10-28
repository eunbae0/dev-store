# Flex vs Grid

## Flex

- 단일 축 방향의 레이아웃을 구성하는데 사용
- 주로 수평방향으로 정렬
- 각 아이템들의 크기가 자유로워 유동적으로 변할 수 있음
- 유동적 레이아웃 변화에 적합

## Grid

- 2차원 그리드 시스템을 구성하는데 사용
- 수평 + 수직 모두 정렬 가능
- 미리 정의된 각 셀의 크기가 일정하게 유지

```css
grid-template-columns: 200px 200px 500px
grid-template-columns: 1fr 1fr 1fr
grid-template-columns: repeat(3, 1fr)

grid-template-rows: 1fr 1fr 1fr
```

- 레이아웃 변화가 적은 경우 적합
