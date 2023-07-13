import {useCallback, useState, useMemo} from 'react';

import {useOrderContext} from '@context';
import {ProductProps} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Text, Box, Button, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {formatPrice} from '../../../../../utils';

type UpdateOptionType = 'more' | 'less';

export function FixedActionsContainer({
  productContext,
}: {
  productContext: ProductProps;
}) {
  const {bottom} = useAppSafeArea();

  const {handleAddToCart} = useOrderContext();

  const navigation = useNavigation();

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
    () => productContext.price * productQuantity,
    [productContext, productQuantity],
  );

  return (
    <Box
      style={[$shadowProps, {paddingBottom: bottom}]}
      gap="s16"
      pt="s16"
      paddingHorizontal="s24"
      backgroundColor="background">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text preset="paragraphLarge">
          {formatPrice(calculatedProductPrice)}
        </Text>

        <Box flexDirection="row" gap="s24">
          <Icon
            name="minus"
            color={productQuantity === 1 ? 'gray4' : 'backgroundContrast'}
            onPress={() => handleClickUpdateProductQuantity('less')}
          />

          <Text style={{minWidth: 20}} textAlign="center">
            {productQuantity}
          </Text>

          <Icon
            name="add"
            onPress={() => handleClickUpdateProductQuantity('more')}
          />
        </Box>
      </Box>

      <Button
        text="Adicionar ao carrinho"
        onPress={async () => {
          await handleAddToCart({
            ...productContext,
            price: calculatedProductPrice,
            quantity: productQuantity,
          });

          navigation.navigate('CartScreen');
        }}
      />
    </Box>
  );
}
