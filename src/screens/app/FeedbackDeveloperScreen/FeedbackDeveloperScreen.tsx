import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Box, Button, FormTextInput, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {
  FeedbackDeveloperFormSchema,
  FeedbackDeveloperFormSchemaTypes,
} from './FeedbackDeveloperFormSchema';

export function FeedbackDeveloperScreen({}: AppScreenProps<'FeedbackDeveloperScreen'>) {
  const {control, handleSubmit, reset} =
    useForm<FeedbackDeveloperFormSchemaTypes>({
      resolver: zodResolver(FeedbackDeveloperFormSchema),
      mode: 'onChange',
      defaultValues: {
        reason: '',
        description: '',
      },
    });

  function handleSubmitFeedbackForm(data: FeedbackDeveloperFormSchemaTypes) {
    console.log(data);

    reset();
  }

  return (
    <Screen canGoBack>
      <Box gap="s16">
        <FormTextInput
          control={control}
          name="reason"
          label="Motivo"
          placeholder="Informe o motivo do contato"
        />

        <FormTextInput
          control={control}
          name="description"
          label="Descrição"
          placeholder="Descreva o que pode ser evoluído no aplicativo"
          numberOfLines={5}
          textAlignVertical="top"
          multiline
        />

        <Button
          text="Enviar"
          onPress={handleSubmit(handleSubmitFeedbackForm)}
        />
      </Box>
    </Screen>
  );
}
