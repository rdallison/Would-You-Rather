import React, { Component } from "react";
import "../CSS/signin.css";
import wyr from "../imgs/wyr2.jpeg";

class Signin extends Component {
  render() {
    return (
      <div class="login-card">
        <div class="login-title">SELECT LOGIN</div>
        <div class="login-img">
          <img src={wyr} alt="Would You Rather" height="150px" />
        </div>
        <div class="login-users">
          <form>
            <select name="users">
              <option disabled selected value>
                {" "}
                -- select your login --{" "}
              </option>
              <option value="Ray">Ray</option>
              <option value="Michelle">Michelle</option>
              <option value="Reagan">Reagan</option>
              <option value="RJ">RJ</option>
              <option value="Raina">Raina</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
