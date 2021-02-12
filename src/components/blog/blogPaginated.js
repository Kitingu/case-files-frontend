import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../context/blog/blogContext';
import UserContext from '../../context/user/userContext';
import '../../styles/paginatedBlogs.scss'
import '../../assets/courts/cases.scss'
import Pagination from 'custom_react_pages';
import back from '../../images/back.png';
import next from '../../images/next.png';

const BlogsPaginated = ({ blogs, classname }) => {
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
        <div className={`blog-container paginated ${classname}`}>
          <Pagination
            itemsPerPage={9}
            activePageStyle={{ backgroundColor: '#7285a5', color: '#fff' }}
            next={<img src={next} alt="next" />}
            prev={<img src={back} alt="back" />}
            data={blogs}
            pageButtons={10}
            onePage={(post,index)=>{
                const featuredImage = post.better_featured_image
              ? post.better_featured_image.source_url
              : `https://via.placeholder.com/450`;
                return(
                <div key={post.id} className="blog-list">
                <div className="blog-post">
                  <img
                    className="blog-list-img"
                    src={featuredImage}
                    alt="featured_image"
                  />
                  <h3 className={`category ${post.x_categories}`}>
                    {post.x_categories}
                  </h3>

                  <p>
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
                  </p>

                  <p>
                    {new Date(post.date).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    |{' '}
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
                  </p>
                </div>
              </div>
            )}}
          ></Pagination>
         
        </div>
      )}
    </div>
  );
};
export default BlogsPaginated;
