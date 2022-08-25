import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type SearchResult = any;

export type SearchResultPayload =SearchResult;


export interface SearchResultAction extends Action {
  type: string,
  payload:SearchResultPayload
}

export type SearchAction = any;

export type SearchResultState = SearchResult;
