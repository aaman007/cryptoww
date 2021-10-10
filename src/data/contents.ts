import { IContent } from "../interfaces/content";
import { theme } from "./theme";

export const headerContent: IContent = {
	id: 1,
	title: 'What Is Cryptocurrency?',
	body: 'A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions. Much of the interest in these unregulated currencies is to trade for profit, with speculators at times driving prices skyward. The most popular cryptocurrency, Bitcoin, has had volatile price moves this year, reaching nearly $65,000 in April before losing nearly half its value in May. In recent weeks, the price of bitcoin was back in the $45,000 range (You can check the current price to buy Bitcoin here.)',
	image: './images/illustration1.svg',
	layout: 'row',
	color: theme.colors.primaryText,
	backgroundColor: theme.colors.primary
};

export const sectionContents: IContent[] = [
	{
		id: 1,
		title: 'How many cryptocurrencies are there? What are they worth?',
		body: 'More than 10,000 different cryptocurrencies are traded publicly, according to CoinMarketCap.com, a market research website. And cryptocurrencies continue to proliferate, raising money through initial coin offerings, or ICOs. The total value of all cryptocurrencies on Aug. 18, 2021, was more than $1.9 trillion — down from April high of $2.2 trillion, according to CoinMarketCap. The total value of all bitcoins, the most popular digital currency, was pegged at about $849 billion, regaining some ground from recent price lows. Still, the market value of bitcoin is down from April high of $1.2 trillion.',
		image: './images/illustration3.svg',
		layout: 'row-reverse',
		color: theme.colors.primaryText,
		backgroundColor: theme.colors.light
	},
	{
		id: 2,
		title: 'Are cryptocurrencies a good investment?',
		body: 'Cryptocurrencies may go up in value, but many investors see them as mere speculations, not real investments. The reason? Just like real currencies, cryptocurrencies generate no cash flow, so for you to profit, someone has to pay more for the currency than you did.\n' +
			'\n' +
			'That’s what’s called “the greater fool” theory of investment. Contrast that to a well-managed business, which increases its value over time by growing the profitability and cash flow of the operation.',
		image: './images/illustration2.svg',
		layout: 'row',
		color: theme.colors.primaryText,
		backgroundColor: theme.colors.primary
	},
	{
		id: 3,
		title: 'How do I buy cryptocurrency?',
		body: 'While some cryptocurrencies, including Bitcoin, are available for purchase with U.S. dollars, others require that you pay with bitcoins or another cryptocurrency.\n' +
			'\n' +
			'To buy cryptocurrencies, you’ll need a “wallet,” an online app that can hold your currency. Generally, you create an account on an exchange, and then you can transfer real money to buy cryptocurrencies such as Bitcoin or Ethereum. Here\'s more on how to invest in Bitcoin.\n' +
			'\n' +
			'Coinbase is one popular cryptocurrency trading exchange where you can create both a wallet and buy and sell Bitcoin and other cryptocurrencies. Also, a growing number of online brokers offer cryptocurrencies, such as eToro, Tradestation and Sofi Active Investing. Robinhood offers free cryptocurrency trades (Robinhood Crypto is available in most, but not all, U.S. states).',
		image: './images/illustration4.svg',
		layout: 'row-reverse',
		color: theme.colors.primaryText,
		backgroundColor: theme.colors.light
	},
	{
		id: 4,
		title: 'Are cryptocurrencies legal?',
		body: 'There’s no question that they’re legal in the United States, though China has essentially banned their use, and ultimately whether they’re legal depends on each individual country. Also be sure to consider how to protect yourself from fraudsters who see cryptocurrencies as an opportunity to bilk investors. As always, buyer beware.',
		image: './images/illustration5.svg',
		layout: 'row',
		color: theme.colors.primaryText,
		backgroundColor: theme.colors.primary
	}
];