import React from 'react';
import CheckBox from '../../components/CheckBox';
import { fuel } from './ListCheckBoxItem';

export default function Buy() {
  return (
    <>
      <section id="aside">
        <CheckBox listItem={fuel} nameList={'fuel'}  />
      </section>
    </>
  )
}
