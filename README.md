# Skeleton

This is my Skeleton Project.

It has a client folder for the frontend of my projects. It's a create-react-app application. Then a server folder is an express application for my APIs.

### How to use

```
git clone git@github.com:peezlepass/skeleton.git <Project Name>
cd <Project Name>
git remote rm origin
Make a git repo for your project
git remote add origin <newgitrepo>
git push origin main
cp server/.env.example server/.env
Edit for correct values
cd server
npm install
npx sequelize db:create
npx sequelize db:migrate
```
