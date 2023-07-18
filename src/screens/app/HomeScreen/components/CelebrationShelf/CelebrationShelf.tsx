import {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {CelebrationProps} from '@domain';

import {CelebrationCard} from '@components';

import CelebrationService from '../../../../../services/CelebrationService';

export function CelebrationShelf() {
  const [celebrationList, setCelebrationList] = useState<CelebrationProps[]>(
    [],
  );

  useEffect(() => {
    (async () => {
      const response = await CelebrationService.getCelebrations();

      setCelebrationList(response);
    })();
  }, []);

  function renderItem({item}: ListRenderItemInfo<CelebrationProps>) {
    return <CelebrationCard celebration={item} />;
  }

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={celebrationList}
      renderItem={renderItem}
      horizontal
      contentContainerStyle={{paddingBottom: 2, gap: 16}}
      showsHorizontalScrollIndicator={false}
    />
  );
}
