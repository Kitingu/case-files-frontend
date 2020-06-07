import React from 'react';
import {Link} from 'react-router-dom'
import Swiper from 'react-id-swiper';
import Back2Top from 'react-back2top';
import './partner.scss';
import partner1 from '../../images/partner-1.png';
import partner2 from '../../images/partner-2.png';
import partner3 from '../../images/partner-3.png';
import partner4 from '../../images/partner-4.png';
import partner5 from '../../images/partner-5.png';
import partner6 from '../../images/partner-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const params = {
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		700: {
			slidesPerView: 4,
			spaceBetween: 10,
    },
    1000: {
			slidesPerView: 5,
			spaceBetween: 5,
		},
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
	loop: true,
	shouldSwiperUpdate: true,
	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
  spaceBetween: 10,
  // renderPrevButton: () => <button className="swiper-btn-next">Prev</button>,
  // renderNextButton: () => <button className="swiper-button-next">Next</button>,
};

const PartnersView = () => {
  return (
    <>
      <div className="partners">
        <h4 className="partners-title">Partners:</h4>
        <Swiper {...params} className="swiper">
          <div>
            <img src={partner1} className="partners-image" alt="" />
          </div>
          <div>
            <img src={partner2} className="partners-image" alt="" />
          </div>
          <div>
            <img src={partner3} className="partners-image" alt="" />
          </div>
          <div>
            <img src={partner4} className="partners-image" alt="" />
          </div>
          <div>
            <img src={partner5} className="partners-image" alt="" />
          </div>
          <div>
            <img src={partner6} className="partners-image" alt="" />
          </div>
        </Swiper>
      </div>
      <div className="foot-link">
        <div className="footer-links">
          <div className="links">
            <h5 className="links-title">Links</h5>
            <ul className="links-list">
              <li>About us</li>
              <li>Courts</li>
              <li>Legal Activitism</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Join the Network</li>
            </ul>
          </div>
          <div className="left-footer">
            <div className="social-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://facebook.com"
              >
                {' '}
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com"
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com"
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
            </div>
            <Back2Top>
              <div className="back-to-top">
                <span>
                  <FontAwesomeIcon icon="caret-up" />
                </span>
                Back to top
              </div>
            </Back2Top>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnersView;
