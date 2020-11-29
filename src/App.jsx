import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MyTap from './components/MyTap';

function App() {
  const myArr = ["Tap 1", "Tap 2", "Tap 3", "Tap 4"];
  const [currentTap, setCurrentTap] = useState(myArr[0]);
  const onClickHandler = (value) => {
    setCurrentTap(value)
  }
  return (
    <div className="container">
      <div className="row mt-5 p-3 bg-dark rounded">{
        myArr.map((item,i) =>
          <div className="col-3 text-center" key={i}><button className="btn btn-outline-light" onClick={() => onClickHandler(item)}>{item}</button></div>
        )
      }</div>
      <div className="row mt-5 justify-content-center">
        <MyTap currentTap={currentTap}/>
      </div>
    </div>
  );
}

export default App;
