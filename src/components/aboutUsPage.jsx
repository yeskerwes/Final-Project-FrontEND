import React, { useState } from 'react';
import '../styles/aboutUsPage.css'; 
import fullScreenImage from '../images/aboutus-fullscreen.jpg'; 
import nikephoto from '../images/nikephoto.png';
import Maddy from '../images/Maddy.png';
import Jaiden from '../images/Jaiden.png';
import Simone from '../images/Simone.png';
import Kiara from '../images/Kiara.png';
import Scottie from '../images/Scottie.png';
import member1 from '../images/member1.png';
import member2 from '../images/member2.png';
import supervisor2 from '..//images/supervisor2.png';
import supervisor1 from '..//images/supervisor1.png';

const AboutUsPage = () => {
  const [selectedBoard, setSelectedBoard] = useState('management');

  return (
    <div className="about-page">
      <section className="image-section">
        <img src={nikephoto} alt="Nike Sneakers Showcase" className="full-screen-image" />
        <div className="image-overlay"></div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Nike, we’re committed to inspiring and innovating for athletes everywhere. We believe in the power of movement and self-expression, one step at a time.
        </p>
      </section>

      <section className="welcome-section">
        <h1>“The Better I Look and Feel, the Better I Play”</h1>
      </section>

      <section className="image-section">
        <img src={fullScreenImage} alt="Nike Sneakers Showcase" className="full-screen-image" />
        <div className="image-overlay"></div>
      </section>

      <section className="scroll-section">
          <h2>Athlete Highlights</h2> 
          <div className="scroll-container">
            <div className="scroll-item">
              <img src={Maddy} alt="Maddy Elmore" />
              <h3>LESS REALLY IS MORE</h3>
              <p>Maddy Elmore</p>
              <p><span>Track and field, University of Oregon</span></p>
            </div>
            <div className="scroll-item">
              <img src={Jaiden} alt="Jaiden Rodriguez" />
              <h3>THE RITUALS MATTER</h3>
              <p>Jaiden Rodriguez</p>
              <p><span>Soccer midfielder, USA National Team</span></p>
            </div>
            <div className="scroll-item">
              <img src={Simone} alt="Simone Jackson" />
              <h3>THE BEST LOOK IS A REAL LOOK</h3>
              <p>Simone Jackson</p>
              <p><span>Soccer forward, University of Southern California</span></p>
            </div>
            <div className="scroll-item">
              <img src={Kiara} alt="Kiara Romero" />
              <h3>DRESS FOR THE ENERGY YOU WANT</h3>
              <p>Kiara Romero</p>
              <p><span>Golf, University of Oregon</span></p>
            </div>
            <div className="scroll-item">
              <img src={Scottie} alt="Scottie Antonucci" />
              <h3>FIND YOUR VISUAL REMINDER</h3>
              <p>Scottie Antonucci</p>
              <p><span>Soccer midfielder, USA National Team</span></p>
            </div>
          </div>
        </section>


      <section className="board-section">
        <div className="board-tabs">
          <span
            className={`board-tab ${selectedBoard === 'management' ? 'active' : ''}`}
            onClick={() => setSelectedBoard('management')}
          >
            MANAGEMENT BOARD
          </span>
          <span
            className={`board-tab ${selectedBoard === 'supervisory' ? 'active' : ''}`}
            onClick={() => setSelectedBoard('supervisory')}
          >
            SUPERVISORY BOARD
          </span>
        </div>

        <div className="board-content">
          {selectedBoard === 'management' && (
            <div className="board-details">
              
              <div className="board-members">
                <div className="member">
                  <img src={member1} alt="Member 1" className="member-photo" />
                  <p className="member-name">Elliott Hill</p>
                </div>
                <div className="member">
                  <img src={member2} alt="Member 2" className="member-photo" />
                  <p className="member-name">Mark Parker</p>
                </div>
              </div>
            </div>
          )}
          {selectedBoard === 'supervisory' && (
            <div className="board-details">
              <div className="board-members">
                <div className="member">
                  <img src={supervisor1} alt="Supervisor 1" className="member-photo" />
                  <p className="member-name">Philip H. Knight</p>
                </div>
                <div className="member">
                  <img src={supervisor2} alt="Supervisor 2" className="member-photo" />
                  <p className="member-name">John Donahoe</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="info-about">
        <div className="info-about-text">
          NIKE IN FIGURES
        </div>
        <div className="info-about-content">
          <div className="info-about-sales">
            <h1>58.7</h1>
            <p>BILLION USD SALES IN 2023</p>
          </div>
          <div className="info-about-ebit">
            <h1>6.0</h1>
            <p>BILLION USD EBIT IN 2023</p>
          </div>
          <div className="info-about-employee">
            <h1>79,100</h1>
            <p>EMPLOYEES</p>
          </div>
          <div className="info-about-year">
            <h1>1964</h1>
            <p>FOUNDING YEAR</p>
          </div>
        </div>
      </section>

      <section class="nike-headquarters">
        <div class="nike-headquarters-text">
          <p>ONE BOWERMAN DRIVE, BEAVERTON, OR 97005 UNITED STATES</p>
          <h1>NIKE</h1>
          <h1>WORLD</h1>
          <h1>HEADQUART</h1>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
