// finding the one million primes less than 1 million.

function isPrime(num) {
	let len = Math.round(Math.sqrt(num))+1;
	for (let i = 2; i < len; i++ ) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(13), isPrime(47));

// finding the n number of primes.
count = 2;
primes = [];
nOP = 0;
while (nOP <= 10000) {
	if (isPrime(count)) {
		console.log(nOP);
		primes.push(count);
		nOP += 1;
	}
	count += 1;
}

console.log(primes);

// cheking the trasitions.
let transitions = {}
//len_Of_Primes = primes.length;

for (let j = 0; j < nOP - 1; j += 1) {
	
	p1 = String(primes[j]);
	p2 = String(primes[j+1]);
	console.log(p1,p2, p1[p1.length-1], p2[p2.length-1]);
	if (!transitions.hasOwnProperty(p1[p1.length-1]+p2[p2.length-1])){
		transitions[p1[p1.length-1]+p2[p2.length-1]] = 0;
	}
	transitions[p1[p1.length-1]+p2[p2.length-1]] += 1;

}

console.log(transitions);

// showing frequency of the transitions in the percentage.

for (let key in transitions) {
	console.log(key,'\t', 'Frequency:', transitions[key],'\n\t', 'Percentage:', (transitions[key]/nOP)*100, '%');
}
