import React from 'react';

const List = (props)=>{
  return (
    <li>
     {props.name} : {props.time}
    </li>
  )
}

export default List; 
