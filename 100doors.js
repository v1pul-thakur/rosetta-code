// 100 doors problems of the rosetta code.

// initially all doors are closed.
let doors = [];

let count = 0;
while (count < 100) {
	doors.push(0);
	count += 1;
}

//console.log(doors);

// you make 100 passes by the doors, and on nth passes you toggle all the doors that are multiple of n.

let n = 1;
while (n <= 100) {
	let j = 0;
	while (j < 100) {
		if (doors[j] == 0) {
			doors[j] = 1;
		}
		else {
			doors[j] = 0;
		}
		j = j + n;
	}
	n += 1;
}

//console.log(doors);

// state of the doors.
let state = {
	open : [],
	close: []
}

for (let k = 0; k < 100; k+=1) {
	if (doors[k] == 1) {
		state.open.push(k);
	}
	else {
		state.close.push(k);
	}
}

console.log('Open Doors:', state.open, 'Closed Doors:', state.close);
