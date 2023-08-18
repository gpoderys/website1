// JavaScript source code

let a = prompt('Please log in')

if (a === 'admin') {
    let b = prompt('Enter password')
        if (b === 'password') {
            alert('You are logged in');
        } else {
            alert('wrong password')
        }
} else {
    alert('User unknown')
}