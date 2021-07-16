import React,{useEffect, useState} from 'react';
import '../App.css';
import dado from "../dado.gif";

function Game() {
    
    const [dado1,setTdado1]=useState(0);
    const [dado2,setTdado2]=useState(0);
    const [dado3,setTdado3]=useState(0);
    const [dado4,setTdado4]=useState(0);
    const [dado5,setTdado5]=useState(0);
    const [dado1Boolean,setDado1Boolean]=useState(false);
    const [dado2Boolean,setDado2Boolean]=useState(false);
    const [dado3Boolean,setDado3Boolean]=useState(false);
    const [dado4Boolean,setDado4Boolean]=useState(false);
    const [dado5Boolean,setDado5Boolean]=useState(false);
    
    


    const booleanDado1 = (event)=> {
        setDado1Boolean(!dado1Boolean );
       
        };

    const booleanDado2 = (event)=> {
        setDado2Boolean(!dado2Boolean );
       
        };
    const booleanDado3 = (event)=> {
        setDado3Boolean(!dado3Boolean );
      
        };

    const booleanDado4 = (event)=> {
        setDado4Boolean(!dado4Boolean );
       
        };

    const booleanDado5 = (event)=> {
        setDado5Boolean(!dado5Boolean );
       
        };

    


  
    function getNumero() {
    return Math.floor(Math.random() * (6 - 1)) + 1;


  }

  const tirar1=()=>{
    if(!dado1Boolean){
      setTdado1(getNumero());
    }
  }
  const tirar2=()=>{
    if(!dado2Boolean){
      setTdado2(getNumero());
    }
  }
  const tirar3=()=>{
    if(!dado3Boolean){
      setTdado3(getNumero());
    }
  }
  const tirar4=()=>{
    if(!dado4Boolean){
      setTdado4(getNumero());
    }
  }
  const tirar5=()=>{
    if(!dado5Boolean){
      setTdado5(getNumero());
    }
  }




  const cubilete =()=>{
      tirar1()
      tirar2();
      tirar3();
      tirar4();
      tirar5();
  }


    return (
      <div >
          <div>
              <p>
              {dado1}<input id="d1" type="checkbox" value={dado1Boolean} onChange={booleanDado1} />            
              {dado2}<input type="checkbox"  onChange={booleanDado2} />
              {dado3}<input type="checkbox" value={dado3Boolean} onChange={booleanDado3} />
              {dado4}<input type="checkbox" value={dado4Boolean} onChange={booleanDado4} />
              {dado5}<input type="checkbox" value={dado5Boolean} onChange={booleanDado5} />
              </p>
              <button className="button" onClick={cubilete}>tirar</button>
              <p> 1 <input type="text"/>
              <p></p>2 <input type="text"class="form-control"/>
              <p></p>3 <input type="text"/>
              <p></p>4 <input type="text"/>
              <p></p>5 <input type="text"/>
              <p></p>6 <input type="text"/></p>
             
              

          </div>
      
      </div>
    );
  }
  
  export default Game;
