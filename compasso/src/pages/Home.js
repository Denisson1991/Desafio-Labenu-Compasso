import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components'
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useHistory } from 'react-router-dom';
import ForwardIcon from '@material-ui/icons/Forward';
import Button from '@material-ui/core/Button';



const Header = styled.div`
border: 1px solid black;
padding: 10px;
text-align: center;
background: #2C5364;
`
const InputBorder = styled.div`
border: 1px solid black;
width: 200px;
border-radius: 5px;
margin-right: 5px;
`
const Busca = styled.div`
display: flex;
justify-content: center;
`
const Raiz = styled.div`
background: #203A43;
margin: 0px;
padding: 0px;
height: 97vh;
width: 100vw;
color: white;
font-family: Roboto;
`
const ImagemGit = styled.div`
border: 1px solid black;
text-align: center;
height: 450px;
width: 300px;
margin-left: 560px;
margin-top: 30px;
padding: 8px;
display: inline-block;
position: relative;
background: #2C5364;
`


export default function Home () {
  const history = useHistory()
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  
  const inputUsuario = (event) => {
    setInputNomeUsuario(event.target.value)
  }



    const goToPerfil = (name) => {
      history.push(`/perfil/${name}`)
    }
    
  
  return (  
    <Raiz>   

     <Header>       
      <h1>Compasso Github</h1>
      <Busca>
        <InputBorder>
          <InputBase
          placeholder={'GitUsuário'}
          startAdornment={<Search />}
          onChange={inputUsuario} 
          value={inputNomeUsuario}
          />
        </InputBorder>
        <Button variant="contained" color="default" component="span" onClick={() => goToPerfil(inputNomeUsuario)} >Buscar<ForwardIcon/></Button>
      </Busca>
     </Header> 

     <ImagemGit >
        <ArrowUpwardIcon size="large"/>
        <h2>Faça aqui a sua pesquisa</h2>
        <iframe src="https://giphy.com/embed/du3J3cXyzhj75IOgvA" ></iframe>
      </ImagemGit>

    

    </Raiz>
  );
}
