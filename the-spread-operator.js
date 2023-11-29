/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1=[1,2,3]

let arr2=arr1

console.log('second arry', arr2)

 arr2.push(4)
 console.log('second arry', arr2)
 console.log('first arry', arr1)

 // solving first arry above and third arry below remain untouch the issue by spread oprator
// Copying an array
 let arr3=[3,4,5]
 let arr4=[...arr3]
 arr4.push(7)
 console.log('Third arry', arr3)
 console.log('fourth arry', arr4)
 


// Copying an object
 let obj1={ a:1, b:2, c:3}
 let obj2={...obj1, d:4}
 let obj3={ ...obj1, b:5}
 console.log('object1', obj1)
 console.log('object2', obj2)
 console.log('object3', obj3)
// Copying only part of an array/object

let arr5=[...arr1,{...obj1}, ...arr2, 'x','y','z']
console.log('arry5', arr5)