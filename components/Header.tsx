import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {Colors, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  leftText?: string;
  rightText?: string;
  leftIcon?: string;
  rightIcon?: string;
  onLeftPress?: Function;
  onRightPress?: Function;
}

export const Header: FC<HeaderProps> = observer(function Header(_props) {
  const {leftText, rightText, leftIcon, rightIcon, onRightPress, onLeftPress} =
    _props;
  return (
    <View spread row useSafeArea>
      <View>
        <TouchableOpacity onPress={onLeftPress} padding-20>
          {leftIcon && (
            <Icon name={leftIcon} color={Colors.$iconPrimary} size={30} />
          )}
          {leftText && (
            <Text text70 color={Colors.$iconPrimary}>
              {leftText}
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={onRightPress} padding-20>
          {rightIcon && (
            <Icon name={rightIcon} color={Colors.$iconPrimary} size={30} />
          )}
          {rightText && (
            <Text text70 color={Colors.$iconPrimary}>
              {rightText}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
});
