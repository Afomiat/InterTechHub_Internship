# Book CRUD API

This is a **Book CRUD API** built with Node.js and MongoDB that allows you to perform CRUD operations on a book collection, including marking books as favorites and providing random book recommendations.

## Technologies Used
- **Node.js** for the server
- **Express.js** for routing
- **MongoDB** for data storage
- **Mongoose** for database modeling
- **dotenv** for environment variable management

## Features
- **GET /books** - Get all books
- **POST /books** - Add a new book
- **PUT /books/:id** - Update a book
- **DELETE /books/:id** - Delete a book
- **POST /books/favorite/:id** - Mark a book as a favorite
- **GET /books/recommendations** - Get a random book recommendation

## Setup and Usage

### 1. Clone the repository:
```bash
git clone https://github.com/Afomiat/InterTechHub_Internship.git
cd book-crud-api
