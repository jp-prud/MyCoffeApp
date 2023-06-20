import {createContext, useContext, useState, useCallback, useMemo} from 'react';

interface ClientProfile {
  name: string;
  phone: string;
  email: string;
}

interface OrderContextProps {
  orderFormId: string;
  orderItems: Array<any>;
  clientProfileData: ClientProfile;
  value: number;
  handleAddToCart(item: any): void;
  handleRemoveItemFromCart(item: any): void;
  handleClearCart(): void;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({children}: {children: React.ReactNode}) {
  const [orderItems, setOrderItems] = useState<Array<any>>([]);
  const [value] = useState(0);
  const [orderFormId] = useState('1');
  const [clientProfileData] = useState({} as ClientProfile);

  const handleAddToCart = useCallback((item: any) => {
    setOrderItems(prevState => [...prevState, item]);
  }, []);

  const handleClearCart = useCallback(() => setOrderItems([]), []);

  const handleRemoveItemFromCart = useCallback((item: any) => {
    setOrderItems(prevState => {
      const filteredItems = prevState.filter(
        currentItem => currentItem !== item,
      );

      return filteredItems;
    });
  }, []);

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
        handleRemoveItemFromCart,
        handleClearCart,
      }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrderContext() {
  return useContext(OrderContext);
}
