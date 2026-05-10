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

  return (
    <div className="flex justify-center items-center h-[80vh] bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-400px"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg text-white"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-black border border-zinc-700 rounded-lg text-white"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <button className="w-full bg-red-600 py-3 rounded-lg hover:bg-red-700">
          Login
        </button>

        <p className="text-center text-gray-400 mt-5">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-500 ml-2"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;