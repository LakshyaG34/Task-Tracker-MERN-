import Auth from "../models/auth.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/authentication.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role } = req.body;

    if (!name || !email || !password || !confirmPassword || !role) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await Auth.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Auth.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    

    res.status(201).json({ newUser, message: "Registered Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: "User Does not exists" });
    }

    const correctPassword = await bcrypt.compare(password, user.password)
    if (!correctPassword) {
      return res.status(400).json({ message: "Wrong Passwords" });
    }
    generateTokenAndSetCookie(user.id, res);

    res.status(201).json({ user, message: "Login Successfully" });
    console.log(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async(req, res) =>{
  try{
    const token = await req.cookies.jwt;
    if(token)
    {
      res.clearCookie();
    }
  }catch(err)
  {
    console.log(err);
  }
}

export const getMe = async(req, res) =>{
  try{
    const user = await Auth.findById(req.user?.id);
    res.json({user});
  }catch(err)
  {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
}