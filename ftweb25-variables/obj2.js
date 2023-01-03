let str="assjsjjsgghh"
let obj={}
for(let i=0;i<str.length;i++){
  let key=str[i]
  if(obj[key]===undefined){
    obj[key]=1
  }
  else{
    obj[key]++
  }
}
for(let key in obj){
  if(obj[key]===1){
    console.log(key)
  }
}