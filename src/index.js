import React from 'react';
import ReactDOM from 'react-dom/client';



// numbers array
const numArray = [10, 20, 30, 40, 50];

function Numbers(props){
  return(
      <h2>{props.numbers.join(', ')}</h2>
  );
}







var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Numbers numbers={numArray}/>);
