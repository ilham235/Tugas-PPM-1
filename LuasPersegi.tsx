import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [sisi, setSisi] = useState("");      // untuk input sisi
  const [luas, setLuas] = useState<number | null>(null); // hasil luas

  const hitungLuas = () => {
    const s = parseFloat(sisi);
    if (!isNaN(s)) {
      setLuas(s * s); // rumus luas persegi
    } else {
      setLuas(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hitung Luas Persegi</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan sisi persegi"
        keyboardType="numeric"
        value={sisi}
        onChangeText={(val) => setSisi(val)}
      />

      <TouchableOpacity style={styles.button} onPress={hitungLuas}>
        <Text style={styles.buttonText}>Hitung</Text>
      </TouchableOpacity>

      {luas !== null && (
        <Text style={styles.result}>Luas Persegi = {luas}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    width: "80%",
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4890fbff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontWeight: "600",
  },
});
