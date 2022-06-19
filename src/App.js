

import React from "react";
import Header from './Header/Header';
import './app-style.css';
import Main from './Main/Main';
import Data from './Data';

export default function App() {

  const main = Data.map(item => {
    return <Main 
              key={item.id}
              {...item}
            />
  })

  return (
    <div className="app">
      <Header />
      {main}
    </div>
  );
}

