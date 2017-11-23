import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Routes from './routes'

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app'),
	)
}

render(Routes)

if (module.hot) {
	module.hot.accept('./routes', () => { render(Routes) })
}