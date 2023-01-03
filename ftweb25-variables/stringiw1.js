let string = "rupendra sharma"
let spaces = 0;
for(let i=0;i<string.length;i++)
  {
  if(string[i]==" ")
       spaces++;
  }
console.log("words are :",spaces+1);

// we need to count spaces in order count words
// spaces+1 is for atleast one words present 