import { useState } from "react";
import { Link } from "react-router-dom";

import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (!emailValidation && !passwordValidation) {
      console.log("Login form submitted");
      console.log("Email:", email);
      console.log("Password:", password);

      alert("Login successful!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3efe9] px-4 py-10">

      {/* Login Card */}
      <div className="w-full max-w-md animate-[fadeIn_0.6s_ease-out] rounded-2xl bg-white p-7 shadow-xl sm:p-9">

        {/* Brand */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-bold tracking-[5px] text-black"
          >
            VELORA
          </Link>

          <p className="mt-2 text-xs tracking-[3px] text-gray-500">
            MODERN FASHION
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
              className={
                "w-full rounded-lg border px-4 py-3 text-sm outline-none transition duration-300 focus:ring-2 " +
                (emailError
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-gray-100")
              }
            />

            {emailError && (
              <p className="mt-2 text-xs text-red-500">
                {emailError}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError("");
                }}
                placeholder="Enter your password"
                className={
                  "w-full rounded-lg border px-4 py-3 pr-16 text-sm outline-none transition duration-300 focus:ring-2 " +
                  (passwordError
                    ? "border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-black focus:ring-gray-100")
                }
              />

              {/* Show / Hide */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 transition hover:text-black"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {passwordError && (
              <p className="mt-2 text-xs text-red-500">
                {passwordError}
              </p>
            )}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex cursor-pointer items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 accent-black"
              />

              Remember me
            </label>

            {/* Forgot Password */}
            <Link
              to="/forgot-password"
              className="font-medium text-gray-500 transition hover:text-black hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, rgb(255, 187, 78) 0%, rgb(247, 74, 76) 100%)",
            }}
          >
            Login
          </button>

        </form>

        {/* Create Account */}
        <div className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?

          <Link
            to="/register"
            className="ml-1 font-semibold text-black hover:underline"
          >
            Sign Up
          </Link>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
          <Link
            to="/"
            className="text-xs text-gray-400 transition hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
