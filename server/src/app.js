const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('../models/post');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// const mongodb_conn_module = require('./posts');
// const db = mongodb_conn_module.connect();

mongoose.connect('mongodb://127.0.0.1:27017/posts');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('Connection Succeeded');
});

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function(error, posts) {
    if (error) {
      console.error(error);
    }
    res.send({
      posts: posts
    });
  }).sort({ _id: -1 });
});

app.post('/posts', (req, res) => {
  let db = req.db;
  const title = req.body.title;
  const description = req.body.description;
  const new_post = new Post({
    title: title,
    description: description
  });

  Post.save(function(error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true
    });
  });
});

app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function(error, post) {
    if (error) {
      console.error(error);
    }

    post.title = req.body.title;
    post.description = req.body.description;
    post.save(function(error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true
      });
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove(
    {
      _id: req.params.id
    },
    function(err, post) {
      if (err) res.send(err);
      res.send({
        success: true
      });
    }
  );
});

app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function(error, post) {
    if (error) {
      console.error(error);
    }
    res.send(post);
  });
});

app.listen(process.env.PORT || 8081);
