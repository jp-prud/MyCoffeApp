import {useProductContext} from '@context';

import {Box, Text, Icon} from '@components';

export function ProductQuantity() {
  const {selectedQuantity, onUpdateProductQuantity} = useProductContext();

  return (
    <Box flexDirection="row" gap="s24">
      <Icon
        name="minus"
        color={selectedQuantity === 1 ? 'gray4' : 'backgroundContrast'}
        onPress={() => onUpdateProductQuantity('less')}
      />

      <Text style={{minWidth: 20}} textAlign="center">
        {selectedQuantity}
      </Text>

      <Icon name="add" onPress={() => onUpdateProductQuantity('more')} />
    </Box>
  );
}
