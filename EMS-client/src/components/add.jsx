
import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Sidebar from "./partials/sidebar";
//import Header from "./partials/header";
import { Modal, Table,} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
//import Label from 'react-bootstrap/Label';
import axios from 'axios';
import './home.css';
import {useNavigate} from 'react-router-dom';
function add() {
  // const [fullName, setFullName] = useState('');
  // const [fatherName, setFatherNmae] = useState('');
  // const [dob, setDOB] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [empImag, setEmpImg] = useState('');
  // const [country, setCountry] = useState('');
  // const [state, setState] = useState('');
  // const [district, setDistrict] = useState('');
  // const [mandal, setMandal] = useState('');
  // const [village, setVillage] = useState('');
  // const [empId, setEmpId] = useState('');
  // const [doj, setDoj] = useState('');
  //const [deployment, setDepl] = useState('');
   const [team, setTeam] = useState('');
  // const [managerName, setManagerName] = useState('');
  // const [designation, setDesignation] = useState('');
   //const [manager, setManager] = useState('');
  // const [organisation, setOrganisation] = useState('');
  // const [country1, setCountry1] = useState('');
  // const [state1, setState1] = useState('');
  // const [district1, setDistrict1] = useState('');
  // const [mandal1, setMandal1] = useState('');
  // const [village1, setVillage1] = useState('');
  // const [lpa, setLpa] = useState('');
  // const [salary, setSalary] = useState('');
  // const [basic, setBasic] = useState('');
  // const [hra, setHra] = useState('');
  // const [ca, setCa] = useState('');
  // const [others, setOthers] = useState('');
  // const [pf, setPf] = useState('');
  // const [tax, setTax] = useState('');
  // const [esi, setEsi] = useState('');
  // const [tds, setTds] = useState('');
  // const [insurance, setInsurance] = useState('');
  // const [loan, setLoan] = useState('');

   const [deployment, setDeployment] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDeployment(event.target.value);
    setTeam(event.target.value);

  };
  const [isManager, setIsManager] = useState(false);

  const handleManagerChange = (e) => {
    setIsManager(e.target.checked);
  };

  
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleRowClick = (rowData) => {
      setSelectedRow(rowData);
      handleClose(); // close the modal after selecting a row
    };
  
    const handleInputChange = (e) => {
      // handle input change here
      setManagerName(e.target.value);
      console.log(e.target.value);
    };


    const submitHandler = (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
    
      axios.post("http://localhost:5501/add", formData)
        .then(result => {
          console.log(result);
          navigate('/');
        })
        .catch(err => console.log(err));
    };
    

  return (
    <div> 
            {/* Main Container */}

            <div className="d-flex justify-content-center align-items-center vh-100 add-container">
        <div className="col-xl-12">
        <Card className="bg-primary-subtle grid gap-0 column-gap-3" style={{ maxHeight: 'calc(100vh )', overflowY: 'auto', overflowX: 'hidden' }}>
                <Card.Header className="text-center bg-primary text-white"><h4>Add Employee</h4></Card.Header>
                <Card.Body >
      <Form onSubmit={submitHandler}>
        <Form.Group  className="mb-3">
         <Row>

            <div className="row">
           <fieldset>
              <legend>Personal Information</legend>
            <div className="row">
              <div className="col-6">
              <Form.Label htmlFor="fullname" className="required">Name</Form.Label>
              <Col mb-3="true">
             <Form.Control type="text" id="fullname" placeholder="Name" name="fullName" required/>
                   </Col>
              </div>

              <div className="col-6">
          <Form.Label  sm="3" htmlFor="fathername" className="required">Father Name</Form.Label>
          <Col mb-3="true">
            <Form.Control type="text" id="fathername"  placeholder="Father Name" name="fatherName" required/>
          </Col>
              </div>
              <div className="col-6">
          <Form.Label   htmlFor="dob" className="required" >Date of Birth</Form.Label>
          <Col mb-3="true">
            <Form.Control type="date" id="dob"  placeholder="mm/dd/yyyy" name="dob" required/>
          </Col>
              </div>

              <div className="col-6">   
          <Form.Label  sm="3" htmlFor="phoneNumber" className="required" >Phone Number</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="phoneNumber"   placeholder="0000000000" name="phoneNumber" required />
          </Col>
              </div>

              <div className="col-6">                
          <Form.Label  sm="3" htmlFor="email" className="required">Email</Form.Label>
          <Col mb-3="true">
            <Form.Control type="email" id="email"   placeholder="name@gmail.com" autoComplete="off" name="email" required />
          </Col>
              </div>
              <div className="col-6">
          <Form.Label  sm="3" htmlFor="empImg" className="required" >Employee Image</Form.Label>
          <Col mb-3="true">
            <Form.Control type="file" id="empImg"   placeholder="jpg Imge" name="empImg" required  />
          </Col>
              </div>
              </div>
           </fieldset>
            </div>

            <div className="row">
              &nbsp;
            <fieldset>
          <legend>Personal Address</legend>
            <div className="row">

          <div className="col">
          <Form.Label  sm="3" htmlFor="country" className="required" >Country</Form.Label>
          <Col mb-3="true">
            <Form.Select id="country" autoComplete="off" name="country" required >
            <option >Select a country</option>
            </Form.Select>
          </Col>
          </div>

          <div className="col">  
           <Form.Label className="required"  htmlFor="state">State</Form.Label>
           <Col mb-3="true">
          <Form.Select id="state" name="state"  required >
          <option >Select a state </option>
          </Form.Select>
           </Col>
          </div>
         
         <div className="col">
           <Form.Label className="required"  htmlFor="district">District</Form.Label>
           <Col mb-3="true">
          <Form.Select id="district" name="district"  required>
          <option >Select a District </option>
          </Form.Select>
           </Col>
         </div>
         
         <div className="col">
           <Form.Label className="required"  htmlFor="mandal">Mandal</Form.Label>
           <Col mb-3="true">
          <Form.Select id="mandal" name="mandal" required>
          <option >Select a Mandal </option>
          </Form.Select>
           </Col>
         </div>
         
         <div className="col">
           <Form.Label className="required"  htmlFor="village">Village</Form.Label>
           <Col mb-3="true">
          <Form.Select id="village" name="village" required>
          <option >Select a Village </option>
          </Form.Select>
           </Col>
         </div>
         
            </div>
            <br/>
            </fieldset>
            </div>
           <div className="row">
            &nbsp;
            <fieldset>
              <legend>Employee Details</legend>
              <div className="row">
                <div className="col-6">
              <Form.Label  htmlFor="empId" className="required">Employee-ID</Form.Label>
          <Col mb-3="true">
            <Form.Control type="text" id="empId"  placeholder="Employee Id" name="empId" required />
          </Col>
          </div>
          <div className="col-6">
          <Form.Label  htmlFor="doj" className="required">Date of Joining</Form.Label>
          <Col mb-3="true">
            <Form.Control type="date" id="doj" name="doj"  placeholder="mm/dd/yyyy" required />
          </Col>
          </div>
          <div className="col-6">
          <Form.Label className="required"  htmlFor="deployment">Deployement</Form.Label>
           <Col mb-3="true">
           <Form.Select id="deployment"  value={deployment} name="deployment" onChange={handleChange} required>
             <option value="">Select Deployment</option>
             <option value="Internal">Internal</option>
             <option value="External">External</option>
          </Form.Select>
           </Col> 
           </div>
           {/* Fields to display when "Internal" is selected */}
           {deployment === 'Internal' && (
             <div className="row">
          <div className="col-6">
          <Form.Label className="required" htmlFor="team">Team</Form.Label>
          <Col mb-3="true">
          <Form.Select id="team"  value={deployment} name="team" onChange={handleChange} >
             <option value="">Select Team Nmae</option>
             <option value="accountant">Accountant</option>
             <option value="admin">Admin</option>
             <option value="electrial">Electrical Commissioning</option>
             <option value="hr">Human Resources</option>
             <option value="It">IT</option>
             <option value="ItInfra">IT Infra</option>
             <option value="telecom">Telecom Services</option>
             <option value="scanning">Scanning</option>
          </Form.Select>
          </Col>
         </div>
         <div className="col-6">
        <Form.Label htmlFor="managername">Manager Name</Form.Label>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" onClick={handleShow}><i className="bi bi-search"></i></InputGroup.Text>
        <Col mb-3="true">
        <Form.Control  placeholder="Manager Name"  id="managername" value={selectedRow ? selectedRow.name : ''} name="managerName" onChange={handleInputChange}  aria-label="Manager name" aria-describedby="basic-addon1" />
      </Col>
      </InputGroup>
      </div>
      <div className="col-6">
          <Form.Label htmlFor="designation">Designation</Form.Label>
          <Col mb-3="true">
          <Form.Select id="designation" name="designation"  required >
             <option value="">Select Designation</option>
          </Form.Select>
          </Col>
          </div>
          <div className="col-6">
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <br />
          <Col mb-3="true">
          <Form.Check
            inline label="-is Manager" checked={isManager} type={type} id={`inline-${type}-1`} name="isManager" onChange={handleManagerChange} />
            </Col>
          </div>))}
          
        </div>
        </div>
        )}
        </div>
        <div className="col-6">
        {/* Fields to display when "External" is selected */}
          {deployment === 'External' && (
            <div>
          <Form.Label htmlFor="organisation">Organisation Name</Form.Label>
           <Form.Control type="text" id="organisation" name="organisation"  />
           </div>
          )}
          </div>
            
             <br/>
         </fieldset>
         </div>
         <div className="row">
         &nbsp;
            <fieldset>
          <legend>Work Location</legend>
           <div className="row">

          <div className="col">

          <Form.Label  sm="3" htmlFor="country1" className="required" >Country</Form.Label>
          <Col mb-3="true">
            <Form.Select id="country1" autoComplete="off" name="country1" required>
            <option >Select a country</option>
            </Form.Select>
          </Col>
          </div>

          <div className="col">

           <Form.Label className="required"  htmlFor="state1">State</Form.Label>
           <Col mb-3="true">
          <Form.Select id="state1" name="state1" required>
          <option >Select a state </option>
          </Form.Select>
           </Col>
          </div>
         
         <div className="col">
           <Form.Label className="required"  htmlFor="district1">District</Form.Label>
           <Col mb-3="true">
          <Form.Select id="district1"  name="district1" required >
          <option >Select a District </option>
          </Form.Select>
           </Col>
         </div>
         
         <div className="col">
           <Form.Label className="required"  htmlFor="mandal1">Mandal</Form.Label>
           <Col mb-3="true">
          <Form.Select id="mandal1" name="mandal1" required >
          <option >Select a Mandal </option>
          </Form.Select>
           </Col>
         </div>
         
         <div className="col">

           <Form.Label className="required"  htmlFor="village1">Village</Form.Label>
           <Col mb-3="true">
          <Form.Select id="village1" name="village1"  required >
          <option >Select a Village </option>
          </Form.Select>
           </Col>
         </div>
           </div>
           <br/>
           </fieldset>
           </div>
           <div className="row">
           &nbsp;
           <fieldset>
              <legend> Payroll</legend>
           <div className="row">

              <div className="col-4">
              <Form.Label  htmlFor="lpa" className="required">Salary(LPA)</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="lpa" name="lpa" placeholder="000000" required />
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="salary" className="required">Salary per month</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="salary" placeholder="000000" name="salary" required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="basic" className="required">Basic Salary</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="basic"   placeholder="000000" name="basic" required/>
          </Col>
              </div>

              <div className="col-4">

              <Form.Label  htmlFor="hra" className="required">HRA</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="hra" name="hra" placeholder="000000" required/>
          </Col>
              </div>

              <div className="col-4">

              <Form.Label  htmlFor="ca" className="required">Conveyance Allowance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="ca" name="ca"  placeholder="000000" required/>
          </Col>
              </div>

              <div className="col-4">

              <Form.Label  htmlFor="others" className="required">Others</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="others" name="others"  placeholder="000000" required/>
          </Col>
              </div>

              <div className="col-4">

              <Form.Label  htmlFor="pf" className="required">PF</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="pf" name="pf"  placeholder="00000" required/>
          </Col>
              </div>


              <div className="col-4">

              <Form.Label  htmlFor="tax" className="required">Professional Tax</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="tax" name="tax"  placeholder="00000" required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="esi" >ESI</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="esi" name="esi"  placeholder="00000"/>
          </Col>
          </div>

          <div className="col-4">
              <Form.Label  htmlFor="tds">TDS</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="tds" name="tds"  placeholder="00000"/>
          </Col>
          </div>
            <div className="col-4">
              <Form.Label  htmlFor="insurance">Insurance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="insurance" name="insurance"  placeholder="00000"/>
          </Col>
            </div>
            <div className="col-4">

              <Form.Label  htmlFor="loan">loan</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="loan" name="loan"  placeholder="00000"/>
          </Col>
            </div>
           </div>
           <br/>
            </fieldset>
            </div>
          </Row>
        </Form.Group>
  <Button variant="primary" type="submit">Add Employee</Button>
      </Form>
          <Col sm={{ span: 10,offset: 5}}>
   
     
  {/* Form inputs */}

 
          </Col>
          <br />
          <br />
    </Card.Body>
  </Card>

            {/* popup*/}

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleRowClick({ name: '1', value: "" })}>
                <td>1</td>
                <td>Row 1</td>
                <td>1</td>
              </tr>
              <tr onClick={() => handleRowClick({ name: 'Row 2', value: 2 })}>
                <td>2</td>
                <td>Row 2</td>
                <td>2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </div>
);
}

export default add;