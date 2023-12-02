document.body.style.margin = '0'

const navBar = document.getElementById('nav-bar');
navBar.style.backgroundColor = 'grey';
navBar.style.padding = '1rem';


const homeElement = document.createElement('a');
homeElement.innerText = "Home";
homeElement.href = '../../../index.html'
homeElement.style.color = 'whitesmoke';
homeElement.style.textDecoration = 'none';
homeElement.style.fontSize = '1.3rem';


navBar.append(homeElement);
