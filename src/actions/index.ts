import React from 'react';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Keyword } from '../types/Keyword'
import { SearchResult } from '../types/SearchResult'
import { RootState, RootActions } from '../types'
import { wikipedia } from '../api/wikipedia';
import store from '../store';
import axios from 'axios';


export const inputKeyword = (keyword: string) => {
  return {
    type: 'INPUT_KEYWORD',
    payload:keyword
  }
};

export const searchKeyword = (): ThunkAction<void, RootState, undefined, RootActions> => async (dispatch: Dispatch) => {
  const result = await wikipedia.get(`${store.getState().keyword}`).then(res => res).catch(err => {
    if (axios.isAxiosError(err)) {
      console.log('axiosError');
    }
    return err.response.data
  });
  console.log(result);
  dispatch({ type: 'SEARCH_KEYWORD', payload:result });
};


// export const fetchPosts = (): ThunkAction<void, RootState, undefined, RootActions> =>//引数：RSEA
//   async (dispatch: Dispatch) => {
//     console.log('actions fetchPosts 2');
//     const response: Post[] = await jsonPlaceholder.get('/posts').then(res => res.data);
//     dispatch({ type: 'FETCH_POSTS', payload: response });//payload:{posts:response}ではない！
//   }
