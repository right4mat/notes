import React, {ErrorInfo} from 'react';
import {ViewStyle} from 'react-native';
import {Screen} from '../../components/Screen';

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorDetails() {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={['top', 'bottom']}
      contentContainerStyle={$contentContainer}
    />
  );
}

const $contentContainer: ViewStyle = {
  alignItems: 'center',
  flex: 1,
};
