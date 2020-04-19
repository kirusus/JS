/*

    Задача 2: «FizzBuzz»
    Напишите функцию fizzBuzz(n), принимающую как аргумент целое число. Функция должна выводить в консоль числа от 1 до n, заменяя числа:
    кратные трём — на fizz;
    кратные пяти — на buzz;
    кратные и трём, и пяти одновременно — на fizzbuzz.

*/

function fizzBuzz(num) {
    let res = [];

    for (i = 1; i <= num; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            res.push('FizzBuzz');
            console.log(i, 'FizzBuzz');
        } else if (i % 5 == 0) {
            res.push('Buzz');
            console.log(i, 'Buzz');
        } else if (i % 3 == 0) {
            res.push('Fizz');
            console.log(i, 'Fizz');
        } else {
            res.push(i);
            console.log(i);
        }
    }
    console.log('The result is -', res);
}

fizzBuzz(15);
/*
        1
        2
        fizz
        4
        buzz
        fizz
        7
        8
        fizz
        buzz
        11
        fizz
        13
        14
        fizzbuzz
*/