import React from "react";
import "./logo.scss";

const Logo = ({className} : {className?: string}) => {
  return (
      <>
        <span className={`logo ${'logo-' + className}`}>
          <span className={"logo--bold"}>MSQ</span>roulette
        </span>
      </>
  )
};

export default Logo;
