export default {
  watch: (context, data) => {
    return Promise
      .resolve()
      .then(() => {
        context.commit('watch', data)
      })
  } 
}
