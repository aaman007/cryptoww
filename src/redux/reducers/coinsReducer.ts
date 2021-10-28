import { ICoin } from "../../interfaces/coin";
import * as types from "../../constants/types";

interface IState {
	coins: ICoin[];
}

interface IAction {
	type: string;
	payload: ICoin | ICoin[];
}

const INITIAL_COINS: IState = {
	coins: []
}

const coinsReducer = (state: IState = INITIAL_COINS, action: IAction): IState => {
	switch (action.type) {
		case types.FETCH_COINS:
			return { ...state };
		case types.FETCH_COIN:
			return { ...state }
		default:
			return state;
	}
}

export default coinsReducer;