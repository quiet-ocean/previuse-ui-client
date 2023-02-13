/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const useLog = require('../log.middleware');

const router = express.Router();
const filename = 'api.js';
const prefix = '/api';
useLog(router, filename, prefix);

// Mock data
const loggedInUser = require('../mock/loggedInUser.json');

const serverResponseTime = 1000;

// Simulate server delayed response
function send(res, data) {
  setTimeout(() => {
    res.send(data);
  }, serverResponseTime);
}

/**
 * Api routes
 */

// Log in
router.get('/user-info', (req, res) =>
  send(res.status(200), loggedInUser)
);

module.exports = router;
