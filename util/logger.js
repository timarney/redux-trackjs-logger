import axios from 'axios'

function setPayload (payload, error) {
  const filename = `data${payload.timestamp}`
  // save json file of actions
  axios.post('/savejson', { actions, filename })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

  payload.console.push({
    message: `actions logged to ${window.location.origin}/logs/${filename}.json`,
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
