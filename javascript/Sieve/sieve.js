class Sieve {
	/**
	 * This function returns the nth prime number, where n is a zero-based index.
	 * @param {number} n - The zero-based index of the prime number to retrieve. Must be a positive integer.
	 * @returns {number} The nth prime number.
	 * @throws {Error} If n is a negative number.
	 */
	NthPrime(n) {
		if (n < 0) throw new Error('n must be a positive integer.');

		let estimatedLimit = Math.floor(n * Math.log(n) * 2);
		if (estimatedLimit < 2) estimatedLimit = 2; // Ensure the search limit is at least 2

		let primes = [2]; // Set 2 as the first prime number
		let startingNum = 3; // Starting point for checking odd numbers

		// Iterating through odd numbers until we find the nth prime
		while (primes.length <= n && startingNum <= estimatedLimit) {
			if (this.isPrime(startingNum)) {
				primes.push(startingNum);
			}
			startingNum += 2; // Skip to the next odd number
		}
		return primes[n]; // Return the nth prime
	}

	/**
	 * This function evaluates whether a given number is prime.
	 * @param {number} checkNum - The number to be evaluated.
	 * @returns {boolean} True if the number is prime, false otherwise.
	 */
	isPrime(checkNum) {
		if (checkNum < 2) return false;
		if (checkNum === 2) return true;
		if (checkNum % 2 === 0) return false;

		// Check for factors from 3 up to the square root of checkNum
		for (let i = 3; i * i <= checkNum; i += 2) {
			if (checkNum % i === 0) return false; // checkNum is divisible
		}
		return true; // checkNum is prime
	}
}

module.exports = Sieve;
