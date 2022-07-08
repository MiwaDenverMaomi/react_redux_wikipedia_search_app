import { inputKeyword,searchKeyword } from '../actions'
import { RootActions } from '../types';

const initialState = null;
const resultReducer = (state=initialState, action: RootActions) => {
  switch (action.type) {
    case 'SEARCH_KEYWORD':
      if (action.payload === undefined) {
        console.log('undefined');
        return 'Sorry, we failed to get data...'
      } else if (action.payload.status >= 200 && action.payload.status < 300) {
        console.log('通信成功');
        return action.payload.data;
      } else {
        console.log('other');
        return 'Sorry, we failed to get data...'
       }
    default:
      return state
  }
};

export default resultReducer
