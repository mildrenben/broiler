import PropTypes from 'prop-types'
import styled from 'styled-components'
import v from '../../styles/vars'

// Example styled component

const Button = styled.button`
  background: ${v.blue};
  border-radius: 0.2em;
  border: none;
  color: white;
  padding: 1em;
  margin: 1rem;
  display: flex;
  font-size: ${p => p.size};
  @media (max-width: ${v.medium}) {
    background: ${v.purple};
  }
`

Button.defaultProps = {
	size: '12px'
}

Button.propTypes = {
	size: PropTypes.string
}

export default Button
