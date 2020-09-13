import "./styles.css";
import Matrix from './Matrix'
const matrix = new Matrix(5)

document.addEventListener('keydown', function(event){
  // console.log('as', event)
  let keyResult = matrix.keyHandler(event.keyCode)
  app.innerHTML = matrix.render()
})

document.getElementById("app").innerHTML = matrix.render()