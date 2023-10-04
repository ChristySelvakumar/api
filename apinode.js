const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, or use port 3000 by default

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
