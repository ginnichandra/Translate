import React, { useState } from 'react';
import i18n from './i18n';

// the hoc
import { withNamespaces } from 'react-i18next';

function App({ t }) {

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    changeLanguage('fe');
  }

  return (<div>

    <form onSubmit={onSubmitHandler}>
      <label>{t('hello')}</label><br />
      <label>{t('what')}</label><br />
      <label>{t('is')}</label><br />
      <label>{t('your')}</label><br />
      <label>{t('name')}</label><br />
      <button type="submit">french</button>
    </form>


  </div>);
}

export default withNamespaces()(App);
