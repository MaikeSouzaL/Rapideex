import React, { useState } from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView, Text, TextInput, View, StyleSheet } from "react-native";
import { Feather } from "react-native-vector-icons";
import { SocialIcon } from "react-native-elements";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView>
          <Text style={styles.textTitle}>Login</Text>

          <View style={styles.containerInput}>
            <Text style={styles.textWarning}>
              Por Favor entre com seu email e senha para fazer o Login.
            </Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.InputPassword}
            />

            <TouchableOpacity
              style={styles.togglePasswordButton}
              onPress={togglePasswordVisibility}
            >
              <View style={styles.togglePasswordIcon}>
                {showPassword ? (
                  <Feather name="eye" size={28} color={colors.primary} />
                ) : (
                  <Feather name="eye-off" size={28} color={colors.secondary} />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.BtnLogin}>
              <Text style={styles.BtnLoginText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.forgot}>Esqueceu sua senha?</Text>
            <Text style={styles.TextOr}>Ou</Text>
            <View style={styles.ContainerSocialIcon}>
              <SocialIcon
                title="Entrar usando o facebook"
                button
                type="facebook"
                style={styles.SocialIcon}
                onPress={() => {}}
              />
              <SocialIcon
                title="Entrar usando o Google"
                button
                type="google"
                style={styles.SocialIcon}
                onPress={() => {}}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity style={styles.BtnCreate}>
        <Text style={styles.BtnCreateText}>Criar minha conta</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const colors = {
  primary: "#F58634",
  secondary: "#808080",
  background: "#f7f7f7",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    justifyContent: "center",
  },
  containerInput: {
    padding: 25,
    width: "100%",
  },
  textTitle: {
    alignSelf: "flex-start",
    color: "#F58634",
    fontSize: 30,
    fontWeight: "700",
    paddingLeft: 20,
    paddingTop: 20,
  },
  textWarning: {
    textAlign: "center",
    color: "#000000",
    fontSize: 18,
    fontWeight: "400",
  },
  input: {
    marginTop: 30,
    height: 50,
    borderColor: "#808080",
    color: "#F58634",
    fontSize: 15,
    fontWeight: "700",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },

  InputPassword: {
    position: "relative",
    marginTop: 30,
    height: 50,
    borderColor: "#808080",
    color: "#F58634",
    fontSize: 15,
    fontWeight: "700",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },

  togglePasswordButton: {
    position: "absolute",
    right: 30,
    top: 200,
  },

  togglePasswordIcon: {
    fontSize: 30,
    padding: 5,
  },

  BtnLogin: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    backgroundColor: "#F58634",
    padding: 10,
    borderRadius: 10,
  },
  BtnLoginText: {
    color: "#ffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgot: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
    color: "#808080",
    textDecorationLine: "underline",
  },
  TextOr: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },

  SocialIcon: {
    marginTop: 25,
  },
  BtnCreate: {
    alignSelf: "flex-end",
    marginRight: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#F58634",
    borderRadius: 10,
  },
  BtnCreateText: {
    color: "#F58634",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
});
