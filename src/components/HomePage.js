import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import imag1 from '../assets/images/fox-news-icon-66.png';
import { useNavigate } from 'react-router-dom';
import { ArrowRightCircle } from "react-bootstrap-icons";
import Image1 from '../assets/images/i1.webp';
import Image2 from '../assets/images/i2.webp';
import Image3 from '../assets/images/i3.webp';
import Image4 from '../assets/images/i4.webp';
import Image5 from '../assets/images/i5.webp';
import Image6 from '../assets/images/i6.webp';
import Image7 from '../assets/images/i7.webp';
import Image8 from '../assets/images/i8.webp';
import Image9 from '../assets/images/i9.jpeg';
import { useTranslation } from 'react-i18next';
const HomePage = () => {
  const { t } = useTranslation();
 const navigate = useNavigate()
 
 
  return(
    <div className='w-100 h-100 bg-dark vv'>
    <br></br>
    <br></br>
    
  <Container className="text-center w-100 h-auto" id='hoome'>
    <Row>
      <Col xs={12} md={6} xl={5}>
        <img src={imag1} alt="HomeImage" id='HomeImage' className="img-fluid iii" />
      </Col>
      <Col xs={12} md={6} xl={5} id='ttt'>
      <br></br>
      <br></br>
      <br></br>
      
        <h1><font size="7" color="#e7a03d"><b>{t("homePageTitle")}</b></font></h1>
        <br></br>
        <p><em><b><font size="5" color="#f3dec2">{t("homePagePara")}</font></b></em></p>
        <br></br>
        <p><em><b><font size="5" color="#f3dec2">{t("homePagePara1")}</font></b></em></p>
        
        <button onClick={()=> navigate('/contact')}>{t("BB")}<ArrowRightCircle size={25}/></button>
      </Col>
    </Row>
    <br></br>
    <br></br>
    
  </Container>
  <br></br>
  <br></br>
  <div className='car1 w-100 h-auto ' dir={t('DIR')}>
 
  <br></br>
  <h1 className='h1h1'><font size="7" color="#fff">{t("LR")}</font></h1>
  <br></br>
  <Container className='c6 w-100 h-auto'>
  <Row>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light c61'>
    <Card.Img variant="top" src={Image1} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c62'>
      <Card.Title style={{color:"#e7a03d"}} className='c63'>{t("CARD1")}</Card.Title>
      <Card.Text className='h1h1ct'>
      {t("TCARD1")}
      </Card.Text>
      <br></br>
      <br></br>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
     <Card style={{ width: '25rem' }} className='bg-dark text-light c61'>
    <Card.Img variant="top" src={Image2} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c62'>
      <Card.Title style={{color:"#e7a03d"}} className='c63'>{t("CARD2")}</Card.Title>
      <Card.Text className='h1h1ct'>
      {t("TCARD2")}
      </Card.Text>
      <br></br>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light c61'>
    <Card.Img variant="top" src={Image3} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c62'>
      <Card.Title style={{color:"#e7a03d"}} className='c63'>{t("CARD3")}</Card.Title>
      <Card.Text className='h1h1ct'>
      {t("TCARD3")}
      </Card.Text>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
  </Row>
  </Container>
  <div className='car2 w-100 h-auto'>
  <br></br>
  <h1 className='h1h1'><font size="7" color="#fff">{t("BNEWS")}</font></h1>

  <br></br>
  <Container className='c7 w-100 h-auto'>
   <Row>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image4} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD4")}</Card.Title>
      <Card.Text className='h1h1ct2'>
        {t("TCARD4")}
      </Card.Text>
      <br></br>
      <br></br>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image5} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD5")}</Card.Title>
      <Card.Text className='h1h1ct2'>
      {t("TCARD5")}
      </Card.Text>
      <br></br>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image6} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD6")}</Card.Title>
      <Card.Text className='h1h1ct2'>
      {t("TCARD6")}
      </Card.Text>
      <br></br>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image7} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD7")}</Card.Title>
      <Card.Text className='h1h1ct2'>
      {t("TCARD7")}
      </Card.Text>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image8} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD8")}</Card.Title>
      <Card.Text className='h1h1ct2'>
      {t("TCARD8")}
      </Card.Text>
      <Button variant="warning"  onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
    <Col sm={4}>
    <Card style={{ width: '25rem' }} className='bg-dark text-light mb-5 c71'>
    <Card.Img variant="top" src={Image9} style={{height:"200px",width:"100%"}}/>
    <Card.Body className='c72'>
      <Card.Title style={{color:"#e7a03d"}} className='c73'>{t("CARD9")}</Card.Title>
      <Card.Text className='h1h1ct2'>
      {t("TCARD9")}
      </Card.Text>
      <br></br>
      <Button variant="warning" onClick={()=> navigate('/news')}>{t("btnNews")}</Button>
    </Card.Body>
  </Card>
    </Col>
  </Row>
  </Container>
  </div>
  <div className="contactto">
  <br></br>
  <h1 className='H1contactto'><font size="7" color="#fff">{t("CON")}</font></h1>

  <br></br>
  <Container>
  <Row>
  <Col sm={12}>
  <h2 className='H2contactto'><font size="5" color="#f3dec2">{t("CONNTEXT")}</font></h2>
  <br></br>
  <button className="Bcontactto" onClick={()=> navigate('/contact')}><span>{t("TALK")}</span></button>
  </Col>
  </Row>
  </Container>
  </div>
  </div>
  </div>
  
  )
};

    
export default HomePage;
