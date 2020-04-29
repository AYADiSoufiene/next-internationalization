import React from 'react';
import PropTypes from 'prop-types';

import { Link, withTranslation } from '../i18n';

const About = ({ t }) => (
  <>
    <main>
      <Link as={`${t('homeLink')}`} href="/">
        <button
          type="button"
        >
          {t('toHomePage')}
        </button>
      </Link>
      <div>{t('h1')}</div>
    </main>
  </>
);

About.getInitialProps = async () => ({
  namespacesRequired: ['about'],
});

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('about')(About);
