import React,{useEffect, useState} from 'react';
import '../App.css';

function Game() {
    const [tablero,setTablero]=useState(0);
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

    
const fnTablero=()=>{
  const uno = dado1Boolean ? dado1:0;
  const dos = dado2Boolean ? dado2:0;
  const tres = dado3Boolean ? dado3:0;
  const cuatro = dado4Boolean ? dado4:0;
  const cinco = dado5Boolean ? dado5:0;

  const sumaTotal = uno + dos + tres + cuatro + cinco;
  setTablero(sumaTotal);
}

  
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
      fnTablero();
  }


    return (
      <div >
          <div>
            <h1>GENERALA</h1>
            <h2>puntos acumulados : {tablero}</h2>
              <p>
                {dado1}<input id="d1" type="checkbox" value={dado1Boolean} onChange={booleanDado1} />
              {dado2}<input type="checkbox"  onChange={booleanDado2} />
              {dado3}<input type="checkbox" value={dado3Boolean} onChange={booleanDado3} />
              {dado4}<input type="checkbox" value={dado4Boolean} onChange={booleanDado4} />
              {dado5}<input type="checkbox" value={dado5Boolean} onChange={booleanDado5} />
              </p>
              <button onClick={cubilete}>tirar</button>
              <div>
                <h2>Uno</h2><input type="text"  onChange={booleanDado5} />
                <h2>Dos</h2><input type="text"  onChange={booleanDado5} />
                <h2>Tres</h2><input type="text"  onChange={booleanDado5} />
                <h2>Cuatro</h2><input type="text"  onChange={booleanDado5} />
                <h2>Cinco</h2><input type="text"  onChange={booleanDado5} />
                <h2>Escalera</h2><input type="text"  onChange={booleanDado5} />
                <h2>Par</h2><input type="CheckBox"  onChange={booleanDado5} />
                <h2>Full</h2><input type="CheckBox" onChange={booleanDado5} />
                <h2>Pocker</h2><input type="CheckBox"  onChange={booleanDado5} />
                <h2>Generala</h2><input type="CheckBox" onChange={booleanDado5} />
                <h2>Generala Doble</h2><input type="CheckBox"  onChange={booleanDado5} />
                
              </div>
              
             
              

          </div>
      
      </div>
    );
  }
  
  export default Game;
