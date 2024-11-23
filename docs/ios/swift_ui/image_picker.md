# Image Picker

앨범에서 사진을 선택하기 위해서 SwiftUI의 [Photos picker](https://developer.apple.com/documentation/photokit/photospicker)를 사용할 수 있다.
하지만 `앨범에서 선택`, `사진 촬영 및 사용`을 한번에 관리하기 위해서는 아직은 UIKit과 함께 사용해야한다.

## UIImagePickerController
swiftUI에서 UIKit의 `UIImagePickerController`를 활용하여 이미지 피커를 만든 예시이다.

### 예제

```swift
import SwiftUI
import UIKit

struct ImagePicker: UIViewControllerRepresentable {
  typealias UIViewControllerType = UIImagePickerController
    
  @Environment(\.presentationMode)
  private var presentationMode
  let sourceType: UIImagePickerController.SourceType
  let imagePicked: (UIImage) -> ()
    
  class Coordinator: NSObject, UINavigationControllerDelegate, UIImagePickerControllerDelegate {
    let parent: ImagePicker
        
    init(parent: ImagePicker) {
      self.parent = parent
    }
        
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
      if let image = info[.originalImage] as? UIImage {
        parent.imagePicked(image)
        parent.presentationMode.wrappedValue.dismiss()
      }
    }
        
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
      parent.presentationMode.wrappedValue.dismiss()
    }
  }
    
  func makeCoordinator() -> Coordinator {
    Coordinator(parent: self)
  }
    
  func makeUIViewController(context: Context) -> UIImagePickerController {
    let picker = UIImagePickerController()
        
    picker.sourceType = sourceType
    picker.delegate = context.coordinator
        
    return picker
  }
    
  func updateUIViewController(_ uiViewController: UIImagePickerController, context: Context) {}
}
```

> A SwiftUI view that represents a UIKit view controller can define a Coordinator type that SwiftUI manages and provides as part of the representable view’s context.

### 사용

```swift
@State private var sourceType: UIImagePickerController.SourceType = .camera // button에서 .camera / .photoLibrary 상태 변경

ImagePicker(sourceType: sourceType) {
  self.image = $0
}
```
