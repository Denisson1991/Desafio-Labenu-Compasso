import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';


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
`



export default function CardPerfil (props){
  

 
    

    const history = useHistory()
    const goToRepos = (name) => {
      history.push(`/repositorios/${name}`)
    }

      

    return(
      <div>
        <CardContainer key={props.arrayUsuarios.id}>
          <CardImagem src={props.arrayUsuarios.avatar_url}></CardImagem>
          <CardFooter>
            <Legends><h2>{props.arrayUsuarios.name}</h2></Legends>            
            <Button variant="contained" color="primary" component="span" 
            onClick={() => goToRepos(props.arrayUsuarios.name)} key={props.arrayUsuarios.name}>Repos</Button>
            <Button variant="contained" color="primary" component="span" key={props.arrayUsuarios.id}>Starred</Button>
          </CardFooter>          
        </CardContainer>
        
      
        

      
            
     </div>        
        
    )
}