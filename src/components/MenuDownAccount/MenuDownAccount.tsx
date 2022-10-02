import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { route } from '../../routes/routeNames';

interface MenuProps {
    isLogin : boolean;
    anchorEl : null| HTMLElement;
    openBool : boolean; 
    handleClose : () => void;
    accName : string;
}
export default function MenuDownAccount(
    {isLogin, anchorEl , openBool , handleClose, accName} 
    : MenuProps) {
  return (
    <>
        {
            isLogin ?
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openBool}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>{accName}</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink to={route.account}>My Account</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink to={route.home}>Logout</NavLink>
                    </MenuItem>
                </Menu>
                :
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openBool}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>
                        <NavLink to={route.register}>Register</NavLink>
                    </MenuItem>
                </Menu>
        }
    </>
  )
}
