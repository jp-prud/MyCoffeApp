import {ListRenderItemInfo} from 'react-native';

import {ProductSummaryProps, useProductList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';

import {Box, BoxProps} from '@components';

import {ProductSummary} from '../ProductSummary/ProductSummary';

import {EmptyProductShelf} from './components/EmptyProductShelf';

interface ProductShelfProps {
  categoryId: string;
  maxItems?: number;
}

export function ProductShelf({
  categoryId,
  maxItems = 6,
  ...boxProps
}: ProductShelfProps & BoxProps) {
  const {productsDataListPage, isLoading} = useProductList(categoryId);

  function renderItem({
    item: produdct,
  }: ListRenderItemInfo<ProductSummaryProps>) {
    return <ProductSummary product={produdct} />;
  }

  function renderEmptyComponent() {
    return <EmptyProductShelf isLoading={isLoading} />;
  }

  return (
    <Box flexDirection="row" gap="s16" {...boxProps} minHeight={226}>
      <FlatList
        horizontal
        contentContainerStyle={{
          gap: 16,
          flex:
            productsDataListPage?.data[0]?.products.length === 0
              ? 1
              : undefined,
          paddingBottom: 2,
        }}
        data={productsDataListPage?.data[0]?.products.slice(0, maxItems)}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
}
