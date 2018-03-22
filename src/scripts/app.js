import riot from 'riot'
import route from 'riot-route'
import riotx from 'riotx'
import 'riot-hot-reload'
import './components/app.tag'
import contents from './config/content'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const router = route.create()
const store = new riotx.Store({
  state: {
    watch: null,
    contents: contents.reverse()
  },
  getters: getters,
  actions: actions,
  mutations: mutations
})
riotx.add(store)

/**
 * routing
 */
route('/', () => {
  store.action('watch', { watch: null })
})

route('/watch/*', path => {
  store.action('watch', { watch: path })
})

route('/..', () => {
  route('//')
})

riot.mount('app')
route.start(true)
