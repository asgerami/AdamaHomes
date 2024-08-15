import "./resetPassword.scss";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="resetPassword">
      <div className="formContainer">
        <form>
          <h1>Reset Your Password</h1>
          <input name="password" type="password" placeholder="New Password" />
          <input name="confirmPassword" type="password" placeholder="Confirm New Password" />
          <button>Reset Password</button>
          <Link to="/login">Back to Login</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default ResetPassword;
