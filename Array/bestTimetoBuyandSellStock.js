const prompt=require("prompt-sync")()

const cost_Price_Array=[]
const arrayLength=5
  for (let index = 0; index < arrayLength; index++) {
    if(cost_Price_Array.length==arrayLength){
      break
    }
    else{
     const costPrice= Number(prompt(`Enter ${index+1}th price of product to analyse`))
     if(costPrice==null && costPrice=="" && costPrice==undefined ){
      cost_Price_Array.push(1)}
     else{cost_Price_Array.push(costPrice)}
    }
  }
  console.log(cost_Price_Array);

  console.log(`Buy at Rs${Math.min(...cost_Price_Array)} in Day ${cost_Price_Array.indexOf(Math.min(...cost_Price_Array))+1}`)
  console.log(`sell at Rs${Math.max(...cost_Price_Array)} in Day ${cost_Price_Array.indexOf(Math.max(...cost_Price_Array))+1}`)
