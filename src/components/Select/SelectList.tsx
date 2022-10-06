import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface Item {
  nameItem: string
}

interface SelectListProps {
  defaultValue: string,
  // optionGroup : Object,
  listItem: string[],
  // setOptionGroup :  any;
}

export default function SelectList({ defaultValue, listItem }: SelectListProps) {
  const handleChange = (e : SelectChangeEvent ) => {
  //   setOptionGroup({
  //     ...optionGroup,
  //     defaultValue : e.target.value
  // })
  }
  const { v4: uuidv4 } = require('uuid');

  return (
    <FormControl fullWidth>
      <InputLabel id={defaultValue}>{defaultValue}</InputLabel>
      <Select
        labelId={defaultValue}
        label={defaultValue}
        onChange={handleChange}
      >
        {listItem.map((item) => {
          return (<MenuItem value={item} key={uuidv4()}>{item}</MenuItem>)
        })}
      </Select>
    </FormControl>
  )
}
