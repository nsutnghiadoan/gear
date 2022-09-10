import React from 'react';

interface ButtonType {
    size : string,
    bg : boolean,
    title : string,

}
function ButtonOutline({size, bg, title} : ButtonType) {
  return (
    <button 
        className={`btn ${size=="lg" ? "lg" : "md" } ${bg ? "red" : "white"}`}
      >
        {title}
    </button>
  )
}

export default ButtonOutline