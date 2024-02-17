import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export default function FocusHistory({ history }) {
  if (!history || !history.length) {
    return (
      <Text
        style={{
          color: colors.white,
          fontSize: fontSizes.md,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        You haven't focused on anything yet!
      </Text>
    );
  }
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things you have focused on : </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
});
