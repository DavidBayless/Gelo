#!/bin/bash
heroku git:remote compozed-elo-leagues
git subtree push --prefix ./view/ heroku master
heroku git:remote compozed-elo-leagues-api
git subtree push --prefix ./server/ heroku master

