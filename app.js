const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
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

  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];

  color.textContent = colors[randomNumber];

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

