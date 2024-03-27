// middlewares/validateRegistration.js

const { body, validationResult } = require('express-validator');

const validateRegistration = [
    // Validate name
    body('username')
      .trim()
      .notEmpty()
      .withMessage('Name is required'),
      
  // Validate email
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email address'),

  // Validate password
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),


  // Custom sanitizer to trim and escape all fields
  body('*').trim().escape(),

  // Check for errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 

    }
    next();
  }
];

module.exports = validateRegistration;
