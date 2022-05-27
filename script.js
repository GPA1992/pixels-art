//gerar cores random
function generateColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
  
}


// titulo
let corpo = document.querySelector('body');
let tagH1 = document.createElement('h1');
  tagH1.innerText = 'Paleta de Cores';
  tagH1.id = 'title';
      corpo.appendChild(tagH1);

//Paleta de Cores
  
let colorPallete = document.createElement('section');
  colorPallete.id = 'color-palette'
  corpo.appendChild(colorPallete);
// quadrado paleta de cores
function criarQuadrados (quantidade, className) {

  for (let i = 0; i < quantidade; i +=1) {
      let box = document.createElement('div');
      box.className = className;
      box.style.backgroundColor = generateColor();
      colorPallete.appendChild(box) 
  }
}
criarQuadrados(4, 'color');

//Botão Limpar
  let navBar = document.createElement('nav')
  corpo.appendChild(navBar); 

  let botao = document.createElement('button');
  botao.innerText = 'Limpar';
  botao.id= 'clear-board'
  navBar.appendChild(botao);

  botao.addEventListener('click', limparPixels);
  function limparPixels() {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i ++ ) {
  pixels[i].style.backgroundColor = 'white';
}
};





// Pixel Board
    const inputBoard = document.createElement('input');
    inputBoard.id= 'board-size';
    inputBoard.type='number';
    inputBoard.min='1';
    inputBoard.max='49'
    inputBoard.value = 5;
    navBar.appendChild(inputBoard);
  
   const botaoVqv = document.createElement('button');
    botaoVqv.id = 'generate-board';
    botaoVqv.innerText = 'VQV';
    navBar.appendChild(botaoVqv);

    const pixelBoard = document.createElement('section');
    pixelBoard.id = 'pixel-board'
    corpo.appendChild(pixelBoard);

  function criarPixel (size) {
    pixelBoard.style.gridTemplateColumns = '40px '.repeat(size);
    pixelBoard.style.gridTemplateRows = '40px '.repeat(size);
    for (let i = 0; i < size * size; i++) {
            const box = document.createElement('div');
            box.className = 'pixel';
            pixelBoard.appendChild(box);
                        
        }
    }  
  criarPixel(5);

    function clearBoard () {
      const board = document.getElementById('pixel-board');
      const divPixels = board.children.length;
      for (let index = 0; index < divPixels; index += 1) {
        pixelBoard.removeChild(board.firstChild);
      }
    }
    
    function newBoard(){
    botaoVqv.addEventListener('click', function(){
        clearBoard ()
        criarPixel(inputBoard.value)
      })
      
    }
 
    newBoard();

  
 
//  
const firstBlack = document.getElementById('color-palette').firstElementChild;
firstBlack.style.backgroundColor = 'black';

const palleteCor = document.querySelector('#color-palette').firstElementChild;
palleteCor.className += ' selected'
 
// Altera os Selected e Seleciona a cor

const colors = document.getElementsByClassName('color');

function changeSelected () {
    const colors = document.getElementsByClassName('color');
    for (let i = 0; i < colors.length; i++ ) {
    colors[i].addEventListener('click', () => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    colors[i].classList.add('selected');
    });
  }
}
changeSelected () 


// Pintar os Pixels
const pixels = document.getElementsByClassName('pixel');
for (let i = 0; i < pixels.length; i ++) {
  pixels[i].addEventListener('click', selectColor);
function selectColor (){
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    pixels[i].style.backgroundColor = selectedColor;
  };
}










    









  
 






     




     



    



  

