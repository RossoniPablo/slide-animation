let btnNext = document.querySelector('.next')
let BtnPrev = document.querySelector('.prev')

let container = document.querySelector('.container')
let list = document.querySelector('.list')
let thumb = document.querySelector('.thumb')

btnNext.onclick = () => moveItemOnClick('next')
BtnPrev.onclick = () => moveItemOnClick('prev')


function moveItemOnClick(type) {
  let listItem = document.querySelectorAll('.list-item')
  let thumbItem = document.querySelectorAll('.thumb-item')

  if (type === 'next') {
    list.appendChild(listItem[0])
    thumb.appendChild(thumbItem[0])

    container.classList.add('next')
  }

  else {
    list.prepend(listItem[listItem.length - 1])
    thumb.prepend(thumbItem[thumbItem.length - 1])

    container.classList.add('prev')
  }

  setTimeout(() => {
    container.classList.remove('next')
    container.classList.remove('prev')

  }, 2000)
}