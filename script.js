// funções



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

// Item 2 - Paleta de cores
    
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

//primeiro quadrado preto
function selectBlack() {
  const palette = document.getElementsByClassName('color');
  palette[0].classList.add('selected');
}

// Pixel Board

 let section2 = document.createElement('section');
    section2.id = 'pixel-board'
    corpo.appendChild(section2);

    for (let i = 0; i < 25; i++) {
        const box = document.createElement('div');
        box.className = 'pixel';
        section2.appendChild(box);
        
    }  


    ueee
    
   






       

 
  

       



      
  


    
 

