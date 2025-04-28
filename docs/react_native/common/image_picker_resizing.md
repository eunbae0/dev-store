# Image Picker & Resizing Image

이미지 picker


## Expo ImagePicker로 이미지 가져오기

```tsx
import * as ImagePicker from 'expo-image-picker';

// ...

	const [isPhotoUrlChanged, setIsPhotoUrlChanged] = useState(false);

	const pickImage = async () => {
		// Request permission
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status !== 'granted') {
			showToast({
				message: '사진 선택을 위해 갤러리 접근 권한이 필요해요.',
				type: 'info',
			});
			return;
		}

		// Open image picker
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5,
			selectionLimit: 1,
		});

		if (!result.canceled && result.assets && result.assets.length > 0) {
			const selectedImageUri = result.assets[0].uri;

			setPhotoUrl(selectedImageUri);
			setIsPhotoUrlChanged(true);
		}
	};
```

## Expo ImageManipulator로 이미지 리사이징하기

```tsx
import * as ImageManipulator from 'expo-image-manipulator';

const IMAGE_RESIZE_SIZE = 128;

export const resizeImage = async (uri: string) => {
	try {
		const context = ImageManipulator.ImageManipulator.manipulate(uri).resize({
			width: IMAGE_RESIZE_SIZE,
			height: IMAGE_RESIZE_SIZE,
		});
		const image = await context.renderAsync();
		const _result = await image.saveAsync({
			format: ImageManipulator.SaveFormat.WEBP,
		});
		return _result.uri;
	} catch (error) {
		throw new Error(`이미지 리사이징 오류: ${error}`);
	}
};
```