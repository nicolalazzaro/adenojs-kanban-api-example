# 📋 AdonisJS Kanban API Example

## 🚀 Project Introduction

As a way to get hands-on experience with the **AdonisJS** framework, I decided to create a simple API for a **Kanban Board**.

This project was a first taste of the framework, focusing on a straightforward context to get familiar with its core functionalities. The API provides endpoints to manage the main components of a Kanban board: **Boards**, **Lists**, and **Cards**. My goal was to experiment with AdonisJS in a practical way and learn how it handles backend development.

---

## 🧐 What is AdonisJS?

AdonisJS is a TypeScript-first web framework for Node.js. It can be used to build full-stack applications or JSON API servers. AdonisJS provides a well-defined structure for your applications, setting up a seamless TypeScript development environment, handling backend Hot Module Replacement (HMR), and offering a vast collection of well-maintained and extensively documented packages.

AdonisJS focuses on the backend and lets you choose your preferred frontend stack. You can use AdonisJS with a traditional template engine to generate static HTML on the server, create a JSON API for your Vue/React frontend application, or use Inertia to seamlessly integrate your favorite frontend framework.

AdonisJS aims to provide you with all the tools you need to build a robust backend application, whether it's for sending emails, validating user input, performing CRUD operations, or authenticating users.

For more information on AdonisJS, refer to the [AdonisJS Introduction Guide](https://docs.adonisjs.com/guides/preface/introduction).

---

## 🛠️ Technologies Used

- **AdonisJS** — Core framework
- **Lucid ORM** — SQL query builder and Active Record ORM based on Knex
- **adonis-autoswagger** — Automatically generates OpenAPI/Swagger documentation
- **SQLite** — Lightweight, embedded database
- **Docker + Docker Compose** — For quick application setup and environment management

---

## 📦 Lucid ORM

Lucid is an SQL query builder and ORM based on Knex. It is designed to make the most of SQL while providing a clean API for advanced SQL operations.

For detailed documentation, refer to the [Lucid ORM Guide](https://docs.adonisjs.com/guides/database/lucid).

### 🔧 Key Features:
- Fluent Query Builder: Built on Knex.
- Support for read replicas and managing multiple connections.
- Class-based models following the Active Record pattern.
- Migration system for incremental database schema changes.
- Model factories to generate test data.
- Database seeders for inserting initial/dummy data into the database.

---

## 🏁 How to Start the Project

### 🐳 Method 1 — Quick Start with Docker
Use Docker Compose to install, migrate, and start the application:

```bash
docker-compose up --build
```

This command will:
- Install Node.js dependencies
- Run database migrations
- Seed the database with initial data
- Start the server

Swagger documentation will be available at: [http://localhost:3333/docs](http://localhost:3333/docs).

---

### 🛠️ Method 2 — Manual Start
If you prefer to start the project manually, follow these steps:

```bash
# Install dependencies
npm install

# Run database migrations
node ace migration:run

# Seed the database with sample data
node ace db:seed

# Start the development server
node ace serve --watch
```

---

## 🌱 Data Seeding

On the first run, the system automatically seeds the database:
- Creates one or more sample Boards
- Each Board contains a few Lists
- Each List contains a few Cards

This allows you to see the application in action without manually inserting data.

---

## 📖 API Documentation

Full API documentation (automatically generated via Swagger) is available at: [http://localhost:3333/docs](http://localhost:3333/docs).  
You can view and make test requests directly from the graphical interface.

No authentication system is included.  
All endpoints are public for simplicity and demonstration purposes.

![Swagger](https://i.imgur.com/94YVAzJ.png)

![Swagger](https://i.imgur.com/vaa2vZx.png)
