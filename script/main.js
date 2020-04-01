/* 
* A script printing all integers n, being (1 <= n <= 100), provided that: multiples of both 3 and 5 are substituted with the string "FizzBuzz"; multiples of 3 but not 5 with "Fizz"; and multiples of 5 but not 3 with "Buzz".
*/

console.log('main. js is working')

for (i = 1; i < 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log('Fizz')
    }
    else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}
