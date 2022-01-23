import React, { FC } from 'react';
import ApiForm from '../ApiForm/ApiForm';
import NavLang from './NavLang';

import styles from './Nav.module.sass';

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <ApiForm />
      <NavLang />
    </nav>
  );
};

export default Nav;
