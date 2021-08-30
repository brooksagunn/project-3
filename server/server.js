const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const db = require('./config/connection');
const stripe = require('stripe')('sk_test_51JTd9YBEhE86uu85pavuv4kUhMJMDeUm2qplR7szeG9wCfc8P54BMv5UMUsMwlg0uCZRU9ljBR53ovEzjFd6t6sd00YG4y4EzV');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(require('./controllers'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

const SUCCESS = 'http://localhost:3001/checkout';
const CANCEL = 'http://localhost:3001/bag';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        price: 'price_1JTxF7BEhE86uu85Xe88HSi7',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${SUCCESS}`,
    cancel_url: `${CANCEL}`,
  });
  res.redirect(303, session.url)
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
