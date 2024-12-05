import { Text, View } from "react-native";
import { useEffect } from "react";
import { SmsQueue } from "./graphql";
import BackgroundTimer from 'react-native-background-timer';
import { ApolloSubscriptionTask } from "./tasks/ApolloSubscriptionTask";
export default function Index() {
  useEffect(() => {
    console.log("STARTING INTERVAL")
    const timeoutId = BackgroundTimer.setInterval(() => {
      // this will be executed once after 10 seconds
      // even when app is the the background
      ApolloSubscriptionTask()
    }, 10000);

    // Cancel the timeout if necessary

    return () => {
      console.log("CLOSING INTERVAL");
      BackgroundTimer.clearInterval(timeoutId);
    }
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>SMS APP v1</Text>
    </View>
  );
}
