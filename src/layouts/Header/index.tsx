import React, { useEffect, useRef, useState } from 'react';
import { route } from '../../routes/routeNames';
import { BsChevronDown } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { HeaderLogo } from '../../assets';
import '../../assets/css/_style.scss';
import HeaderAccountAvatar from '../../components/HeaderAccountAvatar';
import { howGearWork, More } from '../../components/HeaderMenuDropDown/ListDropDownMenu';
import HeaderMenuDropDown from '../../components/HeaderMenuDropDown';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInfoUser] = useState({
    name : ''
  })
  const [dropGear, setDropGear] = useState(false);
  const [dropMore, setDropMore] = useState(false);
  let gearRef = useRef<HTMLLIElement>(null);
  let moreRef = useRef<HTMLLIElement>(null);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=> res.json())
    .then(data => {
      setInfoUser(data);
      setIsLogin(true);
    })
    .catch(()=> setIsLogin(false))
  },[isLogin])
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
              <NavLink to={route.buy}>Buy</NavLink>
            </li>
            <li>
              <NavLink to={route.sellOrTrade}>Sell or Trade</NavLink>
            </li>
            <li>
              <NavLink to={route.finance}>Finance</NavLink>
            </li>
            <li ref={gearRef}>
              <button 
                onClick={() => {
                  setDropGear((prev) => !prev);
                  setDropMore(false);
                }}
              >
                How Gear Work <BsChevronDown/>
              </button>
              <HeaderMenuDropDown setDrop={setDropGear} dropdown={dropGear} fields={howGearWork} />
            </li>
            <li ref={moreRef}>
            <button
              onClick={() => {
                setDropMore((prev) => !prev);
                setDropGear(false);
              }}
            >
              More <BsChevronDown/>
            </button>
            <HeaderMenuDropDown setDrop={setDropMore} dropdown={dropMore} fields={More}/>
            </li>
            <li>
              <NavLink to={route.contact}>Contact us</NavLink>
            </li>
          </ul>
        </nav>
        <HeaderAccountAvatar isLogin={isLogin} userName={infoUser.name} />
      </div>
    </header>
  )
}

export default Header