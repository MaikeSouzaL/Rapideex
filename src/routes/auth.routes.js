import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Welcome from "../screens/welcome";
import Login from "../screens/SignIn/Login";

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
      style={{ marginLeft: 10 }}
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
        name="Login"
        component={Login}
        options={{
          title: "",
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
          statusBarColor: "#F58634",
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
