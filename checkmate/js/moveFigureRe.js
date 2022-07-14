const figure = document.querySelector(".figure")
let dragging = false

let startX = 0
let startY = 0

figure.addEventListener("mousedown", (e) => {
  dragging = true

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

document.body.addEventListener("mouseup", () => {
  dragging = false
})