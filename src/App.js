import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
  return (
    <div className='my-component'>
    <Form>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="surname" placeholder="Enter your surname/nickname" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}
// function MyForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Your form submit logic here
//   }

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <ControlLabel>Email</ControlLabel>
//         <FormControl type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
//       </FormGroup>
//       <FormGroup>
//         <ControlLabel>Password</ControlLabel>
//         <FormControl type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
//       </FormGroup>
//       <Button type="submit" bsStyle="primary">Submit</Button>
//     </Form>
//   );
// }

const Person = (value) => { 
  return (  
  <>
     <h2>name : {value.name}</h2>
     <h2>surname : Sassour</h2>
     <h2> Age : {value.age}</h2>
  </>
  )}
const All = () => {
  const  [counter, setCounter] = useState(0)
  return (
    <div className='All'>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1 ) } > - </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1 )}>+</button>
    </div>
    
  )
}
  const App = () => {
   const name = "Oussama"
  return (
    <div className="App">
      <h1>Hi mr {name} can you full this form pleas</h1>
    <Person name = "Oussama"  age = "30"/>
    <Person name = "Yassir"  age = "20" />
    </div>
  );
}

export default GridComplexExample;
