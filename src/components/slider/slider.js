import React, { useContext, useEffect } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import BlogContext from '../../context/blog/blogContext';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

export const HomeSlider = () => {
  const blogContext = useContext(BlogContext);
  const { blogs, searchBlogs } = blogContext;
  const userContext = useContext(UserContext);
  const { setUserBlogs, setUser, users, searchUsers } = userContext;
  const sliderposts = blogs.filter((post) =>
    post.x_tags.includes('sliderPost')
  );

  useEffect(() => {
    searchBlogs();
    searchUsers()
  }, []);
  return (
    <Splide
      options={{
        // height: '500px',
        type: 'loop',
        pagination: false,
        autoplay: 5000,
      }}
    >
      {sliderposts.map((post) => {
        const featuredImage = post.x_featured_media
          ? post.x_featured_media_original
          : `https://via.placeholder.com/450`;

        return (
          <SplideSlide key={post.id}>
            <div
              className="slider-content-container"
              style={{
                backgroundImage: `url(${featuredImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '500px',
              }}
            >
              <div className="slider-content-div">
                <div className="slider-excerpt">
                  <img
                    className="gravatar"
                    src={post.x_gravatar}
                    alt="author-avatar"
                  />
                  <div className="excerpt">
                    <h3>{post.title.rendered}</h3>
                    <p>
                      {
                        `${post.excerpt.rendered}`
                          .replace(/<[^>]*>/g, '')
                          // .split('.')[0]
                      }
                    </p>
                  </div>
                </div>
                <div className="slider-category">
                  <p className="category-name">{post.x_categories}</p>
                  <p>
                    {new Date(post.date).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    |{' '}
                    <span>
                      <Link
                        className="author-link"
                        to={`/author/${post.author}`}
                        onClick={() => {
                          const user = users.filter(
                            (data) => data.id === post.author
                          );

                          setUser(user[0]);
                          setUserBlogs(user[0], blogs);
                        }}
                      >
                        {post.x_author}
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
