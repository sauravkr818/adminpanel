import React, { Component } from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();

export default class Home extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        name : '',
        email : '',
        mobile : '',
        brand : '',
        color : '',
        ram : '',
        tableData : []
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMobile = this.handleMobile.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleRam = this.handleRam.bind(this);
    this.handleSave = this.handleSave.bind(this);
}

handleName = (e) => {
    this.setState({name: e.target.value});
}

handleEmail = (e) => {
    this.setState({email: e.target.value});
}

handleBrand = (e) => {
    this.setState({brand: e.target.value});
}

handleColor = (e) => {
    this.setState({color: e.target.value});
}

handleMobile = (e) => {
    this.setState({mobile: e.target.value});
}

handleRam = (e) => {
    this.setState({ram: e.target.value})
}

handleSave = (e) => {
    e.preventDefault();
    const data = {
        id : Date.now(),
        name  : this.state.name,
        email : this.state.email,
        mobile : this.state.mobile,
        brand : this.state.brand,
        color : this.state.color,
        ram : this.state.ram   
    };
    this.setState(state => ({
        tableData : state.tableData.concat(data)
      }));
    localStorage.setItem("Data", JSON.stringify(this.state.tableData.concat(data))); // key and its value
    const alert = `
                <div class="text-center fixed-top alert alert-success alert-dismissible fade show shadow border-0 w-75 mx-auto my-3" role="alert"  data-aos="fade-down" style={{zIndex:"100000"}}>
                    <strong>Saved Successfully
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
                $("#confirmation").html(alert);
    }

componentDidMount () {
    if (localStorage.getItem("Data")) {
        this.setState({
            tableData : JSON.parse(localStorage.getItem("Data"))
        })
    }
   
}


    render() {
      return (
        <React.Fragment>
        <div className="container-fluid">
            <div className="py-1"></div>
            <div class="alert alert-primary d-flex justify-content-center" role="alert">
                <h1 className="Display-1 fw-bold">Admin Panel
                </h1>
            </div>
            <div id="confirmation"></div>
            <div className="py-4"></div>
            <div class="card w-75 mx-auto shadow border-0">
            <div class="card-header h5 bg-white border-0 text-sm-center text-left">Please fill the details of the user</div>
                <div class="card-body">
                <div className="py-4"></div>
                    <div class="row g-2">
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="validationDefault01" placeholder="name@example.com" onChange={this.handleName} required/>
                                <label for="validationDefault01"><i class="fas fa-user me-2" style={{color: "#845ef7"}}></i>Name</label>
                            </div>  
                        </div>
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput2" placeholder="name@example.com" onChange={this.handleEmail} required/>
                                <label for="floatingInput2"><i class="fas fa-envelope me-2" style={{color: "#845ef7"}}></i>Email address</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-2"></div>
                    <div class="row g-2">
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="tel" class="form-control" id="floatingInput3" placeholder="name@example.com" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="10" onChange={this.handleMobile} required/>
                                <label for="floatingInput3"><i class="fas fa-phone-square-alt me-2" style={{color: "#845ef7"}}></i>Mobile No.</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput4" placeholder="name@example.com" onChange={this.handleBrand} required/>
                                <label for="floatingInput4"><i class="fas fa-copyright me-2" style={{color: "#845ef7"}}></i>Brand Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-2"></div>
                    <div class="row g-2">
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput5" placeholder="name@example.com" onChange={this.handleColor} required/>
                                <label for="floatingInput5"><i class="fas fa-tint me-2" style={{color: "#845ef7"}}></i>Color</label>
                            </div>
                        </div>
                        <div class="col-md">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput6" placeholder="name@example.com" onChange={this.handleRam} required/>
                                <label for="floatingInput6"><i class="fas fa-memory me-2" style={{color: "#845ef7"}}></i>RAM</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-2"></div>
                </div>
                <div className="card-footer bg-white border-0 ms-auto">
                    <button className="btn btn-lg btn-outline-primary fw-bold me-2 mb-2" type="submit" onClick={this.handleSave}>
                        Save
                       </button>
                    <Link to="/next">
                        <div className="btn btn-lg btn-outline-primary fw-bold mb-2">
                            Go to table
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </React.Fragment>
      );
    }
    
    
}
