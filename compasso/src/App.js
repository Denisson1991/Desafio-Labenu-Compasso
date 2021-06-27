import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardPerfil from "./pages/CardPerfil";
import Starred from "./pages/Starred";
import Home from "./pages/Home";
import Repos from "./pages/Repos";
import styled from 'styled-components'

const Header = styled.div`
border: 1px solid black;
padding: 10px;
text-align: center;

`


 function App() {

  return(

    <BrowserRouter>
    
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>            

            <Route exact path="/repositorios/:name">
                <Repos/>
            </Route>

            <Route exact path="/starred/:nome">
                <Starred/>
            </Route>

            <Route>
                <div>deu erro</div>
            </Route>


          </Switch>
        
     </BrowserRouter>
  )
}

export default App;

