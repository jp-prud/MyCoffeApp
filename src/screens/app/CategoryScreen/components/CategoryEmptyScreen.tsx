import {ActivityIndicator, Box, Button, Text} from '@components';

interface CategoryEmptyScreenProps {
  isLoading: boolean;
  error: boolean;
  onRefetch(): void;
}

export function CategoryEmptyScreen({
  isLoading,
  error,
  onRefetch,
}: CategoryEmptyScreenProps) {
  let component = (
    <Text bold textAlign="center">
      Não há produtos para esta categoria
    </Text>
  );

  if (isLoading) {
    component = <ActivityIndicator size={48} />;
  }

  if (error) {
    component = (
      <Box gap="s12">
        <Text bold textAlign="center">
          Erro ao obter os produtos
        </Text>
        <Button onPress={onRefetch} text="Tente novamente" />
      </Box>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignContent="center">
      {component}
    </Box>
  );
}
