// TASK #2
/*let massive = [1, 2, 3, 4, 5]
for(i = 0; i < massive.length; i++){
    alert(massive[i]);
}
*/
/*
// TASK #3
let massive = [-1, 22, 3, 44, 5];
max = 0;
for(i = 0; i < massive.length; i++){
if( massive[i] > max)
max = massive[i];
}
alert(max);
*/
//TASK #6
/*
let massive = [2, 5, 9, 15, 0, 4];
for(i = 0; i < massive.length; i++){
    if(massive[i] > 3 && massive[i] < 10)
    alert(massive[i]);
}
*/

// Task
// const eight = 8;
// for( let i = 1; i < 10; i++) {
//     document.write(`8 * ${i} = ${eight * i}`);
// }
//TASK #1
/*
let summa = 0;
let i;
for (i = 0; i < 100; i++){
    summa += i;
}
alert(summa);
*/
/*
let chisla = []
let positive = 0;
let negative = 0;
let zero = 0;
for(let i = 1; i <= 8; i++) {
    let n = +prompt('введіть числа');
    chisla.push(n)
}
for(let j = 0; j < 0; j++) {
if (chisla[j] < 0) {
    negative = negative + 1;
} else if (chisla[j] > 0) {
    positive = positive + 1;
} else if (chisla[j] == 0) {
    zero = zero + 1;
}

alert(`${positive} Позитивних, ${negative} негативних,  ${zero} нулів`)
*/
//TASK #7
/*
let exist = true;
let res;
do {
let first = +prompt('Enter first number');
let second = +prompt('Enter second number');
let znak = prompt('Enter action: division - enter "/", multiplication - enter "*", plus - enter "+" or minus - enter "-"');
switch(znak) {
    case("/"):
        res = first / second;
	    break;
	case("*"):
 	    res = first * second;
	    break;
 	case("+"):
 	    res = first + second;
 	    break;
 	case("-"):
 	    res = first - second;
        break;
    default:
        res = "incorrect value";
}

exist = confirm(`${res}. якщо хочете повторити дію натисніть "Ok"`)
}
 while (exist);
*/
