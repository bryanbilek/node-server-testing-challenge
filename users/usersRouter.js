const router = require('express').Router();
const Users = require('./usersModel');

//GET users
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
});

//GET user by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find user with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
  });

//POST an user
router.post('/', (req, res) => {
    const user = req.body;
    Users.add(user)
        .then(newUser => {
                res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new user' });
        });
});

//DELETE an user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(user => {
      if (user) {
        res.json({ removed: user });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
  });
  
  module.exports = router;