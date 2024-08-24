import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return(
  <Navbar bg="dark" id='n1' variant="dark" fixed="bottom">
  
    <Navbar.Text className="text-center w-100" id='tt'>
       {t("design")} &copy; 2024 <span className='text'>{t("author")}</span>
    </Navbar.Text>
  </Navbar>
)};

export default Footer;