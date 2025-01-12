import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const addActiveTransactions = createAction(
  Actions.ADD_ACTIVE_TRANSACTIONS
);
export const addAssets = createAction(Actions.ADD_ASSETS);
export const appendOrderbook = createAction(Actions.APPEND_ORDERBOOK);
export const addTransactions = createAction(Actions.ADD_TRANSACTIONS);
export const finishedFirstLoad = createAction(Actions.FINISHED_FIRST_LOAD);
export const notProcessing = createAction(Actions.NOT_PROCESSING);
export const processing = createAction(Actions.PROCESSING);
export const removeActiveTransactions = createAction(
  Actions.REMOVE_ACTIVE_TRANSACTIONS
);
export const setAllowances = createAction(Actions.SET_ALLOWANCES);
export const setBalances = createAction(Actions.SET_BALANCES);
export const setBitskiCredentials = createAction(
  Actions.SET_BITSKI_CREDENTIALS
);
export const setError = createAction(Actions.SET_ERROR);
export const setForexCurrency = createAction(Actions.SET_FOREX_CURRENCY);
export const setGasLevel = createAction(Actions.SET_GAS_LEVEL);
export const setGasLimit = createAction(Actions.SET_GAS_LIMIT);
export const setGasPrice = createAction(Actions.SET_GAS_PRICE);
export const setGasStation = createAction(Actions.SET_GAS_STATION);
export const setNetwork = createAction(Actions.SET_NETWORK);
export const setOrderbook = createAction(Actions.SET_ORDERBOOK);
export const setOrders = createAction(Actions.SET_ORDERS);
export const setProducts = createAction(Actions.SET_PRODUCTS);
export const setQuote = createAction(Actions.SET_QUOTE);
export const setUser = createAction(Actions.SET_USER);
export const setWalletAddress = createAction(Actions.SET_WALLET_ADDRESS);
export const setTransactionHash = createAction(Actions.SET_TRANSACTION_HASH);
export const toggleShowForex = createAction(Actions.TOGGLE_SHOW_FOREX);
export const updateForexTicker = createAction(Actions.UPDATE_FOREX_TICKER);
export const updateTokenTicker = createAction(Actions.UPDATE_TOKEN_TICKER);
