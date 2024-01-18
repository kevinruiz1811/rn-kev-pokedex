import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "../screens/FavoritesScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createNativeStackNavigator();

const FavoritesNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Favorite"
				component={FavoritesScreen}
				options={{
					title: "",
					headerTransparent: true,
				}}
			/>
			<Stack.Screen
				name="PokemonScreen"
				component={PokemonScreen}
				options={{
					title: "",
					headerTransparent: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default FavoritesNavigation;
