import React from "react";
import Container from "../components/Container";
import CoinTable from "../components/CoinTable";
import { Center } from "../components/StyledUtils/Utils.styled";
import { coinsData } from "../data/coins";

const Explore = () => {
	const getCoins = async () => {
		const data = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		).then(async res => await res.json()).then(res => res)
		console.log(data)
	}

	getCoins()

	return (
		<Container>
			<Center>
				<h1> Market Status </h1>
			</Center>
			<CoinTable coins={coinsData} />
		</Container>
	);
};

export default Explore;