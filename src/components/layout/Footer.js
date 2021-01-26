import React from 'react'

 const Footer = () => {
    return (
      <footer>
        <div className="copyright">
          <p>
            &copy; Justice Networks {new Date().getFullYear()}, All rights
            reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer;