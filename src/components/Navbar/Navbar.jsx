// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "./Navbar.css";
// import CartWidget from "../CartWidget/CartWidget";

// const OwnNavBar = () => {
  
// //   const navegacion = ['Home', 'Tienda', 'Contacto', 'Ayuda']

// //   const handleConsole = () => console.log('Aca estoy')

// //   return (
// //     <Navbar fixed="top" expand="lg" className={["bg-body-tertiary, navbar"]}>
// //       <Container>
// //         <div className="navbar">
// //         <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
// //         </div>
// //         <Navbar className="bg-body-tertiary navbar">
// //           <Container className="navbar-cointainer">
// //             <Navbar.Brand className="navbar-brand">
// //               <img src="/images/logo1.png" className="logo" alt="React Bootstrap logo" />
// //             </Navbar.Brand>
// //           </Container>
// //         </Navbar>
// //         <Navbar.Brand href="#home">Venta de Articulos Importados</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //         <Navbar.Collapse id="basic-navbar-nav">
// //           <Nav className="me-auto">
// //             <NavDropdown title="Products" id="basic-nav-dropdown">
// //               <NavDropdown.Item onClick={onItemClicked} href="#action/3.1">
// //                 Iphone 14
// //               </NavDropdown.Item>
// //               <NavDropdown.Item onClick={onItemClicked} href="#action/3.2">
// //                 Iphone 13
// //               </NavDropdown.Item>
// //               <NavDropdown.Item onClick={onItemClicked} href="#action/3.3">
// //                 MacBooks
// //               </NavDropdown.Item>
// //             </NavDropdown>
// //           </Nav>
// //         </Navbar.Collapse>
// //         <CartWidget />
// //       </Container>
// //     </Navbar>
// //   );
// // }

// // const onItemClicked = () => {
// //   alert("Item clicked");
// // };

// // export default OwnNavBar;

// const OwnNavBar = () => {

//   const navegacion = ['Home', 'Tienda', 'Contacto', 'Ayuda']

//   const handleConsole = () => console.log('Aca estoy')

//   return (
//     <div className="navbar">
//       <ItemListContainer router={navegacion} handleConsole={handleConsole}/>
//       <CartWidget/>
//     </div>
//   );
// };

// export default OwnNavBar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logo from '../../assets/images/logo1.png';
import Cart from '../CartWidget/CartWidget';

function Navegador() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container className="navbar">
                    <Navbar.Brand>
                        <img src={logo} alt="logo de tu jardin interior" style={{ width: '150px', height: 'auto' }} />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Plantas de Interior</Nav.Link>
                        <Nav.Link href="#features">Macetas</Nav.Link>
                        <Nav.Link href="#pricing">Accesorios</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                    <Cart />
                </Container>
            </Navbar>
        </div>
    );
}

export default Navegador;