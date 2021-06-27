import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Starred from "./pages/Starred";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Repos from "./pages/Repos";





 function App() {

  return(

    <BrowserRouter>
    
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>   

            <Route exact path="/perfil/:name">
                <Perfil/>
            </Route>            

            <Route exact path="/repositorios/:name">
                <Repos/>
            </Route>

            <Route exact path="/starred/:name">
                <Starred/>
            </Route>

            <Route>
                <div><iframe src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
            </Route>


          </Switch>
        
     </BrowserRouter>
  )
}

export default App;

