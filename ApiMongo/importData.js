const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const User = require('./models/user');

const users = JSON.parse(
  fs.readFileSync('data.json', 'utf-8')
);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection SuccessFul');
  })
  .catch(err => {
    console.log(err);
  });

const importData = async () => {
  try {
    await User.create(users);
  } catch (err) {
    console.log(err);
  }
};

importData();
