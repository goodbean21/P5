function multiplier(factor){
	return x => x * factor;
}

let doubler = multiplier(2);
let tripler = multiplier(3);

let vals = [4, 8, 1 ,2, 9];
console.log(vals);

/* 
	The map function creates a new array. In this case vals isn't 
	changed.
*/

let newVals = vals.map(doubler);
console.log(newVals);

let newSth = vals.map(x => x * 4);
console.log(newSth);

/*
	Fill takes an array and fill it with something in every position
	of the array.
*/

vals.fill(Math.floor(Math.random()*10));
console.log(vals);

vals = vals.map(() => Math.floor(Math.random()*10));
console.log(vals);

let array = new Array(100);
array = array.fill(0).map(Math.random);
console.log(array);

vals = [5, 4, 9, 2, 1];

let sum = 0;

for(let val of vals){
	sum += val;
}

console.log(sum);

function suma(acc, val){
	return acc + val;
}

/*
	Reduce reiterates a function
*/

let answer = vals.reduce(suma)
console.log(answer);

answer = vals.reduce((acc, val) => acc + val);
console.log(answer);

function findMax(acc, val){
	if(val > acc) acc = val;
	return acc;
}

let biggest = vals.reduce(findMax);
console.log(biggest);

biggest = vals.reduce((acc, val) => {
	if(val > acc) acc = val;
	return acc;
});

console.log(biggest);

biggest = vals.reduce((a, b) => b > a ? b : a);

console.log(biggest);

/*
	filter if the value is true then it retrieves the value
	if false the value gets filter. 
*/

function isEven(num){
	return num%2==0;
}

let even = vals.filter(isEven);
console.log(even);

even = vals.filter(x => x % 2 == 0);
console.log(even);

let odd = vals.filter(x => x % 2 == 1);
console.log(odd);


vals = [5, 4 ,9, 2, 1];
/*
	sort 
*/

vals.sort();
console.log(vals);

let words = ["a", "b", "hello", "Goodbye"];
words.sort();
console.log(words);

let mix = ["a", "B", 2, 5];
mix.sort();
console.log(mix); 

let ar = [{x:5, y:6},
		{x:2, y:10}];


function compare(a, b){
	return b.y - a.y;
}

ar.sort((a, b) => a.y - b.y);

//ar.sort(compare);
console.log(ar);

let s = "It was  a dark and stormy night.";
let Words = s.split(/\W+/).filter(x => x.length > 2);

let old = Words.sort();
console.log(old);

Words.sort((a, b) => a.length - b.length);
console.log(Words);