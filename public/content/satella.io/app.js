(() => {
  const root = document.getElementById('root')
  const load_view = document.querySelector('.load-view')
  const prologue = document.querySelector('.prologue')
  
  load_view.addEventListener('animationend', () => {
    root.removeChild(load_view)
  })
  prologue.addEventListener('animationend', (e) => {
    if(e.animationName === 'move-3')
      root.removeChild(prologue)
  })
})()
