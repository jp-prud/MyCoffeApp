import {ListRenderItemInfo} from 'react-native';

import {CouponProps, coupons} from '@domain';
import {useForm} from 'react-hook-form';
import {FlatList} from 'react-native-gesture-handler';

import {
  Box,
  FormTextInput,
  Screen,
  Text,
  TouchableOpacityBox,
} from '@components';
import {AppScreenProps} from '@routes';

import {CouponItem} from './components/CouponItem';

export function CouponScreen({}: AppScreenProps<'CouponScreen'>) {
  const {control} = useForm();

  function renderCouponComponent({item}: ListRenderItemInfo<CouponProps>) {
    return <CouponItem coupon={item} />;
  }

  return (
    <Screen canGoBack>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s32">
        <FormTextInput
          control={control}
          name="coupon"
          placeholder="Adicione o código do cupom"
        />

        <TouchableOpacityBox>
          <Text>Adicionar</Text>
        </TouchableOpacityBox>
      </Box>

      <FlatList
        data={coupons}
        renderItem={renderCouponComponent}
        keyExtractor={item => item.id}
        contentContainerStyle={{gap: 16}}
      />
    </Screen>
  );
}
