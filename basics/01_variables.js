const accountID=23456
let accEmail="sl@gmail.com"
var accType="debit"

accPsswrd="jofewe"  //we can even declare the value without datatype but we should not it is not a good practice

//accountID=23 //cannot reassign to const bcoz is is fixed
accEmail="kjot@gmail.com"  // we can change the values of var and let  afterwards

accType="credit"  // we can change the values of var and let  afterwards 
console.log(accountID);  //we have to write console.log in semicolon

console.log(accEmail);
console.log(accType); // now we get changed values of var and let
console.table([accEmail,accType,accountID])  //saves in tabulat structure

