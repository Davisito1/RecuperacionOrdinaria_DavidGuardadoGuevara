import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import Button from "./Button";

export default function StudentForm({ onSubmit }) {
  const [form, setForm] = useState({ nombre: "", carnet: "", seccion: "" });
  const [errors, setErrors] = useState({});

  const setField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa el nombre";
    if (!form.carnet.trim()) e.carnet = "Ingresa el carnet";
    if (!form.seccion.trim()) e.seccion = "Ingresa la sección";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onSubmit(form);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Registro de estudiante</Text>
      <Input label="Nombre completo" value={form.nombre} onChangeText={(v) => setField("nombre", v)} placeholder="David Alejandro" error={errors.nombre} />
      <Input label="Carnet" value={form.carnet} onChangeText={(v) => setField("carnet", v)} placeholder="20220354" autoCapitalize="characters" error={errors.carnet} />
      <Input label="Sección" value={form.seccion} onChangeText={(v) => setField("seccion", v)} placeholder="A-3" autoCapitalize="characters" error={errors.seccion} />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#F9FAFB", borderRadius: 16, padding: 20 },
  title: { fontSize: 20, fontWeight: "800", color: "#111827", marginBottom: 18 },
});