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
    country:'all',
    validity:'all',
    customers: []
  }

  changeCountry = (e) => {
    const country = e.target.value;
    this.setState({ country });
    customerApi({country,valid:this.state.validity}).then(res => {
      const customers = res.data;
      this.setState({ customers });
    });
  }

  changeValidity = (e) => {
    const validity = e.target.value;
    this.setState({ validity });
    customerApi({valid:validity,country:this.state.country}).then(res => {
      const customers = res.data;
      this.setState({ customers });
    })
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
                <select key="country" onChange={this.changeCountry}>
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
                <select key="status" onChange={this.changeValidity}>
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
        <Row>

        </Row>
        <Row>
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
        </Row>
      </Container>
    )
  }
}