
#The Goal
This project aims to combine Error tracking with Redux Dev Tools to capture errors and user actions from a production setting.  

#Use Case
1. Redux Middleware is setup to capture an array of actions when an error is thrown on XYZ.com (live version)
2. Aug 15th 8pm -> User visits XYZ.com... error is thrown (log of actions is captured)
3. Aug 16th 10am -> Developer loads the logged actions into local version of XYZ.com (dev version) 
4. Redux Dev Tools replay the actions recreate the state to the point where the error happened for debugging

#How
When an error is thrown it is captured by TrackJS. The users actions up to the error point **get logged to a JSON file** (via myjson.com). The error in TrackJS **references the log file** which can be downloaded and imported into a local environment via Redux Dev Tools 

1. Dowload the reported file
2. Import via the Redux Dev Tools
3. The actions are automatically replayed to get back to the error state
4. Debug

#Setup
1. Update index.html enter your TrackJS token
2. npm install
3. npm start

#Adding to your app
At some point I'll likley drop this on NPM but for now see https://gist.github.com/timarney/c9d5ffc5708c355bc0a97775b1506219

#Direct Integration with Dev Tools 
Integration with the Dev Tools is on it's way. See https://twitter.com/mdiordiev/status/766286593166548992 and this branch https://github.com/timarney/redux-trackjs-logger/tree/remote-dev-tools

<hr>
*Sample Error Message*

![alt text](https://github.com/timarney/redux-trackjs-logger/blob/master/images/error-log.png "Error Message!")

#The Inspiration
I was listening to @react30 ... at about this point https://youtu.be/JTFYyK3yFmE?t=698 :bulb: :bulb: :bulb:

So I tried something and tweeted about it https://twitter.com/timarney/status/764192482535940096 and here we are (**check the note about the future below**).

#What
Error tracking services such as TrackJS offer great insights into where errors happen.  They give us stack traces, network information, grouped error reports and much more.

Redux + Redux Dev Tools give us the ability to step-through state and toggle actions. We can replay and even export / import state when **developing locally**.

If an error is thrown in production it would be amaizing to get the `Error Report` and also be able to see what actions happened leading up to that error.  Essentially getting your local development enviroment / app **back to the state where the error** occured so you can debug locally.


#The Future?
![alt text](http://demo.line37.com/images/dev-tools.png "Idea")

#Notes
This hasn't been tested on a real app potential issue: *@mdiordiev* https://twitter.com/mdiordiev/status/764528409590501377

#Related Projects
I'm not the only one looking into this if you know of other projects let me know.

* http://remotedev.io - https://www.youtube.com/watch?v=cbXLohVbzNI&feature=youtu.be&t=1122
* redux-bug-reporter https://github.com/dtschust/redux-bug-reporter 

#For more inspiration 
Check out *@jrullmann* https://medium.com/@jrullmann/redux-error-reports-concept-ab85b658f53e#.6z3oouu71


