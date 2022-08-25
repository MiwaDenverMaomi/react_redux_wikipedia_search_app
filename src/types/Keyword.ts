import { Action } from 'redux';

export type Keyword = string;

export type InputKeywordPayload = Keyword

export interface InputKeywordAction extends Action {
    type: string,
    payload:InputKeywordPayload
}


export type KeywordAction = InputKeywordAction

export type KeywordState = Keyword;
