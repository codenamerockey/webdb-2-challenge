const express = require('express');

const router = express.Router();
const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

router.get('/', (req, res) => {
  db('cars')
    .select()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message:
            'There has been a problem retrieving the vehicles from the database'
        });
    });
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars')
    .insert(carData)
    .then(carUpdate => {
      res.status(200).json(carUpdate);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: 'There was a problem updating the car to the database'
        });
    });
});

module.exports = router;
