import React from "react";
import { Stack, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'

const Searcher = (props) => {
  const{setInputUser} = props;

 

    const [valueInput,setValueInput]= useState('');

    const onSearchValueChange = (event) =>{
        const inputValue = event.target.value;
        setValueInput(inputValue);
    }
    console.log(valueInput,'valueInput');

    const handleSubmit = ()=>{
        setInputUser(valueInput);
     
    }

  return (
    <Stack 
    direction='row'
    sx = {{
       marginTop:"30px",
        width:"80%",

    }}
    >
      <TextField
      id="outlined-basic"
       label="GitHub User"
       placeholder="Buscar usuario"
        variant="outlined"
        size ="small"
        value={valueInput}
        onChange={onSearchValueChange}
       sx={{
        width:'90%'
      }}></TextField>
      <IconButton
      onClick={handleSubmit}
      size="small"
       sx ={{
        left: '-45px'
      }}>
      <SearchIcon/>
      </IconButton>
    </Stack>
  );
};

export default Searcher;
