/*
 Return an English translated sentence of the passed binary string.

 The binary string will be space separated.
 * */

String.prototype.myReverse = function(){
    // reverse the string
  return this.split("").reverse().join("")
  
}

String.prototype.binaryToStr = function(){ 

  // reverse to get indices as exponents
  let str = this.myReverse();
  // get indices
  let exponents = [];
  for (let i=0; i<str.length; i++){
   
    if (str[i] == 1){
      exponents.push(i)
    }
  }

  // binary to decimal
  let decimal = exponents.reduce((ac, cur)=> ac + Math.pow(2, cur), 0)

  return String.fromCharCode(decimal);

}


function binaryAgent(str) {

  // convert to decimal
  let decimal = str.split(" ");

  let result = ""

  decimal.forEach(e => result += e.binaryToStr())
 
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
