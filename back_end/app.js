const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const errorHandler = require('./middlewares/errorHandler');
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
