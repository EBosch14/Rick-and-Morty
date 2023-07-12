# Full Stack Project Documentation - Rick and Morty

Welcome to the documentation of the Full Stack project based on the Rick and Morty API! In this documentation, I will provide a detailed description of the technologies used, the project structure, and the implemented functionalities.

**Link de la API: [Rick and Morty API](https://rickandmortyapi.com/)**


## Overview
This Full Stack project aims to create a web application that allows users to explore information about the characters from the television series "Rick and Morty." The application provides features such as user registration, authentication, displaying character data in the form of cards, filtering by various properties, a favorites system, and searching by ID.

## Technologies Used

### Frontend
- **ViteJS**: ViteJS is a fast development environment for modern web applications. It was chosen for its focus on development speed and the ability to build fast and efficient applications.
- **React**: React is a widely-used JavaScript library for building interactive user interfaces. It was chosen for its popularity, flexibility, and performance.
- **Redux**: Redux is a state management library used to handle the global state of the application. Redux was chosen to maintain a consistent data flow and facilitate data sharing between components.
- **Native CSS**: Native CSS was used for styling the application. This allows for greater flexibility and control over the design and appearance of the application.

### Backend
- **Node.js**: Node.js is a JavaScript runtime environment for server-side execution. Node.js was chosen for its efficiency and ability to handle a large number of concurrent requests.
- **Express**: Express is a Node.js framework for building web applications. It was used to build the backend API and handle client requests.
- **Sequelize**: Sequelize is a Node.js ORM (Object-Relational Mapping) that provides a simple interface for interacting with the database. Sequelize was chosen to facilitate communication with the PostgreSQL database.

### Database
- **PostgreSQL**: PostgreSQL is an open-source relational database management system. It was chosen for its robustness, performance, and ability to handle large volumes of data.

## Project Structure
The project is organized into a logical and easy-to-understand folder and file structure. Here is a description of the main folders and files:

```
- backend/            # Backend folder
  - test/             # Test folder
  - src/              # Resources folder
    - controllers/    # API controllers
    - models/         # Database models
    - routes/         # API routes
    - utils/          # Utility functions
    - index.js        # Backend entry point
  - package.json      # Backend dependencies and scripts

- frontend/           # Frontend folder
  - src/              # Frontend source code
    - assets/         # Static assets folder
    - components/     # Reusable components
    - pages/          # Main application pages
    - redux/          # Redux configuration
    - services/       # Services for making API requests
    - utils/          # General utilities
    - app.jsx         # Root component of the application
    - index.jsx       # Frontend entry point
  - package.json      # Frontend dependencies and scripts

- README.md           # Project documentation
```

## Implemented Functionalities

### User Registration and Authentication
- Users can register by providing a username and a valid password.
- User information is stored in the database using Sequelize.
- Token-based authentication is implemented using JSON Web Tokens (JWT).

### Displaying Character Data
- The main page of the application displays cards with basic information about the characters from Rick and Morty.
- Character data is obtained from the Rick and Morty API using HTTP requests.

### Filtering by Properties
- Users can filter characters by various properties, such as name, species, status, etc.
- A filtering functionality is implemented in the backend that allows users to retrieve characters that match the search criteria.

### Favorites System
- Users can add characters to their favorites list.
- Favorite characters are stored in the database associated with the corresponding user.
- Users can remove characters from their favorites list.

### ID Search
- Users can search for characters by their ID.
- A search functionality is implemented in the backend that retrieves the character corresponding to the provided ID.
