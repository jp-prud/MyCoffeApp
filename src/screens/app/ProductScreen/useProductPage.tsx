import {useState, useEffect, useCallback, useMemo} from 'react';

import {ProductPropsAPP} from '@domain';

import {AppScreenProps} from '@routes';

import ProductService from '../../../services/ProductService';

interface UseProductPageProps {}

export type UpdateOptionType = 'more' | 'less';

export function useProductPage({
  route,
}: UseProductPageProps & Pick<AppScreenProps<'ProductScreen'>, 'route'>) {
  const [productContext, setProductContext] = useState<
    ProductPropsAPP | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [productQuantity, setProductQuantity] = useState(1);

  const handleClickUpdateProductQuantity = useCallback(
    (updateOption: UpdateOptionType) => {
      if (updateOption === 'less') {
        setProductQuantity(prevState => (prevState === 1 ? 1 : prevState - 1));

        return;
      }

      setProductQuantity(prevState => prevState + 1);
    },
    [],
  );

  const calculatedProductPrice = useMemo(() => {
    if (!productContext) {
      return 0;
    }

    return productContext?.price * productQuantity;
  }, [productContext, productQuantity]);

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
    calculatedProductPrice,
    isLoading,
    productQuantity,
    handleClickUpdateProductQuantity,
  };
}
