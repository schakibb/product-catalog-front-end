# Product Management Application

This is a Product Management application built with React, TypeScript, and Tailwind CSS. It allows users to manage a catalog of products, including adding, editing, viewing, and deleting products. The application utilizes React Router for navigation and Lucide React for icons.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of products with search functionality.
- Add new products to the catalog.
- Edit existing product details.
- Delete products from the catalog.
- View detailed information about each product.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React Router DOM**: A library for routing in React applications.
- **Lucide React**: A collection of icons for React applications.
- **REST API**: The backend for this application is provided by a REST API, which can be found at [Product Catalog Backend](https://github.com/schakibb/product-catalog-back-end).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/schakibb/product-catalog-front-end.git
   cd product-management-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Navigate to the home page to view the list of products.
- Use the "Add Product" button to create a new product.
- Click on a product to view its details.
- Use the "Edit" button to modify product information.
- Click the "Delete" button to remove a product from the catalog.

## API

This application interacts with a REST API for product management. The API endpoints are as follows:

- `GET /api/products`: Retrieve a list of all products.
- `GET /api/products/:id`: Retrieve a specific product by ID.
- `POST /api/products/add-product`: Add a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product by ID.

For more details on the API, please refer to the [Product Catalog Backend](https://github.com/schakibb/product-catalog-back-end).
