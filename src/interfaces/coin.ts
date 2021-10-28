export interface ICoin {
	id: string;
	symbol: string;
	name: string;
	image: string;
	currentPrice: number;
	marketCap: number;
	marketCapRank: number;
	fullyDilutedValuation: number;
	totalVolume: number;
	high24h: number;
	low24h: number;
	priceChange24h: number;
	priceChangePercentage24h: number;
	lastUpdated: string;
}