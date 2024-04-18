import dotenv from 'dotenv';
dotenv.config();


import express from 'express';

//import mongoose from 'mongoose';
import cors from'cors';
import connectDB from'./config/db.cjs';
import methodOverride from'method-override';
import Employee from'./models/employee.js';
import Work from './models/workLocation.js';

 


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

connectDB();

// Create both employee and work location
app.post("/add", async (req, res) => {
  try {
    // Extract form data from req.body
    const {
      fullName, 
      fatherName, 
      dob, 
      phoneNumber, 
      email, 
      empImg, 
      country, 
      state, 
      district, 
      mandal, 
      village, 
      empId, 
      doj, 
      deployment, 
      team, 
      managerName, 
      designation, 
      isManager, 
      organisation, 
      country1, 
      state1, 
      district1, 
      mandal1, 
      village1, 
      lpa, 
      salary, 
      basic, 
      hra, 
      ca, 
      others, 
      pf, 
      tax, 
      esi, 
      tds, 
      insurance, 
      loan,
    } = req.body;
    const employee = await Employee.create({
      fullName,
      fatherName,
      dob,
      phoneNumber,
      email,
      empImg,
      country, 
      state, 
      district, 
      mandal, 
      village, 
      empId, 
      doj, 
      deployment, 
      team, 
      managerName, 
      designation, 
      isManager, 
      organisation,
      lpa, 
      salary, 
      basic, 
      hra, 
      ca, 
      others, 
      pf, 
      tax, 
      esi, 
      tds, 
      insurance, 
      loan,
    });
    const work = await Work.create({
      country1, 
      state1, 
      district1, 
      mandal1, 
      village1,
    })

    // Respond with the created employee
    res.json({ employee, work });
  } catch (err) {
    // Handle errors
    console.error("Error creating employee:", err);
    res.status(500).json({ error: err.message });
  }
});



const port = process.env.PORT || 5501;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
