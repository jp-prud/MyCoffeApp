import {ScreenTabBarButtonProps} from '@components';
import {AppTabNavigatorParamList} from '@routes';

export const mappedScreensToProps: Record<
  keyof AppTabNavigatorParamList,
  ScreenTabBarButtonProps
> = {
  HomeScreen: {
    label: 'Inicío',
    icon: {
      focused: 'home',
      unfocused: 'homeFill',
    },
  },
  CartScreen: {
    label: 'Carrinho',
    icon: {
      focused: 'bag',
      unfocused: 'bagFill',
    },
  },
  OrdersScreen: {
    label: 'Pedidos',
    icon: {
      focused: 'transaction',
      unfocused: 'transactionFill',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'user',
      unfocused: 'userFilled',
    },
  },
};
