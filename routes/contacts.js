const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

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
router.post(
  '/',
  [auth, [body('name', 'Name is required').notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = await Contact.create({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      res.json(newContact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route  PUT /api/contacts
// @desc   Update contact
// @access Private
router.put('/:id', auth, async (req, res) => {
  const updateFields = {};

  // Find keys that need to be updated
  for (const key in req.body) {
    if (req.body[key]) {
      updateFields[key] = req.body[key];
    }
  }

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: 'No Contact Found' });
    }

    contact = await Contact.findByIdAndUpdate(req.params.id, updateFields, {
      new: true,
    });

    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @route  PUT /api/contacts
// @desc   Update contact
// @access Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: 'No Contact Found' });
    }

    await Contact.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
