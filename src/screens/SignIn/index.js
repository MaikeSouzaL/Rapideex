import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Feather } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";
import SignUp from "../SignUp";

// ...imports...

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log("Signing in with:", email, password);
    // Handle errors if authentication fails
  };

  const handleSignUp = () => {
    navigation.navigate(SignUp);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <ImageBackground
          source={require("../../assets/BackgroundTela.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
          blurRadius={15}
        >
          <View style={styles.containerInput}>
            <Image
              source={require("../../assets/LogoMoto.png")}
              style={styles.logo}
              
            />

            <Text style={styles.textInput}>E-MAIL</Text>
            <TextInput
              style={styles.textInputField}
              placeholder="Seu e-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />

            <Text style={styles.textInput}>SENHA</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.textInputField}
                placeholder="Sua senha"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.togglePasswordButton}
                onPress={togglePasswordVisibility}
              >
                <View style={styles.togglePasswordIcon}>
                  {showPassword ? (
                    <Feather name="eye" size={32} color={colors.background} />
                  ) : (
                    <Feather
                      name="eye-off"
                      size={32}
                      color={colors.background}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleSignIn}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
  },
  containerInput: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 230,
    height: 230,
    marginTop: 30,
    marginBottom: 30,
    resizeMode: "contain",
  },
  textInput: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    padding: 12,
    borderRadius: 10,
  },
  textInputField: {
    backgroundColor: colors.secondary,
    width: "90%",
    height: 45,
    padding: 12,
    borderRadius: 10,
    fontSize: 17,
    color: colors.background,
    marginBottom: 15,
  },
  passwordInputContainer: {
    flexDirection: "row",
    position: "relative",
  },
  togglePasswordButton: {
    position: "absolute",
    right: 12,
  },
  togglePasswordIcon: {
    fontSize: 30,
    padding: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
