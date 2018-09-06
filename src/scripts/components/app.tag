<app>
  <main class="app">
    <img class="app__sitename" src="./images/title-logo.png" alt="タイトルロゴ" />
    <p class="app__description">
      ChocolateCakeは、yui540が作った簡単なCSS Animation作品一覧サイトです。<br />
      ブログでの制作物や暇な時間に作ったものをまとめています。<br />
      作品は全て、アニメーション部分はCSS Animationを使っています。
    </p>
    <article class="content-wrap">
      <content
        each={ content, key in contents }
        number={ key }
        cid={ content.id }
        title={ content.title }
        thumb={ content.thumb }
      />
    </article>
    <modal-view cid={ watch } />
  </main>
  <aside class="app__info">
    <section class="app__sns">
      <a class="fa fa-github" href="https://github.com/yui540"></a>
      <a class="fa fa-twitter" href="https://twitter.com/yui540"></a>
    </section>
  </aside>
  <div class="load-view" ref="load_view">
    <img ref="logo" src="./images/logo.png" alt="ロゴ" />
  </div>

  <script>
  import './content.tag'
  import './modal-view.tag'

  const store = this.riotx.get()
  this.contents = store.getter('contents')
  this.watch = store.getter('watch')

  store.change('watch', (state, store) => {
    this.watch = state.watch
    this.update()
  })

  this.on('mount', () => {
    this.refs.logo.addEventListener('animationend', () => {
      this.refs.load_view.style.display = 'none'
    })
  })
  </script>
</app>
