require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const findUserMiddleware = require('./middlewares/findUser');
const authUserMiddleware = require('./middlewares/authUser');
const homeRoutes = require('./routes/home_routes');
const usersRoutes = require('./routes/users_routes');
const thoughtsRoutes = require('./routes/thoughts_routes');
const pondersRoutes = require('./routes/ponders_routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({
  secret: ['tedguert8h6gd63s5gd1f3h', 'fhj16adfg4j6adgf51j3a6dgf8j7'],
  saveUninitialized: false,
  resave: false
}));
app.use(findUserMiddleware);
app.use(authUserMiddleware);

app.use(usersRoutes);
app.use(thoughtsRoutes);
app.use(pondersRoutes);
app.use(homeRoutes);

app.listen(process.env.PORT, () => console.log(`Running on ${process.env.PORT} port`));
