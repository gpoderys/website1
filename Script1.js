
let answer = +prompt('Enter your number')
if (answer < 1 || answer > 100) {
    alert('Enter valid number')
} else if (answer === undefined || answer === NaN) {
    alert('please enter a number')
} else {
    for (let i = 1; i <= answer; i++){
        if (i%3 == 0 && i%5 == 0) {
            console.log('fizzbuzz')
        } else if (i%3 == 0) {
            console.log('fizz')
        } else if (i%5 == 0) {
            console.log('buzz')
        } else 
            {console.log(i)}
    }
}