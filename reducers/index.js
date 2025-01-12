import { reducer as network } from 'react-native-offline';
import { combineReducers } from 'redux';
import bitski from './bitski';
import device from './device';
import error from './error';
import quote from './quote';
import relayer from './relayer';
import settings from './settings';
import ticker from './ticker';
import wallet from './wallet';

export default combineReducers({
  bitski,
  device,
  error,
  quote,
  network,
  relayer,
  settings,
  ticker,
  wallet
});
