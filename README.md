## About the Project

> Event-App is a simple mern web app that facilitates creating and displaying events.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.



### Prerequisites

* [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install) and [Node.js](https://nodejs.org/en/) installed
* [MongoDB](https://www.mongodb.com/)

### Clone the application

   ```bash
   git clone https://github.com/smyrmnsr/events-app
   cd events-app
   ```

### Configuration 

Setup a MongoDB Database and replace the connection string from server/data/db/index.js with you own.

It should look like this:

```
mongodb+srv://<username>:<password>@cluster0-tyqyw.mongodb.net/<dbname>?retryWrites=true&w=majority

```

You should have a connection string like above replacing the username and password with your credentials


### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project root directory

```
npm install
```

```
cd server && npm install
```

### Running the app

Open a terminal on root directory

```
npm run start
```

and open another terminal on server directory
```
cd server && npm start
```

Access the web app at http://localhost:3000/

## Technologies Used

FRONTEND

![REACT](https://img.shields.io/badge/REACT-black?style=flat&logo=react&logoColor=cyan)
![JAVASCRIPT](https://img.shields.io/badge/-JAVASCRIPT-black?style=flat&logo=javascript)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat&logo=css3)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat&logo=html5&logoColor=red)
![TAILWINDCSS](https://img.shields.io/badge/TAILWIND_CSS-black?style=flat&logo=tailwind-css&logoColor=cyan)

BACKEND

![NODE.JS](https://img.shields.io/badge/NODE.JS-black?style=flat&logo=node-dot-js&logoColor=green)
![MONGODB](https://img.shields.io/badge/MONGODB-black?style=flat&logo=postgresql&logoColor=blue)


## Author

👤 **Samir Mansour**

- Github: [@smyrmnsr](https://github.com/smyrmnsr)
