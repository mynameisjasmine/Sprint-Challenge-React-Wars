import React, { useState, useEffect }  from 'react';
import axios from "axios";
import './App.css';
import Header from "./Header.js";
import Card from "./Card.js"

function App() {
  const [people, setPeople] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
   axios
   .get(`https://henry-mock-swapi.herokuapp.com/api`)
   .then(response => {
     console.log("response data:", response.data);
     setPeople(response.data.results);
   })
   .catch(err => console.log(err));
}, [])
console.log("people:", people);

 if(!people) {
  return <h1>Loading..</h1>
 }else{

  return (
    <div className="App">
    <h1 className="Header">React Wars</h1>
    <Header link={people.url} />
    {people.map(person => <Card value={person} />)}
      
      
    
    </div>
  );
 }
  
 
 
}


export default App;
