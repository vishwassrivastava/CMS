import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  phoneno: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
});

contactSchema.index({ name: 'text', email: 'text' });

export const ContactModel = mongoose.model("Contact", contactSchema);
