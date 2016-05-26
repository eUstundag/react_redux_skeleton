export default (state = null, action) => {
  switch(action.type) {
  case 'FOO':
    return action.payload
  }
  return state
}