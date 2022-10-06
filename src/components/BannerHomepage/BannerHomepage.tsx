import React, { useState } from 'react';
import ButtonOutline from '../ButtonOutline';
import SelectList from '../Select';
import { MakeSelect, ModeSelect, TrimSelect } from '../Select/ListSelect';
import TitleSection from '../TitleSection';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ListIntroduction } from './ListIntroduction';
function BannerHomepage() {
  const [optionSoft, setOptionSoft] = useState({
    makeAndModel: {
      Make: '',
      Mode: '',
      Trim: ''
    },
  })
  return (
    <section className='banner_homepage section'>
      <div className="inner">
        <div className="desp">
          <TitleSection
            hasDesp={true}
            title='Car buying'
            subTitle='made easy'
            size='lg'
            titleDesp='Lorem ipsum dolor sit amet. In velit eaque aut perferendis unde cum ipsam reprehenderit.'
            sizeDesp='md'
          />
          <div className="buy_sell">
            <ButtonOutline
              size='md'
              bg={true}
              title='Buy'
            />
            <ButtonOutline
              size='md'
              bg={false}
              title='Sell'
            />
          </div>
        </div>
        <div className="search">
          <SelectList 
            // setOptionGroup={setOptionSoft} 
            // optionGroup={optionSoft} 
            defaultValue={MakeSelect.default} 
            listItem={MakeSelect.listItem}/>
          <SelectList 
            // setOptionGroup={setOptionSoft} 
            // optionGroup={optionSoft} 
            defaultValue={ModeSelect.default} 
            listItem={ModeSelect.listItem}/>
          <SelectList 
            // setOptionGroup={setOptionSoft} 
            // optionGroup={optionSoft} 
            defaultValue={TrimSelect.default} 
            listItem={TrimSelect.listItem}/>
          <ButtonOutline
            size='lg'
            bg={true}
            title='Search'
          />
        </div>
        <div className="introduction">
          <ul>
            {ListIntroduction.map((itemIntro) => {
              return (
                <li key={itemIntro.order}>
                  <h4>{itemIntro.order}</h4>
                  <h3>{itemIntro.title}</h3>
                  <p>{itemIntro.desp}</p>
                  <div className="thumb">
                    <img src={itemIntro.thumb} alt="introduction" width='338' height='205' />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BannerHomepage