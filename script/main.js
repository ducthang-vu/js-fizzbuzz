/* 
* A script printing all integers n, being (1 <= n <= 100), provided that: multiples of both 3 and 5 are substituted with the string "FizzBuzz"; multiples of 3 but not 5 with "Fizz"; and multiples of 5 but not 3 with "Buzz".
*/


console.log('main. js is working')


// BASIC SOLUTION //

alert('Solution of problem in CONSOLE')
for (i = 1; i < 101; i++) {
    if (i % 15 == 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}


/*****************/
/* --- BONUS --- */
/****************/

var main_table = document.getElementById('main-table-body')
var default_button = document.getElementById('default-button')
var custom_button = document.getElementById('custom-button')


// FUNCTIONS
function building_table_orderItem(array, table) {
    // A function accepting an array and a element table-body, and building 2-cells rows (index-position, item) from the array
    var new_content = ''
    for (i = 0; i < array.length; i++) {
        new_content += '<tr><td>' + i + '</td><td>'  + array[i] + '</td></tr>'
    }
    table.innerHTML = new_content  
    console.log('building_table_orderItem function used.')
}

function building_list(min, max, a, b) {
    // A function accepting four integers (min, max, a, b), and returing a list of all integers n, being min <= n <= a, provided that: multiples of both a and b are substituted with the string "FizzBuzz"; multiples of a but not b with "Fizz"; and multiples of b but not a with "Buzz".
    var list = []

    for (i = min; i < (max + 1); i++) {
        if (i % (a * b) == 0) {
            list.push('FizzBuzz')
        }
        else if (i % a == 0) {
            list.push('Fizz')
        }
        else if (i % b == 0) {
            list.push('Buzz')
        }
        else {
            list.push(i)
        }
    }

    return list
}


// EVENTS
default_button.addEventListener('click', 
    function () {
        var list = building_list(1, 100, 3, 5)
        building_table_orderItem(list, main_table)
        
        // resetting inputs to default
        document.getElementById('min').value = 1
        document.getElementById('max').value = 100
        document.getElementById('a').value = 3
        document.getElementById('b').value = 5
    }
)



custom_button.addEventListener('click', 
    function () {
        var min = parseInt(document.getElementById('min').value)
        var max = parseInt(document.getElementById('max').value)
        var a = parseInt(document.getElementById('a').value)
        var b = parseInt(document.getElementById('b').value)

        var list = building_list(min, max, a, b)

        building_table_orderItem(list, main_table)
    }
)