let prompt=require("prompt-sync")()
 let data=Number(prompt("Enter Target Value-->"))

let array=[5,15,455,45,25,82,28]

let found=false;
for (let i=0; i<array.length; i++){
  for(let j=i+1; j<array.length;j++){
    let sum=array[i]+array[j];
    if(array[i]==data||array[j]==data){
      console.log(`No. already in Array at ${
        array[i]==data ? array[i] :
       array[j]==data ? array[j] : "didnt match"}`);
      break
    }
    if(sum==data){
      console.log(`Found
       Sum-->${sum}
       First Number-->${array[i]}
       Second Number-->${array[j]}
       `);
       found=true;
       break;
      
    }
  }
  if(found) break

  
}
if(!found){
  console.log("Didnt found No.s cant have sum of data");
} 











