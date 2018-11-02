class Particle {
  constructor(canvas, ctx, size) {
    this._canvas = canvas
    this._ctx = ctx

    this.size = size
    this.x = Math.random() * this._canvas.width
    this.y = -this.size

    this.yy = 0
  }

  draw() {
    this.yy += 1
    this.yy *= 0.95
    this.y += this.yy
    
    if (this.y > (this._canvas.height - this.size)) {
      this.y = this._canvas.height - this.size
      this.yy *= -1
    }

    this._ctx.globalCompositeOperation = 'destination-in'
    this._ctx.moveTo(this.x, this.y)
    this._ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this._ctx.lineTo(this.x, this.y)
  }
}

class Bg {
  constructor(canvas, ctx) {
    this._canvas = canvas
    this._ctx = ctx

    this.load = false
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height

    this.img = new Image()
    this.img.onload = (() => {
      this.load = true
    }).bind(this)
    this.img.src = './logo.png'
  }

  draw() {
    if(!this.load) return
    this._ctx.globalCompositeOperation = 'source-over'
    this._ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}


{
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 800
  canvas.height = 420

  const bg = new Bg(canvas, ctx)
  const particles = [new Particle(canvas, ctx, 20)]
  let start = new Date().getTime()
  let diff = 0

  const draw = () => {
    let current = new Date().getTime()
    diff = current - start

    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    bg.draw()

    if (diff >= 5) {
      start = new Date().getTime()
      diff = 0
      particles.push(new Particle(canvas, ctx, (Math.random() * 40)))
    }

    ctx.beginPath()
    particles.forEach(particle => {
      particle.draw()
    })
    ctx.closePath()
    ctx.fill()

    requestAnimationFrame(draw)
  }

  draw()
}
