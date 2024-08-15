import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Create an Account</h1>
          <input name="fullname" type="text" placeholder="Full Name" />
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <input name="phoneNumber" type="string" placeholder="Phone Number" />
          <input name="address" type="text" placeholder="Address" />
          <button >Register</button>
          <Link to="/login">Already have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;
