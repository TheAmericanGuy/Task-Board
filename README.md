# Kanban Board Application

## Description
This project is a Kanban Board application with JWT authentication and task management functionality. It allows users to securely log in and perform CRUD operations (Create, Read, Update, Delete) on tasks. The project is designed as a full-stack application with a focus on security and deployment readiness.

## Features
- **User Authentication:** Secure login using JSON Web Tokens (JWT).
- **Task Management:** Create, read, update, and delete tasks.
- **Session Expiration:** JWT tokens automatically expire after a set duration.
- **Protected Routes:** Access to task management routes requires authentication.
- **Error Handling:** Informative error responses for invalid credentials or unauthorized access.

## Technologies Used
### Backend

- **Node.js & Express:** Server and API routes.
- **Sequelize ORM:** Database management.
- **PostgreSQL:** Relational database.
- **JWT (jsonwebtoken):** User authentication.
- **bcrypt:** Password hashing for security.


### Frontend
- **React.js:** For integration with the backend APIs.

### Tools
- **Postman:** API testing.
- **Render:** Deployment of server and database.


## Installation
Follow these steps to set up the project locally:

1- Clone the Repository
2- Install Dependencies for the server and client.
3- Create a .env File inside the server directory.
4- Setup your Database
5- Run the server
6- Test the API using Postman or another API testing Tools

## Deployment
To deploy this project:

- Use Render or another hosting provider for the backend.
- Deploy the PostgreSQL database and update the DB_URL or database credentials in the .env file.

## Future Enhancements

- Add user Registration;
- Improve task sorting and filtering functionality

## License
This project is licensed under the MIT License.

## Author
 - Vitor Silva