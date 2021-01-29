import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerList from './customers/customerList';
import CustomerFilters from './customers/CustomerFilters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <h3 style={{textAlign:"center"}}>Customers List</h3> 
        </Row>
        <Row className="justify-content-md-center">
          <CustomerFilters/>
        </Row>
        <Row className="justify-content-md-center">
          <CustomerList/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
