import React, { useState } from "react";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView, Text, TextInput, View,  } from "react-native";


import { Feather } from "react-native-vector-icons";
import { SocialIcon } from "react-native-elements";
import SignUp from "../SignUp";
import { useNavigation } from "@react-navigation/native";
import { styles,colors } from "./styles";
export default function SignIn({ handleSingUp }) {
  const navigation = useNavigation();

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
        <Text
          style={styles.BtnCreateText}
          onPress={() => navigation.navigate(SignUp)}
        >
          Criar minha conta
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
