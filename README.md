## IntroJS-ToDo: A Full Stack JavaScript Web Application

This simple web application implements a To Do application
with both back end and front end components.

This application was written to provide a short tour of
full stack web development with some of the core technologies
and processes involved.

* A "Back End" that runs on the server (NodeJS, Express, & EJS)
* A "Front End" framework to help show our app in the browser (ReactJS)
* A database to "persist" or store the clients data (MongoDB)
* A cloud based deployment so our app is usable by anyone on the web (Heroku)
* Test code (mocha)
* A Continuous Integration and Test that automatically tests our code (TravisCI)

### Running the app on your own computer

This process should work on most Macs, Windows, and Linux machines.

Install [NodeJS](https://nodejs.org), preferably the Current version (6.5+).
Install [MongoDB](https://www.mongodb.com/download-center#community).

In a console, start up the MongoDB database.
```shell
sudo mongod
```

Leave the mongo database running in the previous console. In another console,
change to the directory of this project and execute:
```shell
npm install
npm start
```

The above console should say "listening on this port: 3000". You should now
be able to visit <http://localhost:3000/>. The web app displays a simple
message "Hello World" followed by a simple form where you can type in a name,
a description, and a date for each "todo", with a Submit button.

### The Tour

This document won't go into details. Consider it like a bus tour of London.
The tour guide will just describe some things as we drive on past. But if
you want to really see anything, you'll need to get off the bus and study it.

### Back End

This application runs on a server using [NodeJS](https://nodejs.org) and
[ExpressJS](https://expressjs.com/) using
[EJS (Embedded JavaScript)](http://www.embeddedjs.com/) as a
templating engine to help connect the data on the server to the web browser.

NodeJS is a JavaScript environment, separate and independent
of the JavaScript environment that runs on the browser. This
environment provides a way to connect multiple modules of JavaScript
code together using NPM, or the Node Package Manager.

You can take a quick peek at all of the packages used in this web app by
typing in the console:
```shell
npm list
```

The listing will look something like the following:
```shell
react-todo@1.0.0 /Users/harold/prj/mtcode/introjs-todo
├─┬ body-parser@1.15.2
│ ├── bytes@2.4.0
│ ├── content-type@1.0.2
│ ├── debug@2.2.0
│ ├── depd@1.1.0
│ ├─┬ http-errors@1.5.0
│ │ ├── inherits@2.0.1
│ │ ├── setprototypeof@1.0.1
│ │ └── statuses@1.3.0
│ ├── iconv-lite@0.4.13
│ ├─┬ on-finished@2.3.0
│ │ └── ee-first@1.1.1
│ ├── qs@6.2.0
│ ├─┬ raw-body@2.1.7
│ │ └── unpipe@1.0.0
│ └─┬ type-is@1.6.13
│   ├── media-typer@0.3.0
│   └─┬ mime-types@2.1.11
│     └── mime-db@1.23.0
├─┬ chai@3.5.0
│ ├── assertion-error@1.0.2
│ ├─┬ deep-eql@0.1.3
│ │ └── type-detect@0.1.1
│ └── type-detect@1.0.0
├── ejs@2.5.1
├─┬ express@4.14.0
│ ├─┬ accepts@1.3.3
│ │ └── negotiator@0.6.1
│ ├── array-flatten@1.1.1
│ ├── content-disposition@0.5.1
│ ├── cookie@0.3.1
│ ├── cookie-signature@1.0.6
│ ├── encodeurl@1.0.1
│ ├── escape-html@1.0.3
│ ├── etag@1.7.0
│ ├── finalhandler@0.5.0
│ ├── fresh@0.3.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── parseurl@1.3.1
│ ├── path-to-regexp@0.1.7
│ ├─┬ proxy-addr@1.1.2
│ │ ├── forwarded@0.1.0
│ │ └── ipaddr.js@1.1.1
│ ├── range-parser@1.2.0
│ ├─┬ send@0.14.1
│ │ ├── destroy@1.0.4
│ │ └── mime@1.3.4
│ ├── serve-static@1.11.1
│ ├── utils-merge@1.0.0
│ └── vary@1.1.0
├─┬ mocha@3.0.2
│ ├── browser-stdout@1.3.0
│ ├─┬ commander@2.9.0
│ │ └── graceful-readlink@1.0.1
│ ├── diff@1.4.0
│ ├── escape-string-regexp@1.0.5
│ ├─┬ glob@7.0.5
│ │ ├── fs.realpath@1.0.0
│ │ ├─┬ inflight@1.0.5
│ │ │ └── wrappy@1.0.2
│ │ ├─┬ minimatch@3.0.3
│ │ │ └─┬ brace-expansion@1.1.6
│ │ │   ├── balanced-match@0.4.2
│ │ │   └── concat-map@0.0.1
│ │ ├── once@1.3.3
│ │ └── path-is-absolute@1.0.0
│ ├── growl@1.9.2
│ ├── json3@3.3.2
│ ├─┬ lodash.create@3.1.1
│ │ ├─┬ lodash._baseassign@3.2.0
│ │ │ ├── lodash._basecopy@3.0.1
│ │ │ └─┬ lodash.keys@3.1.2
│ │ │   ├── lodash._getnative@3.9.1
│ │ │   ├── lodash.isarguments@3.1.0
│ │ │   └── lodash.isarray@3.0.4
│ │ ├── lodash._basecreate@3.0.3
│ │ └── lodash._isiterateecall@3.0.9
│ ├─┬ mkdirp@0.5.1
│ │ └── minimist@0.0.8
│ └─┬ supports-color@3.1.2
│   └── has-flag@1.0.0
├── mongodb-uri@0.9.7
└─┬ mongoose@4.6.0
  ├── async@1.5.2
  ├── bson@0.5.4
  ├── hooks-fixed@1.2.0
  ├── kareem@1.1.3
  ├─┬ mongodb@2.2.9
  │ ├── es6-promise@3.2.1
  │ ├─┬ mongodb-core@2.0.11
  │ │ └─┬ require_optional@1.0.0
  │ │   ├── resolve-from@2.0.0
  │ │   └── semver@5.3.0
  │ └─┬ readable-stream@2.1.5
  │   ├── buffer-shims@1.0.0
  │   ├── core-util-is@1.0.2
  │   ├── isarray@1.0.0
  │   ├── process-nextick-args@1.0.7
  │   ├── string_decoder@0.10.31
  │   └── util-deprecate@1.0.2
  ├── mpath@0.2.1
  ├── mpromise@0.5.5
  ├─┬ mquery@1.11.0
  │ ├── bluebird@2.10.2
  │ └── sliced@0.0.5
  ├── ms@0.7.1
  ├── muri@1.1.0
  ├── regexp-clone@0.0.1
  └── sliced@1.0.1
```

The main dependencies start closest to the left, such as chai, mongoose,
mocha, express, and ejs. The others are packages needed by the main dependencies
and so forth. Peek at the package.json file and see if you can find where the
top level dependencies are described.

NodeJS by itself has some capacity to act as a server, but the
ExpressJS library provides much more utilities to listen for
communication requests from any browser that is able to reach
the process (using Internet protocols).

If you want to peek under the hood to see the "back end" code, it starts
in server.js.

#### The "Front End"

The Front End framework we're using is
[ReactJS](https://facebook.github.io/react/). This is a powerful framework
that uses JavaScript to help describe and update the user interface.

Front End development usually depends HTML, CSS, and using JavaScript to update
the HTML elements as they are displayed in the browser. There are other
front end frameworks than ReactJS. All the powerful front end frameworks take
advantage of the JavaScript capability of all browsers to help make the browser
display dynamic and adaptive.

One of the appealing aspects of ReactJS is that it allows JavaScript to
embed HTML within it. You can see the HTML embedded in the JavaScript in the
files public/app.js and public/workingApp.js.

#### The Database

All useful applications need a way to store data in a way that the data won't
get lost. Modern applications tend to use databases for this function, and
there are many varieties of databases.

This application uses a "document" database called
[MongoDB](https://www.mongodb.com). Databases are a very large topic, but for
this application we have only one "collection" of data, which is the collection
of todo's. Each todo has a name, a description, and a due date. You can see
how this is set up in models/todo.js.

#### Viewing the Deployed App on Heroku

Although the application can run on your local machine, if you want to make
the web application available to the general public you usually will want to
"deploy" the app through some service. [Heroku](https://www.heroku.com/)
provides a cloud platform for deploying and running modern apps using a
container system.

The app has already been deployed on heroku here:
<https://introjs-todo.herokuapp.com>

If you want to experiment deploying this app through Heroku, you can do it free
although you will have to provide a credit card to provision a MongoDB database.
Follow the
[Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
tutorial to get an introduction to deploying with Heroku.

#### Testing Our Code

It is good to be able to test your code. We have tests in the file
test/TodoTest.js. These tests have been written with
[MochaJS](https://mochajs.org/) and the [ChaiJS](http://chaijs.com/) assertion
library. Mocha provides a test harness that can run in NodeJS. It helps us
make sure the code we write does what we expect it to, and to let us know if
it stops doing that.

#### Continuous Integration

A good practice for software development teams is
[Continuous Integration)(https://en.wikipedia.org/wiki/Continuous_integration).
Continous Integration allows software to be packaged and built, and sometimes
deployed, whenever a code change is made. The mocha/chai tests will get run
any time our code base is changed, and it can send out emails to make sure
someone will fix it right away.

We have used the free TravisCI platform to test this project whenever checkins
are made. You can see the current state of our project at this URL.
<https://travis-ci.org/Montana-Code-School/introjs-todo>
