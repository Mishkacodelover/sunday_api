import React, { useEffect } from "react";

import {Container} from "@mui/material"
import Searcher from "./components/Searcher"
import UserCard from "./contenedores/userCard"
import {useState} from 'react'
import { getGitHubUser } from "./services/users";


const App = () => {

  const [inputUser,setInputUser]= useState('octocat');
  const [userState,setUserState]= useState('inputUser');
  console.log('inputUser',inputUser)
  const [notFound,setNotFound]= useState(false);

  const gettinUser = async(user)=>{
    const userResponse=  await getGitHubUser(user)
    console.log(userResponse)

    if(userState === 'octocat'){
      localStorage.setItem('octocat',userResponse)
    }
    if(userResponse.message == 'Not Found'){
      const {octocat} = localStorage;
      setInputUser(octocat)
      setNotFound(true)
    }else{
      setUserState(userResponse);
    }
  };
  console.log(userState)

  useEffect(()=>{
    gettinUser(inputUser)
  },[inputUser])

  return(
    <Container sx ={{
      background: "#efebe9",
      width:"80va",
      height:"500px",
      borderRadius:"16px",
      marginTop:"40px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser}/>
      <UserCard userState ={userState}/>
    </Container>
   
  )
};

export default App;