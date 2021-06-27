import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

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
font-family: Roboto;
background: #2C5364;
`

const CardRepos = styled.div`
border: 1px solid black;
text-align: center;
height: 450px;
width: 300px;
margin-left: 560px;
margin-top: 30px;
padding: 8px;
display: flex;
flex-direction: column;
justify-content: space-around;
font-family: Roboto;
background: #2C5364;
overflow:auto;
`

const Lista = styled.ul`
font-family: Roboto;
overflow:auto;
`

export default function Repos () {
  const params = useParams()
  const [pegarRepos, setPegarRepos] = useState([])

  useEffect(() => {

    axios
    .get(`https://api.github.com/users/${params.name}/repos`, 
            {headers: {
              Authorization: "6af07f86033707a4e1e4"
              }})

    .then((res) => {setPegarRepos(res.data)})
    .catch((err) => {console.log(err)})

}, [])

const history = useHistory()
    
  
    
const goToBack = () => {
  history.goBack()
}

  

      
const repositorios = pegarRepos.map((repo) => {
  return <li>{repo.name}</li>
  })

    return(
        
      <Raiz> 

        <Header>       
          <h1>Compasso Github</h1>
          <Button onClick={goToBack} variant="contained" color="default" component="span"><ArrowBackIcon/>Voltar</Button>
        </Header>

        <CardRepos>
          <h2>Repositórios</h2>
          <Lista>
            {repositorios}
          </Lista>
        </CardRepos>

      </Raiz>
        
    )
}  