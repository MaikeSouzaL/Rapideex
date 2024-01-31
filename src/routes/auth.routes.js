import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SignUp from "../screens/SignUp";
import Welcome from "../screens/welcome";
import SignIn from "../screens/SignIn";

const AuthStack = createNativeStackNavigator();

// Persnalizando o arrow de voltar---------------------------------------------------
const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="arrow-back"
      size={30}
      color="#ffff"
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10, marginRight: 30 }}
    />
  );
};

// Criando as rotas -----------------------------------------------------------------
function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          statusBarColor: "#F58634",
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Minha conta",
          headerTintColor: "#ffff",
          statusBarColor: "#F58634",
          headerStyle: {
            backgroundColor: "#F58634",
          },
          // Arrow Personalizada ------------------------------------------------------
          headerLeft: () => <CustomBackButton />,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Escolha a Categoria",
          headerTintColor: "#ffff",
          statusBarColor: "#F58634",
          headerStyle: {
            backgroundColor: "#F58634",
          },
          headerLeft: () => <CustomBackButton />,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
