First, we start with npm install in the terminal of VS Code to install dependencies.
After that, run the command npm start. This will start the project.
Now the project should start, and the terminal will display Server started on port 5000, MongoDB connected....
On the left side, we have four folders (config, src, node_modules, upload) and some files.
The project starts from index.js, which is the entry point of the backend.
The structure is as follows:

config:

Contains dbs.js (database connection code) 
sendEmail: related to sending emails code.

src:

Contains all the code related to the project.
Four main folders:
Controller (APIs): Contains all API (POST, GET, UPDATE, DELETE) related code.
Admin: Contains APIs for the admin.
Auth: Contains login-related code.
Middlewares (Authentication): Contains authentication-related code (JWT).
Model (Structure of data stored in DB): Contains code related to the models (structure of data stored in MongoDB).
Routes (Routes of APIs): Contains two folders and one file:
index.js: Used to create routes for accessing APIs.
Admin Routes: Contains all admin-related API routes.
Auth: Contains authentication-related API routes.
upload: Contains all the images that are uploaded and stored.