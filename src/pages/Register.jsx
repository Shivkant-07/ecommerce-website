import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    // Confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration form submitted");
      console.log("Name:", name);
      console.log("Email:", email);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3efe9] px-4 py-10">

      {/* Register Card */}
      <div className="w-full max-w-md animate-[fadeIn_0.6s_ease-out] rounded-2xl bg-white p-7 shadow-xl sm:p-9">

        {/* Brand */}
        <div className="mb-7 text-center">

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

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setErrors((prev) => ({
                  ...prev,
                  name: "",
                }));
              }}
              placeholder="Enter your full name"
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition duration-300 focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-gray-100"
              }`}
            />

            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

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
                setErrors((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
              placeholder="Enter your email"
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition duration-300 focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-gray-100"
              }`}
            />

            {errors.email && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.email}
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
                  setErrors((prev) => ({
                    ...prev,
                    password: "",
                  }));
                }}
                placeholder="Create a password"
                className={`w-full rounded-lg border px-4 py-3 pr-16 text-sm outline-none transition duration-300 focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-black focus:ring-gray-100"
                }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 transition hover:text-black"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setErrors((prev) => ({
                    ...prev,
                    confirmPassword: "",
                  }));
                }}
                placeholder="Confirm your password"
                className={`w-full rounded-lg border px-4 py-3 pr-16 text-sm outline-none transition duration-300 focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-100"
                    : "border-gray-300 focus:border-black focus:ring-gray-100"
                }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 transition hover:text-black"
              >
                {showConfirmPassword
                  ? "Hide"
                  : "Show"}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs text-gray-500">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 accent-black"
            />

            <span>
              I agree to the Terms & Conditions and Privacy Policy.
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
          >
            Create Account
          </button>

        </form>

       

        {/* Login */}
        <div className="mt-7 text-center text-sm text-gray-500">
          Already have an account?

          <Link
            to="/login"
            className="ml-1 font-semibold text-black hover:underline"
          >
            Login
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

export default Register;