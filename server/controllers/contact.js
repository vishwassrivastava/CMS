import mongoose from "mongoose";
import { ContactModel } from "../model/contactInformation.js";

export const allContacts = async (req, res, next) => {
  try {
    const information = await ContactModel.find({});
    res.status(200).json(information);
  } catch (err) {
    console.log(err);
  }
};


export const sortContacts = async (req, res, next) => {
  try {
    const information = await ContactModel.find({}).sort({name: 1});
    res.status(200).json(information);
  } catch (err) {
    console.log(err);
  }
};


export const createContact = async (req, res, next) => {
  const newContact = new ContactModel({
    name: req.body.name,
    phoneno: req.body.phoneno,
    email: req.body.email,
  });
  try {
    const savedInformation = await newContact.save();
    res.status(200).json(savedInformation);
  } catch (err) {
    next(err);
  }
};

export const specificContact = async (req, res, next) => {
  try {
    const specificdetail = await ContactModel.findById(req.params.id);
    res.status(200).json(specificdetail);
  } catch (err) {
    console.log(err);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    await ContactModel.deleteOne({_id: req.params.id});
    res.status(200).json("the contact is being deleted");
  } catch (err) {
    console.log(err);
  }
};

export const updateContact = async (req, res, next) => {
  try {
    const updatedInfo = await ContactModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};


export const searchContacts = async (req, res, next) => {

const { searchInput } = req.body;
const pipeline = [
  {
    $match: {
      $text: {
        $search: searchInput,
      },
    },
  },
  {
    $sort: {
      score: {
        $meta: "textScore",
      },
    },
  },
];

const results = await ContactModel.aggregate(pipeline);

res.status(200).json({
  results
})

}


