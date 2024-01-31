import { StyleSheet } from "react-native";
export const colors = {
  primary: "#F58634",
  secondary: "#808080",
  background: "#f7f7f7",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLeft: {
    backgroundColor: "transparent",
  },
  buttonRight: {
    backgroundColor: "transparent",
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: colors.primary,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  buttonText: {
    padding: 16,
    width: "96%",
    borderRadius: 20,
    textAlign: "center",
    fontSize: 24,
    fontStyle: "italic",
    color: "#000000",
    fontWeight: "bold",
    position: "relative",
    top: -290,
  },
  buttonTextBack: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
  },
  buttonImage: {
    width: "90%", // Ajuste de acordo com o tamanho desejado
    height: "90%", // Ajuste de acordo com o tamanho desejado
  },
  BtnBack: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1,
  },
  TextBtnBack: {
    color: "#fff",
    fontSize: 20,
  },
});
