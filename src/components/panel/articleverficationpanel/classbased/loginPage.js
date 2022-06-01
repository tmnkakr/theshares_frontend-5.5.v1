import react from "react";
//import TopmostTrayForPanel from "./topmostTray";
// import "../../../css/editor/classbased/editorPage.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import MainLoginAreaForPanel from "./mainLoginArea";
import CryptoImage from './CryptoImage.png'
import { Card } from 'react-bootstrap';
import Modalshow from '../function/Modalshow'


class LoginPageForArticalVerificationPanel extends react.Component {


  render() {
    return (


      <div className="parent_container">

        <Modalshow />

        {/* <TopmostTrayForPanel></TopmostTrayForPanel> */}
        {/* <Popup trigger={<button> Trigger</button>}>
          <div>Popup content here !!</div>
        </Popup> */}




        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">TheShares Education</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Articles</Nav.Link>
                <NavDropdown title="Popular Articles" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Article 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Article 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Article 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Anop's Desk</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More Information</Nav.Link>
                <Nav.Link eventKey={2} href="#memes"> Pricing</Nav.Link>
                <Button>LogIn</Button>h
                <Button color="danger" style={{ font: "red" }}>New User</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>




        <MainLoginAreaForPanel authorizeUser={this.props.authorizeUser}></MainLoginAreaForPanel>

        <div><center><h1 style={{ font: "Red" }}>Welcome to the World of TheShares, Real News, knowledge</h1></center></div>
        <div style={{ display: "flex" }}>
          <img src={CryptoImage} alt=" " />

        </div>


        <div>
          <h1><center>Articles</center></h1>
          <div className="cointainer" style={{ display: "flex" }}>
            <div className="row">
              <span className="col-md-1"></span>

              <Card className="col-md-3 col-sm">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>JPMorgan shareholders reject special $52.6-million payout to CEO Jamie Dimon</Card.Title>
                  <Card.Text>
                  Based on the open interest future percentage, there were 87 stocks in which a short build-up was seen including Petronet LNG, Indian Hotels, ACC, Indian Oil Corporation, and Bharat Electronics.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card className="col-md-3 col-sm">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Axis Mutual Fund case: 'Investors should wait for investigation to get over before taking a call on their investments’</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              <Card className="col-md-3 col-sm">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Have volatile markets driven investors out of mutual funds?</Card.Title>
                  <Card.Text>Based on the open interest future percentage, there were 87 stocks in which a short build-up was seen including Petronet LNG, Indian Hotels, ACC, Indian Oil Corporation, and Bharat Electronics.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              

              <span className="col-md-1"></span>

            </div>
          </div>

        </div>


        <div>< br />< br />  < br />
          <center><h1>We Are on the Way</h1></center>
          < br />< br />  < br />

        </div>
        <hr />
        <center>
          <h1>Early Access Form</h1>
          <form><br /><br />
            <label>Enter your name: <input type="text" /> </label>
            <label>Enter your EMail: <input type="email" /> </label>
            <label>Enter your Phone: <input type="Phone" /> </label>

          </form>
        </center>
        <br /><br /><br />

      </div>



    );
  }
}
export default LoginPageForArticalVerificationPanel;
