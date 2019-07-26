//
// Задачи:
// 1. Написать функцию, которая принимает 2 массива строк. В первом -
// обычные строки, можно предложения, а во втором массиве - стоп-символы
// (%, ?, @, ~ и т.п.).
// Функция возвращает первый массив без стоп-символов из второго.
// 2. Написать функцию, которая будет возвращать строку-поздравление с
// днем рождения. Функция принимает name, age, city. И возвращает
// поздравительный текст, внутри которого используются аргументы функции.
// 3. Написать фунцию, которая убирает из массива все слова, у которых
//  первая и последняя буква не совпадают.
// 4. Написать функцию, которая принимает массив чисел и убирает те
//  числа, которые, если отнять 50, будут меньше либо равны 0.
// 5. Написать функцию (можно две), delectPalindromes. Принимает
// массив строк и удаляет из него те, которые не являются палиндромами.



// TASK1
// function Arr(str1,str2) {
//     var arr1 = str1.split('');
//     var arr2 = str2.split(',');
//     for (var i = 0; i < arr1.length; i++) {
//         if(arr2.includes(arr1[i])){
//           arr1.splice(i, 1);
//         }
//       }
//     var arr1 = arr1.join('');
//      console.log(arr1);
//   }
// var arr1 = 'This! fucking? shit keeps pissing me off!';
// var arr2 = ('!,%,#,@,?')
// var resulr = Arr(arr1, arr2);

function Arr(str1,str2) {
    var arr1 = str1.split('');
    var arr2 = str2.split(',');
    res = arr1.filter(x => !arr2.includes(x));
    var res = res.join('');
    console.log( res )
   }
var arr1 = 'This! fucking? shit keeps pissing me off!';
var arr2 = ('!,%,#,@,?')
Arr(arr1, arr2);

// TASK2

let birthdayString = (name, age, city) => `Happy Birthday ${name} ${age} from ${city}`
console.log(birthdayString('Anna', 28, 'Kiev'));

// TASK3

// function deleteWords(arr) {
//   var result = [];
//   for (var i = 0; i < arr.length; i++) {
//     var arrLetter = arr[i].split('');
//     if (arrLetter[0] == arrLetter[arrLetter.length - 1]) {
//       result.push(arr[i]);
//     }
//   }
// console.log(result);
// }
// var arr = ["awake", "control", "escape", "test", "fire"];
// var result = deleteWords(arr);

let arr = ["awake", "control", "escape", "test", "fire"];
// let deleteWords = arr.filter(i => i.substr(0,1)==i.substr(i.length - 1, 1));
let deleteWords = arr.filter(i => i[0]==i[i.length - 1]);
console.log(deleteWords);


// TASK4

let arr = [100, 50, 20, 200, 10, 4, 6, 300];
let calc = arr.filter(i => i - 50 > 0);
console.log(calc);



// TASK5

let arr = ['eye','Anna', 'level', 'Rotor', "control", "escape", "test", "fire" ];
let arrSplit = arr.map(i => i.split('').reverse().join('').toLowerCase());
console.log(arrSplit);
let result = arr.filter(i => i.toLowerCase() == arrSplit[arr.indexOf(i)]);
console.log(result);
