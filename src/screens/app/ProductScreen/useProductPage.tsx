import {useState, useEffect, useCallback, useMemo} from 'react';

import {ProductPropsAPP} from '@domain';
import ProductService from 'src/services/ProductService';

import {AppScreenProps} from '@routes';

interface UseProductPageProps {}

export type UpdateOptionType = 'more' | 'less';

export function useProductPage({
  route,
}: UseProductPageProps & Pick<AppScreenProps<'ProductScreen'>, 'route'>) {
  const [productContext, setProductContext] = useState({} as ProductPropsAPP);
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

  const calculatedProductPrice = useMemo(
    () => productContext?.price * productQuantity,
    [productContext, productQuantity],
  );

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
