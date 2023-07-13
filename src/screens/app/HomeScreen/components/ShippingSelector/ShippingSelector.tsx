import {useState} from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  ActivityIndicator,
  Box,
  FormTextInput,
  Icon,
  Text,
  TouchableOpacityBox,
} from '@components';

import PostalCodeService from '../../../../../services/PostalCodeService';

import {
  ShippingSelectorSchema,
  ShippingSelectorSchemaTypes,
} from './ShippingSelectorSchema';

interface PostalCodeDataProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export function ShippingSelector() {
  const [searchedPostalCodeData, setSearchedPostalCodeData] =
    useState<PostalCodeDataProps | null>(null);

  const {
    control,
    handleSubmit,
    formState: {isSubmitting},
  } = useForm<ShippingSelectorSchemaTypes>({
    resolver: zodResolver(ShippingSelectorSchema),
    mode: 'onChange',
    defaultValues: {
      address: '',
    },
  });

  async function handleClickSubmit({address}: ShippingSelectorSchemaTypes) {
    const postalCodeData =
      await PostalCodeService.getShippingDataFromPostalCode(address);

    setSearchedPostalCodeData(postalCodeData);
  }

  console.log(searchedPostalCodeData);

  function renderNearbyAddresses() {
    return (
      <Box gap="s8">
        <Text bold>Endereços próximos</Text>

        <TouchableOpacityBox
          flexDirection="row"
          gap="s14"
          alignItems="center"
          mt="s12">
          <Icon name="sendFill" />

          <Box flex={1}>
            <Text semiBold>Usar localização atual</Text>
            <Text color="gray2" semiBold preset="paragraphSmall">
              Ative o serviço de localização
            </Text>
          </Box>

          <Icon name="chevron" />
        </TouchableOpacityBox>
      </Box>
    );
  }

  function renderSavedAddresses() {
    return (
      <Box gap="s8" mt="s32">
        <Text bold>Endereços salvos</Text>

        <TouchableOpacityBox
          flexDirection="row"
          gap="s14"
          alignItems="center"
          mt="s12">
          <Icon name="locationFilled" color="carrotSecondary" />

          <Box flex={1}>
            <Text semiBold color="carrotSecondary">
              1226, R. Santos Dumond
            </Text>
            <Text color="carrotSecondary" semiBold preset="paragraphSmall">
              Santa Terezinha - Brusque, SC
            </Text>
          </Box>

          <Icon name="chevron" />
        </TouchableOpacityBox>
      </Box>
    );
  }

  function renderSearchedAddress() {
    if (!searchedPostalCodeData) {
      return;
    }

    const {logradouro, bairro, localidade, uf} = searchedPostalCodeData;

    return (
      <Box flexDirection="row" gap="s12" alignItems="center">
        <Icon name="locationFilled" color="gray2" />

        <Box>
          <Text semiBold>{logradouro}</Text>
          <Text color="gray1">{`${localidade}, ${bairro} - ${uf}`}</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Text preset="paragraphLarge" bold>
        Selecione um endereço
      </Text>

      <Box mb="s16" mt="s16">
        <FormTextInput
          control={control}
          name="address"
          placeholder="Busque pelo endereço..."
          maxLength={8}
          keyboardType="numeric"
          returnKeyLabel="Pesquisar"
          returnKeyType="send"
          onSubmitEditing={handleSubmit(handleClickSubmit)}
          RightComponent={
            <Icon
              name="search"
              color="gray2"
              onPress={handleSubmit(handleClickSubmit)}
            />
          }
        />
      </Box>

      {searchedPostalCodeData && !isSubmitting && renderSearchedAddress()}

      {!searchedPostalCodeData && !isSubmitting && renderNearbyAddresses()}

      {!isSubmitting && renderSavedAddresses()}

      {isSubmitting && <ActivityIndicator size={42} />}
    </Box>
  );
}
