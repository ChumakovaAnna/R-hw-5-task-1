import React from 'react';
import Card from "./components/Card";
import data from "./data";
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {data.map(item => 
        <Card key={item.id} {...item}>
          {item.img ? <img src={item.img} className="card-img-top" alt="pictures"></img> : null}
        </Card>)}
    </div>
  );
}

export default App;
