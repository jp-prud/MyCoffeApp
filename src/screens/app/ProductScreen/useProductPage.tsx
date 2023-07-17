import {useState, useEffect} from 'react';

import {ProductProps} from '@domain';
import ProductService from 'src/services/ProductService';

import {AppScreenProps} from '@routes';

interface UseProductPageProps {}

export function useProductPage({
  route,
}: UseProductPageProps & Pick<AppScreenProps<'ProductScreen'>, 'route'>) {
  const [productContext, setProductContext] = useState<
    ProductProps | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await ProductService.getProductById(
        route.params.productId,
      );

      setProductContext(response);
      setIsLoading(false);
    })();
  }, [route.params.productId]);

  return {
    productContext,
    isLoading,
  };
}
