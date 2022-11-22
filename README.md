# Wet Bat Dashboard

- [Wet Bat Dashboard](#wet-bat-dashboard)
  - [About the project](#about-the-project)
  - [Back-end](#back-end)
    - [Demo](#demo)
    - [Data modeling](#data-modeling)
    - [Architecture](#architecture)
    - [API Routes](#api-routes)
    - [Running the project](#running-the-project)
  - [Front-end](#front-end)
    - [Demo](#demo-1)
    - [Architecture \& structure](#architecture--structure)
    - [Running the project](#running-the-project-1)

## About the project

This is a prototype of a dashboard application for Wet Bat Travel.  
The repository contains the folders `/backend` and `/frontend` for the related layers described below.

## Back-end

The back-end app is a REST API responsible for processing the data stored in a relational database and providing some routes to the client. It was built with:

- Node.js
- TypeScript
- Express.js
- Prisma (ORM)
- Postgresql (Database)

### Demo

Both API and database were deployed on Railway, and can be accessed at:  
https://wet-bat-production.up.railway.app/

### Data modeling

- `Quote`: model representing the main feature, containing all the relevant information for the prototype.
- `Transportation`: model representing the transports available in a travel.

![Data modeling](data-modeling.jpg)

### Architecture

With the principle of separation of concern in mind, it was used a simplified layered architecture, where the app is divided into two main layers:

- **Controller**: contains all the logic for handling the HTTP requests and responses on API routes.
- **Service/Model**: this single layer has the business logic and is responsible for integrating the routes with the data source.

### API Routes

1. Show all existing quotes  
   Endpoint: `GET /quotes`

- `200 OK`

```json
{
   "quotes":[
      {
         "id":1,
         "name":"John Doe",
         "departureLocation":"Rio de Janeiro",
         "destinationLocation":"London",
         "departureDate":"2023-01-10T08:40:00.000Z",
         "returnDate":"2023-01-30T13:30:00.000Z",
         "price":876
      },
      {
         "id":2,
         "name":"Mary Jane",
         "departureLocation":"Rome",
         "destinationLocation":"Tokyo",
         "departureDate":"2023-03-12T14:30:00.000Z",
         "returnDate":"2023-03-20T04:00:00.000Z",
         "price":1495
      },
```

2. Show details about a specific quote  
   Endpoint: `GET /quotes/:id`

- `200 OK`

```json
{
  "quote": {
    "id": 3,
    "name": "Ted Mosby",
    "departureLocation": "New York",
    "destinationLocation": "Paris",
    "departureDate": "2022-12-01T05:00:00.000Z",
    "returnDate": "2022-12-30T18:00:00.000Z",
    "travelers": 4,
    "transportation": {
      "name": "Bicycle"
    },
    "contact": "ted@gmail.com",
    "price": 1250
  }
}
```

- `404 NOT FOUND`

```json
{
  "error": "Quote with given id not found"
}
```

### Running the project

1. Install NPM dependencies

```sh
cd backend
npm install
```

2. Create .env file

```sh
cp .env-example .env
```

Then, fill in the environment variables with your database credentials.

3. Create database schema

```sh
npm run migrate:dev
```

4. Seed database with initial data

```sh
npm run seed-db
```

5. Run the project

```sh
npm run dev
```

The API will run on `http://localhost:PORT`.  
Where `PORT` is the specified value on `.env` file or `3000` by default.

## Front-end

The front-end app consists of a Single-Page Application (SPA) that consumes the API to provide a UI for visualizing the quotes on a dashboard. It was built with:

- React.js
- TypeScript
- Vite
- Styled Components

### Demo

The app was deployed on Vercel, and can be accessed at:  
https://wet-bat.vercel.app

### Architecture & structure

On the client side, the app was also structured in such a way that each layer handles a separate concern.

- `/infra/http`: contains the logic for communication with the server, fetching and handling the HTTP requests and responses.
- `/hooks`: the two existing hooks (`useQuotes` and `useQuote`) connect with `http` to keep the remote state and provide them to the components.
- `/pages`: container components representing a page, where the components are joined together to mount the UI.
- `/components`: stateful and stateless components which can be reusable/composable.

### Running the project

1. Install NPM dependencies

```sh
cd frontend
npm install
```

2. Set-up variables

Create .env file

```sh
cp .env-example .env
```

Set the URL where the API is running

```sh
VITE_API_URL=http://localhost:3000
```

3. Run the project

```sh
npm run dev
```

The project will run on `http://localhost:5173`.
