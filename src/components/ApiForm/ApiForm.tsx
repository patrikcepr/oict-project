import React, { FC, useRef, useContext } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import AppContext from '../../store/appContext';

import styles from './ApiForm.module.sass';

const ApiForm: FC = () => {
  const ctx = useContext(AppContext);

  const { setApikey, lang } = ctx;

  const apiInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userApiKey = apiInputRef.current.value.trim();
    setApikey(userApiKey);
    apiInputRef.current.value = '';
  };

  return (
    <form className={styles.apiform} onSubmit={submitFormHandler}>
      <Input
        ref={apiInputRef}
        style={styles.input}
        label={lang === 'en' ? 'Api Key' : 'Api klíč'}
        link='https://api.golemio.cz/api-keys/'
        input={{
          placeholder: `${
            lang === 'en' ? 'Insert your Api Key' : 'Vložte svůj Api klíč'
          }`,
          type: 'text',
          id: 'apiKey',
        }}
      />
      <Button type='submit' style={styles.button}>
        {lang === 'en' ? 'Submit' : 'Použít'}
      </Button>
    </form>
  );
};

export default ApiForm;
