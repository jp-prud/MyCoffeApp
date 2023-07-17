import {Image} from 'react-native';

import {
  Screen,
  Box,
  TouchableOpacityBox,
  Text,
  Icon,
  TextInput,
} from '@components';
import {AppScreenProps} from '@routes';

import {FixedActionsContainer} from './components/FixedActionsContainer/FixedActionsContainer';
import {OptionsSelector} from './components/OptionsSelector/OptionsSelector';
import {useProductPage} from './useProductPage';

export function ProductScreen({route}: AppScreenProps<'ProductScreen'>) {
  const {
    productContext,
    isLoading,
    calculatedProductPrice,
    handleClickUpdateProductQuantity,
    productQuantity,
  } = useProductPage({route});

  return (
    <Screen
      canGoBack
      isLoading={isLoading}
      scrollable
      FooterComponent={
        productContext && (
          <FixedActionsContainer
            productContext={productContext}
            calculatedProductPrice={calculatedProductPrice}
            handleClickUpdateProductQuantity={handleClickUpdateProductQuantity}
            productQuantity={productQuantity}
          />
        )
      }>
      {productContext && (
        <>
          <Box borderRadius="s16" overflow="hidden">
            <Image
              source={{
                uri: productContext.images[0].url,
                height: 240,
              }}
              alt={productContext.images[0].alt}
            />
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="s16">
            <Box gap="s4">
              <Text preset="headingMedium">{productContext.name}</Text>

              <Text color="gray2" semiBold>
                {productContext.subtitle}
              </Text>
            </Box>

            <TouchableOpacityBox>
              <Icon name="heart" color="error" />
            </TouchableOpacityBox>
          </Box>

          <Box marginVertical="s16" gap="s4">
            <Text bold>Descrição</Text>

            <Text preset="paragraphSmall" color="gray1">
              {productContext.description}

              {productContext.description.length >= 110 && (
                <Text color="primary" preset="paragraphSmall" semiBold>
                  Ler mais.
                </Text>
              )}
            </Text>
          </Box>

          <OptionsSelector />

          <Box mt="s24">
            <Box
              flexDirection="row"
              alignItems="flex-end"
              justifyContent="space-between"
              mb="s16">
              <Box flex={1} gap="s8" flexDirection="row">
                <Icon name="messageText" />
                <Text semiBold>Alguma observação ?</Text>
              </Box>

              <Text color="gray2">0/140</Text>
            </Box>
            <TextInput placeholder="Ex: Tirar o chantily..." />
          </Box>
        </>
      )}
    </Screen>
  );
}
