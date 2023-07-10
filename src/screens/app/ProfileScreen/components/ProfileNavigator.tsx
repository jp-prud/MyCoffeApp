import {
  Text,
  Icon,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Box,
  IconName,
} from '@components';

interface ProfileNavigatorProps {
  icon?: IconName;
  title: string;
  subtitle?: string;
  isSibling?: boolean;
}

export function ProfileNavigator({
  icon,
  title,
  subtitle,
  isSibling,
  ...profileNavigatorProps
}: ProfileNavigatorProps & TouchableOpacityBoxProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      {...(isSibling && $siblingStyles)}
      {...profileNavigatorProps}>
      <Box flex={1} flexDirection="row" alignItems="center" gap="s16">
        {icon && <Icon name={icon} />}

        <Box flexDirection="column" gap="s4">
          <Text semiBold>{title}</Text>

          {subtitle && (
            <Text preset="paragraphSmall" color="gray1">
              {subtitle}
            </Text>
          )}
        </Box>
      </Box>

      <Icon name="chevron" />
    </TouchableOpacityBox>
  );
}

const $siblingStyles: TouchableOpacityBoxProps = {
  borderBottomColor: 'gray4',
  borderBottomWidth: 1,
  pb: 's16',
};
