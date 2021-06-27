import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const Raiz = styled.div`
background: #203A43;
margin: 0px;
padding: 0px;
height: 97vh;
width: 100vw;
color: white;
font-family: Roboto;
`

const Header = styled.div`
border: 1px solid black;
padding: 10px;
text-align: center;
background: #2C5364;
`

const CardContainer = styled.div`
border: 1px solid black;
text-align: center;
height: 450px;
width: 300px;
margin-left: 560px;
margin-top: 30px;
padding: 8px;
display: inline-block;
position: relative;
font-family: Roboto;
background: #2C5364;
`
const CardImagem = styled.img`
height: 90%;
width: 100%;

`
const Legends = styled.div`
position: absolute;
bottom: 25px;
left: 10px;
font-size: 20px;
color: white;
text-shadow: 0px 0px 5px black;
`
const CardFooter = styled.div`
display: flex;
justify-content: space-around;
margin-top: 5px;
`


export default function Perfil () {
  const params = useParams()
  const history = useHistory()
  const [pegarPerfil, setPegarPerfil] = useState([])

  useEffect(() => {

    axios
    .get(`https://api.github.com/users/${params.name}`, 
            {headers: {
              Authorization: "6af07f86033707a4e1e4"
              }})

    .then((res) => {setPegarPerfil(res.data)})
    .catch((err) => {console.log(err)})

}, [])


const goToRepos = (name) => {
  history.push(`/repositorios/${name}`)
}

const goToStarred = (name) => {
  history.push(`/starred/${name}`)
}

const goToHome = () => {
  history.push("/")
}

return(
    <Raiz>

      <Header>       
        <h1>Compasso Github</h1>
        <Button variant="contained" color="default" component="span" onClick={goToHome} ><HomeIcon fontSize="large"/>Home</Button>
      </Header> 

      <CardContainer key={pegarPerfil.id}>
        <CardImagem src={pegarPerfil.avatar_url}></CardImagem>
        <CardFooter>
          <Legends><h2>{pegarPerfil.name}</h2></Legends>    

          <Button variant="contained" color="default" component="span" 
          onClick={() => goToRepos(pegarPerfil.login)} key={pegarPerfil.login}>Repos</Button>

          <Button variant="contained" color="default" component="span"
          onClick={() => goToStarred(pegarPerfil.login)} key={pegarPerfil.login}>Starred</Button>
        </CardFooter>          
      </CardContainer>
              
   </Raiz>        
      
  )
}