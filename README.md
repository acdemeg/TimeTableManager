# Lineate Sunday School Final project 

RUN DEMO:
https://timetables-manager-2020.herokuapp.com/

How use app:

User can create orders and watch all its orders with any status and all other people's orders with status ACCEPTED. User can change its name and email on Profile page. User can remove its order. User can view its timeline orders.

Admin can watch all orders all users with any status. Admin can remove any order and any user. Admin can create and remove timetable. Admin can watch profile the user and his timeline. Admin can remove user.
Admin can watch and resolve conflict ordes. Admin can make self-destruction. Admin can all.


## How to run app:
1. `docker-compose up -d`
2. cd ./backside/backend/src
3. npx sequelize-cli db:migrate ->  npx sequelize-cli db:seed:all
  or restor from dump
4. Go to http://localhost

## Requirements:
1. Node v12.x or higher
2. NPM v6.x or higher

## How to install requirements:
1. run in the console `./init.sh`

## Repo contains
1. Backend template: 'backend' folder
2. Frontend template: 'frontend folder
3. Database backups: 'ops' folder

## How to watch static:
`cd ./frontend && npm run watch`

