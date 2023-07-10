import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PrivacyPolicyScreen({}: AppScreenProps<'PrivacyPolicyScreen'>) {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingMedium">Nossos termos de politica</Text>
    </Screen>
  );
}
