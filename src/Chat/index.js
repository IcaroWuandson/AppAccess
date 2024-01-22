import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chat() {
  return (
    <SafeAreaView style={styles.containerPage}>
      <WebView
        style={styles.container}
        source={{
          uri: "https://accesssollutions.com.br/app/chat-megazap.html",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    backgroundColor: "#FFF",
  },
});
