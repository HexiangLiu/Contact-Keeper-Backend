const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');
// @route  GET /api/contacts
// @desc   Get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// @route  POST /api/contacts
// @desc   Add new contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add a new contact');
});

// @route  PUT /api/contacts
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route  PUT /api/contacts
// @desc   Update contact
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
