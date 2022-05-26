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


    
  let section = document.createElement('section');
    section.id = 'color-palette'
    corpo.appendChild(section);

function criarQuadrados (quantidade, className) {
  
    for (let i = 0; i < quantidade; i +=1) {
        let box = document.createElement('div');
        box.className = className;
        box.style.backgroundColor = generateColor();
        section.appendChild(box) 
    }
}
criarQuadrados(4, 'color');

    let section2 = document.createElement('section');
    corpo.appendChild(section2); 

    let botao = document.createElement('button');
    botao.innerText = 'Limpar';
    botao.id= 'clear-board'
    section2.appendChild(botao);


// Pixel Board

 let section3 = document.createElement('section');
    section3.id = 'pixel-board'
    corpo.appendChild(section3);

    for (let i = 0; i < 25; i++) {
        const box = document.createElement('div');
        box.className = 'pixel';
        section3.appendChild(box);
        
    }  

  
   
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

// resetar botão
botao.addEventListener('click', limparPixels);
  function limparPixels() {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i ++ ) {
    pixels[i].style.backgroundColor = 'white';
  }
  
};


  


  


      








  
    
   






       

 
  

       



      
  


    
 

