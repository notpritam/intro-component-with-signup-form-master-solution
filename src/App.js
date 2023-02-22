import "./styles.scss";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(true);
  }

  return (
    <div className="container">
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="form">
        <div className="header">
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            {firstName.length <= 0 && error ? (
              <>
                <BiErrorCircle className="icons" />
                <span className="error">First Name cannot be empty</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            {LastName.length <= 0 && error ? (
              <>
                <BiErrorCircle className="icons" />
                <span className="error">Last Name cannot be empty</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {email.length <= 0 && error ? (
              <>
                <BiErrorCircle className="icons" />
                <span className="error">Looks like this is not an email</span>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {password.length <= 0 && error ? (
              <>
                <BiErrorCircle className="icons" />
                <span className="error">Password cannot be empty</span>
              </>
            ) : (
              ""
            )}
          </div>

          <button>CLAIM YOUR FREE TRIAL</button>

          <label className="terms">
            By clicking the button, you are agreeing to our
            <span className="link"> Terms and Services</span>
          </label>
        </form>
      </div>
    </div>
  );
}
