import React from 'react'
import { ListWhySellCar } from './ListWhySellCar'
import { WhySellCarImage } from '../../assets'
import TitleSection from '../TitleSection'

function WhySellCar() {
  return (
    <section className='section why_sell'>
        <div className="inner">
            <div className="thumb">
              <img src={WhySellCarImage} alt="WhySellCar" width='798' height='663' />
            </div>
            <div className="wrapper">
              <TitleSection 
                hasDesp={false}  
                size='sm'
                title='Why Sell a Car on Gear'
                sizeDesp=''
                titleDesp=''
                subTitle=''
              />
              <div className="list_reason">
                <ul>
                  {ListWhySellCar.map((item)=>{
                    return(<li key={item.title}>
                      <div className="thumb_icon">
                        <img src={item.icon} alt="icon list why sell car" width='65' height='55' />
                      </div>
                      <div className="txt">
                        <h5>{item.title}</h5>
                        <p>{item.desp}</p>
                      </div>
                    </li>)
                  })}
                </ul>
              </div>
            </div>
        </div>
    </section>
  )
}

export default WhySellCar