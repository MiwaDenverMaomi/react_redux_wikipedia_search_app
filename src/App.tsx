import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Board from './components/Board';
import InputArea from './components/InputArea';
import './App.css';


function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="lg">
          <Header />
          <Board />
          <InputArea />
        </Container>
      </div>
    </>
  );
}

export default App;
