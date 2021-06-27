import React, { useEffect, useState } from "react"
import axios from "axios"
import { Home } from "@material-ui/icons"
import { useParams } from "react-router-dom"
import useRequestData from "../hooks/useRequestData"

export default function Repos () {
  const params = useParams()
  
  const pegarRepos = useRequestData(`https://api.github.com/users/${params.name}/repos`)

  

  console.log(pegarRepos)    
    return(
        
        <div> 
        repositorios
        
        </div>
        
    )
}  