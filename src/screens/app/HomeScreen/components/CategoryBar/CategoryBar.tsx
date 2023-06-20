import {useState} from 'react';
import {ScrollView} from 'react-native';

import {Box, TouchableOpacityBox} from '../../../../../components/Box/Box';
import {Text} from '../../../../../components/Text/Text';

export function CategoryBar() {
  const [categories] = useState([
    {
      name: 'Coffee',
    },
    {
      name: 'Milk',
    },
  ]);

  return (
    <Box>
      <ScrollView horizontal>
        {categories.map(({name}) => (
          <TouchableOpacityBox
            mr="s16"
            paddingHorizontal="s24"
            paddingVertical="s8"
            borderRadius="s12"
            alignItems="center"
            justifyContent="center"
            borderColor="gray4"
            borderWidth={1}
            minWidth={100}
            key={name}>
            <Text preset="paragraphSmall" semiBold>
              {name}
            </Text>
          </TouchableOpacityBox>
        ))}
      </ScrollView>
    </Box>
  );
}
