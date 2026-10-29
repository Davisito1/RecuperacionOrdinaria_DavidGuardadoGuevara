import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import StudentForm from "../components/StudentForm";
import StudentProfile from "../components/StudentProfile";
import Button from "../components/Button";

export default function Home({ navigation }) {
  const [student, setStudent] = useState(null);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.heading}>{student ? "Perfil del estudiante" : "Nuevo estudiante"}</Text>

        {student ? (
          <StudentProfile student={student} onEdit={() => setStudent(null)} />
        ) : (
          <StudentForm onSubmit={setStudent} />
        )}

        <View style={{ marginTop: 20 }}>
          <Button title="Ir a la lista de datos →" onPress={() => navigation.navigate("Datos")} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 26, fontWeight: "800", color: "#111827", marginBottom: 16 },
});