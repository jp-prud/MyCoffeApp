import {ListRenderItemInfo} from 'react-native';

import {ProductPropsAPP} from '@domain';
import {FlatList} from 'react-native-gesture-handler';

import {ProductSummary} from '@components';
import {Screen} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {CategoryEmptyScreen} from './components/CategoryEmptyScreen';
import {useCategoryScreen} from './useCategoryScreen';

export function CategoryScreen({route}: AppScreenProps<'CategoryScreen'>) {
  const {bottom} = useAppSafeArea();

  const {productsDataListPage, isLoading, error, handleRefetcData} =
    useCategoryScreen(route.params.categoryId);

  function renderItem({item: product}: ListRenderItemInfo<ProductPropsAPP>) {
    return <ProductSummary product={product} />;
  }

  function renderEmptyListComponent() {
    return (
      <CategoryEmptyScreen
        isLoading={isLoading}
        error={error}
        onRefetch={handleRefetcData}
      />
    );
  }

  return (
    <Screen canGoBack>
      <FlatList
        data={productsDataListPage?.data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: bottom * 2.5,
          flex: productsDataListPage?.data.length === 0 ? 1 : undefined,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyListComponent}
      />
    </Screen>
  );
}
