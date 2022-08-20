import React from 'react';
import { route } from '../../routes/routeNames';
import { NavLink } from 'react-router-dom';
import { HeaderLogo } from '../../assets';
import '../../assets/css/_style.scss';
import HeaderAccountAvatar from '../../components/HeaderAccountAvatar';
function Header() {
  return (
    <header>
      <NavLink to={route.home}>
        <div className="logo">
          <HeaderLogo />
        </div>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to={route.buy}>Buy</NavLink>
          </li>
          <li>
            <NavLink to={route.sellOrTrade}>Sell or Trade</NavLink>
          </li>
          <li>
            <NavLink to={route.finance}>Finance</NavLink>
          </li>
          <li>
            <NavLink to={route.gearWork.index}>How Gear Work</NavLink>
          </li>
          <li>
            <NavLink to={route.home}>More</NavLink>
          </li>
          <li>
            <NavLink to={route.contact}>Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <HeaderAccountAvatar />
    </header>
  )
}

export default Header