function checkPrime(num){
    if(num<=1)
        return false
    if(num<=3)
        return true
    if(num%2===0 || num%3===0)
        return false
    for(let i=5;i*i<=num;i+=6){
        if(num % i ===0 || num%(i+2)===0){
            return false
        }
    }
    return true
}
function totalPrimes(){
   let total=0
   const num1 = parseInt(document.getElementById('numA').value)
   const num2 = parseInt(document.getElementById('numB').value)
   for(let i=num1;i<=num2;i++){
    if(checkPrime(i))
        // console.log(i)
        total+=i
   }
   document.getElementById('result').innerText=`Tổng các số nguyên tố là: ${total}`
}