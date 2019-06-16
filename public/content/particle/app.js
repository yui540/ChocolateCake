{
  const point = document.querySelector('.point')
  const effects = document.querySelector('.effects')

  addEventListener('mousemove', e => {
    point.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
  addEventListener('click', e => {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`

    for (let i=0; i < 12; i++) {
      const circle = document.createElement('div')
      circle.className = 'circle'
      particle.appendChild(circle)
    }

    effects.appendChild(particle)
  })
}