let a=0;
let n=10;
for(let i=0;i<=n;i++)
  {
    for(let j=1;j<n;j++)
      {
        if(i+j>n && i==j)
        {
          a++;
        }
      }
  }
console.log(a)