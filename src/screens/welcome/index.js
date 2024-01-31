import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

export default function Welcome() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate(SignIn);
  }
  function handleSingUp() {
    navigation.navigate(SignUp);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.logocontainer}>
        <Text style={styles.TextWelcome}>Seja Bem vindo!</Text>
        <Image
          source={require("../../assets/LogoMoto.png")}
          style={styles.logoimg}
        />
        <TouchableOpacity onPress={handleSingIn} style={styles.btnLogin}>
          <Text style={styles.btnText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={(handleAcount) => {}}
          style={styles.btnAcount}
        >
          <Text style={styles.TextAcount}>
            Não possui uma conta?
            <Text style={styles.TextCreate} onPress={handleSingUp}>
              {" "}
              Criar conta
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
