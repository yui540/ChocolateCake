<modal-view>
  <div if={ isWatch() } class="modal-view">
    <a class="modal-view__close-btn" href="/#/"><div></div></a>
    <img class="modal-view__thumb"
      src={ state.thumb_large }
      alt={ state.id }
    />
    <h4 class="modal-view__title">{ state.title }</h4>
    <p ref="description" class="modal-view__description"></p>
    <a class="modal-view__link"
      href={ state.link }
      target="_blank">
      <strong>ページを見る</strong>
    </a>
  </div>

  <script>
  this.isWatch = () => !!opts.cid

  const store = this.riotx.get()
  this.state = {}

  store.change('watch', (state, store) => {
    if(this.isWatch())
      this.state = store.getter('content', opts)
    if(this.refs.description)
      this.refs.description.innerHTML = this.state.description

    this.update()
  })
  </script>
</modal-view>
