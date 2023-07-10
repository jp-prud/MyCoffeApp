import {useCallback, useState} from 'react';
import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useOrderContext} from '@context';
import {ProductSummaryCheckoutProps} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {formatPrice} from '@utils';

import {
  BottomSheet,
  Box,
  Button,
  Icon,
  Text,
  TouchableOpacityBox,
} from '@components';
import {useBottomSheet} from '@hooks';

export function MiniCartStep() {
  const [selectedProductIdToRemove, setSelectedProductIdToRemove] = useState<
    string | undefined
  >(undefined);

  const {orderItems, handleRemoveItem} = useOrderContext();

  const {bottomSheetRef, handleToggleBottomSheet} = useBottomSheet();

  const navigation = useNavigation();

  function renderOrderItem({
    item: {id, images, name, price},
  }: ListRenderItemInfo<ProductSummaryCheckoutProps>) {
    return (
      <Box height={86} flexDirection="row" alignItems="center">
        <Image
          source={{
            uri: images[0].url,
            width: 86,
            height: 86,
          }}
          alt={images[0].alt}
          borderRadius={8}
        />

        <Box p="s10" flex={1}>
          <Text semiBold>{name}</Text>
          <Text color="gray1">{formatPrice(price)}</Text>
        </Box>

        <Icon
          name="bag"
          onPress={() => {
            setSelectedProductIdToRemove(id);

            handleToggleBottomSheet();
          }}
        />
      </Box>
    );
  }

  const handleClickRemoveItem = useCallback(() => {
    handleRemoveItem(selectedProductIdToRemove);

    handleToggleBottomSheet();
  }, [handleRemoveItem, handleToggleBottomSheet, selectedProductIdToRemove]);

  function renderHeaderList() {
    return (
      <Box
        flex={1}
        width="100%"
        alignItems="flex-end"
        flexDirection="row"
        justifyContent="space-between">
        <Text preset="headingMedium" semiBold>
          Produtos
        </Text>

        <TouchableOpacityBox>
          <Text preset="paragraphSmall" color="primary" semiBold>
            Adicionar novos items
          </Text>
        </TouchableOpacityBox>
      </Box>
    );
  }

  function renderItemSeparatorComponent() {
    return (
      <Box
        borderBottomColor="gray4"
        borderBottomWidth={1}
        flex={1}
        mt="s20"
        mb="s20"
      />
    );
  }

  function renderEmptyCartComponent() {
    return (
      <Box>
        <Text>Carrinho vazio</Text>
      </Box>
    );
  }

  function renderFooterList() {
    return (
      <TouchableOpacityBox
        flexDirection="row"
        alignItems="center"
        gap="s16"
        mt="s24"
        pt="s20"
        pb="s20"
        borderColor="gray4"
        borderTopWidth={1}
        onPress={() => navigation.navigate('CouponScreen')}>
        <Icon name="bag" />

        <Box>
          <Text>Cupom</Text>
          <Text preset="paragraphSmall" color="gray2">
            1 cupom disponível
          </Text>
        </Box>

        <TouchableOpacityBox
          flex={1}
          justifyContent="flex-end"
          flexDirection="row"
          onPress={() => navigation.navigate('CouponScreen')}>
          <Text color="primary">Adicionar</Text>
        </TouchableOpacityBox>
      </TouchableOpacityBox>
    );
  }

  return (
    <>
      <FlatList
        ListHeaderComponent={renderHeaderList}
        data={orderItems}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
        ItemSeparatorComponent={renderItemSeparatorComponent}
        ListHeaderComponentStyle={{marginBottom: 28}}
        ListEmptyComponent={renderEmptyCartComponent}
        ListFooterComponent={renderFooterList}
      />

      <BottomSheet ref={bottomSheetRef}>
        <Box>
          <Box>
            <Text preset="headingMedium" bold mb="s8">
              Remover item
            </Text>
            <Text color="gray2">
              Você tem certeza que deseja remover este produto do seu carrinho ?
            </Text>
          </Box>

          <Button text="Remover" mt="s24" onPress={handleClickRemoveItem} />
          <Button
            text="Cencelar"
            preset="outline"
            mt="s16"
            onPress={handleToggleBottomSheet}
          />
        </Box>
      </BottomSheet>
    </>
  );
}
