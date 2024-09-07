# otoApiUi - Car Rental Frontend

**otoApiUi** is the frontend interface for the otoApi car rental project. It is built using the **Angular** framework with **TypeScript**, providing a simple and user-friendly interface for users to interact with the backend.

## Project Features
- **Show Cars:** Users can view available cars for rent.
- **Add Cars:** Admins can add new cars to the system.
- **User Registration & Login:** The frontend includes registration and login pages, secured with JWT token authentication.

## Prerequisites
Before running this project, make sure you have the following installed:
- **Angular CLI** (Version 17.3.0 or higher)
- **Node.js v20**

## Development Server
- Run `ng serve` for a development server.
- Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code Scaffolding
- Run `ng generate component component-name` to generate a new component.
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` to generate different elements.

## Build
- Run `ng build` to build the project.
- The build artifacts will be stored in the `dist/` directory.

## Docker
- A **Dockerfile** is included for containerizing the frontend application.
- This Dockerfile can be used in conjunction with the Docker Compose setup from the **otoApi** project to deploy both frontend and backend together.

## Further Help
For more help on the Angular CLI, use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technologies Used
- **Angular** (Framework)
- **TypeScript** (Programming Language)
- **JWT Authentication** for secure login and registration.

This project provides a basic and functional interface for car rental operations, interacting seamlessly with the **otoApi** backend.
