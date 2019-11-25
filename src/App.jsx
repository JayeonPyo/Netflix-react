import React from 'react';
import Main from './pages/Main';
import Tv from './pages/Tv';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Banner from './components/Banner';


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    background-color: black;
  }

  a{
    text-decoration: none;
    color:white;
  }
`;

const App = () => {
  return (
    <>
    <header>
      <GlobalStyle />
      <Router>
        <Route path="/" exact>
      
          <Main /> 
          </Route>
          <Route path="/tv" exact>
       
            <Tv />
          </Route>
          <Route path="/test">
            <div style={{color: "white"}}>test</div>
          </Route>
        
      </Router>
     </header>
    </>
  );
};

export default App;
