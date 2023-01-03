let a="rupendra";        //original username
let b="rupendra@123";    //original password
let x="rupendra";        // entered username
let y="rupendra@123";    // entered password
console.log("enter your username and password");

if(a==x)
{
  console.log("Entered Correct Username"+"\n"+"Enter your Password")
  if(b==y)
    console.log("Entered Correct Password"+"\n"+"You can login");
  else
    console.log("Incorrect password");
}
else 
  console.log("your username didn't match");
 
   