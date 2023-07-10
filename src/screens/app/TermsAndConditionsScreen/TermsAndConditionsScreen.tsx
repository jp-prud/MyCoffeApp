import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function TermsAndConditionsScreen({}: AppScreenProps<'TermsAndConditionsScreen'>) {
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingMedium">Nossos termos e condições</Text>
    </Screen>
  );
}
