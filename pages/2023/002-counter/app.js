// select value and buttons
const value = document.querySelector('#value');
const getNum = document.getElementById('get-num');
const btns = document.querySelectorAll('.btn');   // querySelectorAll returning as NodeList which is array-like

// set initial count
let count = 0;
let number = 1;

getNum.addEventListener('input', (event) => {
  const num = event.target.value;
  number = parseInt(num);
})


btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {

    const styles = event.currentTarget.classList;
    if (styles.contains('decrease')){
      count -= number;
    } else if (styles.contains('increase')){
      count += number;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'green';
    } else {
      value.style.color = '#222';
    }
    
    value.textContent = count;
  })
})