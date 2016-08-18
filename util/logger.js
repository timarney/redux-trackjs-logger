import axios from 'axios'
let jsonURL = 'http://localhost:8000'
let reportURL = `${jsonURL}?remotedev_report=`
let token = window._trackJs.token
let trackJsCaptureUrl = `https://capture.trackjs.com/capture?token=${token}`
let actions = []
let supressNextScriptError = false

function trackError (payload) {
  supressNextScriptError = true
  // save actions to a json file (myjson.com)
  const postData = {type: 'ACTIONS',payload: actions }
  axios.post(jsonURL, postData)
    .then(function (response) {
      // console.log(response)
      sendError(response, payload)
    })
    .catch(function (err) {
      console.log(err)
    })
}

function sendError (response, payload) {
  let filename = `${reportURL}${response.data.id}`
  // create a reference to the json file and send to TrackJS
  let data = {message: filename, severity: 'log', timestamp: payload.timestamp}
  payload.console.push(data)
  // send the payload manually
  axios.post(trackJsCaptureUrl, JSON.stringify(payload))
}

export function configureTracker () {
  if (window._trackJs.token === 'YOUR_TOKEN') {
    alert('You need to add your TrackJS token to index.html')
  }

  window.trackJs.configure({
    onError: (payload, error) => {
      if (payload.message.indexOf('Script error') >= 0 && supressNextScriptError) {
        supressNextScriptError = false
        return false
      }
      trackError(payload)
      return false // We will send the payload ourselves
    }
  })
}

export function logActions (stateSanitizer) {
  return store => next => action => {
    actions.push(action)
    return next(action)
  }
}
