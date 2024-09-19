const jwt = require("jsonwebtoken");
const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log("Invalid username or password:", username, password);
      return res.status(400).json({ error: "Credentials required" });
    }

    if (username !== "faizanmehmood" || password !== "12345678") {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "30 days", 
    });

    const response = {
      success: true,
      message: "Sign-in successful",
      token: token,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Admin Sign-in Error:", error);
    next(error);
  }
};

module.exports = { signIn };
