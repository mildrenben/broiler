import React from 'react'
import PropTypes from 'prop-types'

const ArticleScreen = ({ match }) => (
	<h1>{match.params.title}</h1>
)

ArticleScreen.propTypes = {
	match: PropTypes.object.isRequired
}

export default ArticleScreen