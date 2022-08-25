import React from 'react'
import { Dispatch, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { connect, } from 'react-redux';
import { Container, Box, InputBase,Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { inputKeyword, searchKeyword } from '../actions';
import { RootActions, RootState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      width: '100%',
      height: 100,
      backgroundColor: 'grey',
      position: 'fixed',
      left: 0,
      bottom:0
    },
    buttonSearch: {
      marginLeft: 5,
      backgroundColor:'white'
    },
    inputRoot: {
      color: 'inherit',
      backgroundColor: 'white',
      borderRadius: '3px',
      marginTop:30
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 1),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const InputArea = ({keyword,inputKeyword,searchKeyword}:Props)=> {
  const classes = useStyles();
  console.log('inputArea');
  return (
    <Box className={classes.box}>
    <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={keyword}
        onChange={e => inputKeyword(e.target.value)}
      />
      <Button className={classes.buttonSearch} onClick={searchKeyword}>Search</Button>
    </Box>
  )
}

type DispatchToProps= {
  inputKeyword: any,
  searchKeyword:any
};
type StateToProps = {
  keyword: string,
  searchResult:any
};

type Props = StateToProps&DispatchToProps;
type AppDispatch =  Dispatch<RootActions>
type AppThunkDispatch = ThunkDispatch<RootActions, undefined, RootActions>

const mapDispatchToProps = (dispatch:AppDispatch&AppThunkDispatch) => {
  return {
    inputKeyword: (keyword: string) => dispatch(inputKeyword(keyword)),
    searchKeyword:()=>dispatch(searchKeyword())
  }
};

const mapStateToProps = (state: any) => {
  return {
    keyword: state.keyword,
    searchResult:state.searchResult
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(InputArea)
