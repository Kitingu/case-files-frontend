import React, { useContext, useEffect } from 'react';

import BlogContext from '../../context/blog/blogContext';
import CourtsHero from '../courts/CourtsHero';
import UserContext from '../../context/user/userContext';
import '../../styles/styles.scss';
import Blogz from './../blog/blogz';
import FooterLinks from '../layout/FooterLinks';
import BlogsPaginated from './blogPaginated';
import aboutImage from '../../images/About_us.png'

export const Blogs = () => {
  const blogContext = useContext(BlogContext);
  let { blogs, searchBlogs } = blogContext;

  const userContext = useContext(UserContext);
  const { searchUsers,users } = userContext;

    const mainPost = blogs
      .filter((post) => post.x_tags.includes('mainPost'));
      

     useEffect(() => {
       searchBlogs();
       searchUsers();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);


  return (
    <div>
      <CourtsHero backgroundImage={aboutImage} />
      <Blogz blogs={mainPost} users={users} />
      <BlogsPaginated blogs={blogs} users={users} />
      <FooterLinks color="primary-blue" />
    </div>
  );
};
