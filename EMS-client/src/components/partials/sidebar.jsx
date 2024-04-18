import React from 'react';
import './header.css'; // Make sure you have this CSS file imported
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (

        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="position-sticky pt-4 sidebar-sticky">
                <div className="flex flex-column flex-shrink-0 p-3 bs-info-text-emphasis" style={{ width: '280px' }} id="element1">
                    <div className="container" id="element2">
                        <a className="navbar-brand" href="/home">
            
                        </a>
                        <div id="my-nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/EMS" style={{ color: 'azure' }}><i className="bi bi-house"></i>&nbsp; Home</a>
                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/EMS/add" style={{ color: 'azure' }}><i className="bi bi-person-plus-fill"></i>&nbsp; Add Employee</a>
                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/EMS/attendance" style={{ color: 'azure' }}><i className="bi bi-calendar2-event"></i>&nbsp; Attendance Tracker</a>

                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/EMS/payslip" style={{ color: 'azure' }}><i className="bi bi-file-earmark-ppt"></i>&nbsp; PaySlip</a>
                                </li>
                                <li className="nav-item dropdown"> 
  <a className="nav-link dropdown-toggle" href="#" role="button" id="leaveDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'azure' }}>
    <i className="bi bi-envelope-plus"></i>&nbsp; Leave Tracking
  </a>
  <ul className="dropdown-menu" aria-labelledby="leaveDropdown">
    <li><a className="dropdown-item" href="/EMS/leave">Leave Requests</a></li>
    <li><a className="dropdown-item" href="/EMS/leavetracking">Leave Trackinng</a></li>
    {/* Add other dropdown items */}
  </ul>
</li>
                                 <li className="nav-item active navbar-text">
                                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#logoutModal" style={{ color: 'azure' }}><i className="bi bi-box-arrow-right"></i>&nbsp; Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Logout Confirmation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <a href="/logout" className="btn btn-primary">Yes, Logout</a> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
