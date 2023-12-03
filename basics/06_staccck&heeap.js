//stack(primitive) heap(non-primitive)




//heap
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne //here both the objects are poinitng to the same value in heap and thus acquire sam values 

userTwo.email="usertwo.fb.com"

console.log(userOne.email);    //email:usertwo.fb.com
console.log(userTwo.email);     //email:usertwo.fb.com