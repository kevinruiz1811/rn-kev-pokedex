import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import PokemonList from "../components/PokemonList";

import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/Pokemon";

const PokedexScreen = () => {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(null);

	useEffect(() => {
		(async () => {
			await loadPokemons();
		})();
	}, []);

	const loadPokemons = async () => {
		try {
			const response = await getPokemonsApi(nextUrl);
			setNextUrl(response.next);

			const pokemonsArray = [];

			for await (let pokemon of response.results) {
				let pokemonsDetail = await getPokemonDetailsByUrlApi(pokemon.url);

				pokemonsArray.push({
					id: pokemonsDetail.id,
					name: pokemonsDetail.name,
					type: pokemonsDetail.types[0].type.name,
					order: pokemonsDetail.order,
					image: pokemonsDetail.sprites.front_default,
				});
			}

			setPokemons([...pokemons, ...pokemonsArray]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SafeAreaView>
			<PokemonList
				pokemons={pokemons}
				loadPokemons={loadPokemons}
				isNext={nextUrl}
			/>
		</SafeAreaView>
	);
};

export default PokedexScreen;
