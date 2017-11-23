import React from 'react'
import { Link } from 'react-router-dom'

// Example of component
import Button from '../Button'

// Example of image loading
import pikachuImg from '../../assets/pikachu.png'

const HomeScreen = () => (
	<main>
		<img src={pikachuImg} />
		<Button size='20px'>Big button</Button>
		<Button>Regular button</Button>
		<p>
      Try visiting an article URL with any title as the parameter, eg{' '}
			<Link to='/article/hello-world'>/article/hello-world</Link>
		</p>
	</main>
)

export default HomeScreen
