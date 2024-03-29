import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes";
import { RoundedButton } from "../components/RoundedButton";

export default function Focus({ addSubject }) {

  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "top",
    flexDirection: "row",
  },
});
