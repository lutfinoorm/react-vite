document.body.style.margin = '0'

const navBar = document.getElementById('nav-bar');
navBar.style.backgroundColor = 'grey';
navBar.style.margin = '0';


const paragraphEl = document.createElement('a');
paragraphEl.innerText = "Homepage";
paragraphEl.href = '../../../index.html'
paragraphEl.style.color = 'whitesmoke';
paragraphEl.style.textDecoration = 'none';

navBar.append(paragraphEl);
