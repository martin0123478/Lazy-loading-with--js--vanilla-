/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//crear imagen
//agregar #imagen
const random = () => Math.floor( Math.random() * (maximo - minimo) ) + minimo
 
const createImageNode = () =>{
  const container = document.createElement('div')
  container.className = 'p-4'
  const image = document.createElement('img')
  image.className = "mx-auto"
  image.width = '320'
  image.src = "https://randomfox.ca/images/2.jpg"
  container.appendChild(image)
  return container;
}

const nuevaImagen = createImageNode();
const mountNode =  document.getElementById('images')
mountNode.appendChild(nuevaImagen)
