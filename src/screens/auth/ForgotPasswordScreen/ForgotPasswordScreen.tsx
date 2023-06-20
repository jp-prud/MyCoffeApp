import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Screen, Box, Text, Button, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  ForgotPasswordFormSchema,
  ForgotPasswordFormSchemaTypes,
} from './forgotPasswordFormSchema';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} =
    useForm<ForgotPasswordFormSchemaTypes>({
      resolver: zodResolver(ForgotPasswordFormSchema),
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });

  function handleClickForgotPassword() {
    // TODO: recuperar senha

    reset({
      title: 'Enviamos as intruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Box gap="s16" mb="s32">
        <Text preset="headingLarge">Esqueci minha senha</Text>

        <Text preset="paragraphLarge">
          Digite seu e-mail e enviaremos as intruções para redefinição de senha
        </Text>
      </Box>

      <Box mb="s48">
        <FormTextInput
          control={control}
          label="E-mail"
          placeholder="Digite seu e-mail"
          inputMode="email"
          keyboardType="email-address"
          name="email"
        />
      </Box>

      <Button
        text="Recuperar senha"
        onPress={handleSubmit(handleClickForgotPassword)}
        disabled={formState.isValid}
      />
    </Screen>
  );
}
