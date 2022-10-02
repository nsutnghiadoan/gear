import React from 'react'
import BannerHomepage from '../../components/BannerHomepage';
import TitleSection from '../../components/TitleSection';
import WhySellCar from '../../components/WhySellCar';
import { ListQuality } from './ListQuality';
import { dataSlider } from './dataSlider';
// import Slider from 'react-slick';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id='homepage'>
      <BannerHomepage />
      <WhySellCar />
      <section className='section quality'>
        <div className="inner">
          <div className="desp">
            <TitleSection
              title='Gear car quality'
              size='sm'
              subTitle=''
              hasDesp={false}
              sizeDesp =''
              titleDesp=''
            />
            {ListQuality.map((title,index)=>{
              return (
                <p key={index}>{title}</p>
              )
            })}
          </div>
        </div>
      </section>
      {/* <section className='section people_say'>
        <div className="inner">
          <TitleSection
            title='What people say about us?'
            size='sm'
            subTitle=''
            hasDesp={true} 
            sizeDesp ='sm'
            titleDesp='Lorem ipsum dolor sit amet. In velit eaque aut perferendis unde cum ipsam reprehenderit.'
          />
          <Slider 
            {...settings}
          >
            {dataSlider.map((obj, index)=>{
              return(
                <div className="slider_container">
                  
                </div>
              )
            })}
          </Slider>
        </div>
      </section> */}
    </section>
  )
}
