import React, {useState, useEffect} from 'react';
import urls from './urls'
import axios from 'axios'

function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
   console.log("hello",urls.BASE_API_URL)
    axios.get(urls.BASE_API_URL)
    .then(function(response){
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
