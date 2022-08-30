import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

interface Item {
  nameItem : string,
  pathItem : string
}
interface ListItem  {
  dropdown : boolean,
  fields : Item[]
}
export default function HeaderMenuDropDown({ dropdown , fields} : ListItem) {
  
  return (
    <>
      <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {fields.map((submenu, index) => (
        <li key={index} className="menu-items">
          <NavLink to={submenu.pathItem}>{submenu.nameItem}</NavLink>
        </li>
      ))}
    </ul>
    </>
  )
}
