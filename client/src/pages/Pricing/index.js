import React, { useState } from 'react';
import "react-tooltip/dist/react-tooltip.css";
import pricing from './pricing.json';
import styles from './Pricing.module.scss';
import BoxPrice from './BoxPrice';

const Pricing = () => {
  const [ show, setShow ] = useState(0);
  const handleClick = (index) => setShow(show === index ? null : index);
  return (
    <section className={styles.Container}>
      {pricing.map((item, index) => BoxPrice(item, index, show, handleClick))}
    </section>
  );
}
export default Pricing;
