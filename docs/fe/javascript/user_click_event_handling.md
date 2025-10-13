# 사용자 입력 이벤트 핸들링

## onMouseUp, onMouseDown

onMouseUp, onMouseDown 이벤트 핸들러는 사용자가 마우스 버튼을 눌렀다가 놓는 이벤트를 처리합니다.

### 예시

```tsx
const handleMouseDown = (event: React.MouseEvent) => {
  console.log('Mouse down');
};

const handleMouseUp = (event: React.MouseEvent) => {
  console.log('Mouse up');
};

<div
  onMouseDown={handleMouseDown}
  onMouseUp={handleMouseUp}
></div>
```

## onTouchStart, onTouchEnd

onTouchStart, onTouchEnd 이벤트 핸들러는 사용자가 터치를 시작하고 끝내는 이벤트를 처리합니다.

모바일 환경에서 터치 이벤트를 처리할 때는 onTouchStart, onTouchEnd 이벤트 핸들러를 사용합니다.

```tsx
const handleTouchStart = (event: React.TouchEvent) => {
  console.log('Touch start');
};

const handleTouchEnd = (event: React.TouchEvent) => {
  console.log('Touch end');
};

<div
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
></div>
```

## onPointerUp, onPointerDown

onPointerUp, onPointerDown 이벤트 핸들러는 사용자가 포인터를 눌렀다가 놓는 이벤트를 처리합니다.

```tsx
const handlePointerUp = (event: React.PointerEvent) => {
  console.log('Pointer up');
};

const handlePointerDown = (event: React.PointerEvent) => {
  console.log('Pointer down');
};

<div
  onPointerUp={handlePointerUp}
  onPointerDown={handlePointerDown}
></div>
```