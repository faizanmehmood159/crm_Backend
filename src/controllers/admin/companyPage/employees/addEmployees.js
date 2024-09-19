const Employees = require("../../../../models/employees");
const path = require("path");
require("dotenv").config();

const addEmployees = async (req, res) => {
  try {
    const { name, email, about } = req.body;

    const baseUrl =
      process.env.BASE_URL1 || process.env.BASE_URL2 || process.env.BASE_URL3;
    const imagePath = req.files["image"]
      ? `${baseUrl}/uploads/${req.files["image"][0].filename}`
      : null;

    const newEmployees = new Employees({
      name: name,
      email: email,
      about: about,
      image: imagePath,
    });

    await newEmployees.save();
    console.log("Employees added: ", newEmployees);

    res.status(201).json({
      message: "Employees added successfully",

      // imageURL: imagePath,
    });
  } catch (err) {
    console.error("Error saving Employees:", err);
    res.status(500).json({ error: "Failed to save Employees" });
  }
};

module.exports = { addEmployees };
