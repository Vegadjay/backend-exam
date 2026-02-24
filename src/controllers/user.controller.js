import User from "../schema/users.schema.js";
import { hashPassword, verifyPassword } from "../config/hashpassword.js";
import { generateToken } from "../config/jwt.js";

const RegisterUser = async (req, res) => {
  try {
    const { id, name, email, password, roles } = req.body;

    if (!id || !name || !email || !password || !roles) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      id: id || 1,
      name,
      email,
      password: hashedPassword,
      roles,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken(user.id);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const GetUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { RegisterUser, LoginUser, GetUsers };
