import React from 'react'
import { Avatar } from '@mui/material';
import { HeaderDefaultAvatar } from '../../assets/';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

interface AvatarHeaderProps {
    isLogin : boolean
    srcAvatar : string,
}

export default function HeaderAvatar({isLogin, srcAvatar = ''  } : AvatarHeaderProps) {
  return (
    <>
        {isLogin ? 
            <Avatar 
                src={srcAvatar}
                alt='avatar'
                sx={{width : 48, height : 48}}
            /> 
        :
            <Avatar 
                sx={{ bgcolor: purple[500] }}
                src={HeaderDefaultAvatar}
                alt='avatar'
            />
        }
    </>
  )
}
