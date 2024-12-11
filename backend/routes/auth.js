const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'test' && password === 'password') { // Replace with actual auth logic
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
