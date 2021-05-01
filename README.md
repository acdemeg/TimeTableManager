# Lineate Sunday School project template

RUN DEMO:
https://timetables-manager-2020.herokuapp.com/

This repo contains the template of the project for Thumbtack(Lineate) Sunday School.
If you are a student of the school - please replace the content of this file with your project info.

## How to run app:
1. `docker-compose up -d`
2. cd ./backside/backend/src
3. npx sequelize-cli db:migrate ->  npx sequelize-cli db:seed:all 
  or restor from dump
4. Go to http://localhost
<!--  -->
## Requirements:
1. Node v12.x or higher
2. NPM v6.x or higher

## How to install requirements:
1. run in the console `./init.sh`

## Repo contains
1. Backend template: 'backend' folder
2. Frontend template: 'frontend folder
3. Database backups: 'ops' folder

docker-compose file uses postgres as database.
You can change db_user and db_password in docker-compose.yml file.

## How to use Docker:
Run all commands project root folder

### Start containers
`docker-compose up -d`
### Show logs containers
`docker-compose logs -f web`

## How to watch static:
`cd ./frontend && npm run watch`

# DB commands
## Make a dump
`docker-compose exec db sh -c 'exec pg_dump -U postgres time_tables > /backup/dump.sql'`

## Restore from the dump
`docker-compose exec db sh -c 'exec psql -U postgres time_tables < /backup/dump.sql'`

# Useful commands
## Clean all docker containers info
`docker-compose stop && docker-compose down --rmi local --volumes --remove-orphans`

## Styling
(You should pick one of these)
1. CSS
2. SASS
3. CSS-in-JS

## CSS frameworks
(You should pick one of these)
1. Bulma (https://bulma.io/)
2. Bootstrap
3. My own styles
4. Rebass

# Frontend
## Project structure
### components 
Contains all base (global) components of the app. Like 'button', 'table', 'form'
### scenes 
Contains big container components with a lot of logic in them.
Usually each of Route component will be a scene.

Each scene could include its own 'components' folder and even its own 'scenes' folder.
