import React from 'react'
import PropTypes from 'prop-types'

import { Router, Link, withTranslation } from '../i18n'

const About = ({ t }) => (
  <React.Fragment>
    <main>
      <Link as={`${t('homeLink')}`} href="/">
        <button
          type='button'
        >
          {t('toHomePage')}
        </button>
      </Link>
      <div>{t('h1')}</div>
    </main>
  </React.Fragment>
)

About.getInitialProps = async () => ({
  namespacesRequired: ['about'],
})

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('about')(About)
