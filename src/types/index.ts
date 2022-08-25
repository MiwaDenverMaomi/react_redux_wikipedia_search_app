import { Action, } from 'redux';
import { KeywordState,KeywordAction } from './Keyword'
import { SearchResultState, SearchAction } from './SearchResult'
import { inputKeyword, searchKeyword } from '../actions';


export type RootState = {
  keyword:KeywordState,
  searchResult:SearchResultState
}
export type RootActions = KeywordAction & SearchAction;
