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
npx prisma migrate dev
```

#### 4. Run the project

```sh
npm run dev
```

The API will run on `http://localhost:3000`.

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
