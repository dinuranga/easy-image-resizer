import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/resizeImage")
      .then(res => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log("Fetched data:", data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h1>{data["message"]}</h1>
    </div>
  );
}

export default App;
