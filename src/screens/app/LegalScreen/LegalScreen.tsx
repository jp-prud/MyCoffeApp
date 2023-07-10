import {Screen, Box, Text} from '@components';
import {AppScreenProps} from '@routes';

import {ProfileNavigator} from '../ProfileScreen/components/ProfileNavigator';

export function LegalScreen({navigation}: AppScreenProps<'LegalScreen'>) {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingMedium">Legal</Text>

      <Box mt="s32" gap="s16">
        <ProfileNavigator
          title="Termos e Condições"
          onPress={() => navigation.navigate('TermsAndConditionsScreen')}
          isSibling
        />

        <ProfileNavigator
          title="Políticas de Privacidade"
          onPress={() => navigation.navigate('PrivacyPolicyScreen')}
        />
      </Box>
    </Screen>
  );
}
