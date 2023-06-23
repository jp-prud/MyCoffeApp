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
  OutletScreen: {
    label: 'Sobre',
    icon: {
      focused: 'bag',
      unfocused: 'bagFill',
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
