import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";

export default function Timing({ onChangeTime }) {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="10"
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="25"
          onPress={() => {
            onChangeTime(25);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={75}
          title="40"
          onPress={() => {
            onChangeTime(40);
          }}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
