import React from 'react';


interface CheckBoxProps {
    nameItem : string,
}

interface ListCheckBoxProps {
    listItem : CheckBoxProps[],
    nameList : string
}

export default function CheckBox({listItem , nameList} : ListCheckBoxProps) {
  return (
    <div className='checkbox_list'>
        {listItem.map((item)=> {
            return(
                <label htmlFor={nameList} className="checkbox_item">
                    <input type="checkbox" name={nameList} id={item.nameItem} value={item.nameItem} />
                    <span>{item.nameItem}</span>
                </label>
            )
        })}
    </div>
  )
}
