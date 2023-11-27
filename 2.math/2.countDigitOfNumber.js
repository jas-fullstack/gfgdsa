let num = 12398;
let x = 0;
function countNum(num){
  
    while(num != 0){
        num = Math.floor(num/10); 
        x++
    }
    return num
}
console.log(countNum(num), x);