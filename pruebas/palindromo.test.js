const palindromo = require('../ejercicios/palindromo')

test('Palindromo de eye', () => {
	const result = palindromo('eye')

	expect(result).toBe('eye')
})
