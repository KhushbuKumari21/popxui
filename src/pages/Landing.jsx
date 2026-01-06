import { useNavigate } from "react-router-dom";
import MobileWrapper from "../components/MobileWrapper";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  const numbers = [6, 1, 2, 3, 4, 5];

  return (
    <MobileWrapper>
      <div className="landing">
        {/* TOP CIRCLES */}
        <div className="circles">
          {numbers.map((num) => (
            <div key={num} className={`circle circle-${num}`}>
              {num}
            </div>
          ))}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="bottomContent">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <button className="create" onClick={() => navigate("/signup")}>
            Create Account
          </button>

          <button className="login" onClick={() => navigate("/login")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileWrapper>
  );
}
