{
  const imgs = document.querySelectorAll('.img-box')
  const modal = document.querySelector('.large-img')
  const _img = document.querySelector('.large-img .img')
  const close = document.querySelector('.close')

  imgs.forEach((img, key) => {
    img.addEventListener('click', () => {
      modal.setAttribute('data-state', 'active')
      modal.style.display = 'block'
      _img.style.backgroundImage = `url(./imgs/${key + 1}.png)`
    })
  })
  close.addEventListener('click', () => {
    modal.setAttribute('data-state', '')
    modal.style.display = 'none'
  })
}