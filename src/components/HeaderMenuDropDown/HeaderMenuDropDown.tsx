import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

interface Item {
  nameItem : string,
  pathItem : string
}
interface ListItem  {
  dropdown : boolean,
  fields : Item[],
  setDrop : (active: boolean) => void;
}
export default function HeaderMenuDropDown({setDrop, dropdown , fields} : ListItem) {
  
  return (
    <>
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {fields.map((submenu, index) => (
        <li 
          key={index}
          className="menu-items"
          onClick={()=> {
            setDrop(false);
          }}>
          <NavLink to={submenu.pathItem}>{submenu.nameItem}</NavLink>
        </li>
      ))}
    </ul>
    </>
  )
}
