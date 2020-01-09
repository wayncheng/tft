// let inventory = [ 'A', 'B', 'C' ];
// inventory = [ 'A', 'B', 'C', 'D' ];
inventory = ['A','B','C','D','E']
// inventory = ['A','A','B','C','D']
// inventory = ['A','A','B','C','D','E']
// inventory = ['A','B','C','D','E','F']
const hash = {};
const combos = [];
const uniquePairs = {};

const oneCombo = [];
for (let i = 0; i < inventory.length; i++) {
	const item = inventory[i];
	const clone = [ ...inventory ];
	clone.splice(i, 1); // Remove item from original array
	for (let j = 0; j < clone.length; j++) {
		const partner = clone[j];
		const pair = [ item, partner ].sort();
		const cloneOfClone = [ ...clone ];
		cloneOfClone.splice(j, 1);
		oneCombo.push([ pair, cloneOfClone ]);
		// console.log('cloneOfClone:',cloneOfClone);

		uniquePairs[pair.join('')] = 1
	}
}

function pairUp(){
	
}

// console.log('oneCombo:',oneCombo);
console.log('# of oneCombo:', oneCombo.length);

const sorted = oneCombo.map(possibility => possibility.map(pair => pair.sort().join('')).sort().join('  ')).sort();
// console.log('sorted:', sorted);

sorted.forEach(poss => (hash[poss] = 1));

// console.log('hash:', hash);
const uniquePossibilities =Object.keys(hash) 
console.log('uniquePossibilities:',uniquePossibilities);
console.log('# of unique possibilities:',uniquePossibilities.length);

const unqArr = Object.keys(uniquePairs);
console.log('# of unique pairs:',unqArr.length);
console.log('unqArr:',unqArr);
// console.log('# of combos:',combos.length);
// console.log('combos:',combos);
