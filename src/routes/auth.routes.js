import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../colors";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
export default AuthRoutes;
