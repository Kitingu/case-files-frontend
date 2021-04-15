import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../context/blog/blogContext';
import UserContext from '../../context/user/userContext';
import WpApiContent from '../../WpApiContent';

const Blogz = ({ blogs, classname }) => {
  const userContext = useContext(UserContext);
  const { setUserBlogs, setUser, users, searchUsers } = userContext;
  const blogContext = useContext(BlogContext);
  let { setBlog } = blogContext;

  useEffect(() => {
    searchUsers();
  }, []);

  return (
    <div>
      {blogs && (
        <div className={`blog-container ${classname}`}>
          {blogs.map((post) => {
            

            return (
              <div key={post.id} className="main">
                <div className="main-blogpost">
                  <h3>
                    {' '}
                    <Link
                      className="blogpost-title"
                      to={`/${post.id}`}
                      onClick={() => {
                        const data = blogs.filter(
                          (blog) => blog.id === post.id
                        );
                        setBlog(data[0]);
                      }}
                    >
                      {post.title.rendered}{' '}
                    </Link>
                  </h3>
                  <Link
                    className="author-link italised"
                    to={`/author/${post.author}`}
                    onClick={() => {
                      const user = users.filter(
                        (data) => data.id === post.author
                      );

                      setUser(user[0]);
                      setUserBlogs(user[0], blogs);
                    }}
                  >
                    by {post.x_author}
                  </Link>
                  <WpApiContent content={post.excerpt.rendered} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Blogz;
