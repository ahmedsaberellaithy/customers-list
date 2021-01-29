import React from 'react';
import { Row, Col } from 'react-bootstrap';
import customerApi from "./customerApi"; 

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

export default class CustomerFilters extends React.Component {

    state = {
        valid:'all',
        country:'all'
    }

    change = (e) => {
        console.log(e);
        console.log(e.target.value);
    }


    render() {
        return (
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
        )
    }
}