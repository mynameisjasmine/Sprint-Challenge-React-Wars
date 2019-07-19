import React, { useState, useEffect }  from 'react';
import axios from "axios";
import './App.css';


function App() {
  const [yavin, setYavin] = useState({});
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
   axios
   .get(`https://swapi.co/api/planets/3/`)
   .then(response => {
     console.log("response data:", response.data)
     setYavin(response.data)
   })
   .catch(err => console.log(err));
}, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}


export default App;
