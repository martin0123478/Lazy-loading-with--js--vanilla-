import {registerImage} from './lazy'

//crear imagen
//agregar #imagen
const maximo = 122;
const minimo = 1;
const random = () => Math.floor( Math.random() * (maximo - minimo) ) + minimo
 
const createImageNode = () =>{
  const container = document.createElement('div')
  container.className = 'p-4'
  const image = document.createElement('img')
  image.className = "mx-auto"
  image.width = '320'
  image.src =` https://randomfox.ca/images/${random()}.jpg`
  container.appendChild(image)
  return container;
}

const nuevaImagen = createImageNode();
const mountNode =  document.getElementById('images');
const addButon = document.querySelector('button');
const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage)
}
addButon.addEventListener('click',addImage)

