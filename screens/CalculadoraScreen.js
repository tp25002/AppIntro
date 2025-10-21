import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function CalculadoraScreen() {
    const [num1, setnum1] = useState(``);
    const [num2, setnum2] = useState(``);
    const [resultado, setResultado] = useState(null);

function Calcular(){
    //Convertir a numero
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    setResultado(n1+n2);

}
    
    return (
        <View style={styles.container}>
            <TextInput
            value={num1}
            onChangeText={setnum1}
            style={styles.input}
                keyboardType="numeric"
                placeholder="Primer Numero" />
            <TextInput
            value={num2}
            onChangeText={setnum2}
            style={styles.input}
                keyboardType="numeric"
                placeholder="Segundo Numero" />
            <Button onPress={Calcular}
            Style={styles.input}
                color="#555"
                title="Calcular" />
            <Text style={styles.input}>Resultado: {resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 24
    },
    input: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#FFF",
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        textAlign: "justify",
        color: "#000",
    },
    input: {
        borderWidth: 1,
        borderColor: "#D1D5DB",
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
        backgroundColor: "#FFF",
    },
    text: {
        marginTop: 20,
        fontSize: 20,
        textAlign: "justify",
        color: "#000",
    }
});