import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 22;

export function ScreenHeader({
  title,
  canGoBack,
}: Pick<ScreenProps, 'title' | 'canGoBack'>) {
  const {goBack} = useNavigation();

  function renderBackButton() {
    return (
      <TouchableOpacityBox
        gap="s8"
        flexDirection="row"
        alignItems="center"
        onPress={goBack}>
        <Box
          width={ICON_SIZE}
          style={{
            transform: [
              {
                scale: -1,
              },
            ],
          }}>
          <Icon name="arrow" color="primary" />
        </Box>

        {!title && (
          <Text preset="paragraphMedium" semiBold>
            Voltar
          </Text>
        )}
      </TouchableOpacityBox>
    );
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent={title ? 'space-between' : 'flex-start'}
      mb="s24">
      {canGoBack && renderBackButton()}

      {title && (
        <Box flex={1}>
          <Text preset="paragraphMedium" semiBold textAlign="center">
            {title}
          </Text>
        </Box>
      )}

      {title && canGoBack && <Box width={ICON_SIZE} />}
    </Box>
  );
}
