import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    padding: 15
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: 'red',
    fontSize: 32,
    marginTop: -5,
    margin: 0,
    padding: 0
  }
})

export default styles;