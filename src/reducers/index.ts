import { combineReducers } from 'redux';
import keywordReducer from './Keyword';
import ResultReducer from './Result';

const reducers = combineReducers(
  {
    keyword: keywordReducer,
    searchResult: ResultReducer
  }
);

export default reducers;
