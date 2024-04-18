import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  fullName: {
    type: String,
    
  },
  fatherName: {
    type: String,
    
  },
  phoneNumber: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  empImg: {
    type: String,
    
  },
  empId: {
    type: String,
    
    unique: true
    
  },
  managerName: {
    type: String,
 
  },
  Designation: {
    type: String,
    
  },
  dob: {
    type: Date,
    
  },
  doj: {
    type: Date,
    
  },
  isManager: {
    type: Boolean,
    
  },
  managerid: {
    type: String,
    
  },
  status: {
    type: String,
    
  },
  country: {
    type: String,
   
  },
  state: {
    type: String,
  
  },
  district: {
    type: String,
    
  },
  mandal: {
    type: String,
 
  },
  village: {
    type: String,
    
  },
  deployment: {
    type: String,
    
  },
  team: {
    type: String,
   
  },
  organisation: {
    type: String,
    
  },
  lpa: {
    type: String,
    
  },
  salary: {
    type: String,
    
  },
  basic: {
    type: String,
    
  },
    hra: {
    type: String,
    
  },
  ca: {
    type: String,
    
  },
  others: {
    type: String,
    
  },
  pf: {
    type: String,
    
  },
  tax: {
    type: String,
    
  },
  esi: {
    type: String,

  },
  tds: {
    type: String,
   
  },
  insurance: {
    type: String,
   
  },
loan: {
    type: String,
   
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});
const Employee = mongoose.model('Employee',EmployeeSchema);

export default Employee;