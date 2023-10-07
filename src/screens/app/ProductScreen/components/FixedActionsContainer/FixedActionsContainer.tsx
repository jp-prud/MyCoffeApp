import {useOrderContext, useProductContext} from '@context';
import {useNavigation} from '@react-navigation/native';

import {Box, Button, ProductQuantity, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';
import { formatPrice } from '@utils';

export function FixedActionsContainer() {
  const {bottom} = useAppSafeArea();

  const {productContext, selectedQuantity} = useProductContext();

  const {handleAddToCart} = useOrderContext();

  const navigation = useNavigation();

  async function handleClickAddProductToCart() {
    if (!productContext) {
      return;
    }

    await handleAddToCart({
      ...productContext,
      quantity: selectedQuantity,
    });

    navigation.navigate('CartScreen');
  }

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
          {formatPrice(productContext?.price)}
        </Text>

        <ProductQuantity />
      </Box>

      <Button
        text="Adicionar ao carrinho"
        onPress={handleClickAddProductToCart}
      />
    </Box>
  );
}
