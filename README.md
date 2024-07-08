# MERN Auth - Simplest MERN Website

This project is a basic authentication system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes signup, signin, user profile, and a simple home page.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/mern-auth/blob/master/Screenshot/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-auth/blob/master/Screenshot/2.png)
![Demo Screenshot](https://github.com/nishantvekariya1/mern-auth/blob/master/Screenshot/3.png)

## Features

- User signup
- User signin
- User profile page
- Simple home page

## Technologies Used

- **MongoDB**: NoSQL database for storing user data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **Firebase**: For User authentication

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/mern-auth
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the root directory
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # Go to client folder
    VITE_FIREBASE_API_KEY=your_firebase_api_key

    # Go to root folder
    MONGO=your_mongo_db_link
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the development servers:
    ```bash
    # In the root directory
    npm run dev

    # In the client directory
    cd client
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the MERN Auth application.
