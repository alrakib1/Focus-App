import React, { useState } from "react";

import {
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";

import {colors} from "./src/utils/colors";
import Focus from "./src/Feature/Focus";
import Timer from "./src/Feature/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("test");

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.Bg,
  },
});
