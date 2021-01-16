import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../../styles/blogpost.scss';
import BlogContext from '../../context/blog/blogContext';
import WpApiContent from '../../WpApiContent';
import CourtsHero from '../courts/CourtsHero';
import blogHero from '../../images/blog-hero.jpg'
import FooterLinks from '../layout/FooterLinks'

export const Blogpost = () => {
  const blogContext = useContext(BlogContext);
  const { currentBlog } = blogContext;
  return (
    <div>
      <CourtsHero backgroundImage={blogHero} />
      <div className="blogpost">
        {currentBlog.content ? (
          <div>
            <p className="blog-title">{currentBlog.title.rendered}</p>
            <p className="blogpost-author">{currentBlog.x_author}</p>
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
