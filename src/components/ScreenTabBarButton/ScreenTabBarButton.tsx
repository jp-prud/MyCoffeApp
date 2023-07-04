import {
  Text,
  Icon,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  IconProps,
} from '@components';

export interface ScreenTabBarButtonProps {
  label: string;
  icon: {
    focused: IconProps['name'];
    unfocused: IconProps['name'];
  };
  focused?: boolean;
}

export function ScreenTabBarButton({
  label: title,
  icon,
  focused,
  ...touchableOpacityBoxProps
}: ScreenTabBarButtonProps & TouchableOpacityBoxProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      gap="s4"
      {...touchableOpacityBoxProps}>
      <Icon
        name={focused ? icon.unfocused : icon.focused}
        color={focused ? 'primary' : 'grayBlack'}
      />

      <Text color={focused ? 'primary' : 'grayBlack'}>{title}</Text>
    </TouchableOpacityBox>
  );
}
