import React from 'react';
import axios from 'axios';
import MaterialTable from "material-table"; 

const baseUrl = "http://localhost:8082";
// const baseUrl = process.env.REACT_APP_BASE_URL;
export default class CustomerList extends React.Component {
  state = {
    customers: []
  }

  componentDidMount() {
    console.log(baseUrl);
    axios.get(`${baseUrl}/customers`,
      {
        headers:{
        "Content-Type":"application/json"
      }
    })
      .then(res => {
        const customers = res.data;
        console.log(customers);
        this.setState({ customers });
      })
  }

  render() {
    return (
      <div className="App"> 
        <h1>Customers List</h1> 
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable 
            columns={[
              { 
                title: "#", 
                field: "id"
              },
              { 
                title: "Contact Name",
                field: "name" 
              }, 
              { 
                title: "Phone Number", 
                field: "phone"
              }
            ]}
            data={this.state.customers}
            title="Customers List" 
          />
        </div> 
      </div>
    )
  }
}