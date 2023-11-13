# How to load Music Center on local machine

## To install and run the application on your local machine, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal in the project directory.
3. Run `npm install` command to install the dependencies.
4. Run the `npm run dev` command to start the application.
5. Open your browser and navigate to http://localhost:5173 to see the app in action.

## Firebase Configuration

### To use Firebase in this application, you must follow these steps:

1. Create an account on Firebase and create a new project.
2. In the *Authentication* section of Firebase, enable the email and password authentication.
3. In the *Firestore* section of Firebase, create a new database and configure security rules to allow read/write only to authenticated users.
4. In the *Project settings* section of Firebase, click *Add app* and follow the instructions to add a new web application.
5. Copy the Firebase credentials and configure the environment variables in your project's .env file.
