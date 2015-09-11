# PeopleWatchers

A peoplewatchers Node.js app using [Express 4](http://expressjs.com/).
The peoplewatchers uses a MVC framework with a ejs view engine.

The main server file is /server.js
Controllers and routes are in the separate controller files in the /controllers folder
Models are in the /models folder
Views are in the /views folder. The view files have a .ejs extension in order to work
with the ejs view engine framework. There is a /views/pages folder for full views and
/views/partials for partial reusable views.

This application supports the PeopleWatchers web site.

## Running locally on Mac
- Make sure you have [Node.js](http://nodejs.org/) installed
- Make sure you have npm installed
- Make sure that you have a heroku account
- Make sure that your heroku account has rights to the heroku peoplewatchers app
- Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed
- In a terminal window:
  - $ git clone https://github.com/dmrobins1/peoplewatchers.git
  - $ cd peoplewatchers
  - $ npm install
  - $ npm start
- In a separate terminal window (in the peoplewatchers folder you created)
start node.js running the peoplewatchers app:
  - $ node server.js
- You can use forever if you want to automatically have the server restart when changes are made to the app
  - $ forever -w server.js
- Your app should now be running on [localhost:5000](http://localhost:5000/).

## Running locally on Windows
- Make sure you have [Node.js](http://nodejs.org/) installed
- Make sure you have npm installed
- Make sure that you have a heroku account
- Make sure that your heroku account has rights to the heroku peoplewatchers app
- Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed
- In a command prompt:
  - > git clone https://github.com/dmrobins1/peoplewatchers.git
  - > cd peoplewatchers
  - > npm install
- In a separate terminal window (in the peoplewatchers folder you created)
start node.js running the peoplewatchers app:
  - > node server.js
- Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku
- From a terminal window (in the peoplewatchers folder)
- Add your changes to git
  - $ git add .
- Commit your changes to git on your current branch with a comment of "I made some awesome changes"
  - $ git commit -m "I made some awesome changes"
- Pull any remote changes from the remote to your current branch
  - $ git pull
- Resolve any conflicts...
- Push a branch to Heroku
  - $ git push heroku master
- You can open the version of the peoplewatchers app that is deployed to heroku in your default browser:
  - $ heroku open

## Using Heroku repository with SourceTree
- If you drag the PeopleWatchers folder from a finder or a explorer windows onto the mac dock or the
windows toolbar SourceTree icon, it will create a bookwark to the Heroku peoplewatchers repository