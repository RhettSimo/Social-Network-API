# Social Network API

## Description
This project is a project that allows users to get the information for all users, single users, create users, update users, and delete users. It also allows us to get information on thoughts (which are like posts) and also allows us to get info for all thoughts, just one thought, create new thoughts, update thoughts, and delete thoughts. Along with that, we can get information for reactions to thoughts and add friends using similiar or the same methods.

## Installation
For this project to work, you will need to install node.js to install the dependencies required and run the application. First, install node.js. Second, copy over the repo and use the command `npm i` to install the necessary dependencies located in the package.json file. Then, install Insomnia on your computer so you can see what the app does. Create multiple `GET`, `POST`, `PUT`, and `DEL` routes and add your server information in the top bar. The format should look something like this: `localhost:3001/api/thoughts or localhost:3001/api/users`. 

## Usage
To use this project, use the command `npm run seed`. Open up Insomnia and put in either of the addresses listed above. Following that, send the information in Insomnia using the routes listed above. You should get a JSON output. Please note: for POST and PUT routes, you may need to input some JSON yourself to create a new user/thought or update a current user/thought.

## Credits
Credits go to the UC Berkeley coding bootcamp for providing the source material and code for this project.

## License

MIT