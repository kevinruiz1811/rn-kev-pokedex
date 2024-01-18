import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import {} from "@react-navigation/native"

import { getPokemonFavoriteApi } from "../api/Favorites";
import UseAuth from "../hooks/UseAuth";
import { getPokemonDetailById } from "../api/Pokemon";
import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

const FavoritesScreen = () => {
	const { auth } = UseAuth();
	const [pokemons, setPokemons] = useState(null);

	useEffect(() => {
		if (auth) {
			(async () => {
				const response = await getPokemonFavoriteApi();
				const pokemonsArray = [];

				for await (let id of response) {
					let pokemonsDetail = await getPokemonDetailById(id);

					pokemonsArray.push({
						id: pokemonsDetail.id,
						name: pokemonsDetail.name,
						type: pokemonsDetail.types[0].type.name,
						order: pokemonsDetail.order,
						image: pokemonsDetail.sprites.front_default,
					});
				}

				setPokemons(pokemonsArray);
			})();
		}
	}, [auth, pokemons]);

	return !auth ? (
		<NoLogged />
	) : (
		<PokemonList pokemons={pokemons} />
	);
};

export default FavoritesScreen;
