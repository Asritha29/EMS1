import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from "./partials/sidebar";
import Header from "./partials/header";
import './home.css'
function Leave() {
  return (
    <div className="d-flex flex-column">
            
            
    <div className="d-flex justify-content-center align-items-center vh-100 leave-container">
      <div className="col-xl-4">
    <Card >
    <Card.Header className="text-center bg-primary text-white"><h4>Leave Requst</h4></Card.Header>
    <Card.Body >
      <form action="/leave">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column  htmlFor="name" className="required">Name</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="name" placeholder="Name" required />
          
          </Col>
          <Form.Label column  htmlFor="EmpId" className="required">Employee-Id</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="name" placeholder="Employee-Id" required />
         
          </Col>
          <Form.Label column  htmlFor="LSD" className="required" >Leave Start Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="LSD" placeholder="mm/dd/yyyy"required />
          
          </Col>
          <Form.Label column  htmlFor="End" className="required" >Leave End Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="end" placeholder="mm/dd/yyyy" required />
         
          </Col>
           <Form.Label className="required" htmlFor="reason">Reason</Form.Label>
           <Col sm="12">
          <Form.Control as="textarea" rows={3}  id="reason"  placeholder="Reason for leave application" required/>
           </Col>
        </Form.Group>
      </form>
          <Col sm={{ span: 10,  }}>
      
            <Button variant="primary" type="submit">Apply</Button> 
          </Col>
      
    </Card.Body>
  </Card>
    </div>
      </div>
    </div>
    
);
}

export default Leave;
