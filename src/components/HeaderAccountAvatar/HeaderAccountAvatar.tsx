import React,{useEffect, useState} from 'react';
import { BsChevronDown } from 'react-icons/bs'; 
import Button from '@mui/material/Button';
import HeaderAvatar from '../HeaderAvatar';
import MenuDownAccount from '../MenuDownAccount';

function HeaderAccountAvatar({}) {
  const [isLogin, setIsLogin] = useState(true);
  const [infoUser, setInfoUser] = useState({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    fetch('https://fakestoreapi.com/users/6')
      .then(res=>res.json())
      .then(json=>{
        setInfoUser(json);
      })
  },[isLogin])
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
      accName={'jkhgkj'}
    />
    </>
  )
}

export default HeaderAccountAvatar