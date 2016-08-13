export default function counter (state = 0, action) {
  if (state === 7) {
    throw new Error('Track This Error!')
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
