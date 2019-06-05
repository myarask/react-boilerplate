const baseUrl = process.env.NODE_ENV === 'production' ? 'https://sample-route.com' : 'http://localhost:5000';
const ROUTE1 = `${baseUrl}/route1`;
const ROUTE2 = `${baseUrl}/route2`;

export { ROUTE1, ROUTE2 };
