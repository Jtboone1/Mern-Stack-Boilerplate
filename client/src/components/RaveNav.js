import Navbar from "react-bootstrap/NavBar"
import { Link } from "react-router-dom";

const RaveNav = () => {
    return (
      <Navbar bg="light">
        <Navbar.Brand style={{marginLeft: "20%"}}>
          <Link to="/" style={{color: "black"}}>Rave </Link>
        </Navbar.Brand>
        <Navbar.Text style={{marginLeft: 30}}>
          A Real Time Music Player
        </Navbar.Text>
      </Navbar>
    )
}

export default RaveNav;
