export default (state = null, action) => {
  switch(action.type) {
  case 'FOO_ACTION':
    return action.payload
  }
  return state
}