import {Image} from 'react-native';

import {CelebrationProps} from '@domain';

import {Box, Text} from '@components';

interface CelebrationCardProps {
  celebration: CelebrationProps;
}

export function CelebrationCard({celebration}: CelebrationCardProps) {
  return (
    <Box
      width={266}
      borderRadius="s16"
      overflow="hidden"
      elevation={1}
      testID="celebration-card">
      <Image
        source={{
          height: 152,
          uri: celebration.images[0].url,
        }}
      />
      <Box p="s12">
        <Text preset="paragraphSmall" semiBold>
          {celebration.name}
        </Text>
      </Box>
    </Box>
  );
}
