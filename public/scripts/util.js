window.isSP = () => {
  const user_agent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/
  
  return reg.test(user_agent)
}
