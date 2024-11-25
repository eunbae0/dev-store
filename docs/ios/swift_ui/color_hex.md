# Color에서 hex를 지원하기

swiftUI Color에서는 기본적으로 hex를 지원하지 않는다.
예를들어, `#594C53`를 background로 지정하기 위해서는 rgb로 값을 줘야한다.

```swift
import SwiftUI

struct ContentView: View {
  var body: some View {
    Text("Hello, SwiftUI!")
      .frame(maxWidth: .infinity, maxHeight: .infinity)
      .background(Color(UIColor(red: 89/255, green: 76/255, blue: 83/255, alpha: 1.0)))
  }
}
```

## Color extension

Color에 extension을 추가하여 hex를 사용할 수 있다.

```swift
import SwiftUI

extension Color {
    init(hex: String) {
        let scanner = Scanner(string: hex)
        scanner.currentIndex = hex.hasPrefix("#") ? hex.index(after: hex.startIndex) : hex.startIndex
        var rgb: UInt64 = 0
        scanner.scanHexInt64(&rgb)
        
        let r = Double((rgb >> 16) & 0xFF) / 255.0
        let g = Double((rgb >> 8) & 0xFF) / 255.0
        let b = Double(rgb & 0xFF) / 255.0
        
        self.init(red: r, green: g, blue: b)
    }
}
```