const prompt=require("prompt-sync")()

const arrayLength=5
const array=Array()
let hasDuplicateValue=false



for(let i=0; i<arrayLength; i++){
  if(array.length==arrayLength){break}
  else{
    const num=Number(prompt(`Enter the Number ${i} Number-->`))
    if (num==null || num==undefined || num==NaN || num==""){array.push(1)}
    else{array.push(num)}}
    
  }
  console.log(array);

for(let i=0; i<5; i++){
  for(let j=i+1; j<5; j++){
      if(array[i]===array[j]){
        console.log(`Same Number at index of ${i} & ${j} `);
        hasDuplicateValue=true
        break}
       
  }
  }

if (hasDuplicateValue) {
  console.log(`Found`);
} else {
  console.log(`Not FOund`);
  
}