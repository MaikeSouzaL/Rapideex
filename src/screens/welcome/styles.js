import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  logocontainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TextWelcome: {
    color: "#2D5866",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 150,
  },
  logoimg: {
    width: 250,
    height: 250,
    marginLeft: 30,
    resizeMode: "contain",
    marginBottom: 100,
  },
  btnLogin: {
    backgroundColor: "#F58634",
    width: 300,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
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
