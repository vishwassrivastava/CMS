import express from "express";
import {
  allContacts,
  specificContact,
  createContact,
  updateContact,
  deleteContact,
   sortContacts,
    searchContacts
} from "../controllers/contact.js";



const router = express.Router();

router.get("/contacts/sort", sortContacts);

router.post("/contacts/search", searchContacts);

router.get("/contacts/", allContacts);

router.get("/contacts/:id", specificContact);

router.post("/contacts/", createContact);

router.put("/contacts/:id", updateContact);

router.delete("/contacts/:id", deleteContact);



export default router;
