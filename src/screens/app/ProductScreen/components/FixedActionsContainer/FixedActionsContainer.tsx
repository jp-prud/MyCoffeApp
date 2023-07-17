import {useOrderContext} from '@context';
import {ProductPropsAPP} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Text, Box, Button, Icon} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {formatPrice} from '../../../../../utils';
import {UpdateOptionType} from '../../useProductPage';

interface FixedActionsContainer {
  productContext: ProductPropsAPP;
  calculatedProductPrice: number;
  productQuantity: number;
  handleClickUpdateProductQuantity(updateOption: UpdateOptionType): void;
}

export function FixedActionsContainer({
  productContext,
  calculatedProductPrice,
  productQuantity,
  handleClickUpdateProductQuantity,
}: FixedActionsContainer) {
  const {bottom} = useAppSafeArea();

  const {handleAddToCart} = useOrderContext();

  const navigation = useNavigation();

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
