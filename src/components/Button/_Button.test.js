import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

// Example of Jest + Enzyme unit testing

describe('(Component) <Button />', () => {
	const wrapper = shallow(<Button>Hello</Button>)
	it('Renders a <button> tag', () => {
		expect(wrapper.type()).toBe('button')
	})
	it('Renders the correct text', () => {
		expect(wrapper.text()).toBe('Hello')
	})
})