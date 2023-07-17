import {
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
} from 'react-native';

import {Text, Box} from '@components';

interface AdditionalItem {
  id: number;
  name: string;
  description?: string;
  price: number;
}

interface AdditionalSection {
  title: string;
  description?: string;
  isRequired: boolean;
  data: AdditionalItem[];
}

const additionalItems: AdditionalItem[] = [
  {id: 1, name: 'Pequeno', description: '150ml', price: 1.5},
  {id: 2, name: 'Médio', description: '250ml', price: 0.5},
  {id: 3, name: 'Grande', description: '500ml', price: 0.75},
];

const additionalSection: AdditionalSection[] = [
  {
    title: 'Tamanhos',
    description: 'Escolha 1 opção.',
    isRequired: true,
    data: additionalItems,
  },
];

export function OptionsSelector() {
  console.log(additionalSection);

  function renderItem({
    item,
  }: SectionListRenderItemInfo<AdditionalItem, AdditionalSection>) {
    return (
      <Box paddingHorizontal="s16">
        <Text>{item.name}</Text>
        {item.description && <Text>{item.description}</Text>}
      </Box>
    );
  }

  function renderSectionHeader(info: {
    section: SectionListData<AdditionalItem, AdditionalSection>;
  }) {
    return (
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="gray4"
        flex={1}
        paddingHorizontal="s16">
        <Box flex={1}>
          <Text>{info.section.title}</Text>

          {info.section.description && <Text>{info.section.description}</Text>}
        </Box>

        <Box>
          <Text>{info.section.isRequired ? 'Obrigatório' : 'Opcional'}</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <SectionList
        sections={additionalSection}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </Box>
  );
}

// <Box
//   gap="s16"
//   paddingVertical="s20"
//   borderTopWidth={1}
//   borderBottomWidth={1}
//   borderColor="gray4">
//   <Box flexDirection="row" alignItems="center">
//     <Box flex={1}>
//       <Text color="gray1" semiBold>
//         Açucar
//       </Text>
//     </Box>

//     <Box flex={3} flexDirection="row" gap="s8">
//       <TouchableOpacityBox
//         flexGrow={1}
//         backgroundColor="carrotSecondary"
//         paddingHorizontal="s8"
//         paddingVertical="s4"
//         borderRadius="s16"
//         borderWidth={1}
//         borderColor="carrotSecondary">
//         <Text
//           textAlign="center"
//           color="grayWhite"
//           semiBold
//           preset="paragraphSmall">
//           Normal
//         </Text>
//       </TouchableOpacityBox>

//       <TouchableOpacityBox
//         flexGrow={1}
//         paddingHorizontal="s8"
//         paddingVertical="s4"
//         borderRadius="s16"
//         borderWidth={1}
//         borderColor="gray2">
//         <Text
//           textAlign="center"
//           color="gray2"
//           semiBold
//           preset="paragraphSmall">
//           Pouco
//         </Text>
//       </TouchableOpacityBox>

//       <TouchableOpacityBox
//         flexGrow={1}
//         paddingHorizontal="s8"
//         paddingVertical="s4"
//         borderRadius="s16"
//         borderWidth={1}
//         borderColor="gray2"
//         alignItems="center">
//         <Text
//           textAlign="center"
//           color="gray2"
//           preset="paragraphSmall"
//           semiBold>
//           Sem
//         </Text>
//       </TouchableOpacityBox>
//     </Box>
//   </Box>
// </Box>
