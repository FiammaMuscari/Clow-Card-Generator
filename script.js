//contenedor cartas, cambios
function clearAll() {
    const cardContainer = document.querySelector('.cards-content');
    
    cardContainer.innerHTML = '';
  }
  
  function showCard() {
    // funcion al presionar boton
    const randomCard = getRandomData('cards');
    const container = document.querySelector('.cards-content');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', randomCard);
    const cardBack =  document.getElementById("tapeImagen");
    cardBack.style.display = "none";
  
    
    clearAll();
    
    container.appendChild(newImg);
  }
  
  
  // para que se genere una carta random
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  //cartas
  const cards = [ 'https://i.ibb.co/710FZj7/Clow-Arrow.png','https://i.ibb.co/JktSDsL/ClowBig.jpg','https://i.ibb.co/LrZ13Rq/Clow-Bubbles.jpg', 'https://i.ibb.co/sHM1mQk/Clow-Change.jpg' , 'https://i.ibb.co/nf4TBjg/Clow-Cloud.jpg' , 'https://i.ibb.co/HtMB3Xb/Clow-Create.jpg' , 'https://i.ibb.co/bHDfL9f/ClowDark.jpg','https://i.ibb.co/PFQ9jML/ClowDash.jpg', 'https://i.ibb.co/xL6nSQ1/Clow-Dream.jpg', 'https://i.ibb.co/VLTjMwL/Clow-Earthy.jpg', 'https://i.ibb.co/X33NFHR/Clow-Erase.jpg', 'https://i.ibb.co/HdbthG4/Clow-Fight.jpg', 'https://i.ibb.co/xDzRDDX/Clow-Firey.jpg', 'https://i.ibb.co/X4HTY7C/Clow-Float.jpg', 'https://i.ibb.co/bB6zhRV/Clow-Flower.jpg', 'https://i.ibb.co/9TL6KfY/ClowFly.jpg', 'https://i.ibb.co/v4xBNCk/Clow-Freeze.jpg', 'https://i.ibb.co/9Vj9hLy/ClowGlow.jpg', 'https://i.ibb.co/t4Kqx1c/Clow-Illusion.jpg', 'https://i.ibb.co/GR3kPgV/ClowJump.jpg', 'https://i.ibb.co/H47C4JM/Clow-Libra.jpg','https://i.ibb.co/HnL7BcH/Clow-Light.jpg', 'https://i.ibb.co/44P8L2h/Clow-Little.jpg', 'https://i.ibb.co/qdcVmjz/ClowLock.jpg', 'https://i.ibb.co/mGRy4b5/ClowLoop.jpg', 'https://i.ibb.co/V3tc5n4/ClowMaze.jpg', 'https://i.ibb.co/p31KcVL/Clow-Mirror.jpg', 'https://i.ibb.co/nksmvDc/ClowMist.jpg', 'https://i.ibb.co/s9FQTLf/ClowMove.jpg', 'https://i.ibb.co/3RhKKPd/Clow-Nothing.jpg', 'https://i.ibb.co/R4MrSmh/Clow-Power.jpg', 'https://i.ibb.co/bH2K06w/ClowRain.jpg', 'https://i.ibb.co/RH4sN2R/Clow-Return.jpg', 'https://i.ibb.co/DYwYJ0f/ClowSand.jpg', 'https://i.ibb.co/7185zty/Clow-Shadow.jpg', 'https://i.ibb.co/sv7XW5Z/Clow-Shield.jpg', 'https://i.ibb.co/KjBCWwV/ClowShot.jpg', 'https://i.ibb.co/PrPST9w/Clow-Silent.jpg', 'https://i.ibb.co/4N4YZz0/Clow-Sleep.jpg', 'https://i.ibb.co/Mn7FFp9/ClowSnow.jpg', 'https://i.ibb.co/b5yzwjQ/ClowSong.jpg', 'https://i.ibb.co/t4SLHrZ/Clow-Storm.jpg', 'https://i.ibb.co/7bcXrGQ/Clow-Sweet.jpg', 'https://i.ibb.co/pW5vWHF/Clow-Sword.jpg', 'https://i.ibb.co/tLXsSLV/Clow-Through.jpg', 'https://i.ibb.co/YbkCG5V/Clow-Thunder.jpg', 'https://i.ibb.co/cyFxGM7/ClowTime.jpg', 'https://i.ibb.co/hg0PKCB/ClowTwin.jpg', 'https://i.ibb.co/SxhC9j6/Clow-Voice.jpg', 'https://i.ibb.co/R7Wt0G5/Clow-Watery.jpg', 'https://i.ibb.co/68PvYRj/ClowWave.jpg', 'https://i.ibb.co/0cv6hz6/Clow-Windy.jpg', 'https://i.ibb.co/kH0G7xS/ClowWood.jpg' ];
  
  
  
  //funciones de ayuda
  function rn(len) {
    return Math.floor(Math.random() * len);
  }
  
  const data = {
    cards
  };
  
  