# project BJJ Journal

BJJ-Journal is an app where users can add moves they have learned along with see how other practicioners execute their favorite moves.

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
position (STRING)
submission (BOOLEAN)
escape (BOOLEAN)
pic(STRING)
