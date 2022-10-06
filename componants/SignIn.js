import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Image,
} from "react-native";
   const SignIn=()=> {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleuser = (v) => {
    setusername(v);
  };
  const handlepassword = (v) => {
    setpassword(v);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets//bank.png")} />
      <View style={styles.inputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Email"
          placeholderTextColor="#12c3ff"
          onChangeText={handleuser}
          value={username}
        />
      </View>

      <View style={styles.inputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Password"
          placeholderTextColor="#12c3ff"
          secureTextEntry={true}
          onChangeText={handlepassword}
          value={password}
        />
      </View>

      <View style={styles.buttonview}>
        <Button title="sign in" style={styles.button} />
        <TouchableOpacity>
          <Text style={styles.forgetpassowrd}>Forgot Password? </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  inputview: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
  image: {
    marginBottom: 35,
    resizeMode: "stretch",
    height: 200,
    width: 300,
  },
  buttonview: {
    margin: 10,
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#00007c",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    elevation: 3,
    flex: 1,
  },
  forgetpassowrd: {
    padding: 10,
    color: "#00007c",
    marginBottom: 30,
    fontSize: 18,
    elevation: 10,
  },
});
