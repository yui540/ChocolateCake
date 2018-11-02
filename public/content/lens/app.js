const isSP = () => {
  const user_agent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(user_agent)
}

class Bg {
  constructor(canvas, ctx, src) {
    this._canvas = canvas
    this._ctx = ctx

    this.img = new Image()
    this.img.onload = () => {
      this.load = true
    }
    this.img.src = src
  }

  calc() {
    const width = this._canvas.width
    const height = this._canvas.height
    const aspect = width / height
    const _aspect = this.img.width / this.img.height
    let per = 0
    let rect = {}

    if (aspect > _aspect) {
      per = width / this.img.width
      rect.w = this.img.width * per
      rect.h = this.img.height * per
      rect.x = 0
      rect.y = (height - rect.h) / 2
    } else {
      per = height / this.img.height
      rect.w = this.img.width * per
      rect.h = this.img.height * per
      rect.x = (width - rect.w)
      rect.y = 0
    }

    return rect 
  }

  draw() {
    if (!this.load) return false
    this._ctx.globalCompositeOperation = 'source-over'
    const rect = this.calc()
    this._ctx.drawImage(
      this.img,
      rect.x,
      rect.y,
      rect.w,
      rect.h
    )
  }
}

class Collection {
  constructor(canvas, ctx) {
    this._canvas = canvas
    this._ctx = ctx

    this.list = []
    this.current = null

    if (!isSP()) {
      this._canvas.addEventListener('mousedown', this.mousePress.bind(this))
      this._canvas.addEventListener('mouseup', this.mouseUp.bind(this))
    } else {
      this._canvas.addEventListener('touchstart', this.touchStart.bind(this))
      this._canvas.addEventListener('touchend', this.touchEnd.bind(this))
    }
  }

  mousePress(e) {
    const ball = new Ball(this._canvas, this._ctx)
    ball.mode = 'press'
    ball.x = e.clientX
    ball.y = e.clientY

    this.list.push(ball)
    this.current = ball
  }
  
  touchStart(e) {
    const ball = new Ball(this._canvas, this._ctx)
    ball.mode = 'press'
    ball.x = e.changedTouches[0].clientX
    ball.y = e.changedTouches[0].clientY

    this.list.push(ball)
    this.current = ball
  }

  mouseUp() {
    if(!this.current) return

    this.current.mode = 'up'
    this.current = null
  }
  
  touchEnd() {
    if(!this.current) return

    this.current.mode = 'up'
    this.current = null
  }

  draw() {
    this.list.forEach(ball => ball.draw())
  }
}

class Ball {
  constructor(canvas, ctx) {
    this._canvas = canvas
    this._ctx = ctx

    this.size = 0
    this.x = 0
    this.y = 0
    this.mode = 'init'

    this.add = 0
  }

  draw() {
    switch (this.mode) {
      case 'press':
        this.zoom()
        break
      case 'up':
        this.drop()
        break
      case 'init':
        return false
      default:
        return false
    }

    this._ctx.globalCompositeOperation = 'destination-in'
    this._ctx.moveTo(this.x, this.y)
    this._ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this._ctx.lineTo(this.x, this.y)
  }

  zoom() {
    this.size += 2
    this._size = this.size
  }

  drop() {
    this.add += 0.5
    this.add *= 0.95
    this.size -= this.add

    if (this.size < this._size / 3) {
      this.size = this._size / 3
      this.add *= -1
    }
  }
}

{
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const bg = new Bg(canvas, ctx, './ogp.png')
  const collection = new Collection(canvas, ctx)

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (collection.list.length !== 0) bg.draw()

    ctx.beginPath()
    collection.draw()
    ctx.closePath()

    ctx.fill()

    requestAnimationFrame(draw)
  }

  draw()
}
