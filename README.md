# 📚 Book Finder

## Description

Book Finder is a simple React application that allows users to search for books based on their titles. The application fetches data from a free API to provide book information to users.

## Features

Search for books by title.
Fetches book information using a free API.
Built entirely with React, without any external libraries.

## Technologies Used

React: For building the user interface.
JavaScript and TypeScript: For logic and application structure.
HTML and CSS: For layout and styling.

## How to Use

1. Clone repository:

```bash
git clone https://github.com/Malethik/FindBook
```

2. Navigate to the project directory:

```bash
cd FindBook
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run start
```

5. Open your browser and go to:

```bash
http://localhost:3000
```

## API Used

The application uses the RapidAPI API to fetch book data. For more information, visit the API documentation: [API Documentation Link](https://rapidapi.com/cinnamon17/api/libros1)

## Development Stages

First, I created a header file to contain the title, ensuring compliance with HTML standards. Then, I built the homepage, which calls the Book component. Inside the Book component, there is an input field that passes data to the query, which is used to perform the fetch operation on the API.

In the options variable, I included the authentication header and specified the request method (in this case, GET). The API configuration is located in the environments folder, and I placed the models in the models folder.
