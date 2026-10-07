const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contact");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend portfolio opérationnel" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
