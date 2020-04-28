import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '../i18n'

import { i18n, Link, withTranslation } from '../i18n'

const About = ({ t }) => (
  <React.Fragment>
    <main>
      <button
        type='button'
        onClick={() => Router.push('/')}
      >
        {t('link2')}
      </button>
      {t('h1')}
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
