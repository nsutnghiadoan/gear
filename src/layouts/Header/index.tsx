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
  const [dropGear, setDropGear] = useState(false);
  const [dropMore, setDropMore] = useState(false);
  let gearRef = useRef();
  let moreRef = useRef();
  // useEffect(() => {
  //   const handler = (event : EventTarget) => {
  //    if (dropGear && gearRef.current && ! gearRef.current.contains(event.target)) {
  //     setDropGear(false);
  //    }
  //   };
  //   document.addEventListener("mousedown", handler );
  //   document.addEventListener("touchstart", handler);
  //   return () => {
  //    document.removeEventListener("mousedown", handler);
  //    document.removeEventListener("touchstart", handler);
  //   };
  //  }, [dropGear, dropMore]);
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
            <button 
              ref={gearRef.current}
              onClick={() => {
                setDropGear((prev) => !prev);
                setDropMore(false);
              }}
            >
              How Gear Work <BsChevronDown/>
            </button>
            <HeaderMenuDropDown dropdown={dropGear} fields={howGearWork} />
          </li>
          <li>
          <button
            ref={moreRef.current}
            onClick={() => {
              setDropMore((prev) => !prev);
              setDropGear(false);
            }}
          >
            More <BsChevronDown/>
          </button>
          <HeaderMenuDropDown dropdown={dropMore} fields={More}/>
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