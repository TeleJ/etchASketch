const wrapper = document.querySelector('.wrapper');
// let numberCount = 0;

function createTable() {
  for (let i = 0; i < 256; i += 1) {
    // numberCount += 1;
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'singleSquare');
    // createDiv.setAttribute('class', `singleSquare ${numberCount}`);
    wrapper.appendChild(createDiv);
  }
}

function changeColor() {
  const divs = document.querySelectorAll('.singleSquare');
  divs.forEach(div => {
    const selectedDiv = div;
    div.addEventListener('mouseenter', function setColor() {
      const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      selectedDiv.style.backgroundColor = color;
    });
  });
}

const cells = wrapper.children;
const button = document.getElementById('resetButton');
button.addEventListener('click', function reset() {
  for (let i = 0; i < cells.length; i += 1) {
    if (!(cells[i].getAttribute('style') == null)) {
      cells[i].removeAttribute('style');
    }
  }
});

createTable();
changeColor();
