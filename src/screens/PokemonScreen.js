import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "@expo/vector-icons/FontAwesome5";

import { getPokemonDetailById } from "../api/Pokemon";
import Header from "../components/pokemon/header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";

const PokemonScreen = (props) => {
	const {
		navigation,
		route: { params },
	} = props;

	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => null,
			headerLeft: () => (
				<Icon
					name="arrow-left"
					color="#FFF"
					size={20}
					style={{ marginLeft: 20 }}
					onPress={navigation.goBack}
				/>
			),
		});
	}, [navigation, params]);

	useEffect(() => {
		(async () => {
			try {
				const response = await getPokemonDetailById(params.id);
				setPokemon(response);
			} catch (error) {
				navigation.goBack();
			}
		})();
	}, [params]);

	if (!pokemon) return null;

	return (
		<ScrollView>
			<Header
				name={pokemon.name}
				order={pokemon.order}
				image={pokemon.sprites.front_default}
				type={pokemon.types[0].type.name}
			/>
			<Type types={pokemon.types} />
			<Stats stats={pokemon.stats} />
		</ScrollView>
	);
};

export default PokemonScreen;
