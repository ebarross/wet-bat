# Wet Bat Dashboard

## About the project

This is a prototype of a dashboard application for Wet Bat.

## Back-end

### Running the project

#### 1. Install NPM dependencies

```sh
cd backend
npm install
```

#### 2. Create .env file

```sh
cp .env-example .env
```

Then, fill in the environment variables with your database credentials.

#### 3. Create database schema

```sh
npm run migrate:dev
```

#### 4. Seed database with initial data

```sh
npm run seed-db
```

#### 5. Run the project

```sh
npm run dev
```

The API will run on `http://localhost:PORT`.  
Where `PORT` is the specified value on `.env` file or `3000` as default.

## Front-end

### Running the project

#### 1. Install NPM dependencies

```sh
cd frontend
npm install
```

#### 2. Set-up variables

Create .env file

```sh
cp .env-example .env
```

Set the URL where the API is running

```sh
VITE_API_URL=http://localhost:3000
```

#### 2. Run the project

```sh
npm run dev
```

The project will run on `http://localhost:5173`.
