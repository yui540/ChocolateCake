export default {
  contents: context => {
    return context.state.contents
  },
  content: (context, data) => {
    const content = context.state.contents.filter(val => { return val.id === data.cid })
    return content[0]
  },
  watch: context => {
    return context.state.watch
  },
}
