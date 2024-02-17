import React, { useState } from "react";

import {
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { colors } from "./src/utils/colors";
import Focus from "./src/Feature/Focus";
import Timer from "./src/Feature/Timer";
import FocusHistory from "./src/Feature/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
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
