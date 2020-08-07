import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get("http://0.0.0.0:8080/")
    .then(function(response){
      console.log("running")
      console.log(response.data);
      setTitle(response.data);
    })
    .catch(function(err){
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <h1>Hi</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
