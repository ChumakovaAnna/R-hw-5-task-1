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
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
            <a href={item.link} className="btn btn-primary">Go somewhere</a>
          </div>
        </Card>)}
    </div>
  );
}

export default App;
