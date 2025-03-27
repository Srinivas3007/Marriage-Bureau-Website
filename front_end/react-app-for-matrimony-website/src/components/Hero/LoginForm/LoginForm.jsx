import './LoginForm.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function LoginForm(){
    return(
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Profile for</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option ></option>
                        <option value="1">Myself</option>
                        <option value="2">Daughter</option>
                        <option value="3">Son</option>
                        <option value="4">Sister</option>
                        <option value="5">Brother</option>
                        <option value="6">Relative</option>
                        <option value="7">Friend</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> 
            <Button type="submit">Register for Free</Button>
            </Form>
        </>
    );
}