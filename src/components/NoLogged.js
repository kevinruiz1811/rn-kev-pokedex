import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NoLogged = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.content}>
			<Text style={styles.text}>
				Para ver tus pokemones favoritos, debes inicar sesión
			</Text>
			<Button
				title="Iniciar sesión"
				onPress={() => navigation.navigate("Account")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		marginVertical: 50,
		paddingHorizontal: 20,
	},

	text: {
		textAlign: "center",
		marginBottom: 10,
	},
});

export default NoLogged;
