let array = ["z","u","p","a","m"];
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let bag="";
for(let i=0;i<array.length;i++)
  {
   for(let j=0;j<lower.length;j++) 
     {
       if(array[i]==lower[j])
       {
         bag+=upper[j];
       }
     }

    
  }
console.log(bag);