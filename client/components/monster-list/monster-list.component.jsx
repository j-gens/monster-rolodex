import React from 'react';
import MonsterListEntry from '../monster/monster.component.jsx';
import './monster-list.styles.css';

const MonsterList = (props) => (
  <div className="monster-list">
    {props.monsterList.map(monster =>
      <MonsterListEntry monster={monster} key={monster.id} />
    )}
  </div>
)

export default MonsterList;
