import React from 'react';
import { Link } from 'react-router-dom';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from './Pricing.module.scss';

const BoxPrice = (
  { name, description, price, list, href, color },
  index,
  show,
  handleClick
) => (
  <div key={name} className={styles.BoxPrice}>
    <div className={styles.BoxContainer}
         style={{borderColor: color}}
         onClick={() => handleClick(index)}>
      <div className={styles.TopBox} style={{borderColor: color}}>
        <h3 className={styles.Title} style={{color}}>{name}</h3>
        <p className={styles.Description}>{description}</p>
        <span className={styles.Price} style={{color}}>{price}</span>
        {show !== index
          ? <i className='fas fa-minus' style={{color}} />
          : <i className='fas fa-plus' style={{color}} />
        }
      </div>
      <ul className={`${styles.List} ${show !== index && styles.Hide}`}>
        {list.map(({ text, check, border, tooltip }, index) => (
          <li key={index}
              id={name+index}
              className={
                check
                  ? `${styles.ItemCheck} ${border && styles.ItemCheckBorder}`
                  : `${styles.Item} ${border && styles.ItemBorder}`
              }>
            {check && <i className='fas fa-check' />}
            {typeof text === 'string'
              ? text
              : text.map((item, i) => <p key={'text'+i}>{item}</p>)
            }
            <ReactTooltip anchorId={name+index}
                          place="right"
                          className={styles.Tooltip}
                          content={tooltip} />
          </li>
        ))}
      </ul>
      <Link className={`${styles.Button} ${show !== index && styles.Hide}`}
            style={{ backgroundColor: color }}
            to={href}>
        <i className='fas fa-check' />
        Start
      </Link>
    </div>
  </div>
)
export default BoxPrice;
