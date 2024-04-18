import React from "react";
import Sidebar from "./partials/sidebar";
import "./home.css"; 
import Header from "./partials/header";
function Homepage() {
    return (
      <div className="d-flex flex-column">
            
      
         
      <div className="d-flex">
           
        
            {/* Main content */}
            <div className="main-content">
                <div className="justify-content-center align-items-center">
                    <div className="align-self-auto w-100 bg-white rounded p-3 mx-4">
                        <div className="table-responsive">
                            <table className="table table-striped text-center ">
                                <thead className="thead-dark">
                                <tr className="table-dark">
                                        <th className="align-middle">Employee  ID</th>
                                        <th className="align-middle">Name</th>
                                        <th className="align-middle">Phone Number</th>
                                        <th className="align-middle">E-mail</th>
                                        <th className="align-middle">Employee Image</th>
                                        <th className="align-middle">Manager Name</th>
                                        <th className="align-middle">Designation</th>
                                        <th className="align-middle">Work Location</th>
                                        <th className="align-middle">Action</th>
                                    </tr>
                                </thead>
                                {
                             
                               }
                              
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Homepage;

