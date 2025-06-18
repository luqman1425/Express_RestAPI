import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import itemRoutes from './items.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/items', itemRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
