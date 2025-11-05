import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BibliotecaVirtualScreen from "../screens/BibliotecaVirtualScreen";
import DetalleProductoScreen from "../screens/DetalleProductoScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BibliotecaTECH"
          component={BibliotecaVirtualScreen}
          options={{ title: "Productos" }}
        />

        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProductoScreen}
          options={{ title: "Detalle del Producto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}