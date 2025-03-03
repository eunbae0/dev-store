# @Gorhom/bottom-sheet를 useContext Provider, Portal을 이용하여 적용

전역적으로 bottomSheet를 호출하여 사용할 수 있도록 구현

## 구현 환경

- react-native-expo
- @gorhom/bottom-sheet^5

## 코드

```tsx
import { Platform } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import {
	createContext,
	useRef,
	useState,
	useCallback,
	useContext,
	type PropsWithChildren,
	useMemo,
} from 'react';
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Portal, PortalProvider, PortalHost } from '@gorhom/portal';

type IBottomSheet = React.ComponentProps<typeof BottomSheet>;
type BottomSheetContextType = {
	visible: boolean;
	bottomSheetRef: React.RefObject<BottomSheet>;
	handleClose: () => void;
	handleOpen: () => void;
	BottomSheetContainer: React.FC<IBottomSheet>;
};

const DEFAULT_CONTEXT: BottomSheetContextType = {
	visible: false,
	bottomSheetRef: { current: null },
	handleClose: () => {},
	handleOpen: () => {},
	BottomSheetContainer: () => null,
};

const ANIMATION_DELAY = 100;

const BottomSheetContext =
	createContext<BottomSheetContextType>(DEFAULT_CONTEXT);

const BottomSheetBackdropComponent = (
	props: React.ComponentProps<typeof BottomSheetBackdrop>,
) => (
	<BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
);

const WebContent = ({
	visible,
	content,
}: {
	visible: boolean;
	content: React.ReactNode;
}) => (
	<FocusScope contain={visible} autoFocus={true} restoreFocus={true}>
		{content}
	</FocusScope>
);

export const BottomSheetProvider = ({ children }: PropsWithChildren) => {
	const [visible, setVisible] = useState(false);
	const bottomSheetRef = useRef<BottomSheet>(null);

	const handleOpen = useCallback(() => {
		setTimeout(() => {
			bottomSheetRef.current?.expand();
		}, ANIMATION_DELAY);
		setVisible(true);
	}, []);

	const handleClose = useCallback(() => {
		bottomSheetRef.current?.close();
		setVisible(false);
	}, []);

	const handleSheetChanges = useCallback(
		(index: number) => {
			if (index === -1) handleClose();
		},
		[handleClose],
	);

	const keyDownHandlers = useMemo(
		() =>
			Platform.OS === 'web'
				? {
						onKeyDown: (e: React.KeyboardEvent) => {
							if (e.key === 'Escape') {
								e.preventDefault();
								handleClose();
							}
						},
					}
				: {},
		[handleClose],
	);

	const BottomSheetContainer = useCallback(
		({ children, ...props }: IBottomSheet) => (
			<Portal hostName="BottomSheet">
				<BottomSheet
					ref={bottomSheetRef}
					index={-1}
					backdropComponent={BottomSheetBackdropComponent}
					onChange={handleSheetChanges}
					overDragResistanceFactor={0}
					enablePanDownToClose={true}
					handleIndicatorStyle={{ backgroundColor: 'lightgray', width: 36 }}
					{...props}
				>
					<BottomSheetView {...keyDownHandlers}>
						{Platform.OS === 'web'
							? visible && <WebContent visible={visible} content={children} />
							: children}
					</BottomSheetView>
				</BottomSheet>
			</Portal>
		),
		[visible, keyDownHandlers, handleSheetChanges],
	);

	const contextValue = useMemo(
		() => ({
			visible,
			bottomSheetRef,
			handleClose,
			handleOpen,
			BottomSheetContainer,
		}),
		[visible, handleClose, handleOpen, BottomSheetContainer],
	);

	return (
		<PortalProvider>
			<BottomSheetContext.Provider value={contextValue}>
				{children}
				<PortalHost name="BottomSheet" />
			</BottomSheetContext.Provider>
		</PortalProvider>
	);
};

export const useBottomSheet = () => useContext(BottomSheetContext);
```

## 사용 예시

```tsx
function Component() {
  const { handleOpen, handleClose, BottomSheetContainer } = useBottomSheet();

  return (
    <HStack>
      <HStack>
        <Button onPress={() => handleOpen()} />
       {/* Layout... */}
      </HStack>
      <BottomSheetContainer
      // You Can Use BottomSheet Props
      >
        <Button onPress={handleClose()} />
      </BottomSheetContainer>
    </HStack>
  )
}
```