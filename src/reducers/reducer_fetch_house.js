export default (state = [], action) => {
  switch(action.type) {
  case 'HOUSE_FETCH':
    return [...state, action.payload]
  }
  return state
}