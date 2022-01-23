import React, { FC, useContext } from 'react';

import AppContext from '../../store/appContext';

import styles from './NavLang.module.sass';

const NavLang: FC = () => {
  const ctx = useContext(AppContext);

  const { lang, onChooseLang } = ctx;

  return (
    <div className={styles.navlang}>
      <ul>
        <li
          className={lang === 'cs' ? styles.active : ''}
          onClick={onChooseLang.bind(null, 'cs')}
        >
          CZ
        </li>
        <li>/</li>
        <li
          className={lang === 'en' ? styles.active : ''}
          onClick={onChooseLang.bind(null, 'en')}
        >
          ENG
        </li>
      </ul>
    </div>
  );
};

export default NavLang;
