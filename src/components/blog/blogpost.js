import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/blogpost.scss';
import BlogContext from '../../context/blog/blogContext';
import WpApiContent from '../../WpApiContent';
import CourtsHero from '../courts/CourtsHero';
import FooterLinks from '../layout/FooterLinks'
import AboutImage from '../../images/About_us.png'

export const Blogpost = () => {
  const blogContext = useContext(BlogContext);
  const { currentBlog } = blogContext;
  return (
    <div>
      <CourtsHero backgroundImage={AboutImage} />
      <div className="blogpost single-blog">
        {currentBlog.content ? (
          <div>
            <h2 className="blog-title">{currentBlog.title.rendered}</h2>
            <span className="blogpost-author">{currentBlog.x_author}</span>
            <WpApiContent content={currentBlog.content.rendered} />
          </div>
        ) : (
          <Redirect to="/blog" />
        )}
      </div>
      <FooterLinks color="primary-blue" />
    </div>
  );
};
