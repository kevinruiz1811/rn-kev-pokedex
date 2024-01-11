import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/FontAwesome5";

import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import FavoritesNavigation from "./FavoritesNavigation";

const Tab = createBottomTabNavigator();

const Navigation = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Account"
				component={AccountNavigation}
				options={{
					tabBarLabel: "Mi cuenta",
					tabBarIcon: ({ color, size }) => (
						<Icon name="user" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Pokedex"
				component={PokedexNavigation}
				options={{
					tabBarLabel: "",
					tabBarIcon: () => renderPokeball(),
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={FavoritesNavigation}
				options={{
					tabBarLabel: "Favoritos",
					tabBarIcon: ({ color, size }) => (
						<Icon name="heart" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const renderPokeball = () => {
	return (
		<Image
			source={require("../assets/pokeball.png")}
			style={{ width: 70, height: 70, top: -15 }}
		/>
	);
};

export default Navigation;
