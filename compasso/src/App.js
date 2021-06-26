import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [usuario, setUsuario] = useState([])

  const api = {
    base: "https://api.github.com",
    clientId: "6af07f86033707a4e1e4",
    clientSecret: "50c25f5692fc8009c6d063e47995a79725938ac2"
  }

  const inputUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }
  

  useEffect(() => {    
    const url = `${api.base}/users/mojombo`
    axios.get(url)
    .then((response) => {
      console.log(response.data)
      setUsuario(response.data)
     
    })
    .catch((error) => {
      console.log(error.response);
    });
  }, [])

  const onclickRepos = () => {
    const url = `${api.base}/users`
    console.log(url)
    axios.get(url)
    .then((response) => {
      console.log(response.data)
      setUsuario(response.data)
      
     
    })
    .catch((error) => {
      console.log(error.response);
    });
  }
  
  return (

    
    <div>
      
      <h1>Compasso Github</h1>
      <form>
        <input placeholder="GitUser" onChange={inputUsuario} value={inputNomeUsuario}></input>
        <button onClick={onclickRepos}>Procurar Repos</button>
      </form>
      {/* <div>{usuario.map((elemento) =>{
        return <p>{elemento.login}</p>
      })}</div> */}
      <p>{usuario.login}</p>
    </div>
  );
}

export default App;
