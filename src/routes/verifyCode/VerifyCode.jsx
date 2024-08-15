import "./verifyCode.scss";
import { Link } from "react-router-dom";

function VerifyCode() {
  return (
    <div className="verifyCode">
      <div className="formContainer">
        <form>
          <h1>Enter Verification Code</h1>
          <input name="code" type="text" placeholder="Enter the code" />
          <button>Verify Code</button>
          <Link to="/forgot-password">Didn't receive a code? Resend</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default VerifyCode;
