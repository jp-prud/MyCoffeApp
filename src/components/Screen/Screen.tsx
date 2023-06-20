import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  ActivityIndicator,
  Box,
  TouchableOpacityBox,
  Text,
  Icon,
} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {
  ScrollableViewContainer,
  ViewContainer,
} from './components/ScreenContainers';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  isLoading?: boolean;
}

export function Screen({
  children,
  isLoading,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollableViewContainer : ViewContainer;

  const {goBack} = useNavigation();

  function renderBackButton() {
    return (
      <TouchableOpacityBox
        mb="s24"
        gap="s8"
        flexDirection="row"
        alignItems="center"
        onPress={goBack}>
        <Box
          width={22}
          style={{
            transform: [
              {
                scale: -1,
              },
            ],
          }}>
          <Icon name="arrow" color="primary" />
        </Box>

        <Text preset="paragraphMedium" semiBold>
          Voltar
        </Text>
      </TouchableOpacityBox>
    );
  }

  function renderLoadingScreenState() {
    return (
      <Box flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator color="primary" />
      </Box>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && !isLoading && renderBackButton()}

          {isLoading ? renderLoadingScreenState() : children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
