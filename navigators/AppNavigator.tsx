import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useColorScheme} from 'react-native';
import {NoteEditorScreen} from '../screens/NoteEditorScreen';
import {NotesListScreen} from '../screens/NotesListScreen';

import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {navigationRef, useBackButtonHandler} from './navigationUtilities';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  NotesList: undefined; // @demo remove-current-line
  NoteEditor: undefined;
  // 🔥 Your screens go here
};

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes: any = [];

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  StackScreenProps<AppStackParamList, T>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = observer(
  gestureHandlerRootHOC(() => {
    return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'NotesList'}>
        <Stack.Screen name="NotesList" component={NotesListScreen} />
        <Stack.Screen name="NoteEditor" component={NoteEditorScreen} />
      </Stack.Navigator>
    );
  }),
);

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(
  props: NavigationProps,
) {
  const colorScheme = useColorScheme();

  useBackButtonHandler(routeName => exitRoutes.includes(routeName));

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        {...props}>
        <AppStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
});
