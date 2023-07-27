import React from 'react';
import './About.css';
import backgroundImage from './background7.jpg';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="background-image"></div>
      <div className="contentabout">
        <h1>About Us</h1>
      </div>
      <div className="mission-vision-value-container">
        <div className="mission">
          <h2>MISSION</h2>
          <p>Empowering institutions, businesses, and students with cutting-edge logistics and packers & movers solutions, Campus Express is committed to revolutionizing the industry. Our mission is to simplify the complexities of transportation and supply chain management, while providing unparalleled service quality and customer satisfaction. Through our innovative approach and global reach, we strive to create a seamless experience for all our clients, delivering excellence in every aspect of our operations.</p>
        </div>
        <div className="vision">
          <h2>VISION</h2>
          <p>At Campus Express, we envision a world where logistics and packers & movers services are synonymous with efficiency and reliability. Our vision is to be the foremost choice for institutions, companies, and students seeking hassle-free, tailored logistics solutions. By leveraging technology and our team's expertise, we aim to set new industry standards, continually expanding our global presence and enhancing the lives of our customers.</p>
        </div>
        <div className="value">
          <h2>VALUE</h2>
          <p>Campus Express is a 3-year-old Logistics and Packers & Movers company. We help Institutions, Companies & Universities simplify their logistics challenges. Till date, we have successfully served several domestic & international clients alongside serving more than 15,000+ students from 300+ colleges, with a record success rate. We are spread across companies, HEIs, and extend our service for both domestic & international logistics alongside custom consultation. We simplify logistics to make your experience friction-free.</p>
        </div>
      </div>
    </div>
  );
};

export default About;