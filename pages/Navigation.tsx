import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const Navigation = () => {
    return ( 
        <Navbar style={ {backgroundColor: "#1b1e1f"} } expand="lg">
            <Navbar.Brand href="" style={{color: "white"}}>Daniel Li</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto .nav-link">
                    <Link href ="/" passHref={true}>
                        <Nav.Link style={{color: "#818281"}}>Home</Nav.Link>
                    </Link>
                    <Nav.Link href="https://github.com/danielsqli" target="_blank" style={{color: "#818281"}}>Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/daniel-li-8ba675161" target="_blank" style={{color: "#818281"}}>Linkedin</Nav.Link>
                    <Nav.Link href="/Resume.pdf" target="_blank" style={{color: "#818281"}}>Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
