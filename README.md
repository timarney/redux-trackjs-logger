# Redux TrackJS Action Logger
Logs user actions to TrackJS so you can replay them later.

#Setup
index.html enter your TrackJS token
npm install
npm start

#Re-Run actions
Actions get logged to the logs directory -> the reference to the file is tracked via TrackJS

1. Grab the file
2. Import via the Redux Dev Tools to get back to the error state
3. Replay the actions

#Notes
This all started here - *@react30* https://twitter.com/timarney/status/764192482535940096

In a real app this simple setup likley won't work see: *@mdiordiev* https://twitter.com/mdiordiev/status/764528409590501377 that said this is promising https://www.youtube.com/watch?v=cbXLohVbzNI&feature=youtu.be&t=1122

#For more inspiration 
check out *@jrullmann* https://medium.com/@jrullmann/redux-error-reports-concept-ab85b658f53e#.6z3oouu71
<hr>

*Sample Error Message*

![alt text](https://github.com/timarney/redux-trackjs-logger/blob/master/images/error-log.png "Error Message")
