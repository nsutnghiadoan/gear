import React,{useEffect, useState} from 'react';
import { BsChevronDown } from 'react-icons/bs'; 
import Button from '@mui/material/Button';
import HeaderAvatar from '../HeaderAvatar';
import MenuDownAccount from '../MenuDownAccount';

interface Login{ 
  isLogin : boolean,
  userName : string
}

function HeaderAccountAvatar( {isLogin, userName } :Login ) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Button 
      className='header_avatar'
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}  
    >
      <HeaderAvatar isLogin={false} srcAvatar='' />
      <BsChevronDown />
    </Button>
    <MenuDownAccount 
      isLogin={isLogin}
      handleClose={handleClose} 
      anchorEl={anchorEl} 
      openBool={open}
      accName={userName}
    />
    </>
  )
}

export default HeaderAccountAvatar