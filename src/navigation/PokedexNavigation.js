import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PokedexScreen from "../screens/PokedexScreen";
import Pokemon from "../screens/Pokemon";

const Stack = createStackNavigator();

const PokedexNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Pokedex"
				component={PokedexScreen}
			/>
			<Stack.Screen
				name="Pokemon"
				component={Pokemon}
			/>
		</Stack.Navigator>
	);
};

export default PokedexNavigation;
