import React from 'react';
import ApiForm from '../ApiForm/ApiForm';
import NavLang from './NavLang';

import styles from './Nav.module.sass';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ApiForm />
      <NavLang />
    </nav>
  );
};

export default Nav;
