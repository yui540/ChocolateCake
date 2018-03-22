<content>
  <a href={ "/#/watch/" + opts.cid }
    class="content"
    title={ opts.title }
    style="animation:fadein 2s ease { 1.5 + (opts.number * 0.2) }s forwards"
    onclick={ onClick }>
    <div class="content__thumb">
      <div class="content__thumb-image"
        style="background-image: url({ opts.thumb })"></div>
      <div class="content__thumb-filter"></div>
    </div>
    <h4 class="content__title">{ opts.title }</h4>
  </a>
</content>
