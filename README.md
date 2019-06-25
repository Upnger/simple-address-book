# simple-address-book

## Why

This repo was created because one of my potential client wanted to see if i'm good enough. Lazy as i'm i guessed why not combine this task with some fun, so i took the opportunity to test some new tools and continue learn some other.

Some tools have i not been using in a while and wanted to refresh my memory

- docker-compose
- MySQL

some i have used only a little and wanted to be better with

- Sequelize.js
- nuxt.js
- jest
- Windows Subsystem for Linux

And some is new and I wanted to try

- Bulma
- Fastify

the other tools used i was fairly comfortable with when i started this repo

## Known issues

- Orphan phoneNumbers is not deleted from database

## How to run

running this application is super easy since it uses docker container. So make sure to have docker and docker-compose available and the run the following

  `docker-compose up -d front-end`

  this will start all parts the application need and you can visit http://localhost:3001/

## Features
Load test of api
Separated front-end and api
Code style standard
Code linting
Automatic tests
Single Page application
Progressive Web App
99/100 in lighthouse mobile speed test
93/100 in lighthouse Best Practices
100/100 in lighthouse SEO

## Todo (will probably never be done due to the nature of this project)

- Add tests in the back-end
- Increase test coverage in front-end
- Maybe use transaction on updates of the database(conflicted if partial create/update is better in this application)
- validate input to api and send 400 Bad Request if invalid
- validate user input in form to give feedback to the user
- Make it production ready in general
- Run nuxt in universal mode
- Make content responsive
- Add build server
