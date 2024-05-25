---
sidebar_position: 1
---

# Stanford iOS 한글자막 강의 (4)

## 화면의 기본, 뷰를 알아보자

- View는 좌표 공간으로 정의한다.
- 뷰 계층: 위계구조를 가지고 있음(View 안에 View)

- 기본적으로 iOS에서는 UIWindow는 하나만 가진다.

- addSubView
- removeFromSuperView

### Initializing a UIView

- init(frame: CGRect): View에서 코드를 호출할 때 생성
- init(coder: NSCoder): Storyboard에서 나오면서 UIView를 만들 때 생성

### Coordinate System Data Structures

- CGFloat: Double과 비슷하다. 드로잉 할 때는 그 값을 CGFloat() 생성자를 이용해서 CGFloat로 변경해야한다.
- CGPoint
- CGSize
- CGRect

### View Coordinate System

- Origin은 기본적으로 upper left
- 드로잉에서 사용되는 모든 단위를 points라 부른다. (not pixels)
- frame과 center는 View의 위치를 잡아줄 뿐, 드로잉과는 전혀 상관 없다.

## 뷰는 어떻게 만들까

예시

```swift
let labelRect = CGRect(x: 20, y: 20, width: 100, height: 50)
let label = UILabel(frame: labelRect)
label.text = "Hello"
view.addSubview(label)
```

- override func drawRect(regionThatNeesToBeDrawn: CGRect)
- drawRect 메서드를 절대 호출하면 안된다!
- setNeedsDisplay()
- setNeedsDisplayInRect(regionThatNeesToBeDrawn: CGRect)

## 그림을 그려보자

- Create a UIBezierPath

```swift
let path = UIBezierPath()
```

- Move around, add lines or arcs to the path

```swift
path.moveToPoint(CGPoint(80, 50))
path.addLineToPoint(CGPoint(140, 150))
path.addLineToPoint(CGPoint(10, 150))
```

- Close the path

```swift
path.closePath()
```

- Now that you have a path, set attributes and stroke/fill

```swift
UIColor.greenColor().setFill()
UIColor.redColor().setStroke()
path.linewidth = 3.0
path.fill()
path.stroke()
```

뷰를 삼각형 뷰로 만들기 위해서는 이 코드를 drawRect에 넣어주면 된다.

- addClip(): css의 border-radius와 비슷

### UIColor

```swift
var backgroundColor: UIColor // background color
let transparentYellow = UIColor.yellowColor().colorWithAlphaComponent(0.5) // 투명도(alpha, transparency)
```

- View에서 투명도를 이용하기 위해서는 `var opaque = false` 값을 할당하여 시스템에게 불투명하지 않다는것을 알려줘야한다.

- View를 숨기기 위해서는 `var hidden: Bool`을 사용
