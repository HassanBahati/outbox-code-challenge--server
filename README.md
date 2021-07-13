# RESTFUL API 

@route /api/v1/auth/register
@desc this the an endpoint used by users to create new accounts
@access public

@route /api/v1/auth/login
@desc this the an endpoint used by users to login to their accounts
@access public

@route /api/v1/auth/passwordreset/token
@desc this the an endpoint used by users to reset their passwords after generating a jsonwebtoken
@access public

@route /api/v1/auth/forgotpassword
@desc this the an endpoint used by users to receive email containing the setpassword link
@access public

