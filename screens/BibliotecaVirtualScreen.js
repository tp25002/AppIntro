import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BibliotecaVirtualScreen() {
  const navigation=useNavigation();
  
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { id: "1", nombre: "Laptop Gamer ASUS", precio: 1500, imagen: "https://m.media-amazon.com/images/I/81O8bO0U8-L._AC_SL1500_.jpg" },
    { id: "2", nombre: "PlayStation 5", precio: 499, imagen: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg" },
    { id: "3", nombre: "Xbox Series X", precio: 499, imagen: "https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SL1500_.jpg" },
    { id: "4", nombre: "Nintendo Switch OLED", precio: 349, imagen: "https://m.media-amazon.com/images/I/71LxjA6G55L._AC_SL1500_.jpg" },
    { id: "5", nombre: "Juego Elden Ring", precio: 59, imagen: "https://m.media-amazon.com/images/I/81p2+4nYtkL._AC_SL1500_.jpg" },
  ];

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert("Producto añadido", `${producto.nombre} ha sido agregado al carrito.`);
  };

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Biblioteca Virtual</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.producto}>
            <Image source={{ uri: item.imagen }} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
            <TouchableOpacity
              style={styles.boton}
              onPress={() => navigation.navigate("DetalleProducto", { producto: item })}
            >
              <Text style={styles.textoBoton}>Ver detalles</Text>
            </TouchableOpacity>

          </View>
        )}
      />

      <View style={styles.carrito}>
        <Text style={styles.total}>🧾 Total: ${total.toFixed(2)}</Text>
        <Button
          title="Finalizar Compra"
          color="#4CAF50"
          onPress={() =>
            Alert.alert("Compra realizada", `Total: $${total.toFixed(2)}. ¡Gracias por su compra!`)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  producto: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  imagen: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },
  precio: {
    fontSize: 16,
    color: "#555",
    marginVertical: 4,
  },
  boton: {
    backgroundColor: "#3B82F6",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
  },
  carrito: {
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    paddingTop: 12,
    marginTop: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
});
