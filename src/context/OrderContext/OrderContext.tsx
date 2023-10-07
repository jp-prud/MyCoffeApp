import {createContext, useContext, useState, useCallback, useMemo} from 'react';

import {ProductSummaryCheckoutProps} from '@domain';
import {delay} from '@utils';

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
  handleAddToCart(item: ProductSummaryCheckoutProps): Promise<any>;
  handleRemoveItem(item: any): void;
  handleClearCart(): void;
}

const OrderContext = createContext({} as OrderContextProps);

export function OrderContextProvider({children}: {children: React.ReactNode}) {
  const [orderItems, setOrderItems] = useState<ProductSummaryCheckoutProps[]>(
    [],
  );
  const [orderFormId] = useState('1');
  const [clientProfileData] = useState({} as ClientProfile);

  const handleAddToCart = useCallback(
    async (newItem: ProductSummaryCheckoutProps) => {
      await delay(100);

      setOrderItems(prevState => {
        const productIsAlreadAdded = prevState.find(
          item => item.id === newItem.id,
        );

        if (productIsAlreadAdded) {
          return prevState.map(item => {
            const product = item.id === newItem.id;

            if (product) {
              const productIncrementedQuantity = {
                ...item,
                quantity: item.quantity + newItem.quantity,
              };

              return productIncrementedQuantity;
            }

            return item;
          });
        }

        return [...prevState, newItem];
      });
    },
    [],
  );

  const handleClearCart = useCallback(() => setOrderItems([]), []);

  const value = useMemo(() => {
    return orderItems.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0,
    );
  }, [orderItems]);

  const handleRemoveItem = useCallback(
    (id: ProductSummaryCheckoutProps['id']) => {
      setOrderItems(prevState => {
        const filteredItems = prevState.filter(
          currentItem => currentItem.id !== id,
        );

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
