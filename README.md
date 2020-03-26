# Revidly

## Starting App
 - Clone the project.
 - Ensure you have node installed in your system.
 - run npm install to install all the dependency.
 - Add your mongodb cluster link (MONGOOSE_CONNECT), LocalHost (LOCALHOST), access token (ACCESS_TOKEN), refresh token(REFRESH_TOKEN), sendgrid api(REVIDLY) and template id (TEMPLATE) in environment variable.
 - run cd backend and node app.js, this will start your server
 - You can run all the api in POSTMAN.

## Functionality.
 Expressjs application with REST APIs using JSON format for the following endpoints:
  - Users should be able to signup and login. 
  - Reset password using forgot password API. You can signup and use Sendgrid.com’s APIs for sending the email. In the email body, send a 4 digit code to the user’s email. In another API call, pass the user’s email, 4digit code, and new password. If the 4-digit code passed in API call matches the code sent in an email to the user, reset the password with a new password sent in API.
  - User can upload mp4 videos on the following URL: /api/media/upload. The response of this API should include the URL of the uploaded media. Save this URL in an uploaded media collection in the database.
  - API to retrieve all the media files the currently logged in user has uploaded. In response to this API call, return the URLs of the media files, using which the user can play the files.

## Endpoint.
 - /register (for registration, body (user_name,user_email,user_password))
 - /login    (for login, body (user_email,user_password))
 - /forgotpassword  (for forgotpassword call, body(user_email))
 - /updatingpassword  (for updating password, body(user_email,code,new_password))
 - /api/media/upload  (for uploading media, body(author_id,medial_url))
 - /api/:userid/media  (extracting all the media post by the user)
  
## Stack
- Node.js
- Express
- Mongodb

