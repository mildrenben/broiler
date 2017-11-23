import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import v from '../../styles/vars'

const StyledNav = styled.nav`
  background: ${v.blue};
  a {
    color: white;
    padding: 1em;
    display: inline-block;
  }
`

const LINKS = [
	{ path: '/', label: 'Home' },
	{ path: '/contact', label: 'Contact' }
]

const Nav = () => (
	<StyledNav>
		{LINKS.map(link => <Link to={link.path} key={link.label}>{link.label}</Link>)}
	</StyledNav>
)

export default Nav