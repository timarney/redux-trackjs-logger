import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { configureTracker, logActions } from './util/logger'
import Counter from './components/Counter'
import counter from './reducers'

function devTools () {
  return typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
}

// setup TrackJS as the logger
configureTracker()

let initialState = 5

const store = createStore(counter, initialState, compose(
    applyMiddleware(logActions()),
    devTools()
  ))

const rootEl = document.getElementById('root')

function render () {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  )
}


render()
store.subscribe(render)

/* Test reloading the data - i.e. copy data from TrackJS error message
const loggedData = [{
  'type': 'INCREMENT'
}, {
  'type': 'INCREMENT'
}, {
  'type': 'INCREMENT'
}]

loggedData.map((item) => store.dispatch(item))
*/
