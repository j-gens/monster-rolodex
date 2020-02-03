import React from 'react';
import './monster.styles.css';

const MonsterListEntry = (props) => (
  <div className="monster-bin">
    {props.monster.name}
  </div>
)

export default MonsterListEntry;
