import React, { useContext, useEffect } from 'react';

import BlogContext from '../../context/blog/blogContext';
import { HomeSlider } from './../slider/slider';
import UserContext from '../../context/user/userContext';
import '../../styles/styles.scss';
import Blogz from './../blog/blogz';
import Vlog from './../blog/vlog';
import FooterLinks from '../layout/FooterLinks';

export const Blogs = () => {
  const blogContext = useContext(BlogContext);
  let { blogs, searchBlogs, setBlog } = blogContext;

  const userContext = useContext(UserContext);
  const { searchUsers } = userContext;

  const sliderPosts = blogs.filter((post) =>
    post.x_tags.includes('sliderPost')
  );

  useEffect(() => {
    searchBlogs();
    searchUsers();
  }, []);

  return (
    <div>
      <HomeSlider />
      <Blogz blogs={sliderPosts} />
      <Vlog blogs={blogs} />
      <Blogz blogs={blogs} />
      <FooterLinks color="primary-blue"/>
    </div>
  );
};
