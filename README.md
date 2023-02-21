## _This is a project created with create-react-app that demonstrates hooking up a firestore database to a project with a branch called 'firebase-auth' to demonstate implementing authentication and authorization._

## Notes!
- used to install firebase
```
npm install firebase@9
```

#### Create .env file in root repository 
###### find the follwing info on firebase site under project settings
_Note: It is very important that every environment variable in your application is prefaced by REACT_APP. Otherwise, the environment variable won't work. This is a safeguard put in place by create-react-app to ensure that sensitive environment variables aren't accidentally exposed in our applications._
- REACT_APP_FIREBASE_API_KEY
- REACT_APP_FIREBASE_AUTH_DOMAIN 
- REACT_APP_FIREBASE_PROJECT_ID
- REACT_APP_FIREBASE_STORAGE_BUCKET 
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID
- REACT_APP_FIREBASE_APP_ID

## firebase-auth notes
- used to install react router library for routing
```
npm install react-router-dom@6
```
- add authentication by navigating to your project on firebase and click authentication under the build tab on the left side of the screen