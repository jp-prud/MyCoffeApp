import {Animated, StyleProp, ViewStyle} from 'react-native';

import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {ScreenTabBarButton} from '../components/ScreenTabBarButton/ScreenTabBarButton';
import {useAppTheme} from '../hooks/useAppTheme';

import {TabStackScreenList} from './Routes';
import {
  CartStackScreen,
  HomeStackScreen,
  OutletStackScreen,
  ProfileStackScreen,
} from './StackNavigation.routes';

const {Navigator, Screen} = createBottomTabNavigator<TabStackScreenList>();

export function TabNavigationStack() {
  const {colors} = useAppTheme();

  const TAB_NAVIGATOR_SCREEN_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  const $TAB_NAVIGATOR_SCREEN_STYLE: Animated.WithAnimatedValue<
    StyleProp<ViewStyle>
  > = {
    height: 68,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colors.background,
  };

  return (
    <Navigator screenOptions={TAB_NAVIGATOR_SCREEN_OPTIONS}>
      <Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={navigate => ({
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
              title="Inicío"
              icon={{
                default: 'home',
                filled: 'homeFill',
              }}
              focused={focused}
            />
          ),
          tabBarStyle: (navigate => {
            const routeName = getFocusedRouteNameFromRoute(navigate.route);

            if (routeName === 'ProductScreen') {
              return {display: 'none'};
            }

            return $TAB_NAVIGATOR_SCREEN_STYLE;
          })(navigate),
        })}
      />

      <Screen
        name="CartStack"
        component={CartStackScreen}
        options={{
          tabBarStyle: $TAB_NAVIGATOR_SCREEN_STYLE,
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
              title="Pedidos"
              icon={{
                default: 'bag',
                filled: 'bagFill',
              }}
              focused={focused}
            />
          ),
        }}
      />

      <Screen
        name="OutletStack"
        component={OutletStackScreen}
        options={{
          tabBarStyle: $TAB_NAVIGATOR_SCREEN_STYLE,
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
              title="Sobre"
              icon={{
                default: 'bag',
                filled: 'bagFill',
              }}
              focused={focused}
            />
          ),
        }}
      />

      <Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarStyle: $TAB_NAVIGATOR_SCREEN_STYLE,
          tabBarIcon: ({focused}) => (
            <ScreenTabBarButton
              title="Perfil"
              icon={{
                default: 'user',
                filled: 'userFilled',
              }}
              focused={focused}
            />
          ),
        }}
      />
    </Navigator>
  );
}
