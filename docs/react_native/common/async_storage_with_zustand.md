# Zustand에서 async storage 사용

```tsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create<State & Actions>()(
	immer(
		persist(
			// ...
      ,
			{
				name: 'named-storage',
				storage: createJSONStorage(() => AsyncStorage),
			},
		),
	),
);
```

## 참고

- [https://github.com/pmndrs/zustand/issues/394](https://github.com/pmndrs/zustand/issues/394)
