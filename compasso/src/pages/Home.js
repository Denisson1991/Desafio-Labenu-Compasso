import React from 'react'
import axios from 'axios'
import CardPerfil from "./CardPerfil"
import { useEffect, useState } from "react";
import styled from 'styled-components'

const Header = styled.div`
border: 1px solid black;
padding: 10px;
text-align: center;
`

export default function Home () {
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [arrayUsuarios, setArrayUsuarios] = useState([])
  const [valorCard, setValorCard] = useState("nocard")

  const inputUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }

  const buscaUsuario = () => {       
    const url = `https://api.github.com/users/${inputNomeUsuario}`
      axios.get(url, 
          {headers: {
                Authorization: "6af07f86033707a4e1e4"
      }})
    .then((response) => {  
      setArrayUsuarios(response.data)
      setInputNomeUsuario("")
      setValorCard("card")
      
      })

    .catch((error) => {
      console.log(error.response);
      });
     
}

const renderizaPag = () => {
  switch (valorCard) {
    case "card":
      return <CardPerfil
      input={inputNomeUsuario}
      setArray={setArrayUsuarios}
      arrayUsuarios={arrayUsuarios}
      setInput={setInputNomeUsuario}/>
    case "nocard":
      return <p>sem card</p>;
    default:
      return <div></div>;
  }
};
    
  
  return (  
    <div>    
     <Header>
       
       <h1>Compasso Github</h1>
      <input placeholder="GitUser" onChange={inputUsuario} value={inputNomeUsuario}></input>
      <button onClick={buscaUsuario}>Buscar Usuário</button>

     </Header> 

    <div>{renderizaPag()}</div>
    

     
        
      
      

    </div>
  );
}
