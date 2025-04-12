import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/100x100.png?text=Logo" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo a SportBets Helper</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.link}> Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1c1c1e",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 30,
     
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 30,
      borderRadius: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 40,
      color: "#ffffff",
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: "#444",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: "#2c2c2e",
      color: "#fff",
    },
    button: {
      width: "100%",
      height: 50,
      backgroundColor: "#d32f2f",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    link: {
      color: "#f44336",
      fontSize: 14,
      marginTop: 5,
      alignItems:"center"
    },
    footer: {
      flexDirection: "row",
      marginTop: 30,
    },
    footerText: {
      fontSize: 14,
      color: "#ccc",
    },
  });
  
