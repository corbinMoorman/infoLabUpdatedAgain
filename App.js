import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import IOS_Screen from './screens/ios';
import AndroidScreen from './screens/android';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Android" component={AndroidScreen} />
          <Stack.Screen name="IOS" component={IOS_Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
