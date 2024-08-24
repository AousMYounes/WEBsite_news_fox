import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Card, Container, Col, Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const NewsDetails = () => {
  // const { id } = useParams();
  const [articles, setArticles] = useState([]);
 
    const {  loading, error } = useSelector(state => state.news);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=b39e6ba9d52e4a7092637ef59a4c3944`);
        setArticles(response.data.articles);
        
      } catch (error) {
        console.error('Error fetching news detail', error);
      }
    };
    fetchArticle();
  }, [articles]);

  if (!articles) return <p>Loading...</p>;
  
  return (
    <Container>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <center><h1><span className='badge'>{t("DETAILS")}</span></h1></center>
      <br></br>
    {articles.map((article) => {
      return(
    <Col md={12} key={article.id}>
      <Card className='bg-dark text-light mb-3'>
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title><font size="6" color="#cb8624">{t(article.title)}</font></Card.Title>
          <Card.Text>{t(article.description)}</Card.Text>
          <Card.Text>{t(article.author)}</Card.Text>
          <Card.Text>{t(article.publishedAt)}</Card.Text>
          <Card.Text>{t(article.content)}</Card.Text>
          <Card.Text>{article.url}</Card.Text>
          <Button variant="warning" onClick={() => window.history.back()}>{t("BACK")}</Button>
        </Card.Body>
      </Card>
      </Col>)}
    )}
    </Container>
  );
};



export default NewsDetails;
