let arr=[10,42,13,13]
let flag=false;
for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==42)
    {
      flag=true;
    }
    else
    {
      flag = false;
    }
  }
if(flag)
{
  console.log("yes")
  }
else
  console.log("no");