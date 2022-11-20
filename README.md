# User Microservice (nodejs-ts-express)

The User Service is used to authenticate and authorize users through a token. This service is
responsible for creating users and their corresponding roles and permission using Jwt
authentication and authorization. Each of Administrator, Customer and Supplier are users.
To be a User, User Registration is required. Each User is assigned one or more User Roles. Each
User Role has a set of Permissions. A Permission defines whether User can invoke a particular
action or not.

## APIs

| Name            | Url                             |
| --------------- | ------------------------------- |
| Sign up         | POST /api/v1/user/signup        |
| Sign in         | POST /api/v1/user/signin        |
| User's info     | GET /api/v1/user/profile        |
| Change password | GET /api/v1/user/changepassword |
| Change email    | GET /api/v1/user/changeemail    |
