import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {useOrderContext} from '@context';
import {ProductSummaryCheckoutProps} from '@domain';
import {formatPrice} from '@utils';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {CouponSugestion} from '../components/CouponSugestion/CouponSugestion';
import {SpecialRequest} from '../components/SpecialRequest/SpecialRequest';
import {OptionContentBottomSheet, useCartScreen} from '../useCartScreen';

export function MiniCartStep({
  onShowBottomSheet,
}: {
  onShowBottomSheet(optionName: OptionContentBottomSheet): void;
}) {
  const {orderItems} = useOrderContext();

  const {handleClickRemoveItem} = useCartScreen();

  function renderOrderItem({
    item: {id, images, name, price, quantity},
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

        <Text>{quantity}</Text>
        <Box p="s10" flex={1}>
          <Text semiBold>{name}</Text>
          <Text color="gray1" preset="paragraphSmall">
            {formatPrice(price * quantity)}
          </Text>
        </Box>

        <Icon
          name="trash"
          onPress={() => {
            handleClickRemoveItem(id);
          }}
        />
      </Box>
    );
  }

  function renderHeaderList() {
    return (
      <Box
        flex={1}
        width="100%"
        alignItems="flex-end"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="background"
        pb="s8">
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
      <Box mt="s48" gap="s12" mb="s48">
        <Text preset="headingLarge" textAlign="center">
          Carrinho vazio!
        </Text>
        <Text textAlign="center" color="gray1">
          Adicione itens ao seu carrinho para começar a fazer o pedido
        </Text>
      </Box>
    );
  }

  return (
    <>
      <SpecialRequest onShowBottomSheet={onShowBottomSheet} />

      <FlatList
        data={orderItems}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
        ItemSeparatorComponent={renderItemSeparatorComponent}
        ListHeaderComponent={renderHeaderList}
        stickyHeaderIndices={[0]}
        ListHeaderComponentStyle={{marginBottom: 12, backgroundColor: 'white'}}
        ListEmptyComponent={renderEmptyCartComponent}
        ListFooterComponentStyle={{paddingBottom: 28}}
        ListFooterComponent={<CouponSugestion />}
      />
    </>
  );
}
