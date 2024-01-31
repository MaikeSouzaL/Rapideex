import { StyleSheet } from "react-native";

export const colors = {
  primary: "#F58634",
  secondary: "#808080",
  background: "#f7f7f7",
};

export const styles = StyleSheet.create({
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
    color: colors.primary,
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
    color: colors.primary,
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
    color: colors.primary,
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
    backgroundColor: colors.primary,
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
    borderColor: colors.primary,
    borderRadius: 10,
  },
  BtnCreateText: {
    color: colors.primary,
    fontSize: 15,
    padding: 8,
    fontWeight: "bold",
  },
});
