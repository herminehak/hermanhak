// 1.	For a given number calculate the sum of its digits.


let value = 9125,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);

// 2.	Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” .....
const side1 = + prompt ("first side")
const side2 = +prompt ("second side")
const side3 = +prompt ("third side")
if ( side1 + side2 > side3 && side2 + side3 > side1) {
    console.log ("yes")
} else {
  console.log ("no")
}
//3.Given a number print its digits count.

 let num = 78756;
const digits = (num, count = 0) => {
   if(num){
      return digits(Math.floor(num / 10), ++count);
   };
   return count;
};
console.log(digits(num));

  

  //4. Count numbers of digit 9 in a number.

let number = +prompt("find nines"); 
let ninesCount = 0;
while (number > 0) {
    const digit = number % 10;
    if (digit === 9) {
        ninesCount++;
    }
    number = (number - digit) / 10;
}
console.log('Found', ninesCount, 'nines.');


  //5 Given a positive number. Print it in reverse order.
  let a = prompt("Enter a value");
let z = a;
let  reverse = 0;
while(z > 0)
{
    let digit = z % 10;
    reverse = (reverse * 10) + digit;
    z = parseInt(z / 10);
}
alert("reverse = " + reverse);