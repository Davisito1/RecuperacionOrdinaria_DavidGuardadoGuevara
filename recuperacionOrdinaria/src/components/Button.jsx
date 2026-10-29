import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Button({ title, onPress, variant = "primary", loading, disabled, style }) {
  const secondary = variant === "secondary";
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[styles.btn, secondary ? styles.secondary : styles.primary, (disabled || loading) && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={secondary ? "#4F46E5" : "#fff"} />
      ) : (
        <Text style={[styles.text, secondary && styles.textSecondary]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { paddingVertical: 14, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  primary: { backgroundColor: "#469de5" },
  secondary: { backgroundColor: "#EEF2FF" },
  disabled: { opacity: 0.6 },
  text: { color: "#fff", fontSize: 15, fontWeight: "700" },
  textSecondary: { color: "#469de5" },
});