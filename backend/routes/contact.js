const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Tous les champs sont obligatoires.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "L'adresse email est invalide.",
    });
  }

  res.status(200).json({
    message: "Message reçu avec succès.",
  });
});

module.exports = router;
