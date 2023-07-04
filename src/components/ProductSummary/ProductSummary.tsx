import {Image, Pressable} from 'react-native';

import {ProductSummaryProps} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {formatPrice} from '@utils';

import {Text, Box} from '@components';

export function ProductSummary({product}: {product: ProductSummaryProps}) {
  const navigate = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigate.navigate('ProductScreen', {
          productId: product.id,
        })
      }>
      <Box width={154} borderRadius="s16" overflow="hidden" elevation={1}>
        <Box width={154} borderRadius="s12" overflow="hidden">
          <Image
            source={{
              uri: product.images[0].url,
              height: 152,
              width: 154,
            }}
            alt={product.images[0].alt}
          />
        </Box>

        <Box p="s12" gap="s8">
          <Text preset="paragraphSmall">{product.name}</Text>

          <Text preset="paragraphSmall" bold>
            {formatPrice(product.price)}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
