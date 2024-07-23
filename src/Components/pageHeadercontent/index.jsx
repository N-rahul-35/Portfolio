/*import './style.scss';

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};


export default PageHeaderContent;*/
// ../../Components/pageHeadercontent.js
import React from "react";
import "./style.scss"; // Assuming you have some styles

const PageHeaderContent = ({ headerText, icon }) => {
  return (
    <div className="page-header-content">
      <div className="page-header-content__icon">{icon}</div>
      <h1 className="page-header-content__text">{headerText}</h1>
    </div>
  );
};

export default PageHeaderContent;
