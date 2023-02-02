import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { List } from 'semantic-ui-react';
function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
      .then(res => {
        console.log(res.data)
        setData(res.data)
    })
    
    
  }, [])
  console.log("abcxyz")

  return (
    <div className="App">
      <List>
    
      {
        data && data.length > 0 && data.map((d: any )=> (
      <List.Item>
          {d.title}
          </List.Item>
        ))
      }
  </List>
      
    </div>
  );
}

export default App;
