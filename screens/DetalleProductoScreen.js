import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";

export default function DetalleProductoScreen({ route, navigation }) {
  const producto = route?.params?.producto;

  if (!producto) {
    return (
      <View style={styles.containerVacio}>
        <Text style={styles.textoVacio}>No se encontró información del producto.</Text>
      </View>
    );
  }

  const handleComprar = () => {
    Alert.alert("Compra realizada", `Has comprado: ${producto.nombre} por $${producto.precio}.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Image source={{ uri: producto.imagen }} style={styles.imagen} />

        <Text style={styles.nombre}>{producto.nombre}</Text>
        <Text style={styles.precio}>💲{producto.precio.toFixed(2)}</Text>

        <Text style={styles.descripcion}>
          Este es un producto increíble que combina calidad y rendimiento. 
          Ideal para quienes buscan la mejor experiencia en tecnología.
        </Text>

        <TouchableOpacity style={styles.boton} onPress={handleComprar}>
          <Text style={styles.textoBoton}>Comprar ahora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.boton, styles.botonVolver]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.textoBoton, styles.textoBotonVolver]}>Volver</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  imagen: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
    textAlign: "center",
  },
  precio: {
    fontSize: 20,
    fontWeight: "600",
    color: "#10B981",
    marginVertical: 8,
  },
  descripcion: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonVolver: {
    backgroundColor: "#E5E7EB",
  },
  textoBotonVolver: {
    color: "#111827",
  },
  containerVacio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
  textoVacio: {
    fontSize: 18,
    color: "#6B7280",
  },
});
