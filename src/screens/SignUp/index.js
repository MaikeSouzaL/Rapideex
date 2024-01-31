import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { styles, colors } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  const handleButtonLeftPress = () => {
    console.log("Botão Esquerdo Pressionado");
  };

  const handleButtonRightPress = () => {
    console.log("Botão Direito Pressionado");
  };

  return (
    <View style={styles.container}>
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
