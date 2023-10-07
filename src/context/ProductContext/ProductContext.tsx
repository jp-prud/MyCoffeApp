import {createContext, useCallback, useContext, useMemo, useState} from 'react';

import {ProductPropsAPP} from '@domain';

import ProductService from '../../services/ProductService';

interface ProductContextProviderProps {
  children: React.ReactNode;
}

interface ProductContextProps {
  productContext: ProductPropsAPP | undefined;
  isLoading: boolean;
  onUpdateProductQuantity(updateOption: UpdateOptionType): void;
  price: number;
  selectedQuantity: number;
  getProductContext(productId: ProductPropsAPP['id']): Promise<void>;
  clearProductContext(): void;
}

export type UpdateOptionType = 'more' | 'less';

const ProductContext = createContext({} as ProductContextProps);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
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

  const clearProductContext = useCallback(() => {
    setProductContext(undefined);
    setProductQuantity(1);

    setIsLoading(true);
  }, []);

  const getProductContext = useCallback(
    async (productId: ProductPropsAPP['id']) => {
      try {
        const response = await ProductService.getProductById(productId);

        setProductContext(response);
      } catch (er) {
        console.log(er);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        productContext,
        onUpdateProductQuantity: handleClickUpdateProductQuantity,
        price: calculatedProductPrice,
        selectedQuantity: productQuantity,
        getProductContext,
        clearProductContext,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  return context;
}
