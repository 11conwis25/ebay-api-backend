console.log("Starting server...");

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/search', async (req, res) => {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
  }

  res.json({
    summary: {
      avgPrice: 42.99,
      minPrice: 34.5,
      maxPrice: 61.2,
      totalListings: 10
    },
    listings: [
      { title: "Vintage Camera A", price: 35.99, link: "https://ebay.com/item1" },
      { title: "Vintage Camera B", price: 42.00, link: "https://ebay.com/item2" }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
