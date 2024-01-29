import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "../../colors";
import { Feather } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const handleButtonLeftPress = () => {
    console.log("Botão Esquerdo Pressionado");
  };

  const handleButtonRightPress = () => {
    console.log("Botão Direito Pressionado");
  };

  const handleGoBackPress = () => {
    console.log("Botão Voltar Pressionado");
    // Adicione a lógica de navegação para a tela anterior se necessário
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.BtnBack} onPress={handleGoBackPress}>
        <Feather name="arrow-left-circle" size={38} color={colors.background} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleButtonLeftPress}
        activeOpacity={0.7}
        
      >
        <Image
          source={require("../../assets/Cliente.png")}
          style={styles.buttonImage}
          resizeMode="center"
        />
      
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonRightPress}
        activeOpacity={0.7}
      >
        <Image
          source={require("../../assets/Motoboy.png")}
          style={styles.buttonImage}
          resizeMode="center"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLeft: {
    backgroundColor: "transparent",
  },
  buttonRight: {
    backgroundColor: "transparent",
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.primary,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    padding: 16,
    width: "96%",
    borderRadius: 20,
    textAlign: "center",
    fontSize: 24,
    fontStyle: "italic",
    color: "#000000",
    fontWeight: "bold",
    position: "relative",
    top: -290,
  },
  buttonTextBack: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
  },
  buttonImage: {
    width: "90%", // Ajuste de acordo com o tamanho desejado
    height: "90%", // Ajuste de acordo com o tamanho desejado
  },
  BtnBack: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1,
  },
  TextBtnBack: {
    color: "#fff",
    fontSize: 20,
  },
});
