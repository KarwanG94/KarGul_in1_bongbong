const dotify = require('node-dotify');


getUsers = (req, res, next) => {
  var query;
  if(req.query.username) {
    query = req.models.User.findOne({username: req.query.username})
  }
  else
  {
    query = req.models.User.find()
  }

  query.exec().then((user) => {
      return res.send(user);
    }).catch((error) => {
      next(error)
    })
}


postUser = (req, res, next) => {
  req.models.User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
     address: {
       street: req.body.address.street,
    //   suite: req.body.address.suite,
       city: req.body.address.city,
       zipcode: req.body.address.zipcode,
    //   geo: {
    //     lat: req.body.address.geo.lat,
    //     lng: req.body.address.geo.lng,
    //   }
    }
  }).then((user) => {
    return res.status(201).send(user)
  }).catch((error) => {
    next(error)
  })
}

getById = (req, res, next) => {
  req.models.User.findById(req.params.id).then((user) => {
    return res.send(user);
  })
}

deleteById = (req, res, next) => {
  req.models.User.findByIdAndDelete(req.params.id).then((deleted)=> {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(204)
  }).catch((error) => next(error))
}




putUser = (req, res, next) => {
  req.models.User.updateOne({_id: req.params.id},
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      address: {
        street: req.body.address.street,
        suite: req.body.address.suite,
        city: req.body.address.city,
        zipcode: req.body.address.zipcode,
        geo: {
          lat: req.body.address.geo.lat,
          lng: req.body.address.geo.lng,
        }
      },
    },{
      new: true,
      upsert: true,
      runvalidators: true,
    }).then((status) => {
      console.log("status: ", status)
      if (status.upserted)
        res.status(201)
      else if (status.nModified)
        res.status(200)
      else 
        res.status(204)
    res.send()
    }).catch((error) => next(error))
}



const patchUser = (req, res, next) => {
  req.models.User.findByIdAndUpdate(req.params.id,
  { 
    $set: dotify(req.body)
  },
  {
    returnNewDocument: true,
    new: true,
  }).then((user) => {
    console.log(user)
    res.send(user)
  }).catch((error) => next(error))
}

module.exports = {
  getUsers: getUsers,
  postUser: postUser,
  getById: getById,
  deleteById: deleteById,
  putUser: putUser,
  patchUser: patchUser,
} 