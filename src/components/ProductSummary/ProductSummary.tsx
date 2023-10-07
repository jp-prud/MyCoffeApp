import {Image, Pressable} from 'react-native';

import {ProductSummaryProps} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {formatPrice} from '@utils';

import {Text, Box} from '@components';

export function ProductSummary({product}: {product: ProductSummaryProps}) {
  const navigate = useNavigation();

  if (!product) {
    return;
  }

  function handleClickNavigateProductPage() {
    navigate.navigate('ProductScreen', {
      productId: product.id,
    });
  }

  return (
    <Pressable
      onPress={handleClickNavigateProductPage}
      testID="product-summary">
      <Box width={154} borderRadius="s16" overflow="hidden" elevation={1}>
        <Box
          height={154}
          borderRadius="s12"
          overflow="hidden"
          justifyContent="center"
          alignItems="center">
          <Image
            source={{
              uri: product?.images[0].url,
              height: 152,
              width: 152,
            }}
            style={{borderRadius: 14}}
            alt={product?.images[0].alt}
          />
        </Box>

        <Box p="s12" gap="s8">
          <Text preset="paragraphSmall" numberOfLines={1}>
            {product.name}
          </Text>

          <Text preset="paragraphSmall" bold>
            {formatPrice(product.price)}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
