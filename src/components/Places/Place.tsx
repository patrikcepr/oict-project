import React, { FC, useContext } from 'react';
import Button from '../UI/Button/Button';

import AppContext from '../../store/appContext';

import styles from './Place.module.sass';

interface IProps {
  name: string;
  addr: string;
  index: number;
}

const Place: FC<IProps> = ({ name, addr, index }: IProps) => {
  const ctx = useContext(AppContext);

  const { lang, showModal } = ctx;

  return (
    <div className={styles.place}>
      <h3>{name}</h3>
      <p>{addr}</p>
      <Button
        type='button'
        style={styles.button}
        onClick={showModal.bind(null, index)}
      >
        {lang === 'en' ? 'more info...' : 'více...'}
      </Button>
    </div>
  );
};

export default Place;
