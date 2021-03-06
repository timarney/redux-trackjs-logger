#UPDATE
⚡ **Direct Integration with Dev Tools** https://www.youtube.com/watch?v=GnmtOXGs50c
[![IMAGE ALT TEXT](http://img.youtube.com/vi/GnmtOXGs50c/0.jpg)](http://www.youtube.com/watch?v=GnmtOXGs50c "Play Redux TrackJS Logger")

See this branch **https://github.com/timarney/redux-trackjs-logger/tree/remote-dev-tools** . 

Futher info here https://github.com/zalmoxisus/remotedev-server/pull/20

#The Goal
This project aims to combine Error tracking with Redux Dev Tools to capture errors and user actions from a production setting.  

#Use Case
1. Redux Middleware is setup to capture an array of actions when an error is thrown on XYZ.com (live version)
2. Aug 15th 8pm -> User visits XYZ.com... error is thrown (log of actions is captured)
3. Aug 16th 10am -> Developer loads the logged actions into local version of XYZ.com (dev version) 
4. Redux Dev Tools replay the actions recreate the state to the point where the error happened for debugging

#How
When an error is thrown it is captured by TrackJS. The users actions up to the error point get logged for later retrieval. The error in TrackJS references the log which can imported into a local environment via Redux Dev Tools 

1. Dowload the reported file
2. Import via the Redux Dev Tools
3. The actions are automatically replayed to get back to the error state
4. Debug

Note: 
The master branch of this repo saves to a JSON file for import back to Dev Tools.  
The remote-dev-tools branch integrates directly with Dev Tools and uses remotedev-server for saving the actions.

#Setup
1. Update index.html enter your TrackJS token
2. npm install
3. npm start

#Why?
Error tracking services such as TrackJS offer great insights into where errors happen.  They give us stack traces, network information, grouped error reports and much more.

Redux + Redux Dev Tools give us the ability to step-through state and toggle actions. We can replay and even export / import state when **developing locally**.

If an error is thrown in production it would be amazing to get the `Error Report` and also be able to see what actions happened leading up to that error.  Essentially getting your local development enviroment / app **back to the state where the error** occured so you can debug locally.

#The Inspiration
I was listening to @react30 ... at about this point https://youtu.be/JTFYyK3yFmE?t=698 :bulb: :bulb: :bulb:

So I tried something and tweeted about it https://twitter.com/timarney/status/764192482535940096 and here we are (**check the note about the future below**).

#For more inspiration 
Check out *@jrullmann* https://medium.com/@jrullmann/redux-error-reports-concept-ab85b658f53e#.6z3oouu71


