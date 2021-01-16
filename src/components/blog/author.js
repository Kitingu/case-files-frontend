import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import WpApiContent from '../../WpApiContent';
import '../../styles/author.scss';
import CourtsHero from '../courts/CourtsHero';
import blogHero from '../../images/blog-hero.jpg';
import FooterLinks from '../layout/FooterLinks';
const Author = () => {
  const userContext = useContext(UserContext);
  const { currentUser, userBlogs } = userContext;

  return (
    <div>
      <CourtsHero backgroundImage={blogHero} />
      <div className="author-container">
        {currentUser.name ? (
          <div>
            <div className="profile-image">
              <img src={userBlogs[0].x_gravatar} alt="author" />{' '}
              <p>{currentUser.name}</p>
            </div>
            <p className="about-author">About the author:</p>
            <p className="author-details">
              <WpApiContent content={currentUser.description} />
            </p>
          </div>
        ) : (
          <Redirect to="/blog" />
        )}
      </div>
      <FooterLinks color="primary-blue" />
    </div>
  );
};

export default Author;
