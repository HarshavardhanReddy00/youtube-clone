import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  validateEmail,
  validatePassword,
  validateUsername
} from "../utils/validations";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  // USERNAME VALIDATION

  if (
    !validateUsername(
      formData.username
    )
  ) {
    return alert(
      "Username must contain at least 3 characters"
    );
  }

  // EMAIL VALIDATION

  if (
    !validateEmail(formData.email)
  ) {
    return alert(
      "Email must be in format user_name@gmail.com"
    );
  }

  // PASSWORD VALIDATION

  if (
    !validatePassword(
      formData.password
    )
  ) {
    return alert(
      "Password must contain: *At least 8 characters *One uppercase letter *One lowercase letter *One number *One special character"
    );
  }

  try {
    await axios.post(
      "/auth/register",
      formData
    );

    alert(
      "Registration Successful"
    );

    navigate("/login");
  } catch (error) {
    alert(error.response.data.message);
  }
};

  