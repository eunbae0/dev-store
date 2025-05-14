# Android 기기에서 BottomSheet 내부에서 스크롤이 되지 않는 문제

## 문제

Android 기기의 경우, Bottom Sheet 내부의 `ScrollView`에서 스크롤이 되지 않는 현상이 발생


## 해결 

BottomSheet에 `enableContentPanningGesture={false}`를 추가한다.

## 참고 링크

https://github.com/gorhom/react-native-bottom-sheet/issues/1323
