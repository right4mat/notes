/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Colors} from 'react-native-ui-lib';
import {useInitialRootStore} from './models';
import {AppNavigator, useNavigationPersistence} from './navigators';

import * as storage from './utils/storage';

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
  },
});

Colors.loadDesignTokens({primaryColor: '#e6b11b'});

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

/**
 * This is the root component of our app.
 */
function App() {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const theme = useColorScheme();

  const {rehydrated} = useInitialRootStore();

  // Before we show the app, we have to wait for our state to be ready.
  if (!rehydrated || !isNavigationStateRestored) {
    return null;
  }

  // set the color theme for the app

  Colors.setScheme(theme === 'dark' ? 'dark' : 'light');

  // otherwise, we're ready to render the app
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator
        initialState={initialNavigationState}
        onStateChange={onNavigationStateChange}
      />
    </SafeAreaProvider>
  );
}
export default App;
