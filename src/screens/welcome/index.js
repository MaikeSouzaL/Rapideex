import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUp from "../SignUp";
import Login from "../SignIn/Login";
export default function Welcome() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate(Login);
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
            <Text style={styles.TextCreate}> Criar conta</Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  logocontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TextWelcome: {
    color: "#2D5866",
    fontWeight:"bold",
    fontSize:30,
    marginBottom:150,
  },
  logoimg: {
    width: 250,
    height: 250,
    marginLeft: 30,
    resizeMode: "contain",
    marginBottom:100,
  },
  btnLogin: {
    backgroundColor: "#F58634",
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom:20,
  },
  btnText: {
    color: "#ffff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 15,
  },
  TextAcount: {
    fontSize: 18,
    color: "#F58634",
  },
  TextCreate: {
    color: "#2D5866",
    textDecorationLine: "underline",
    fontStyle: "italic",
  },
});
