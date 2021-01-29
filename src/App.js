import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CustomerList from './customers/customerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <h3 style={{textAlign:"center"}}>Customers List</h3> 
        </Row>
        <Row>
          <CustomerList/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
