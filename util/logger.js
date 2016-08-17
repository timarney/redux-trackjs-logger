import axios from 'axios'

function setPayload (payload, error) {
  const filename = `data${payload.timestamp}`
  // save json file of actions [{"type":"INCREMENT"},{"type":"INCREMENT"},{"type":"DECREMENT"}]

  // Note: modify this to however you want to save your file
  // demo uses server.js
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
  if (window._trackJs.token === 'YOUR_TOKEN') {
    alert('You need to add your TrackJS token to index.html')
  }
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
