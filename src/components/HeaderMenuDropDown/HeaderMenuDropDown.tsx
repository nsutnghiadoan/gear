import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

interface Item {
  nameItem : string,
  pathItem : string
}
interface ListItem {
  fields : Item[]
}
export default function HeaderMenuDropDown({fields }: ListItem) {
  
  return (
    <>
      <ul>
      {fields.map((submenu, index) => (
        <li 
          key={index}
        >
          <NavLink to={submenu.pathItem}>{submenu.nameItem}</NavLink>
        </li>
      ))}
    </ul>
    </>
  )
}
