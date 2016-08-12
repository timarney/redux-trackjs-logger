# Redux TrackJS Action Logger
Logs user actions to TrackJS so you can replay them later.  Note at this point this is a really basic proof of concept... it does work (cut and paste to replay actions).  I have an issue open on the dev tools to see about making this more automatic https://github.com/gaearon/redux-devtools/issues/309 

#Setup
index.html enter your TrackJS token

npm install
npm start

#Re-Run actions
For now I'm manually copy / pasting data from the TrackJS error see "Test reloading the data" in index.js

```
const loggedData = [{
  'type': 'INCREMENT'
}, {
  'type': 'INCREMENT'
}, {
  'type': 'INCREMENT'
}]

loggedData.map((item) => store.dispatch(item))
```
#Sample error message

![alt text](https://github.com/timarney/redux-trackjs-logger/blob/master/images/error.png "Error Message")

#Todo
I'm looking into being able to import via Redux Dev Tools
