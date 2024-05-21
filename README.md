# Hospital API

This project is a RESTful API for a hospital designated for COVID-19 patient testing and quarantine. The API allows doctors to register and log in, register patients, create patient reports, and query reports based on their status.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Doctors can register and log in.
- Register patients using their phone numbers.
- Create reports for patients after checkups.
- List all reports for a specific patient.
- Filter patient reports based on their status.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (for authentication)
- JWT (JSON Web Tokens)

## Folder Structure


## Setup

1. **Clone the repository**
    ```sh
    git clone https://github.com/ajitkumarpal1/Hospital-API.git
    cd Hospital-API
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add the following**
    ```env
    MONGODB_URI=mongodb://localhost:27017/hospitalAPI
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the server**
    ```sh
    npm start
    ```

## API Endpoints

### Doctor Routes

- **Register a doctor**
    ```
    POST /doctors/register
    Body: { "username": "doctor1", "password": "password" }
    ```

- **Login a doctor**
    ```
    POST /doctors/login
    Body: { "username": "doctor1", "password": "password" }
    Returns: { "token": "jwt_token" }
    ```

### Patient Routes

- **Register a patient**
    ```
    POST /patients/register
    Body: { "phone": "1234567890", "name": "John Doe" }
    ```

- **Create a report for a patient**
    ```
    POST /patients/:id/create_report
    Headers: { "Authorization": "Bearer jwt_token" }
    Body: { "status": "Positive-Admit", "date": "2024-05-21" }
    ```

- **List all reports of a patient**
    ```
    GET /patients/:id/all_reports
    Headers: { "Authorization": "Bearer jwt_token" }
    ```

### Report Routes

- **List all reports filtered by status**
    ```
    GET /reports/:status
    Headers: { "Authorization": "Bearer jwt_token" }
    ```

## License

This project is licensed under the MIT License.
