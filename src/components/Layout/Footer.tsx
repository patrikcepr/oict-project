import React, { FC, useContext } from 'react';

import AppContext from '../../store/appContext';

import styles from './Footer.module.sass';

const Footer: FC = () => {
  const ctx = useContext(AppContext);

  const { apikey } = ctx;

  return (
    <footer className={styles.footer}>
      <h4>
        {`DataSource: 
        ${
          apikey
            ? 'https://api.golemio.cz/v2/'
            : 'https://private-anon-510a79a142-golemioapi.apiary-mock.com/v2/'
        }`}
      </h4>
    </footer>
  );
};

export default Footer;
