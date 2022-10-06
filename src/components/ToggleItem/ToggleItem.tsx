import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckBox from '../CheckBox';
import { Dispatch } from 'react';


interface titleToggle {
    nameItem : string,
}


interface listToggleProps {
    title : string,
    listItem : React.ReactNode,
    // optionGroup : Object
}

export default function ToggleItem({title, listItem } : listToggleProps) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    
    return (
        <List>
            <ListItemButton className='title_toggle' onClick={handleClick}>
                {title}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {listItem}
            </Collapse>
        </List>
    )
}
