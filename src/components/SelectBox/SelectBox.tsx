import React, { useState } from "react";
import {RiArrowDownSFill} from 'react-icons/ri';

interface SelectBoxProps {
  listItem : {
    default : string,
    item : string[]
  }
}

function SelectBox( { listItem } : SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value : string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <div className="select_box">
      <div className="select_box_inner">
        <div className="select_box_checked" onClick={toggling}>
          {selectedOption || listItem.default} <RiArrowDownSFill />
        </div>
        {isOpen && (
          <div className="list_select">
            <ul>
              {listItem.item.map(option => (
                <li onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default SelectBox;