import {ActivityIndicator, Box, Text} from '@components';

interface EmptyProductShelfProps {
  isLoading: boolean;
}

export function EmptyProductShelf({isLoading}: EmptyProductShelfProps) {
  let component = <Text>Não foi possível obter os produtos</Text>;

  if (isLoading) {
    component = <ActivityIndicator size="large" />;
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
