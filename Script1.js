const bdy = document.body
const newDiv = document.createElement('div')
newDiv.classList.add('megaDiv')
newDiv.style.backgroundColor = 'pink'
newDiv.style.borderColor = 'black'
newDiv.style.height = '200px'
bdy.appendChild(newDiv)

const container = document.querySelector('.megaDiv');
const content = document.createElement('p');
content.textContent = "Hey I'm Here!";
container.appendChild(content);

const container2 = document.querySelector('.megaDiv');
const content2 = document.createElement('h3');
content2.textContent = "Hey I'm Here too!";
content2.style.color = 'blue'
container2.appendChild(content2);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });