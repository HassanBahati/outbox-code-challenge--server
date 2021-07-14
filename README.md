# RESTFUL API 
Demo https://outbox-code-challenge.herokuapp.com/

@route POST /api/v1/calc
@desc this the an endpoint used by loggedin users to save a new single calculation to the db
@access private

@route GET /api/v1/calc
@desc this the an endpoint used by loggedin users to view all their previous calculations
@access private

@route POST /api/v1/auth/register
@desc this the an endpoint used by users to create new accounts
@access public

@route POST /api/v1/auth/login
@desc this the an endpoint used by users to login to their accounts
@access public

@route PUT /api/v1/auth/passwordreset/token
@desc this the an endpoint used by users to reset their passwords after generating a jsonwebtoken
@access public

@route POST /api/v1/auth/forgotpassword
@desc this the an endpoint used by users to receive email containing the setpassword link
@access public

