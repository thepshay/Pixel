import React from "react";
import { Link } from "react-router-dom";

const LoginInfoBox = (props) => {
  return (
    <div className="login-info-container">
      <p>Join Pixel and discover tens of games to play.</p>
      <img className='join-img' src={window.joinPc} alt='join pixel image'/>
      <p>It's free and easy to use.</p>
      <Link to='/signup' replace>
        <div className="signup-btn">Join Pixel</div>
      </Link>
    </div>
  )
}

export default LoginInfoBox;