import React, { useContext } from 'react';
import AppContext from '../../store/appContext';

import styles from './Header.module.sass';

const Header = () => {
  const ctx = useContext(AppContext);

  const { lang } = ctx;

  return (
    <header className={styles.header}>
      <h1>
        {lang === 'en'
          ? 'Medical Institutions List'
          : 'Seznam lékařských zařízení'}
        {/* {district.toUpperCase()} */}
      </h1>
    </header>
  );
};

export default Header;
