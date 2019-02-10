// Задание 1

// function getSevenCol(arr) {
//     var result = arr.reduce(function(amount,el) {
//         // while (el>0) {
//             if (el%10==7) {
//                 amount++;
//             } else {
//                 el=el/10|0;
//             }
//         // }
//     },0);
//     return result;
// };
// console.log(getSevenCol([1, 7, 4, 77, 73]));


// Задание 2

// function arrToStr(arr) {
//     // var combination = arr.forEach(function(el) {
//         // for (var i=0; i<arr.length; i++)
//         var arr2 = arr.splice(0,0,arr.splice(arr[-1][1]))
//         // var arr.concat() = arr[0] + arr[-1] + arr[1] + arr[-2] + arr[2] + arr[-3];
//         return arr2;
//     // })
// };
//
// console.log(arrToStr(["a","b","c","d","e","f"]))



var arr = ["a","b","c","d","e","f"];
var b = arr.slice(1,2)
// console.log(b);
var arr123 = arr.concat(arr.splice(0,1),arr.splice(6),arr.splice(1,1),arr[-2],arr[2],arr[-3])
var arr1 = arr.concat(arr.slice(0,1),arr.slice(6))
var arr2 = arr.splice(1,1)
var arr3 = [arr[5]].concat(arr.slice(0,5),arr.slice(6));
var arr4 = arr.splice(1,1);
console.log(arr123);
// console.log(arr3); //"afbecd"
// console.log(arr4);
