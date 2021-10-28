import React from "react";
import {
	StyledTable,
	THead,
	THCol,
	TCol,
	TBody,
	TRow
} from "./Table.styled";
import { Span, Strong } from "../StyledUtils/Utils.styled";
import { ICoin } from "../../interfaces/coin";

interface IProps {
	coins: ICoin[]
}

const CoinTable: React.FC<IProps> = ({ coins }) => {
	const getNumberAsString = (value: number): string => {
		return value >= 0 ? `+${value.toLocaleString()}` : `-${value.toLocaleString()}`;
	}

	const getNumberColor = (value: number): string => {
		return value > 0 ? 'green' : value < 0 ? 'red' : 'black';
	}

	const renderCoins = (): JSX.Element[] => {
		return coins.map(coin => {
			return (
				<TRow key={coin.id}>
					<TCol> { coin.marketCapRank } </TCol>
					<TCol>
						 { coin.name } [{ coin.symbol }]
					</TCol>
					<TCol> ${ coin.currentPrice.toLocaleString() } </TCol>
					<TCol>
						<Strong>
							<Span color={getNumberColor(coin.priceChange24h)}>
								{ getNumberAsString(coin.priceChange24h) }
							</Span>
						</Strong>
					</TCol>
					<TCol> ${ coin.marketCap.toLocaleString() } </TCol>
					<TCol> ${ coin.totalVolume.toLocaleString() } </TCol>
				</TRow>
			);
		});
	}

	return (
		<StyledTable>
			<THead>
				<TRow>
					<THCol> # </THCol>
					<THCol> Name </THCol>
					<THCol> Price </THCol>
					<THCol> Change (24h) </THCol>
					<THCol> Market Cap </THCol>
					<THCol> Volume </THCol>
				</TRow>
			</THead>
			<TBody>
				{ renderCoins() }
			</TBody>
		</StyledTable>
	);
};

export default CoinTable;