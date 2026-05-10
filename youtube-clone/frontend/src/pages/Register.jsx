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

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-96"
      >
        <h1 className="text-white text-3xl mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 bg-black border border-gray-700 text-white mb-4 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-black border border-gray-700 text-white mb-4 rounded-lg"
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
          className="w-full p-3 bg-black border border-gray-700 text-white mb-4 rounded-lg"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <button className="w-full bg-red-600 py-3 rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;