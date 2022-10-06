import React, { useEffect, useRef, useState } from 'react';
import { route } from '../../routes/routeNames';
import { BsChevronDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { HeaderLogo } from '../../assets';
import HeaderAccountAvatar from '../../components/HeaderAccountAvatar';
import { howGearWork, More } from '../../components/HeaderMenuDropDown/ListDropDownMenu';
import HeaderMenuDropDown from '../../components/HeaderMenuDropDown';

interface HeaderProps {
  openModal: boolean,
  setOpenModal: (active: boolean) => void
}

function Header({ openModal, setOpenModal }: HeaderProps) {
  const handleOpenModal = () => {
    setOpenModal(true);
  }
  return (
    <header>
      <div className="inner">
        <NavLink to={route.home}>
          <div className="logo">
            <HeaderLogo />
          </div>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to={route.buy.index}>Buy</NavLink>
            </li>
            <li>
              <NavLink to={route.sellOrTrade}>Sell or Trade</NavLink>
            </li>
            <li>
              <NavLink to={route.finance}>Finance</NavLink>
            </li>
            <li className='dropdown'>
              How Gear Work <BsChevronDown />
              <HeaderMenuDropDown fields={howGearWork} />
            </li>
            <li className='dropdown'>
              More <BsChevronDown />
              <HeaderMenuDropDown fields={More} />
            </li>
            <li>
              <NavLink to={route.contact}>Contact us</NavLink>
            </li>
          </ul>
        </nav>
        <button className='btn md red' onClick={handleOpenModal}>Login</button>
        {/* <HeaderAccountAvatar isLogin={isLogin} userName={"akhfke"} /> */}
      </div>
    </header>
  )
}

export default Header