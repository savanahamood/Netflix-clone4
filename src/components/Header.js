import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
{/*                     <Navbar.Brand >Movies App</Navbar.Brand>
 */}                    <Nav className="me-auto">
                     {/*    <link to="/">Home</link>
                        <link to="/trending">Fav List</link> */}

                         <Nav.Link href="/trending">Home</Nav.Link> 
                      <Nav.Link href="/getMovies">Fav List</Nav.Link>
 
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;