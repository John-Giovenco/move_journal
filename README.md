# project Move Journal

Move Journal is an app where users can add moves they have learned in any martial arts class,along with see how other practicioners execute their favorite moves. Users are able to create a move with a description and then other users can give comments and tips on how the moves are executed.

It is a simple app that utilizes a mongodb database, express, react on the front-end (though it is not a react app) and node.js to handle the communication on the backend.

Future uploads will ensure the user login and sign up functionality with be functional.

Dependencies needed for this project are -
bcrypt,
cors,
dotenv,
express,
express-react-views,
jsonwebtoken,
method-override,
mongoose,
react,

routes
Method -- Path -- Purpose
GET -- / -- Home Page
GET -- /moves -- Moves index page
POST -- /moves -- Create new Move
GET -- /moves/new -- form page for creating a new place
GET -- /moves/id -- Details about a move
PUT -- /move/:id -- update a move
GET -- /moves/:id/edit -- Form page for editing an existing place
DELETE -- /moves/:id -- delete a move
POST -- /moves/:id/description -- Create a description about a move
DELETE -- /moves/:id/description/:descriptionId -- Delete a description about a move
GET -- \* -- 404 page

Data needed for moves -
name (STRING)
picture (STRING)
position (STRING)
type (STRING)
description (STRING)
pic(STRING)
date_learned(STRING)
