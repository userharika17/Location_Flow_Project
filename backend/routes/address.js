const express = require('express');
const router = express.Router();
const Address = require('../models/address');

// Create new address
router.post('/', async (req, res) => {
    try {
        const newAddress = new Address(req.body);
        const savedAddress = await newAddress.save();
        res.json(savedAddress);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all addresses
router.get('/', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
