import React, { Component } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
AOS.init();

export default class Next extends Component {
    state = {
        tableData : []
    }


// delete items function (not needed as per pdf given)

    // handleOption = (e) => {
    //     const itemId = e.target.id;
    //     console.log(itemId);
    //     this.state.tableData.some((todoItem,i) => {
    //       console.log(todoItem.id);
    //       console.log(i);
    //         if (todoItem.id == itemId) {
    //           console.log('hello');
    //            this.setState({
    //                tableData : this.state.tableData.splice(i,1),
    //            })
    //            localStorage.setItem("Data", JSON.stringify(this.state.tableData));
    //            window.location.reload();
    //             return true;
                
    //         }
    //     });
    // }

    componentDidMount (){
        if (localStorage.getItem("Data")) {
            this.setState({
                tableData : JSON.parse(localStorage.getItem("Data")),
            })
        }
    }

    render() {
      return (
        <React.Fragment>
        <div className="container-fluid">
            <div className="py-5"></div>
            <div className="card shadow mx-auto" style={{minWidth:"700px"}}>
                <div className="card-header text-center bg-white fw-bold border-0">
                    <h1 className="text-primary fw-bold">List</h1>
                </div>
                <table class="table table-hover" data-aos="fade-up">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Color</th>
                            <th scope="col">RAM</th>
                            {/* <th scope="col">Option</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map(item => (
                            <tr key={item.id} data-aos="fade-up">
                                <td>{item.name}</td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>{item.brand}</td>
                                <td>{item.color}</td>
                                <td>{item.ram}</td>
                                {/* <td>
                                    <div className="btn btn-outline-primary" id ={item.id} onClick={this.handleOption}>Dlt</div>
                                </td> */}
                            </tr>
                          ))}
                    </tbody>
                </table>
            </div>
        </div>
        </React.Fragment>
      );
    }
}
