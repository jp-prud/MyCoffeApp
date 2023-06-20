import {useCallback, useState, useMemo} from 'react';

import {Text, Box, TouchableOpacityBox, Button} from '@components';
import {useAppSafeArea} from '@hooks';

import {useOrderContext} from '../../../../../context/OrderContext/OrderContext';

type UpdateOptionType = 'more' | 'less';

export function FixedActionsContainer() {
  const {bottom} = useAppSafeArea();

  const {handleAddToCart} = useOrderContext();

  const [productQuantity, setProductQuantity] = useState(1);
  const [productPrice] = useState(7);

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
    () => productPrice * productQuantity,
    [productPrice, productQuantity],
  );

  return (
    <Box
      style={{
        paddingBottom: bottom,
        elevation: 1,
      }}
      gap="s16"
      pt="s16"
      paddingHorizontal="s24">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text preset="paragraphLarge" semiBold>
          {calculatedProductPrice}
        </Text>

        <Box flexDirection="row" gap="s32">
          <TouchableOpacityBox
            onPress={() => handleClickUpdateProductQuantity('less')}>
            <Text semiBold>-</Text>
          </TouchableOpacityBox>

          <Text bold>
            <Text>{productQuantity}</Text>
          </Text>

          <TouchableOpacityBox>
            <Text
              semiBold
              onPress={() => handleClickUpdateProductQuantity('more')}>
              +
            </Text>
          </TouchableOpacityBox>
        </Box>
      </Box>

      <Button
        text="Adicionar ao carrinho"
        onPress={() =>
          handleAddToCart({
            productId: '1',
            productName: 'Produto 1',
            value: 1234,
          })
        }
      />
    </Box>
  );
}
