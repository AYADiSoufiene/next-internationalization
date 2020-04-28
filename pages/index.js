import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '../i18n'

import { i18n, Link, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
  <React.Fragment>
    <main>
      <button
        type='button'
        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}
      >
        {t('change-locale')}
      </button>
      <button
        type='button'
        onClick={() => Router.push('/about')}
      >
        {t('link1')}
      </button>
      {t('h1')}
    </main>
  </React.Fragment>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'about'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
