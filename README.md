## Overview

**Project Title**: Authentication Back-End

**Project Description**: Back-End part of an authentication app develop in Typescript, NodeJs, ExpressJs, and SQLite3.

**Project Goals**: Develop the basic CRUD functions that would be used to integrate with a front-end page for Register, Login, and Update Profile Information.

## Instructions for Build and Use

Steps to build and/or run the software:

1. Clone the repository - [https://github.com/otaviovaleriano/authentication](https://github.com/otaviovaleriano/authentication)
2. in the folder you cloned, run in the terminal: npm install
3. Initiate the database and create the initial file using "npm run init-db" on the terminal, if needed.
4. Run/build the project entering "npm run start" in the terminal

Instructions for using the software:

1. After entering "npm run start," you can test the APIs/routes on Postman using the following URL:
    * (POST) http://localhost:3000/auth/register, - User JSON on this format for register new user  {"username": "username","password": "password"}
    * (GET) http://localhost:3000/auth/users, 
    * (GET) http://localhost:3000/auth/user/:id, 
    * (PUT) http://localhost:3000/auth/user/:id, 
    * (DEL) http://localhost:3000/auth/user/:id,
    * (GET) http://localhost:3000/auth/user/username/:username


## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

*  Vs Code
*  Node.js v20.12.2.
 
## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Typescript Documentation](https://www.typescriptlang.org/docs/)
* [W3 Schools](https://www.w3schools.com/typescript/).
* [Youtube ](www.youtube.com)


## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Finish the front-end and implement it
* [ ] Code a landing page for the app
