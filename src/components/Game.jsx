import style from './css/style.css'
import { useState } from 'react';
import swal from 'sweetalert'

let position = ['', '', '', '', '', '', '', '', ''];

function Game() { 
   const vez = Math.floor(Math.random() * 2);;
   console.log(vez);
   let [count, setCont] = useState(vez);
   let [lock, setLock] = useState(false);

   function Win(turn) {
      console.log(position[0] + position[1] + position[2])
      if (
         (position[0] + position[1] + position[2]) == turn ||
         (position[3] + position[4] + position[5]) == turn ||
         (position[6] + position[7] + position[8]) == turn ||
         (position[0] + position[3] + position[6]) == turn ||
         (position[1] + position[4] + position[7]) == turn ||
         (position[2] + position[5] + position[8]) == turn ||
         (position[0] + position[4] + position[8]) == turn ||
         (position[2] + position[4] + position[6]) == turn
      ) {
         setLock(true)
         if (turn == 3) {
            swal('The winner is X');
         } else {
            swal('The winner is O');
         }
      }
   }

   const Play = (e, pos) => {
      if (lock) {
         return 0;
      } else {
         if (count%2 === 0) {
            if (position[pos] != "-1") {
               e.target.innerHTML = "X";
               position[pos] = 1;
               setCont(++count);
            }
         } else {
            if (position[pos] != "1") {
               e.target.innerHTML = "O";
               position[pos] = -1;
               setCont(++count);
            }
         }
      }
      Win(3)
      Win(-3)

      console.log(position);
   }

   const Reset = () => {
      return window.location.reload(true)
   }

   return (
      <>
         <div className="gameMap">
            <ul>
               <li>
                  <div onClick={ (e) => {Play(e, 0)} } ></div>
                  <div onClick={ (e) => {Play(e, 1)} } ></div>
                  <div onClick={ (e) => {Play(e, 2)} } ></div>
               </li>
               <li>
                  <div onClick={ (e) => {Play(e, 3)} } ></div>
                  <div onClick={ (e) => {Play(e, 4)} } ></div>
                  <div onClick={ (e) => {Play(e, 5)} } ></div>
               </li>
               <li>
                  <div onClick={ (e) => {Play(e, 6)} } ></div>
                  <div onClick={ (e) => {Play(e, 7)} } ></div>
                  <div onClick={ (e) => {Play(e, 8)} } ></div>
               </li>
            </ul>

            <button onClick={Reset} className='reset' >Reset</button>
         </div>
      </>
   );
}


export default Game;