import React from 'react';
import customerApi from "./customerApi";
import { Table } from 'react-bootstrap';

export default class CustomerList extends React.Component {
  state = {
    customers: []
  }

  componentDidMount() {
    customerApi({}).then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        {
          this.state.customers.map(customer=>{
            return (<tbody>
              <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
              </tr>
            </tbody>)
          })
        }
      </Table>
    )
  }
}