import React, { useContext } from 'react';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Places from './components/Places/Places';
import Footer from './components/Layout/Footer';
import Loader from './components/UI/Loader/Loader';
import PlaceDetail from './components/Places/PlaceDetail';

import AppContext from './store/appContext';
import './styles/shared.sass';
import './App.sass';
import Modal from './components/UI/Modal/Modal';

function App() {
  const ctx = useContext(AppContext);

  const { isLoading, data, error, lang, showModalState } = ctx;

  // error catching a logika obsahu
  // loader
  let content = <Loader />;

  // obsah je list položek z api
  if (!isLoading && data.length > 0) {
    content = <Places />;
  }

  // data nebyla přijata
  if (!isLoading && data.length === 0 && !error) {
    content = (
      <div className='error'>
        <span>{lang === 'en' ? 'No data received.' : 'Data nenalezena.'}</span>
      </div>
    );
  }

  // server nahlásil chybu
  if (error) {
    if (error === 'Request failed with status code 401') {
      content = (
        <div className='error'>
          <span>
            {lang === 'en'
              ? '401 - Unauthorized Access - Wrong Api Key'
              : '401 - Neautorizovaný přístup - Neplatný Api klíč'}
          </span>
        </div>
      );
    } else {
      content = (
        <div className='error'>
          <span>{error}</span>
        </div>
      );
    }
  }

  return (
    <div className='App'>
      <Header />
      <Nav />
      <main>
        {showModalState && (
          <Modal>
            <PlaceDetail />
          </Modal>
        )}
        {content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
