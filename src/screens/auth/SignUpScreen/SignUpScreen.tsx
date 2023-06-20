import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Box,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamList} from '@routes';

import {SignUpFormSchema, SignUpFormSchemaTypes} from './signUpFormSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen(props: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  console.log(props);
  const {control, formState, handleSubmit} = useForm<SignUpFormSchemaTypes>({
    resolver: zodResolver(SignUpFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
  });

  async function handleClickSubmitForm() {
    await new Promise<void>(resolve => {
      setTimeout(resolve, 1000);
    });

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só se conectar na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <Box gap="s20" mb="s48">
        <FormTextInput
          control={control}
          label="Nome completo"
          placeholder="Digite seu nome completo"
          name="name"
          autoCapitalize="words"
        />

        <FormTextInput
          control={control}
          label="Telefone"
          placeholder="Digite seu telefone"
          name="phone"
        />

        <FormTextInput
          control={control}
          label="E-mail"
          placeholder="Digite seu e-mail"
          name="email"
        />

        <FormPasswordInput
          control={control}
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
        />
      </Box>

      <Button
        text="Criar uma conta"
        onPress={handleSubmit(handleClickSubmitForm)}
        disabled={!formState.isValid}
        loading={formState.isSubmitting}
      />
    </Screen>
  );
}
