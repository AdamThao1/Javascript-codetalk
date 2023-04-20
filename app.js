function hi() { //added a function to the problem in order for this code to work
let x = true; //line 2 and 3 are variables
let y = 0;

while(x) { //this is a while loop and only works if the code is true
     y++;  // a iterate for the y
     console.log('you can do this'); //this would run sentence being said in the console
     if (y === 4) { // if y is not equal to 4 then the loop would be broken.
          x = false; // this would make the loop false
     }
}
}
hi() //started the function