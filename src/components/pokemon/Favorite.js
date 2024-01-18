import React, { useState, useEffect } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
	addPokemonFavoriteApi,
	isPokemonFavoriteApi,
	removePokemonFavoriteApi,
} from "../../api/Favorites";

const Favorite = (props) => {
	const { id } = props;
	const [isFavorite, setIsFavorite] = useState(false);
	const [reloadCheck, setReloadCheck] = useState(false);
	const Icon = isFavorite ? FontAwesome : FontAwesome5;

	useEffect(() => {
		(async () => {
			try {
				const response = await isPokemonFavoriteApi(id);
				setIsFavorite(response);
			} catch (error) {
				setIsFavorite(false);
				throw error;
			}
		})();
	}, [id, reloadCheck]);

	const onReloadFavorite = () => {
		setReloadCheck((prev) => !prev);
	};

	const addFavorite = async () => {
		try {
			await addPokemonFavoriteApi(id);
			onReloadFavorite();
		} catch (error) {
			console.log(error);
		}
	};

	const removeFavorite = async () => {
		try {
			await removePokemonFavoriteApi(id);
			onReloadFavorite();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Icon
			name="heart"
			color="#FFF"
			size={20}
			onPress={isFavorite ? removeFavorite : addFavorite}
			style={{ marginRight: 20 }}
		/>
	);
};

export default Favorite;
