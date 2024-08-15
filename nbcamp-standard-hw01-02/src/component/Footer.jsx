import React from "react";

const Footer = (props) => {
  return (
    <footer>
      © {props.year}
      {props.title}
    </footer>
  );
};

export default Footer;
