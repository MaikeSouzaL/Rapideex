import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles, colors } from "./styles";
import { useNavigation } from "@react-navigation/native";

import SingnUpClient from "./SignUpClient";
import SingnUpMotoboy from "./SignUpMotoboy";

export default function SignUp() {
  const navigation = useNavigation();

  const handleButtonLeftPress = () => {
    navigation.navigate(SingnUpClient);
  };

  const handleButtonRightPress = () => {
    navigation.navigate(SingnUpMotoboy);
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
