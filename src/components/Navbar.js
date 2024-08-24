import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import logo from '../assets/images/fox-news-icon-66.png';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  // const {news , home , contactus} =t("navbar");

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar  expand="lg" bg="dark" id='n1'  className='navbar navbar-expand-lg navbar-dark bg-dark mb-3' dir={t('DIR')}>
    <Container >
      <Navbar.Brand as={Link} to="/"><img src={logo} alt="logoImg" width={50} height={50} />Fox News Now</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' >
      <Nav className="m-auto cv">
        <Nav.Link className='l1' as={Link} to="/" >{t("home")}</Nav.Link>
        <Nav.Link className='l1' as={Link} to="/news">{t("news")}</Nav.Link>
        <Nav.Link className='l1' as={Link} to="/contact">{t("contactus")}</Nav.Link>
      
      
      <Dropdown  className='d1' >
        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="l2">
          {t('Language')}
        </Dropdown.Toggle>
        <Dropdown.Menu id='menu'>
          <Dropdown.Item className='l3' onClick={() => handleLanguageChange('ar')}>{t('Arabic')}</Dropdown.Item>
          <Dropdown.Item className='l3' onClick={() => handleLanguageChange('en')}>{t('English')}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     </Nav>
     <br></br>
     <Form inline id='f1'>
     <Row>
       <Col xe="auto" >
         <Form.Control
           type="text"
           size='100'
           placeholder={t("PlacSubmit")}
           className=" mr-sm-2 fctn"
         />
       </Col>
       <Col xs="auto">
         <Button type="submit" variant="warning" id='fbtn'>{t("Submit")}</Button>
       </Col>
     </Row>
   </Form>
     </Navbar.Collapse>
     
     </Container>
     
    </Navbar>
  );
};

export default NavBar;

