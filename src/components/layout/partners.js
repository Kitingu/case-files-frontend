import React from 'react';
import Swiper from 'react-id-swiper';

import './partner.scss';
import partner1 from '../../images/partner-1.png';
import partner2 from '../../images/partner-2.png';
import partner3 from '../../images/partner-3.png';
import partner4 from '../../images/partner-4.png';
import partner5 from '../../images/partner-5.png';
import partner6 from '../../images/partner-6.png';

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
    </>
  );
}

export default PartnersView;
