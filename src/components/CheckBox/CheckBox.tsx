import React from 'react';
// import { v4 as uuidv4 } from 'uuid';

interface CheckBoxProps {
    nameItem: string,
}

interface ListCheckBoxProps {
    listItem: CheckBoxProps[],
    nameList: string,
    // optionGroup : {},
    // setOptionGroup :  any;
}

export default function CheckBox({ listItem, nameList }: ListCheckBoxProps) {
    const handleChange = () => {
        // setOptionGroup({
        //     ...optionGroup,
        //     title : ''
        // })
    }
    // const { v4: uuidv4 } = require('uuid');
    return (
        <div className='checkbox_list'>
            {listItem.map((item) => {
                return (
                    <label htmlFor={item.nameItem} className="checkbox_item" key={item.nameItem}>
                        <input type="checkbox" name={nameList} id={item.nameItem} value={item.nameItem} onChange={handleChange} />
                        <span>{item.nameItem}</span>
                    </label>
                )
            })}
        </div>
    )
}
