const name="sarthak"
const repoCount=50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //this is a placeholder ${} to get the value at that point from var
//the above is also called as string interpolation

const ganeName=new String (`sarthak-lembhe`)
console.log(ganeName)  //gets printed in key value pairs

console.log(ganeName[0])
console.log(ganeName.toUpperCase())

console.log(ganeName.charAt(2)) // to check at which position the which character resides 

console.log(ganeName.indexOf(`t`))

const newString =ganeName.substring(0,4)
console.log(newString)

const anotherString=ganeName.slice(1,8) //we can give negative value in slice
console.log(anotherString)

const anotherstring2=ganeName.slice(3)
console.log(anotherstring2)  //prints everytig from the starting indes i.e 3 till the ending indes i.e all till end

const newStringOne="   sarthak    "
console.log(newStringOne)
console.log(newStringOne.trim())  //removes the emptysapces(whitespaces) from both front and back 

const url="https://sarthak.com/sarthak%20lembhe"

console.log(url.replace(`%20`,'_')) //replaces the & 20 with _ 

console.log(url.includes("pratik"))  //gives o/p wether the name is there in it or not

console.log(ganeName.split('-')) // divides strings on the basis of dashes

