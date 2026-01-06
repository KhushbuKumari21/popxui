import { useState } from "react";
import MobileWrapper from "../components/MobileWrapper";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password;

  return (
    <MobileWrapper>
      <div className="loginContainer">

        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="field">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={isDisabled}>Login</button>

      </div>
    </MobileWrapper>
  );
}
