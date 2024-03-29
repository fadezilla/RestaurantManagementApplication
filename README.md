# Restaurant Management Application

This project is a basic application for a restaurant, designed to facilitate ordering, order management by employees, and provide statistical insights for management. The application consists of multiple microservices and utilizes a centralized database. Below are the instructions to set up and use the application effectively.

# Microservices
## Gateway
The gateway service acts as the main entry point for the application, routing requests to respective microservices. It runs on port 8000 and redirects requests to the following microservices:

Customer: Port 8001

Employee: Port 8002

Management: Port 8003

## Customer
Customers can access the customer page from http://localhost:8000/customer. They can place orders by providing their first and last names along with the dish name. Orders are added to the database with an initial status of active.

## Employee
Employees use the application to manage orders. They can view all active orders and mark them as inactive once served. The employee endpoint to access orders is http://localhost:8000/employee.

## Management
The management interface provides insights into restaurant statistics using RAW SQL queries. Management can view the total number of orders placed, orders served, and the two most popular dishes. The Management endpoint to access orders is http://localhost:8000/management.

## Azure Database
The application utilizes an Azure database for data storage. The database schema includes a table named Orders with the following fields:

FirstName: VARCHAR(255)

LastName: VARCHAR(255)

DishName: VARCHAR(255)

Active: BIT

# Setup Instructions
1. Clone the repository from the provided Git Classroom link.
2. Set up an Azure database and create the Orders table with the specified schema.
3. Update the .env files for each microservice with the relevant database credentials and port numbers.
4. Install dependencies for each microservice using npm install.
5. Run each microservice using npm start.
6. Access the application through the gateway service at http://localhost:8000.

# Usage
Customers can place orders via the customer interface.
Employees can manage orders via the employee interface.
Management can view statistics and insights via the management interface.