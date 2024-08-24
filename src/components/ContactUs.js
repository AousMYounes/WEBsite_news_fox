import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
const Contact = () => {
  const { t } = useTranslation();
  return(
    
  <div className='w-100 h-100 m-auto' dir={t('DIR')}>
    <center>
    <h2><span className='badge'>{t("contactus")}</span></h2>
    </center>
    <br></br>
    <Container  className='cl0' dir={t('DIR')}>
    <Row>
      <Col sm={8} className='cl1 bg-dark' >
      <br></br>
      <br></br>
      <h1 className='hcontact'><font size="7" color="#fff">{t("CON")}</font></h1>
      <br></br>
      <br></br>
      <div className='pcontact'>
      <p><font size="4" color="#c0c0c0">{t("PCON")}</font></p>
      </div>
      <div className='icontact'>
      <h3><font size="4" color=" #fff"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>  {t("AD")}</font></h3>
      <h3><font size="5" color=" #c0c0c0">{t("AD1")}</font></h3>
      </div>
      <br></br>
      <br></br>
      <div className='icontact1'>
      <h3><font size="4" color=" #fff"><i class="fas fa-phone" aria-hidden="true"></i>  {t("PH")}</font></h3>
      <h3><font size="5" color=" #c0c0c0">+01 - 123 456 7890</font></h3>
      </div>
      <br></br>
      <br></br>
      <div className='icontact2'>
      <h3><font size="4" color=" #fff"><i class="fas fa-envelope" aria-hidden="true"></i>  {t("EM")}</font></h3>
      <h3><font size="5" color=" #c0c0c0">FoxNewsNow@gmail.com</font></h3>
      </div>
      <br></br>
      <br></br>
      <div className='icontact3'>
      <h3><font size="5" color="#e7a03d">{t("FO")}</font></h3>
      <div className='follow'>
      <div className='content'>
      <h3><font size="7" color="#e7a03d"><i class="fab fa-youtube" aria-hidden="true"></i></font></h3>
      <h3><font size="5" color="#fff">19.8M+</font></h3>
      <h3><font size="3" color="#c0c0c0">{t("SU")}</font></h3>
      </div>
      <div className='content'>
      <h3><font size="7" color="#e7a03d"><i class="fab fa-instagram" aria-hidden="true"></i></font></h3>
      <h3><font size="5" color="#fff">33.7M+</font></h3>
      <h3><font size="3" color="#c0c0c0">{t("FL")}</font></h3>
      </div>
      <div className='content'>
      <h3><font size="7" color="#e7a03d"><i class="fab fa-twitter" aria-hidden="true"></i></font></h3>
      <h3><font size="5" color="#fff">11.2M+</font></h3>
      <h3><font size="3" color="#c0c0c0">{t("RE")}</font></h3>
      </div>
  
      <div className='content'>
      <h3><font size="7" color="#e7a03d"><i class="fab fa-facebook" aria-hidden="true"></i></font></h3>
      <h3><font size="5" color="#fff">40.6M+</font></h3>
      <h3><font size="3" color="#c0c0c0">{t("FA")}</font></h3>
      </div>
      </div>
      </div>
      </Col>
      <Col sm={4} className='cl2' dir={t('DIR')}>
      <div className='cl21'>
      <div className='cl211'>
      <br></br>
      <a href='https://www.youtube.com'><font size="5" color="#fff"><i class="fab fa-youtube" aria-hidden="true"></i></font></a>
      <a href='https://www.facebook.com/aous.younes.7'><font size="5" color="#fff"><i class="fab fa-facebook" aria-hidden="true"></i></font></a>
      <a href='https://www.instagram.com/aous.younes.7'><font size="5" color="#fff"><i class="fab fa-instagram" aria-hidden="true"></i></font></a>
      <a href='https://api.whatsapp.com/send/?phone=963985517031&text&type=phone_number&app_absent=0'><font size="5" color="#fff"><i class="fab fa-whatsapp" aria-hidden="true"></i></font></a>
      <button className="vvd" onClick={()=> console.log('connect')}><span>{t("TALK")}</span></button>
      </div>
      </div>
      <div className='cl22'></div>
      <div className='cl23'></div>
      </Col>
    </Row>
    <Row >
        <Col sm={4}  className='cl3 bg-dark position-absolute' style={{top:t("TOP"), right:t("RIGHT")}} dir={t('DIR')} >
    <Form className='bg-dark text-light mt-2 mb-2'>
    <br></br>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1" method="post" action="#">
    <h1>{t("TALK")}</h1>
      <Form.Label className='ml-3'>{t("NAME")} <font size="3" color="#e7a03d">*</font></Form.Label>
      <Form.Control type="text" placeholder={t("placeName")} required/>
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='ml-3'>{t("EMAIL")} <font size="3" color="#e7a03d">*</font></Form.Label>
      <Form.Control type="email" placeholder="name@example.com" required/>
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlInput1">
      <Form.Label className='ml-3'>{t("PASSWORD")} <font size="3" color="#e7a03d">*</font></Form.Label>
      <Form.Control type="password" placeholder={t("placePassword")} required/>
    </Form.Group>
    <Form.Group className="mb-3 ml-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label className='ml-3'>{t("COMMENT")} <font size="3" color="#e7a03d">*</font></Form.Label>
      <Form.Control as="textarea" rows={3} required/>
    </Form.Group>
    <button type='submit' className='btn  mb-5'>{t("SEND")}</button> 
    <br></br>
  </Form>
  </Col>
  </Row>
  </Container>
  </div>
 
)};

export default Contact;