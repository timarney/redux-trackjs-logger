export default function logActions (stateSanitizer) {
  return store => next => action => {
    window.actions.push(action)
    return next(action)
  }
}
