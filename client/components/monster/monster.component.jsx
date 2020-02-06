import React from 'react';
import './monster.styles.css';

const MonsterListEntry = (props) => (
  <div className="monster-bin">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} />
    <div className="monster-name">
      Name: {props.monster.name}
    </div>
    <div>
      Username: {props.monster.username}
    </div>
    <div>
      Email: {props.monster.email}
    </div>
  </div>
)

export default MonsterListEntry;
