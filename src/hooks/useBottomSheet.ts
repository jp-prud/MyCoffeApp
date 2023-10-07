import {useRef, useCallback} from 'react';

import {BottomSheetRefProps} from '@components';

export function useBottomSheet() {
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  const handleToggleBottomSheet = useCallback(() => {
    const isActive = bottomSheetRef?.current?.isActive();

    if (isActive) {
      bottomSheetRef?.current?.scrollTo(0);
    } else {
      bottomSheetRef?.current?.scrollTo(-200);
    }
  }, []);

  return {
    bottomSheetRef,
    handleToggleBottomSheet,
  };
}
