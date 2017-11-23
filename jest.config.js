module.exports = {
	collectCoverageFrom: ['src/components/**/*.js', 'src/utils/**/*.js'],
	setupFiles: [
		'<rootDir>/config/testing/shim.js',
		'<rootDir>/config/testing/enzyme.js'
	]
};