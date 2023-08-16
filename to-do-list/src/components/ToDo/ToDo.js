import React from 'react'
import ToDoForm from './ToDoForm'
import { useState } from 'react';
import Completed from '../Completed/Completed';

function ToDo(prop) {
  prop.setLog(true);
  const [array, setArray] = useState([]);
  const [score, setScore] = useState(0);
  return (
    <div>
    <div id='todopanel'>
    <div>
        <ToDoForm array={array} setArray={setArray}/>
    </div>
    <button id='completed' onClick={function() {
      document.getElementById('todopanel').style.display = 'none';
      document.getElementById('completedpanel').style.display = 'inline-block';
        }}>Completed Quests</button>
    </div>
    <div id='completedpanel'>
      <div>
      <Completed array={array} setArray={setArray}/>
      </div>
      <button id='turnin' onClick={function() {
        let x = score;
        for (let i = 0; i < array.length; i ++) {
          if(!array[i][1]) {
            x += array[i][2];
          }
        }
        setScore(x);
        setArray(array.filter(function(item) {
          return item[1];
        }))
      }}>Turn In Quests</button>
      <button id='goback' onClick={function() {
        document.getElementById('todopanel').style.display = 'inline-block';
        document.getElementById('completedpanel').style.display = 'none';
      }}>Go Back</button>
    </div>
    <h5><em>You are a level {Math.floor(score/100) + 1} adventurer, {100- score%100} XP until next level.</em></h5>
    </div>
  )
}

export default ToDo;