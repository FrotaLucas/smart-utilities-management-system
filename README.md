# 📘 Project Documentation: Smart Utilities Management System

1. Project Overview

2. Technical Architecture

3. Software Setup & Usage

4. UML Diagram & Database Schema

5. Testing Strategy

6. Project Deployment & Execution

## 1. Project Overview

## Project Title

### Smart Utilities Management System

Mission

To streamline the management of utilities (gas, water, and electricity) by providing companies with a comprehensive overview of their client base and individual consumption patterns.

Description

Developed as a full-stack application, this software facilitates the recording and monitoring of utility data for clients. The fictitious company, Smart Utilities, can perform CRUD (Create, Read, Update, Delete) operations on client data and their respective utility readings.



## 2. Technical Architecture

### REST API Architecture

The application adheres to REST (Representational State Transfer) principles, ensuring scalability and maintainability.

### Key Characteristics of REST:

**1 Statelessness**: Each request from the client must contain all the information needed to process the request. The server does not store any client context between requests, enhancing scalability and reliability.

**2. Client-Server Architecture**: Separates the user interface concerns from the data storage concerns, allowing the client and server to evolve independently.

**3. Uniform Interface**: Defines a standardized way of communicating between client and server, simplifying and decoupling the architecture.

**4. Layered System**: The architecture can be composed of hierarchical layers by constraining component behavior, enhancing scalability and manageability.

**5. Cacheability**: Responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data.

**6. Code on Demand (Optional)**: Servers can extend client functionality by transferring executable code.

### API Endpoints

1. Customer API

- POST /api/customers
Request Body:

![image](https://github.com/user-attachments/assets/658ce419-b084-4ddf-b877-3ae937de3f29)

- GET /api/customers/{uuid}

- GET /api/customers

- PUT /api/customers
Request Body:

![image](https://github.com/user-attachments/assets/f5f1e4ec-2087-4808-9249-200c0f518142)

DELETE /api/customers/{uuid}

2. Reading API

POST /api/readings
Request Body:

![image](https://github.com/user-attachments/assets/10cf1ab6-37a4-4432-9400-faa4581c03c8)

- GET /api/readings/{uuid}

- GET /api/readings

- PUT /api/readings
Request Body:

![image](https://github.com/user-attachments/assets/bd175b2c-ada4-47bc-81f9-918e279f5854)

- DELETE /api/readings/{uuid}

### Technologies Used

#### Backend
- **Framework**: Spring Boot (Java)  
- **IDE**: IntelliJ IDEA  

#### Frontend
- **Framework**: [Angular](https://angular.io/) with [Angular Material](https://material.angular.io/)  
- **IDE**: Visual Studio Code  

#### Database
- **System**: MariaDB  

#### Tools
- **API Testing**: Postman  
- **Version Control**: Git  

## 3. Software Setup & Usage

### Technology Roles

- **MariaDB**: An open-source relational database management system, used to store and manage application data.

- **Apache Maven 3.9.9**: A build automation tool primarily for Java projects, managing project dependencies and build lifecycle.

- **Java HotSpot™ 21.0**: The Java Virtual Machine (JVM) implementation used to run Java applications.

- **Postman**: An API client used for testing and documenting APIs.

- **Visual Studio Code**: A lightweight but powerful source code editor, ideal for frontend development.

- **IntelliJ IDEA**: An integrated development environment (IDE) for Java development.

- **Git**: A distributed version control system for tracking changes in source code during software development.


## 4. UML Diagram & Database Schema

### Entity Diagram

#### Customer
![image](https://github.com/user-attachments/assets/e5c91287-11fc-485c-822f-003f43e84ec0)

 
Notes:
Relationship
1 - n
( optional - otional )
*customer can exist without being linked to reading
*reading can have its customer_id set to null

#### Reading
![image](https://github.com/user-attachments/assets/23a291ba-53cd-455d-9d4c-6a30a787c5ea)




This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

That is how the table look like when the user want to see all reading data
![image](https://github.com/user-attachments/assets/01320df8-2468-43d0-98d6-0feaca7076d8)


That is a typical scenario when the manager need to update the data
![image](https://github.com/user-attachments/assets/7641ea15-9534-4cfd-ac07-30fbd20a87c2)


That is a typical scenario when the manager need to update the customer data
![image](https://github.com/user-attachments/assets/876ea37d-c841-4c17-90d5-d5f2d022ba36)

Add new reading for a customer
![image](https://github.com/user-attachments/assets/256e4448-e8f1-40f6-8baa-393ee732631e)
![image](https://github.com/user-attachments/assets/ad373875-8cb9-404a-8226-b589f0efc6f8)

Add new reading when the customer does not exist customer yet
![image](https://github.com/user-attachments/assets/d14db563-9e7e-4054-bb70-f10dac16650f)



