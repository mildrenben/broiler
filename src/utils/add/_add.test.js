import add from './index'

describe('(Util) add', () => {
	it('Adds 1 + 2 to equal 3', () => {
		expect(add(1, 2)).toBe(3)
	})

	it('Adds 10 + 5 to equal 15', () => {
		expect(add(10, 5)).toBe(15)
	})

	it('Adds 0 + 2 to equal 2', () => {
		expect(add(0, 2)).toBe(2)
	})
})


