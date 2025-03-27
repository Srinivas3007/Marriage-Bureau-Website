import './Hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from './LoginForm/LoginForm';
import LandingPage from './LandingPage/LandingPage';


export default function Hero(){
    return(
        <div>
            <Container>
                <Row>
                    <Col><LandingPage/></Col>
                    <Col><LoginForm/></Col>
                </Row>
            </Container>
        </div>
    );
}