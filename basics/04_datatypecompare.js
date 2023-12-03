

//console.log("2">1);  //we cannot compare dataypes of different values directly either we have to first typecats them
//correct way is
console.log(2>1); //gives either true or false
console.log("2"==2);  //here 2 gets converted into number and gets comapared 
//comparing null
console.log(null>0);
console.log(null==0);  //here comparison converts null to a number i.e 0 so we get answer as "false"
console.log(null>=0); //here null is 0 bcoz of comparison operator so we get "true"

console.log(2==="2"); //here number gets tightly checked and and we cannot comapre 2 diff datatypes with after usinf (===) 
                        //so it gives false
