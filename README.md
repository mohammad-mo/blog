# MERN BLOG

This is a full-stack blog built with MERN stack.  
[Demo](https://mern-blog-mohammad.herokuapp.com/)

## Setup

Download [Node.js](https://nodejs.org/en/download/).
Run the following commands:

```bash
# Install dependencies (also install dependencies in frontend folder)
npm install

# Run the local server
npm run dev
```

## Tools

| Front-end              | Back-end   |
| :--------------------- | :--------- |
| react                  | bcryptjs   |
| react-router-dom       | cloudinary |
| react-toastify         | cors       |
| react-icons            | dotenv     |
| react-toggle-dark-mode | express    |
| redux-toolkit          | mongoose   |
| react-redux            | nodemon    |
| axios                  | mongodb    |
| framer-motion          | node.js    |

- Using cloudinary for storing images.

## Api Endpoints

Base URL: https://mern-blog-mohammad.herokuapp.com/

### Users

| Routes               | Description     | Method |
| :------------------- | :-------------- | :----- |
| /api/users/          | Register a user | POST   |
| /api/users/login     | Login           | POST   |
| /api/users/login/:id | Update user     | PUT    |
| /api/users/me        | Get user        | GET    |

### Posts

| Routes         | Description      | Method |
| :------------- | :--------------- | :----- |
| /api/posts/    | Get user posts   | GET    |
| /api/posts/    | Create post      | POST   |
| /api/posts/all | Get all posts    | GET   |
| /api/posts/:id | Get user post    | GET    |
| /api/posts/:id | Delete user post | DELETE |
| /api/posts/:id | Update user post | PUT    |

### Category

| Routes         | Description     | Method |
| :------------- | :-------------- | :----- |
| /api/category/ | Get category    | GET    |
| /api/category/ | Create category | POST   |
