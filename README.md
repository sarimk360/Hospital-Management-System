
---

# Hospital Management System

## Table of Contents

- [Hospital Management System](#hospital-management-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Setup](#setup)
  - [Prerequisites:](#prerequisites)
  - [Configuration](#configuration)
    - [Sending a Message](#sending-a-message)
  - [Future Improvements](#future-improvements)
  - [Contributing](#contributing)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting New Features](#suggesting-new-features)
    - [Coding Standards](#coding-standards)
    - [Pull Request Guidelines](#pull-request-guidelines)

## Introduction

- Welcome to our Hospital Management System website, a seamless platform where users can login in, send us a Message for any queries,book an appointment with the registered doctors from the appointment page.
- This project aims to provide a smooth user experience for browsing the doctors department and for booking the Appointment.
- With a user-friendly admin panel, managing the appointments and messages, registering new doctors,and adding new admin.

## Setup

 ## Prerequisites:
Before you begin, ensure you have the following installed and set up:

Node.js: Make sure you have Node.js installed on your machine. You can download it from here [Download Node.js](https://nodejs.org/).

MongoDB Atlas: Set up a MongoDB Atlas account and create a cluster for your database. You can create an account and set up a cluster here [Create a MongoDB Atlas cluster](https://www.mongodb.com/cloud/atlas).

React:  You also need to have Node.js and npm (Node Package Manager) installed to manage React dependencies.

Express: Make sure you have some familiarity with Express and Node.js for backend development.

Instructions for installing dependencies using npm:

To install the project dependencies, run the following command:

```bash
npm install
```

This command will download and install all the dependencies listed in the `package.json` file.

To install the project dependencies using yarn, run the following command:

```bash
yarn install
```

## Configuration

1. Create a `.env` file in the root directory of your project.

2. Add the following configuration variables to the `.env` file,**make sure to add a jwt secret key and Mongo URI**:

   ```plaintext
   PORT=4000
   MONGO_URI=mongodb+srv://username:password@cluster0.utih86k.mongodb.net/?retryWrites=true
   FRONTEND_URL=http://localhost:5173
   DASHBOARD_URL=http://localhost:5174
   JWT_SECRET_KEY= (your_jwt_secret_key_here)
   JWT_EXPIRES=7d
   COOKIE_EXPIRE=7
   CLOUDINARY_CLOUD_NAME=dwzi2nvyj
   CLOUDINARY_API_SECRET=NyM_6h_pLDTr5T8Z2pmizdlDQlY
   CLOUDINARY_API_KEY=228751177556769
## Running the Project

## Development

1. **Start Backend Server**: 
   - Open a terminal in the root directory of our backend project.
   - Run the following command to start the backend server:
     ```bash
     npm run dev
     ```
     This will start the backend server on the specified port - 4000

2. **Start Frontend Application**:
   - Open a new terminal in the root directory of our frontend project.
   - Run the following command to start the frontend application:
     ```bash
     npm run dev
     ```
     This will start the frontend development server and open our application in a web browser.

3. **Start Dashboard Application**:
   - Open a new terminal in the root directory of our dashboard project.
   - Run the following command to start the frontend application:
     ```bash
     npm run dev
     ```
     This will start the dashboard development server and open our application in a web browser.

4. **Accessing the Application**:
   - Once both the backend server and frontend application are running, you can access our application in a web browser using the specified `Dashboard_URL` - http://localhost:5174 `Frontend_URL` - http://localhost:5173

## Deployment

- **Backend**: Deployed on [Render](https://hospital-management-system-ixd5.onrender.com)
- **Frontend**: Deployed on [Netlify](https://hms-main.netlify.app)
- **Admin Dashboard**: Deployed on [Netlify](https://hms-dashboard-admin.netlify.app)
  
## Accessing the Admin Dashboard

To access the admin dashboard, use the following credentials:

- **Username**: `sarimk360@gmail.com`
- **Password**: `12345678911`

Visit [https://hms-dashboard-admin.netlify.app](https://hms-dashboard-admin.netlify.app) and log in using these credentials to access the admin dashboard.

### Changing User Role to Admin

If you are unable to use the default credentials (`sarimk360@gmail.com` and `12345678911`) to login to the dashboard, you can-
1. **Sign up - using the frontend Registration signup form - https://hms-main.netlify.app/**
 
  **Once signed up, follow these steps to change the user role to Admin:**

2. **Change User Role**: Navigate to your MongoDB Atlas dashboard and locate your cluster. Go to the "Collections" tab and find the "users" collection. Locate your user document and change the role from "Patient" to "Admin".Click on  "Update".

3. **Verify Role Change**: Log in to the admin dashboard using your registered credentials. You should now have access to admin features.


## Functionality and Features

## Overview of Key Components

1. **Frontend**:
   - The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
   - It communicates with the backend server to fetch and update data using RESTful APIs.

2. **Backend**:
   - The backend of the application is built using Node.js and Express.js, providing a robust and scalable server-side infrastructure.
   - It handles incoming requests from the frontend, interacts with the database, and sends responses back to the frontend.

3. **Database**:
   - The application uses MongoDB Atlas, a cloud-hosted MongoDB service, as its database.
   - MongoDB is a NoSQL database that stores data in a flexible, JSON-like format, making it suitable for storing and querying unstructured or semi-structured data.

4. **Authentication**:
   - JSON Web Tokens (JWT) are used for authentication and authorization.
   - Upon successful login, the server generates a JWT token, which is then stored in the client-side cookies for subsequent requests.

5. **File Upload**:
   - The application uses the `express-fileupload` middleware for handling file uploads.
   - Files are uploaded to Cloudinary, a cloud-based image and video management service, which provides secure and scalable storage for uploaded files.

6. **Environment Variables**:
   - Configuration variables such as database connection strings, API keys, and secret keys are stored in a `.env` file and loaded into the application using the `dotenv` package.

## User Roles and Permissions

1. **Admin**:
   - Can update the status of appointments.
   - Can view messages from users.
   - Can add doctors and other admins.

2. **User**:
   - Can book appointments.
   - Can send message queries.

3. **Guest**:
   - Guests are users who are not logged in to the application.
   - They have limited access and can only view public content or certain pages that do not require authentication.

4. **Permissions**:
   - Permissions are assigned to roles to control access to specific features or resources within the application.
   - For example, an admin might have permission to access the admin dashboard and manage admins and appointments, while a regular user only have permission to view and edit their own profile.

## Data Flow and Storage

1. **Frontend to Backend**:
   - User interacts with the frontend interface, triggering requests to the backend server.
   - Requests are sent to the backend API endpoints using HTTP methods (e.g., GET, POST, PUT, DELETE).

2. **Backend Processing**:
   - Backend server receives requests and processes them based on the requested API endpoints.
   - For example, when a user books an appointment, the backend processes the request, updates the database with the appointment details, and sends a response back to the frontend.

3. **Data Storage**:
   - MongoDB Atlas is used as the database to store application data.
   - Data is stored in collections, which are similar to tables in relational databases.
   - For example, user details, appointments, messages, and other relevant data are stored in separate collections in the database.

4. **Data Flow Example**:
   - When a user books an appointment, the frontend sends a request to the backend API endpoint for booking appointments.
   - The backend processes the request, validates the data, and stores the appointment details in the database.
   - The updated appointment details are then sent back to the frontend for confirmation.

## External Dependencies

1. **@types/react-dom@18.3.0**: TypeScript definitions for the React DOM library.
2. **@types/react@18.3.3**: TypeScript definitions for the React library.
3. **@vitejs/plugin-react@4.3.0**: Vite plugin for React development.
4. **axios@1.7.2**: Promise-based HTTP client for the browser and Node.js.
5. **eslint-plugin-react-hooks@4.6.2**: ESLint plugin for React hooks.
6. **eslint-plugin-react-refresh@0.4.7**: ESLint plugin for React Refresh.
7. **eslint-plugin-react@7.34.2**: ESLint plugin for React.
8. **eslint@8.57.0**: Pluggable JavaScript linter.
9. **react-dom@18.3.1**: React package for working with the DOM.
10. **react-icons@5.2.1**: Library of icons for React applications.
11. **react-multi-carousel@2.8.5**: Carousel component for React applications.
12. **react-router-dom@6.23.1**: React bindings for the React Router library.
13. **react-toastify@10.0.5**: React component for toast notifications.
14. **react@18.3.1**: React library for building user interfaces.
15. **vite@5.2.12**: Next generation frontend tooling.

## Security Measures

1. **Authentication and Authorization**:
   - User authentication is implemented using JSON Web Tokens (JWT).
   - JWTs are securely stored in HTTP-only cookies to prevent XSS attacks.
   - Authorization middleware is used to restrict access to certain routes based on user roles.

2. **Data Protection**:
   - User passwords are hashed using bcrypt before storing them in the database.
   - sensitive information is encrypted in transit using HTTPS.

3. **Input Validation**:
   - User input is validated on the client-side to prevent XSS and CSRF attacks.
   - Server-side validation is implemented to ensure that only valid data is processed.

4. **Secure Communication**:
   - HTTPS is enforced to encrypt data in transit and protect against eavesdropping.

5. **Database Security**:
   - MongoDB Atlas provides built-in security features such as data encryption, IP whitelisting, and auditing.

6. **Error Handling**:
   - Error messages are handled carefully to avoid leaking sensitive information.

7. **Regular Security Audits**:
   - Regular security audits and vulnerability assessments are conducted to identify and address potential security risks.

## Usage Examples

### Booking an Appointment

To book an appointment, users can fill out the appointment form with their details and submit the form. The following React component demonstrates how to handle the form submission:

```jsx
import React, { useState } from 'react';
import axios from 'axios';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    // Initialize form data state
  });

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend API to book the appointment
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Display success message
      console.log(data.message);
      // Redirect to the home page
      navigateTo("/");
    } catch (error) {
      // Display error message
      console.error(error.response.data.message);
    }
  };

  return (
    // Form markup and input fields
  );
}

export default AppointmentForm;
```

### Sending a Message

To send a message, users can fill out the message form with their details and message content, and then submit the form. The following React component demonstrates how to handle the message submission:

```jsx
import React, { useState } from 'react';
import axios from 'axios';

function MessageForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the backend API to send the message
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, phone, email, message },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Display success message and clear form fields
      toast.success(data.message);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      // Display error message
      toast.error(error.response.data.message);
    }
  };

  return (
    // Form markup and input fields
  );
}

export default MessageForm;
```


## Future Improvements

1. **Enhanced Appointment Management**: Implement a more robust appointment management system with features such as appointment rescheduling, cancellation, and notifications.

2. **User Authentication and Authorization**: Integrate user authentication and authorization to ensure that only authorized users can book appointments and send messages.

3. **Improved User Experience**: Enhance the user interface and experience to make it more intuitive and user-friendly, with better feedback and error handling.

4. **Real-time Chat Support**: Add real-time chat support for users to communicate with customer support representatives or doctors for immediate assistance.

5. **Integration with External Services**: Integrate with external services such as payment gateways for handling appointment fees and third-party APIs for additional functionality.

6. **Mobile App Development**: Develop a mobile application for Android and iOS platforms to extend the reach of the application to mobile users.

7. **Performance Optimization**: Optimize the performance of the application to ensure faster loading times and smoother user interactions.

8. **Accessibility Improvements**: Ensure that the application is accessible to users with disabilities by implementing accessibility features and standards.

9. **Security Enhancements**: Implement additional security measures to protect user data and prevent unauthorized access, such as data encryption and regular security audits.

10. **Localization**: Add support for multiple languages to make the application accessible to users from different regions.

These improvements are planned to enhance the functionality, usability, and security of the application. The timeline for these enhancements will depend on resource availability and project priorities.


## Contributing

Thank you for considering contributing to our project! Please follow these guidelines to make the contribution process smooth and effective.

### Reporting Bugs

If you encounter a bug while using our project, please follow these steps to report it:

1. Check if the bug has already been reported
2. If the bug has not been reported, create a new issue with a title that clearly describes the issue.
3. Provide detailed steps to reproduce the bug, including any error messages or unexpected behavior you encountered.
4. Include information about your environment, such as the operating system, browser, and version of our project you are using.

### Suggesting New Features

If you have an idea for a new feature or enhancement, we'd love to hear it! Follow these steps to suggest a new feature:

1. Check if the feature has already been suggested
2. If the feature has not been suggested, create a new issue with a title that clearly describes the feature.
3. Provide a detailed description of the feature, including why you think it would be beneficial and how it should work.

### Coding Standards

When contributing code to our project, please follow these coding standards:

- Use meaningful variable and function names.
- Follow the existing code style and formatting conventions.
- Write clear and concise comments to explain complex logic or algorithms.
- Use consistent indentation and formatting throughout your code.

### Pull Request Guidelines

To contribute code to our project, please follow these guidelines when submitting a pull request (PR):

1. Fork the repository and create a new branch for your changes.
2. Make your changes on the new branch, following the coding standards and guidelines.
3. Write tests to cover your changes, if applicable.
4. Run the existing tests and ensure they pass.
5. Commit your changes with a clear and descriptive commit message.
6. Push your changes to your fork and submit a pull request to the `main` branch of our repository.
7. Provide a detailed description of your changes in the pull request, including any relevant information or context.

We will review your pull request as soon as possible and provide feedback. Thank you for your contribution!

---#   H M S - f u l l - d e p l o y  
 