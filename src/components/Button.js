import React from "react";

const Button = ({children,className,type=""})=>{
return (
  <button type={type} className={"btn btn-primary "+className} >{children}</button>
);
};

export default Button;