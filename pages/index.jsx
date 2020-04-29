import React from 'react';
import PropTypes from 'prop-types';

import { i18n, Link, withTranslation } from '../i18n';

const Homepage = ({ t }) => (
  <>
    <main>
      <button
        type="button"
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
      >
        {t('change-locale')}
      </button>
      <Link as={`${t('aboutLink')}`} href="/about">
        <button
          type="button"
        >
          {t('toAboutPage')}
        </button>
      </Link>
      <div>{t('h1')}</div>
    </main>
  </>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'about'],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Homepage);
