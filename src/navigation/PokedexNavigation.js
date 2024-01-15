import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stack = createStackNavigator();

const PokedexNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Pokedex"
				component={PokedexScreen}
				options={{ title: "", headerTransparent: true }}
			/>
			<Stack.Screen
				name="PokemonScreen"
				component={PokemonScreen}
				options={{ title: "", headerTransparent: true }}
			/>
		</Stack.Navigator>
	);
};

export default PokedexNavigation;
