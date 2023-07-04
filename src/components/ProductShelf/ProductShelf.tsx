import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import {ProductSummaryProps} from '@domain';

import {Box, BoxProps} from '@components';

import ProductShelfService from '../../services/ProductService';
import {ProductSummary} from '../ProductSummary/ProductSummary';

interface ProductShelfProps {
  categoryId: string;
}

export function ProductShelf({
  categoryId,
  ...boxProps
}: ProductShelfProps & BoxProps) {
  const [products, setProducts] = useState<ProductSummaryProps[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await ProductShelfService.getProductsFromCategory(
        categoryId,
      )) as unknown as ProductSummaryProps[];

      setProducts(response);
    })();
  }, [categoryId]);

  return (
    <Box flexDirection="row" gap="s16" {...boxProps}>
      <ScrollView
        horizontal
        contentContainerStyle={{gap: 16, paddingBottom: 2}}>
        {products.map(product => (
          <ProductSummary key={product.id} product={product} />
        ))}
      </ScrollView>
    </Box>
  );
}
