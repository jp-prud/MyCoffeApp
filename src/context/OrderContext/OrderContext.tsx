import {createContext, useContext, useState, useCallback, useMemo} from 'react';

import {ProductSummaryCheckoutProps, productCartMock} from '@domain';

interface ClientProfile {
  name: string;
  phone: string;
  email: string;
}

interface OrderContextProps {
  orderFormId: string;
  orderItems: Array<ProductSummaryCheckoutProps>;
  clientProfileData: ClientProfile;
  value: number;
  handleAddToCart(item: any): void;
  handleRemoveItem(item: any): void;
  handleClearCart(): void;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({children}: {children: React.ReactNode}) {
  const [orderItems, setOrderItems] =
    useState<ProductSummaryCheckoutProps[]>(productCartMock);
  const [orderFormId] = useState('1');
  const [clientProfileData] = useState({} as ClientProfile);

  const handleAddToCart = useCallback((item: ProductSummaryCheckoutProps) => {
    setOrderItems(prevState => [...prevState, item]);
  }, []);

  const handleClearCart = useCallback(() => setOrderItems([]), []);

  const value = useMemo(() => {
    return orderItems.reduce((acc, item) => (acc += item.price), 0);
  }, [orderItems]);

  const handleRemoveItem = useCallback(
    (id: ProductSummaryCheckoutProps['id']) => {
      setOrderItems(prevState => {
        const filteredItems = prevState.filter(
          currentItem => currentItem.id !== id,
        );

        console.log({filteredItems});

        return filteredItems;
      });
    },
    [],
  );

  const orderContextValue = useMemo(() => {
    return {
      orderFormId,
      orderItems,
      value,
      clientProfileData,
    };
  }, [orderFormId, orderItems, value, clientProfileData]);

  return (
    <OrderContext.Provider
      value={{
        ...orderContextValue,
        handleAddToCart,
        handleRemoveItem,
        handleClearCart,
      }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  return useContext(OrderContext);
}
