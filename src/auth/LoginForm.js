import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Keyboard,
	ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { user, userDetails } from "../utils/userDB";
import UseAuth from "../hooks/UseAuth";

const LoginForm = () => {
	const [error, setError] = useState("");
	const { login } = UseAuth();

    console.log(UseAuth());

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: (formData) => {
			const { username, password } = formData;

			setError("");

			if (username != user.username || password != user.password) {
				ToastAndroid.show(
					"El usuario o contraseña son incorrectos.",
					ToastAndroid.SHORT,
				);
				setError("El usuario o contraseña son incorrectos");
			} else {
				login(userDetails);
				console.log("Datos correctos");
			}
		},
	});

	return (
		<View>
			<Text style={styles.title}>Iniciar sesión</Text>
			<TextInput
				placeholder="Nombre de usuario"
				style={styles.input}
				autoCapitalize="none"
				value={formik.values.username}
				onChangeText={(text) => formik.setFieldValue("username", text)}
			/>
			<Text style={styles.error}>{formik.errors.username}</Text>
			<TextInput
				placeholder="Contraseña"
				style={styles.input}
				autoCapitalize="none"
				secureTextEntry={true}
				value={formik.values.password}
				onChangeText={(text) => formik.setFieldValue("password", text)}
			/>
			<Text style={styles.error}>{formik.errors.password}</Text>
			<Button title="Ingresar" onPress={formik.handleSubmit} />
			<Text style={styles.error}>{error}</Text>
		</View>
	);
};

const initialValues = () => {
	return {
		username: "",
		password: "",
	};
};

const validationSchema = () => {
	return {
		username: Yup.string().required("El usuario es obligatorio"),
		password: Yup.string().required("La contraseña es obligatoria"),
	};
};

const styles = StyleSheet.create({
	title: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 50,
		marginBottom: 15,
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
	},

	error: {
		textAlign: "center",
		color: "red",
	},
});

export default LoginForm;
