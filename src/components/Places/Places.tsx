import React, { FC, useContext } from 'react';
import Place from './Place';

import AppContext from '../../store/appContext';

import styles from './Places.module.sass';

const Places: FC = () => {
  const ctx = useContext(AppContext);

  const { data } = ctx;

  return (
    <div className={styles.places}>
      {data.map((place, index: number) => {
        return (
          <Place
            key={place.properties.id}
            index={index}
            name={place.properties.name}
            addr={place.properties.address.street_address}
          />
        );
      })}
    </div>
  );
};

export default Places;
