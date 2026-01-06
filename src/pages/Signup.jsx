import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <MobileWrapper>
      <div className="signupContainer">

        <h2 className="heading">
          Create your PopX account
          <span className="step">1</span>
        </h2>

        <div className="field">
          <label>
            Full Name<span className="required">*</span>
          </label>
          <input defaultValue="Marry Doe" />
        </div>

        <div className="field">
          <label>
            Phone number<span className="required">*</span>
          </label>
          <input defaultValue="9876543210" />
        </div>

        <div className="field">
          <label>
            Email address<span className="required">*</span>
          </label>
          <input defaultValue="marry@example.com" />
        </div>

        <div className="field">
          <label>
            Password<span className="required">*</span>
          </label>
          <input type="password" defaultValue="password123" />
        </div>

        <div className="field">
          <label>Company name</label>
          <input defaultValue="PopX Pvt Ltd" />
        </div>

        <p className="agency">
          Are you an Agency?<span className="required">*</span>
        </p>

        <div className="radio">
          <label>
            <input type="radio" name="agency" defaultChecked /> Yes
          </label>
          <label>
            <input type="radio" name="agency" /> No
          </label>
        </div>

        <button onClick={() => navigate("/profile")}>
          Create Account
        </button>

      </div>
    </MobileWrapper>
  );
}
