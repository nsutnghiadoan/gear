import React, { useEffect, useState } from 'react';
import CheckBox from '../../components/CheckBox';
import ToggleItem from '../../components/ToggleItem';
import { fuel } from './ListCheckBoxItem';
import { MakeSelect, TrimSelect, ModeSelect } from '../../components/Select/ListSelect';
import SelectList from '../../components/Select';
import { NavLink } from 'react-router-dom';
import MakeComma from './MakeComma';

export default function Buy() {
  const [optionSoft, setOptionSoft] = useState<{
    makeAndModel: {
      Make: string,
      Mode: string,
      Trim: string
    },
    price: {
      MinPrice: number,
      MaxPrice: number
    },
    fuelAndEfficiency: {
      FuelType: string,
      FuelConsumption: string
    },
    year: {
      MinYear: number,
      MaxYear: number
    },
    mileage: {
      Min: number,
      Max: number
    },
    Color: string
  }>();
  type ProductResult = {
    category : string,
    description : string,
    id : number,
    price: number,
    title : string,
    image : string,
    rating : {
      rate: number,
      count : number
    }
  }
  const [listCar, setListCar] = useState<{
      id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
  rate: number,
  count: number
}
  }[]>([],);
  const [listProduct , setListProduct] = useState<ProductResult[]>([]);
  useEffect(() => {

  }, [listCar]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setListProduct(json));
  }, []);

  return (
    <section id="buy">
      <section id="aside">
        <div className="inner">
          <div className="result">
            <div className="tlt">
              <p>Your search</p>
              <a href="#">Save search</a>
            </div>
            <h3>1,000,451 Results</h3>
          </div>
          <ToggleItem
            title={'Item'}
            listItem={<CheckBox  listItem={fuel} nameList={'Fuel'} />}
          />
          <SelectList defaultValue={MakeSelect.default} listItem={MakeSelect.listItem} />
          <SelectList defaultValue={ModeSelect.default} listItem={ModeSelect.listItem} />
          <SelectList defaultValue={TrimSelect.default} listItem={TrimSelect.listItem} />
          <SelectList defaultValue={MakeSelect.default} listItem={MakeSelect.listItem} />
          <SelectList defaultValue={ModeSelect.default} listItem={ModeSelect.listItem} />
          <SelectList defaultValue={TrimSelect.default} listItem={TrimSelect.listItem} />
          <SelectList defaultValue={TrimSelect.default} listItem={TrimSelect.listItem} />
          <SelectList defaultValue={TrimSelect.default} listItem={TrimSelect.listItem} />
          <SelectList defaultValue={TrimSelect.default} listItem={TrimSelect.listItem} />
        </div>
      </section>
      <section id="product">
        <div className="inner">
          <div className="breadcum">
            <ul>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/buy'}>Shop car</NavLink>
              </li>
            </ul>
          </div>
          <div className="search">
            <input type="text" />
            <button>Favourites car</button>
            <button>Sort by</button>
          </div>
          <div className="search_item">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <button>Clear All</button>
          </div>
          <div className="list_car">
            <ul>
              {listProduct.map((product : ProductResult)=>{
                return (
                  <li key={product.id}>
                    <NavLink to={`/buy/${product.id}`}>
                      <div className="thumb">
                        <img src={product.image} alt="" />
                      </div>
                      <h2>{product.title}</h2>
                      <div className="kilometer">
                        <p>Kilometter</p>
                        <h5>{MakeComma(product.rating.count * 100)}km</h5>
                      </div>
                      <div className="price">
                        <h4>Price</h4>
                        <h3>${MakeComma(product.price * 1000)}</h3>
                      </div>
                      <button className='btn red md'>Details</button>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
