import React, { useContext,useEffect } from 'react';
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';
import '../../styles/styles.scss'
import Iframe from 'react-iframe';
import BlogContext from '../../context/blog/blogContext';


 const Vlog = ({blogs}) => {
  const userContext = useContext(UserContext);
  const blogContext = useContext(BlogContext)
  const {searchBlogs}=blogContext;

  const { setUser, users, setUserBlogs, searchUsers } = userContext;

   useEffect(() => {
     searchBlogs();
     searchUsers();
   }, []);
  const newblok = blogs.filter(blok=> blok.id === 52)
  console.log('fdsaa',newblok)
  console.log('asdf',blogs)

  return (
    <div>
      <div className="vlog">
        <Iframe
          url="https://drive.google.com/file/d/1pYNKeo8pQ_BzbxCNNFo1km4KZl2wxJ-u/preview"
          width="100%"
          height="480"
          className="iframe-video"
          frameBorder="0"
        ></Iframe>
        
        <div className="vlog-details">
          <p className="vlog-category">Peace</p>
          
          <div>
            <p className="vlog-author">Rosebell</p> 

          </div>
        </div>
      </div>
    </div>
  );
};
export default Vlog;