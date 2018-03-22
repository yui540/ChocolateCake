export default {
  watch: (context, data) => {
    context.state.watch = data.watch
    return ['watch']
  }
}
