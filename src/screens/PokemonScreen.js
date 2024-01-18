import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";

import { getPokemonDetailById } from "../api/Pokemon";
import Header from "../components/pokemon/header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import Favorite from "../components/pokemon/Favorite";
import UseAuth from "../hooks/UseAuth";

const PokemonScreen = (props) => {
	const {
		navigation,
		route: { params },
	} = props;

	const [pokemon, setPokemon] = useState(null);

	const { auth } = UseAuth();

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

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (auth ? <Favorite id={params?.id} /> : null),
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
