import React from 'react';
import customerApi from "./customerApi";
import { Container,Table,Row, Col, Dropdown } from 'react-bootstrap';


const countries = [
  "cameroon",
  "ethiopia",
  "morocco",
  "mozambique",
  "uganda"
];

const statuses = [
  "inValid",
  "valid"
];

export default class CustomerList extends React.Component {
  state = {
    customers: []
  }

  change = (e) => {
    console.log(e);
    console.log(e.target.value);
  }

  componentDidMount() {
    customerApi({}).then(res => {
        const customers = res.data;
        this.setState({ customers });
      })
  }

  render() {
    return (
      <Container>
          <Row className="filters">
            <Col>
                <select key="country" onChange={this.change}>
                    <option value="all">All Customers</option>
                    {
                        countries.map(country=>{
                            return (<option key={country} value={country}>
                                {country}
                            </option>)
                        })
                    }
                </select>
            </Col>
            <Col>
                <select key="status" onChange={this.change}>
                    <option value="all">All Customers</option>
                    {
                        statuses.map(status=>{
                            return (<option key={status} value={status}>
                                {status}
                            </option>)
                        })
                    }
                </select>
            </Col>
        </Row>
        <Table responsive striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.customers.map(customer=>{
              return (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      </Container>
    )
  }
}