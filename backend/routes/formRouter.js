const express = require('express');
const router = express.Router();
const Form = require('../models/form');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        const newForm = new Form(data);
        const savedForm = await newForm.save();

        console.log(" Data saved:", savedForm);
        res.status(201).json({ message: "Form submitted successfully", data: savedForm });
    } catch (err) {
        console.error("Error saving data:", err.message);
        res.status(500).json({ error: "Invalid data or internal error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const formDetails = await Form.find();

        if (!formDetails) {
            return res.status(404).json({ message: "No form data found" });
        }

        console.log("📄 Retrieved form data:", formDetails);
        res.status(200).json({ data: formDetails });
    } catch (error) {
        console.error(" Error fetching data:", error.message);
        res.status(500).json({ error: "Could not fetch data" });
    }
});

module.exports = router;
