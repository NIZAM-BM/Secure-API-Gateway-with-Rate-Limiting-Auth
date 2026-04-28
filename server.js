const express = require('express');
const app = express();

const { PORT } = require('./config/config');

const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('API Gateway Running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});