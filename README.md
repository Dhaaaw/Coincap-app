# CoinCap App

CoinCap is a simple React application started with CRA that fetches cryptocurrency data from the CoinCap API and displays it in a paginated list.

## Features

- View a paginated list of cryptocurrencies
- Click on a cryptocurrency to view its details
- Navigate back to the list from the details page
- Dashboard page that holds general informations


## Technologies Used

- React
- TypeScript
- React Router
- Axios

## API

The following endpoints of coincap are used:

- `/assets`: Fetches a list of all cryptocurrencies. (used it with a limit for the paginated list, used it also for the dashboard as there were no other interesting endpoints)
- `/assets/{id}`: Fetches details of a specific cryptocurrency by ID.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd CryptoTracker
```

3. npm install

```bash
npm install
```

4. npm start

```bash
npm start
```

5. Open your browser and navigate to http://localhost:3000 to view the app.
