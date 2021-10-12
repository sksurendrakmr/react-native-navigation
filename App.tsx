import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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

export default function App() {
  return <View></View>;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
