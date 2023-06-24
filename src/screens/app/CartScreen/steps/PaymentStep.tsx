import {useNavigation} from '@react-navigation/native';

import {Button, Text} from '@components';

export function PaymentStep() {
  const navigate = useNavigation();

  function handleSubmitOrder() {
    navigate.reset({
      index: 1,
      routes: [
        {
          name: 'HomeScreen',
        },
      ],
    });
  }

  return (
    <>
      <Text>PaymentStep</Text>
      <Button text="finalizar" onPress={handleSubmitOrder} />
    </>
  );
}
