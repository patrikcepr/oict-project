import React, { useContext } from 'react';
import AppContext from '../../store/appContext';

import styles from './Header.module.sass';

const Header = () => {
  const ctx = useContext(AppContext);

  const { lang, data } = ctx;

  // vložení městské části
  let district = data[0] ? data[0].properties.district : '';
  // kapitalizace prvního písmene
  district = district.charAt(0).toUpperCase() + district.slice(1);

  return (
    <header className={styles.header}>
      <h1>
        {lang === 'en'
          ? 'Medical Institutions List'
          : 'Seznam lékařských zařízení'}{' '}
        {district}
      </h1>
    </header>
  );
};

export default Header;
