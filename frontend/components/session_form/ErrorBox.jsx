import React from "react";

const ErrorBox = (props) =>{

  const {errors, className } = props

  return (
    <div className={className}>
      <p>{errors}</p>
    </div>
  )
}

export default ErrorBox;