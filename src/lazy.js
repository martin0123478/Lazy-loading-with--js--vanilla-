
const isIntersecting = (entry) =>{
  return entry.isIntersecting // true
}

const loadImage = (entry) => {
  const container = entry.target
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  //cargue imagen
  imagen.src = url
  
  observador.unobserve(container);
}
const observador = new IntersectionObserver((entries) => {
  entries
  .filter(isIntersecting)
  .forEach(loadImage)
})
export const registerImage = (imagen) =>{
  //IntersectionObservador -> observe (imagen)
  observador.observe(imagen)
}