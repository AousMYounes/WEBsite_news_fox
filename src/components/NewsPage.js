
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/newsActions';






// import image from '../assets/images/image111.jpg';


import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';


  const NewsPage = ({src}) => {
  
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector(state => state.news);
  
    useEffect(() => {
      dispatch((fetchNews()));
    }, [dispatch]);

  const handleReadMore = (id) => {
    navigate(`/news/${id}`);
  };
  const { t } = useTranslation();
  return (
    <Container className='c22 bg-dark'>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <br></br>
      <center><h1><span className='badge'>{t("Latest")}</span></h1></center>
      <br></br>

      <Row mb={3}>
        {news.map(item => (
          <Col xl={4} md={6} sm={12} key={item.id}>
            <Card className='bg-dark text-light  w-100 mb-3 c1' >
              <Card.Img variant="top" src={item.urlToImage} style={{height:"200px",width:"100%"}} />
              <Card.Body>
                <Card.Title>{t(item.title)}</Card.Title>
                
                <Button variant="warning" onClick={() => handleReadMore(item.source.id)}>{t("btnNews")}</Button>
              </Card.Body>
              <br></br>
            </Card>
            
          </Col>
          
        ))}
        <br></br>
        
      </Row>
      <br></br>
    </Container>
  );
  
};



export default NewsPage;
