import React, {useState} from 'react';
import cx from 'classnames';
import styles from './CollectionNames.module.scss';

const namesBtn = [
  {id: 1, name: 'top categories'},
  {id:2, name:'top industry'},
  {id:3, name:'top ideas'}
];

const CollectionNames = () => {
  const [idBtn, setIdBtn] = useState(1);
  const renderBtn = ({id, name}) => {
    const classNames = cx(styles.btn, {
      [styles.active]: idBtn === id
    })
    return (
      <button
        key={id}
        className={classNames}
        onClick={() => setIdBtn(id)}
      >
        {name}
      </button>
    );
  }

  return (
    <section>
      <h2>Largest Collection of Brandable Names</h2>
      <p>Explore themed brand name collections created by our experienced team of branding experts</p>
      <div className={styles.collectionTab}>{namesBtn.map(renderBtn)}</div>
    </section>
  );
}

export default CollectionNames;
