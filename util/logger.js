function setPayload (payload, error) {
  // @todo save json file of actions
  const filename = 'mydata'
  console.log(actions)
  payload.console.push({
    message: `actions logged to ${window.location.origin}/${filename}.json`,
    severity: 'log',
    timestamp: payload.timestamp
  }
  )
  return true
}

let actions = []

export function configureTracker () {
  window.trackJs.configure({
    onError: (payload, error) => setPayload(payload, error)
  })
}

export function logActions (stateSanitizer) {
  return store => next => action => {
    actions.push(action)
    return next(action)
  }
}
