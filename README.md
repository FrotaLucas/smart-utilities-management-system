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

## Layout

### Customer List Screen
Shows all registered customers with search and action options.

![image](https://github.com/user-attachments/assets/7b553da8-f063-415e-af92-48dfe6d7947d)

### Update Customer Screen
Allows editing customer information such as name, family name and birthdate.

![image](https://github.com/user-attachments/assets/7b902691-011b-4bef-a90c-43c724d4f23f)

### Add New Reading Screen
Interface to record a new reading value. If the customer does not exist, a popup will be displayed.

![image](https://github.com/user-attachments/assets/fa39a9da-841a-4679-939c-59e53d58745b)



## 2. Architecture

### REST API Architecture

The application adheres to REST (Representational State Transfer) principles, ensuring scalability and maintainability.

### Key Characteristics of REST:

**1 Statelessness**: Each request from the client must contain all the information needed to process the request. The server does not store any client context between requests, enhancing scalability and reliability.

**2. Client-Server Architecture**: Separates the user interface concerns from the data storage concerns, allowing the client and server to evolve independently.

**3. Uniform Interface**: Defines a standardized way of communicating between client and server, simplifying and decoupling the architecture.

**4. Layered System**: The architecture can be composed of hierarchical layers by constraining component behavior, enhancing scalability and manageability.

**5. Cacheability**: Responses must define themselves as cacheable or not to prevent clients from reusing stale or inappropriate data.


### API Endpoints

#### 1. Customer API #### 

- POST /api/customers
Request Body:

![image](https://github.com/user-attachments/assets/658ce419-b084-4ddf-b877-3ae937de3f29)

- GET /api/customers/{uuid}

- GET /api/customers

- PUT /api/customers
Request Body:

![image](https://github.com/user-attachments/assets/f5f1e4ec-2087-4808-9249-200c0f518142)

- DELETE /api/customers/{uuid}

#### 2. Reading API

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

#### Customer and Reading
![image](https://github.com/user-attachments/assets/e5c91287-11fc-485c-822f-003f43e84ec0)

 
Notes:
Relationship
1. Relationship: One-to-Many (One Customer can have multiple Readings).
2. Key caractheristics of Entitieas: optional to optional. 
- *customer can exist without being linked to reading and reading can have its customer_id set to null


### Sequence Diagram

#### Flow: User  →  UI Layer  →  Controllers  →  Repositories →  Database  →  MariaDB Server
![image](https://github.com/user-attachments/assets/2962f44f-6faa-4e09-b008-7c933b49b456)

## 5. Testing Strategy

### Technologies

- **JUnit**: A unit testing framework for Java, allowing developers to write and run repeatable tests.

- **Rest Assured**: A Java library for testing RESTful web services, simplifying the validation of responses.

### Test Execution Commands

- **Run all tests**:  
  Execute `mvn test`.

- **Run a specific test class**:  
  Use `mvn -Dtest=MyClassOfTests test`.

- **Run a specific test method**:  
  Execute `mvn -Dtest=MyClassOfTests#myMethod test`.

## 6. Project Deployment & Execution

### Backend Setup

1. Clone the repository:
git clone https://github.com/FrotaLucas/project_final_v1.git

2. [Install MariaDB](https://mariadb.com/kb/en/getting-installing-and-upgrading-mariadb/)

3. [Install Apache Maven 3.9.9](https://maven.apache.org/download.cgi)

4. [Install Java HotSpot™ 21.0](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)

5. Run the application:
- mvn exec:java -DskipTests

### Frontend Setup
1. Clone repository
- git clone https://github.com/FrotaLucas/final_project_frontend.git

2. Install Node.js and Angular CLI:
- npm install -g @angular/cli
   
3. install dependencies:
- npm install

4. Run frontend server
- ng serve


### Let's connect

[LinkedIn](https://www.linkedin.com/in/lucas-dias-frota-9020b2126/)
