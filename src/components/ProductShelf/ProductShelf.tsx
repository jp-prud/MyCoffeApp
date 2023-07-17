import {ListRenderItemInfo} from 'react-native';

import {ProductSummaryProps, useProductList} from '@domain';
import {FlatList} from 'react-native-gesture-handler';

import {Box, BoxProps} from '@components';

import {ProductSummary} from '../ProductSummary/ProductSummary';

interface ProductShelfProps {
  categoryId: string;
  maxItems?: number;
}

export function ProductShelf({
  categoryId,
  maxItems = 6,
  ...boxProps
}: ProductShelfProps & BoxProps) {
  const {productsDataListPage} = useProductList(categoryId);

  function renderItem({
    item: produdct,
  }: ListRenderItemInfo<ProductSummaryProps>) {
    return <ProductSummary product={produdct} />;
  }

  return (
    <Box flexDirection="row" gap="s16" {...boxProps}>
      <FlatList
        horizontal
        contentContainerStyle={{gap: 16, paddingBottom: 2}}
        data={productsDataListPage.data.slice(0, maxItems)}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </Box>
  );
}
