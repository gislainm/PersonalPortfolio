import React from 'react';

function IconLink(props) {
   const {link, title} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className="fa fa-book"/> {title}
      </a>
   );
}

export default IconLink;