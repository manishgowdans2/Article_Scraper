const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { MongoClient } = require('mongodb');

const bluebird = require('bluebird');
const mongoose = require('mongoose');
const logger = require('morgan')
const morganBody = require('morgan-body');

const PORT = process.env.PORT || 3001;
const app = express();



const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');







// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}


  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use('/uploads', express.static('uploads'));

// Morgan loggers.
app.use(logger('dev'));
morganBody(app, {
  logReqDateTime: false,
  logReqUserAgent: false
});

////////////////////////////////////////////////////////////////

//user schema
const User = mongoose.model('users', {
  username: String,
  email: String,
  password: String,
});

//login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, 'secret-key');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});  


  
// Register a new user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    if (existingUser) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.log('Error registering user:', error);
  }
});



/////////////////////////////////////////////////////////



// Article model
const Article = mongoose.model('writes', {
  title: String,
  content: String,
  imageUrl: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
}); 


// Create a new article with photo upload (requires authentication)
app.post('/write', upload.single('image'), authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  const imageUrl = req.file ? req.file.path : '';
  const userId = req.user.userId;

  try {
    const article = new Article({ title, content, imageUrl, author: userId });
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all articles
app.get('/write', async (req, res) => {
  try {
    const article = await Article.find().populate('author');
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.log(error)
  }
});

// Middleware to authenticate the user
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}



/////////////////////////////////////////////////////////

mongoose.connect("mongodb://0.0.0.0:27017/article_scrape", { promiseLibrary: bluebird });


// const uri = "mongodb+srv://manishgowdans2002:1lOcxaraJsrg6wMp@cluster0.4nx3awy.mongodb.net/article_scrape?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect((err) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB Atlas:', err);
//     return;
//   }
//   console.log('Connected to MongoDB Atlas');
// });


// Define API routes here
const routes = require('./routes/api/index');
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});












