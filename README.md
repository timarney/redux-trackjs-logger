# Redux TrackJS Action Logger

#Setup
Index.html enter your TrackJS token

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
