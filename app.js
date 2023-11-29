const colors = ["green", "red", "rgba(133,122,200)", "#F15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnSimple = document.getElementById('btnSimple');
const btnHex = document.getElementById('btnHex');
const color = document.querySelector('.color');


btnSimple.addEventListener('click', () => {
  // get random number between 0 - 3

  function getRandomNumber(){
    const getNumber = Math.random() * colors.length;
    return Math.floor(getNumber);
  }

  const randNum = getRandomNumber();

  color.textContent = colors[randNum];
  document.body.style.backgroundColor = colors[randNum];
})

btnHex.addEventListener('click', () => {
  // get random number 0 - 15 in hexadeciomal (base 16)

  function getRandomNumber(){
    const getNumber = Math.random() * hex.length;
    return Math.floor(getNumber);
  }

  let hexColor = '#';
  for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]; 
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

