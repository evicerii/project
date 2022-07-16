import { showKingField, getPosition} from "./king.js";

let figure = document.querySelector(".blackKing")
let dragging = false
let startArea
let startX = 0
let startY = 0


figure.addEventListener("mousedown", (e) => {
  dragging = true
  startArea = figure.closest('.columnField').querySelector('.field');

  getPosition()
  showKingField()
  //startX и startY положение курсора
  startX = e.pageX - Number.parseInt(figure.style.left || 0)
  startY = e.pageY - Number.parseInt(figure.style.top || 0)
})

document.body.addEventListener("mousemove", (e) => {
  if (!dragging) return

  // вычитая начальное положение элемента из положения курсора.
  figure.style.top = `${e.pageY - startY}px`
  figure.style.left = `${e.pageX - startX}px`
})

document.body.addEventListener("mouseup", (event) => {
    checkSubElement(event).parentElement.append(figure)

    let activeLength = document.querySelectorAll('.activeToMove').length
     --activeLength
     while(activeLength>=0){
      document.querySelectorAll('.activeToMove')[activeLength].remove()
      --activeLength
     }
    //Возвращение эл-ту базовых ха-к
    figure.style.left = '';
    figure.style.top = '';
    dragging = false
})

function checkSubElement(event){
    figure.style.display = 'none';
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    figure.style.display = 'block';
    if (!elemBelow) return;
    let droppableBelow = elemBelow.closest('.activeToMove');
    if (droppableBelow){
        return droppableBelow;
    }
    else{
        return startArea;
    }
}