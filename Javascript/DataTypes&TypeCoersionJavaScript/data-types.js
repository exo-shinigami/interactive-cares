// String , Number , Boolean , BigInt(ES2020) , Undefined , Null , Symbol(ES^) , Object
// Short 16 bit , int 32 bit , float 64 bit

// let result = Boolean(20 + 20) + 'hello';

// 0 = false , anything other than 0 = true

// console.log(result); // 200

let result = Boolean(20 + String(20)) + 1;

// String(20) = 20 , 20 + String(20) = 2020 , Boolean(20 + String(20) = 1

console.log(result); // true