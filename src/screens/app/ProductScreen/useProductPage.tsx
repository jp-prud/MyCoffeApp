import {useEffect} from 'react';

import {useProductContext} from '@context';

import {AppScreenProps} from '@routes';

export function useProductPage({
  route,
  navigation,
}: AppScreenProps<'ProductScreen'>) {
  const {
    productContext,
    isLoading,
    price,
    selectedQuantity,
    onUpdateProductQuantity,
    getProductContext,
    clearProductContext,
  } = useProductContext();

  useEffect(() => {
    getProductContext(route.params.productId);
  }, [getProductContext, route.params.productId]);

  useEffect(() => {
    navigation.addListener('blur', () => clearProductContext());
  }, [navigation, clearProductContext]);

  return {
    productContext,
    price,
    isLoading,
    selectedQuantity,
    onUpdateProductQuantity,
  };
}
