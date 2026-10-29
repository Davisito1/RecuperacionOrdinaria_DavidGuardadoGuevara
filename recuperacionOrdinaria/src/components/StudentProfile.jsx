import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <Text style={styles.rowValue}>{value}</Text>
  </View>
);

export default function StudentProfile({ student, onEdit }) {
  const initials = student.nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <Text style={styles.name}>{student.nombre}</Text>
        <Text style={styles.career}>Sección {student.seccion}</Text>
      </View>
      <View style={styles.body}>
        <Row label="Nombre" value={student.nombre} />
        <Row label="Carnet" value={student.carnet} />
        <Row label="Sección" value={student.seccion} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Button title="Registrar otro estudiante" variant="secondary" onPress={onEdit} style={{ marginTop: 16 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 20, overflow: "hidden", elevation: 3, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, paddingBottom: 20 },
  header: { backgroundColor: "#467ee5", alignItems: "center", paddingVertical: 28 },
  avatar: { width: 88, height: 88, borderRadius: 44, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", marginBottom: 12 },
  avatarText: { fontSize: 32, fontWeight: "800", color: "#4F46E5" },
  name: { fontSize: 20, fontWeight: "800", color: "#fff" },
  career: { fontSize: 14, color: "#C7D2FE", marginTop: 4 },
  body: { paddingHorizontal: 20, paddingTop: 12 },
  row: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#F3F4F6" },
  rowLabel: { fontSize: 12, color: "#6B7280", textTransform: "uppercase", letterSpacing: 0.5 },
  rowValue: { fontSize: 16, color: "#111827", fontWeight: "600", marginTop: 2 },
});