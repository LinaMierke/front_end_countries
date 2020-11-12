import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useState } from 'react';




function handleSubmit(nameText, capitalText, regionText,populationText) {
  // console.log(nameText, capitalText, regionText,populationText)
  fetch("https://linacountries.herokuapp.com", {
    
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: nameText,
      capital: capitalText,
      region: regionText,
      population: populationText
  })
  })
    .then(res => res.text())
    .then(res => console.log(res))
  
}


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  console.log(props)
  const classes = useStyles();


  const [nameText, setNameText] = useState("")
  const [capitalText, setCapitalText] = useState("")
  const [regionText, setRegionText] = useState(" ")
  const [populationText, setPopulationText] = useState("")
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField onChange={(e) => {
          console.log(e.target)
          setNameText(e.target.value)
        }} id="outlined-basic" label="Country" variant="outlined" />
        <TextField onChange={(e) => {
          console.log(e.target)
          setCapitalText(e.target.value)
        }} id="outlined-basic" label="Capital" variant="outlined" />
        <TextField onChange={(e) => {
          console.log(e.target)
          setRegionText(e.target.value)
        }} id="outlined-basic" label="Region" variant="outlined" />
        <TextField onChange={(e) => {
          console.log(e.target)
          setPopulationText(e.target.value)
        }} id="outlined-basic" label="Population" variant="outlined" />
      </form>

      <Button onClick={() => props.handleExit()} style={{ border: "1px solid #186BB9" }} > Exit </Button>
      <Button onClick={ handleSubmit.bind(null, nameText, capitalText,regionText,populationText)} style={{ border: "1px solid #186BB9" }} > Submit </Button>
    </div>
  );
}

//onClick= {handleSubmit.bind(null,setNameText)}