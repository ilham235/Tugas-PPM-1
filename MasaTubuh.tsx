import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const App: React.FC = () => {
  const [berat, setBerat] = useState<string>("");
  const [tinggi, setTinggi] = useState<string>("");
  const [hasil, setHasil] = useState<string | null>(null);
  const [kategori, setKategori] = useState<string>("");

  const hitungIMT = () => {
    const beratNum = parseFloat(berat);
    const tinggiNum = parseFloat(tinggi);

    if (isNaN(beratNum) || isNaN(tinggiNum) || tinggiNum === 0) {
      setHasil("Masukkan angka yang valid!");
      setKategori("");
      return;
    }

    // Ubah tinggi dari cm ke meter
    const tinggiMeter = tinggiNum / 100;

    // Hitung IMT
    const imt = beratNum / (tinggiMeter * tinggiMeter);
    setHasil(imt.toFixed(2));

    // Tentukan kategori IMT
    if (imt < 18.5) {
      setKategori("Kurus");
    } else if (imt >= 18.5 && imt < 24.9) {
      setKategori("Normal");
    } else if (imt >= 25 && imt < 29.9) {
      setKategori("Kelebihan berat badan");
    } else {
      setKategori("Obesitas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulator Indeks Massa Tubuh</Text>

      <TextInput
        style={styles.input}
        placeholder="Masukkan berat badan (kg)"
        keyboardType="numeric"
        value={berat}
        onChangeText={setBerat}
      />

      <TextInput
        style={styles.input}
        placeholder="Masukkan tinggi badan (cm)"
        keyboardType="numeric"
        value={tinggi}
        onChangeText={setTinggi}
      />

      <TouchableOpacity style={styles.button} onPress={hitungIMT}>
        <Text style={styles.buttonText}>Hitung Masa Tubuh</Text>
      </TouchableOpacity>

      {hasil && (
        <View style={styles.resultBox}>
          <Text style={styles.result}>Masa Tubuh Anda: {hasil}</Text>
          <Text style={styles.category}>Kategori: {kategori}</Text>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    marginBottom: 15,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: 25,
    alignItems: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
  category: {
    fontSize: 16,
    marginTop: 5,
  },
});
