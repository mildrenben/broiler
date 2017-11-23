import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'
import ContactScreen from './components/ContactScreen'
import ArticleScreen from './components/ArticleScreen'
import Nav from './components/Nav'

// Example of global css
import './styles/global'

const Routes = () => (
	<div>
		{ /*  Nav component is outside of a specific route and thus appears everywhere  */}
		<Nav />
		<Route exact path='/' component={HomeScreen} />
		<Route path='/contact' component={ContactScreen} />
		{ /* This article route has a parameter that is passed on to the component */ }
		<Route path='/article/:title' component={ArticleScreen} />
	</div>
)

const Router = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)

export default Router
