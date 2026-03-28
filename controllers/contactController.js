import Contact from "../models/contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // ✅ Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("❌ ERROR:", error); // 🔥 show in Render logs
    res.status(500).json({ error: error.message }); // 🔥 show in frontend
  }
};
