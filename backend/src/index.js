const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./router.js')
const passport = require('./passport-config.js');
const session = require('express-session');
require('./db/mongoose');
dotenv.config();

app.use(cors());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`);
});
