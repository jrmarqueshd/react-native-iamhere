import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#131016',
    paddingTop: 48,
    paddingBottom: 48,
    padding: 15
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#ececec'
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 15
  },
  input: {
    backgroundColor: "#2f2e35",
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: '#131016',
    fontSize: 32,
  },
  list: {
    marginTop: 15,
  },
  empty: {
    color: '#fff',
    textAlign: "center",
    fontSize: 14,
    marginTop: 15
  }
});

export default styles;