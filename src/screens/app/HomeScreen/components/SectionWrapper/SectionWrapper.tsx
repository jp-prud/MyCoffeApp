import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';
import {RootStackParamList} from '../../../../../routes/Routes';

interface SectionWrapperProps {
  children: React.ReactNode;
  title: string;
  navigateTo?: keyof RootStackParamList;
}

export function SectionWrapper({
  title,
  navigateTo,
  children,
}: SectionWrapperProps) {
  const navigation = useNavigation();

  return (
    <Box mt="s24">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s16">
        <Text preset="headingSmall">{title}</Text>

        <TouchableOpacityBox
          hitSlop={4}
          onPress={() => navigation.navigate(navigateTo)}>
          <Text
            preset="paragraphSmall"
            color="buttonPrimary"
            bold
            textDecorationLine="underline">
            Ver todos
          </Text>
        </TouchableOpacityBox>
      </Box>

      {children}
    </Box>
  );
}
