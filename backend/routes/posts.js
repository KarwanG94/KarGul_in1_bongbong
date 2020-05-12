getPosts = (req, res) => {
  response = {
    "body": "string",
    "title": "string",
    "userId": req.params.postId
  }
  res.status(200)
  res.send(response);
  };
  
postPosts = (req, res) => {
  response={ 
    "body": "string",
    "title": "string",
    "userId": req.params.postId
  }
  res.status(201)
  res.send(response);
}
  
putPosts = (req, res) => {
  response={
      "title": "string",
      "body": "string",
      "userId": req.params.postId
    }
  res.status(200)
  res.send(response);
}

patchPosts = (req, res) => {
  response={
      "title": "string",
      "body": "string",
      "userId": req.params.postId
    }
  res.status(200)
  res.send(response);
}

deletePosts = (req, res) => {
  response = {
      "title": "string",
      "body": "string",
      "userId": req.params.postId
    }
  res.status(200)
  res.send(response);
}

module.exports = {
  getPosts: getPosts,
  postPosts: postPosts,
  putPosts: putPosts,
  patchPosts: patchPosts,
  deletePosts: deletePosts,
} 
  
  