import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  ActivityIndicator,
  Box,
  TouchableOpacityBox,
  Text,
  Icon,
  BoxProps,
} from '@components';
import {useAppTheme, useAppSafeArea} from '@hooks';

import {
  ScrollableViewContainer,
  ViewContainer,
} from './components/ScreenContainers';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  FooterComponent?: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  isLoading?: boolean;
}

export function Screen({
  children,
  isLoading,
  canGoBack = false,
  scrollable = false,
  FooterComponent,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container =
    scrollable && !isLoading ? ScrollableViewContainer : ViewContainer;

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
      <Box alignItems="center" justifyContent="center">
        <ActivityIndicator color="primary" size={48} />
      </Box>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
              justifyContent: 'center',
            },
            style,
          ]}
          flex={1}
          {...boxProps}>
          {canGoBack && !isLoading && renderBackButton()}

          {isLoading ? renderLoadingScreenState() : children}
        </Box>
      </Container>

      {FooterComponent && !isLoading && <Box>{FooterComponent}</Box>}
    </KeyboardAvoidingView>
  );
}
