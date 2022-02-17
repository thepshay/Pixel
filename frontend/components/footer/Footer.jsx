import React from 'react';

class Footer extends React.Component {

  render() {
    return (
    <footer>
      <div className='footer-content'>
        <div className='footer-about-top'>
          <div className='about-content'>This is a <a href='https://store.steampowered.com/'>Steam</a> clone. Please checkout the real site.</div>
          <div className='about-content'>All trademarks are property of their respective owners in the US and other countries.</div>
        </div>
        <div className='footer-about-bottom'>
          <div className='built-with'>Ruby on Rails  |  PostgreSQL  |  React Redux  |  AWS S3 |  Heroku</div>
          <div className='footer-links'>
            <a href='https://github.com/thepshay/Pixel' className="footer-links" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/thepshay/' className="footer-links" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://angel.co/u/perry-xie' className="footer-links" target="_blank"><i class="fa-brands fa-angellist"></i></a>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;