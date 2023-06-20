import {Text, Box, Icon, IconName} from '@components';

interface ScreenTabBarButtonProps {
  title: string;
  icon: {
    default: IconName;
    filled: IconName;
  };
  focused?: boolean;
}

export function ScreenTabBarButton({
  title,
  icon,
  focused,
}: ScreenTabBarButtonProps) {
  return (
    <Box alignItems="center" justifyContent="center" gap="s4">
      <Icon
        name={focused ? icon.filled : icon.default}
        color={focused ? 'primary' : 'grayBlack'}
      />

      <Text color={focused ? 'primary' : 'grayBlack'}>{title}</Text>
    </Box>
  );
}
