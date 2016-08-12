# redux-trackjs-logger

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

#Todo
I'm looking into being able to import via Redux Dev Tools