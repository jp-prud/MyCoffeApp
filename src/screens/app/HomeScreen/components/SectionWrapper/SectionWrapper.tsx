import {useNavigation} from '@react-navigation/native';

import {AppStackParamList, RootStackParamList} from '@routes';

import {Box, TouchableOpacityBox} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

interface SectionWrapperProps<RouteName extends keyof AppStackParamList> {
  children: React.ReactNode;
  title: string;
  navigateTo?: {
    route: RouteName;
    params?: RootStackParamList[RouteName];
  };
}

export function SectionWrapper<RouteName extends keyof AppStackParamList>({
  title,
  navigateTo,
  children,
}: SectionWrapperProps<RouteName>) {
  const navigation = useNavigation();

  return (
    <Box mt="s24">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s16">
        <Text preset="headingSmall">{title}</Text>

        {navigateTo && (
          <TouchableOpacityBox
            hitSlop={4}
            onPress={() =>
              navigation.navigate(navigateTo.route, {
                ...navigateTo?.params,
              })
            }>
            <Text
              preset="paragraphSmall"
              color="buttonPrimary"
              bold
              textDecorationLine="underline">
              Ver todos
            </Text>
          </TouchableOpacityBox>
        )}
      </Box>

      {children}
    </Box>
  );
}
