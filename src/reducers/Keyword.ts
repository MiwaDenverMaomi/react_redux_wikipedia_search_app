import { inputKeyword,searchKeyword } from '../actions'
import { RootActions } from '../types';

const initialState = '';
export const keywordReducer = (state = initialState, action: RootActions) => {
  switch (action.type) {
    case 'INPUT_KEYWORD':
      if (action.payload !== '') {
        return action.payload;
      } else {
        return ''
      }
      break;
    default:
      return state
  }
};

export default keywordReducer;
