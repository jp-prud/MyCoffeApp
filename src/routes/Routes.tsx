import {useAuthContext} from '@context';
import {NavigationContainer} from '@react-navigation/native';

import {AppStackScreen} from './AppStack';
import {AuthStackScreen} from './AuthStack';
import {AuthStackParamList, AppStackParamList} from './navigationTypes';

export type RootStackParamList = AuthStackParamList & AppStackParamList;

export function Router() {
  const {isAuthenticated} = useAuthContext();

  const ContainerStackRouter = isAuthenticated
    ? AppStackScreen
    : AuthStackScreen;

  return <NavigationContainer>{ContainerStackRouter()}</NavigationContainer>;
}
