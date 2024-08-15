import { Link } from "react-router-dom";
import "./forgotPassword.scss"

function ForgotPassword() {
  return (
    <div className="forgotPassword">
      <div className="formContainer">
        <form>
          <h1>Forgot Your Password?</h1>
          <input name="email" type="text" placeholder="Enter your Email" />
          <button>Send Verification Code</button>
          <Link to="/login">Remembered your password?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default ForgotPassword;
