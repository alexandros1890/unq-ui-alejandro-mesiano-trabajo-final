import React,{useState} from 'react';
import '../App.css';

function Game() {
    
    const [dado1,setTdado1]=useState(0);
    const [dado2,setTdado2]=useState(0);
    const [dado3,setTdado3]=useState(0);
    const [dado4,setTdado4]=useState(0);
    const [dado5,setTdado5]=useState(0);
    const [dado1Boolean,setDado1Boolean]=useState(false);
    
    const booleanDado1 = (event)=> {
        // setDado1Boolean( document.getElementById("d1").value);
        // setDado1Boolean( event.target.value);
        alert(dado1Boolean)
        };
    function getNumero() {
    return Math.floor(Math.random() * (6 - 1)) + 1;


  }

  const cubilete =()=>{
      setTdado1(getNumero());
      setTdado2(getNumero());
      setTdado3(getNumero());
      setTdado4(getNumero());
      setTdado5(getNumero());
  }


    return (
      <div >
          <div>
              <p>{dado1}<input id="d1" type="checkbox" value={dado1Boolean} onChange={booleanDado1} required/>{dado2}<input type="checkbox"/>{dado3}<input type="checkbox"/>{dado4}<input type="checkbox"/>{dado5}<input type="checkbox"/></p>
              <button onClick={cubilete}>tirar</button>
              
              

          </div>
      
      </div>
    );
  }
  
  export default Game;
