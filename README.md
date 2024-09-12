
# Simple Card List Application

This is a simple card list web application with separate backend and frontend projects. The backend is built using Node.js and Express, while the frontend is built using React.

## Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

1.1 clone the repository to your local machine:
```bash
git clone https://github.com/vicky6477/swe-interview-test.git
cd swe-interview-test
```

### 2. Backend Setup
2.1 Navigate to the backend directory:
```bash
cd StarterCode/backend
```

2.2 Install backend dependencies:
```bash
npm install
```

2.3 Start the backend server:
```bash
node index.js
```

By default, the backend server will run on http://localhost:8000.

### 3. Frontend Setup
3.1 Navigate to the frontend directory:
```bash
cd ../frontend
```

3.2 Install frontend dependencies:
```bash
npm install
```

3.3Start the frontend server:
```bash
npm start
```

The frontend application will run on http://localhost:3000 by default.

API Endpoints
GET /api/products: Retrieves the list of products with their information.
DELETE /api/products/
: Deletes a product by its ID.
