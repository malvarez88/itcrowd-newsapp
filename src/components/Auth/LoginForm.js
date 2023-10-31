import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { capitalize } from "lodash";
import { user } from "../../utils/UserDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { login, auth } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formData) => {
      setError("");
      const { username, password } = formData;

      if (username !== user.username || password !== user.password) {
        setError("User or Password are incorrect");
      } else {
        login(user);
      }
    },
  });

  return (
    <View style={styles.login}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button
        title="Submit"
        onPress={formik.handleSubmit}
        style={styles.submit}
      />
      <Text style={styles.error}>{capitalize(formik.errors.username)}</Text>
      <Text style={styles.error}>{capitalize(formik.errors.password)}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("User is required").min(5),
    password: Yup.string().required("Password is required").min(5),
  };
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: "#0a0905",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
    color: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: "#a28d5f",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
