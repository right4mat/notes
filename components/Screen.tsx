import {observer} from 'mobx-react-lite';
import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {View} from 'react-native-ui-lib';

const isIos = Platform.OS === 'ios';

interface HeaderProps {
  children: any;
}

export const Screen: FC<HeaderProps> = observer(function Screen(_props) {
  const {children} = _props;
  return (
    <View useSafeArea flex>
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        style={$keyboardAvoidingViewStyle}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
});

const $keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
};
