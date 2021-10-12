import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

type ScreenProps = {
  children: ReactNode;
};

const Screen = (props: ScreenProps) => {
  return <View style={styles.screenContainer}>{props.children}</View>;
};

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

/**
 * this function return an Object.
 * The return object has couple of preperties -> Navigator and Screen
 * Both these properties are react component.
 *
 * That's why we named the object using pascal naming convention as we will
 * use this as react component.
 */
const Stack = createNativeStackNavigator();
/**
 *
 * Inside the Stack.Navigator, we define bunch of screen component.
 * With this screen component, we can define our routes.
 */
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return <View></View>;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
