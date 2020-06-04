import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/Login";
import "./index.css";

function Login() {
  return (
    <div className="main-login-container">
      <Header />
      <LoginForm/>
      <Footer />
    </div>
  );
}

export default Login;
