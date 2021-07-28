
const isIntersecting = (entry) =>{
  return entry.isIntersecting // true
}

const accion = (entry) => {
  const nodo = entry.target
  console.log('holis')
  observador.unobserve(nodo);
}
const observador = new IntersectionObserver((entries) => {
  entries
  .filter(isIntersecting)
  .forEach(accion)
})
export const registerImage = (imagen) =>{
  //IntersectionObservador -> observe (imagen)
  observador.observe(imagen)
}