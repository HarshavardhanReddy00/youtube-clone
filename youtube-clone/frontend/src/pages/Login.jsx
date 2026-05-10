import { useState } from "react";
import {
  validateEmail,
  validatePassword
} from "../utils/validations";

import axios from "../api/axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: ""
    });

  const handleSubmit = async (e) => {
  e.preventDefault();

  // EMAIL VALIDATION

  if (
    !validateEmail(formData.email)
  ) {
    return alert(
      "Invalid Gmail format"
    );
  }

  // PASSWORD VALIDATION

  if (
    !validatePassword(
      formData.password
    )
  ) {
    return alert(
      "Invalid password format"
    );
  }

  try {
    const { data } = await axios.post(
      "/auth/login",
      formData
    );

    localStorage.setItem(
      "youtubeUser",
      JSON.stringify(data)
    );

    navigate("/");

    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
  }
};

  