import React from "react";
import { View, Text, Image, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import useApi from "../hooks/useApi";
import Button from "../components/Button";

const API_URL = "https://api.tvmaze.com/shows";

export default function Datos({ navigation }) {
  const { data, loading, error, reload } = useApi(API_URL);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image.original }} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <View style={[styles.badge, styles.badgeAlive]}>
            <Text style={[styles.badgeText, styles.badgeAlive]}>
              {item.language}
            </Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={4}>{item.url}</Text>
        <Text>{item.premiered}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Datos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#469de5" style={{ marginTop: 40 }} />
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>Error: {error}</Text>
          <Button title="Reintentar" onPress={reload} style={{ marginTop: 12 }} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(item.id ?? index)}
          renderItem={renderItem}
          refreshing={loading}
          onRefresh={reload}
          ListEmptyComponent={<Text style={styles.empty}>No hay datos todavía.</Text>}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}

      <Button title="← Volver al formulario" variant="secondary" onPress={() => navigation.navigate("Screen1")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 20 },
  heading: { fontSize: 26, fontWeight: "800", color: "#111827", marginBottom: 16 },
  card: { backgroundColor: "#fff", borderRadius: 16, marginBottom: 14, overflow: "hidden", elevation: 2, shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 3 } },
  image: { width: "100%", height: 160, backgroundColor: "#E5E7EB" },
  info: { padding: 14 },
  titleRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 },
  name: { flex: 1, fontSize: 18, fontWeight: "800", color: "#111827", marginRight: 8 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  badgeDestroyed: { backgroundColor: "#FEE2E2" },
  badgeAlive: { backgroundColor: "#DCFCE7" },
  badgeText: { fontSize: 12, fontWeight: "700" },
  badgeTextDestroyed: { color: "#B91C1C" },
  badgeTextAlive: { color: "#15803D" },
  description: { fontSize: 13, color: "#4B5563", lineHeight: 19 },
  center: { alignItems: "center", marginTop: 30 },
  error: { color: "#EF4444", textAlign: "center" },
  empty: { textAlign: "center", color: "#6B7280", marginTop: 40 },
});