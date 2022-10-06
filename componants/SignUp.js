import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  
} from "react-native";



const SignUp = () => {

  return (
    <View>
      <View>
        <Text style={styles.text}> Bank Account Information Form </Text>
      </View>
      <Text style={styles.text}> Name </Text>

      <View style={styles.countaner}>
        <View style={styles.inputview}>
          <TextInput
            style={styles.textinput}
            placeholder="First"
            placeholderTextColor="#12c3ff"
          />
        </View>
        <View style={styles.inputview}>
          <TextInput
            style={styles.textinput}
            placeholder="Last"
            placeholderTextColor="#12c3ff"
          />
        </View>
      </View>
      <Text style={styles.text}> Date Of Birth </Text>

      <View>
        <View style={styles.inputview2}>
          <TextInput
            style={styles.textinput}
            placeholder="MM/DD/YYY"
            placeholderTextColor="#12c3ff"
          />
        </View>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00007c",
    fontStyle: "italic",
    margin: 10,
  },
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 200,
  },
  textinput: {
    borderWidth: 1,
    borderColor: "#12c3ff",
    margin: 10,
    flex: 1,
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
    color: "#00007c",
    fontSize: 18,
  },
  countaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  inputview2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
