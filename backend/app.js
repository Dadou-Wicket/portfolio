const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config({
  path: __dirname + "/.env",
});

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend portfolio opérationnel" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
