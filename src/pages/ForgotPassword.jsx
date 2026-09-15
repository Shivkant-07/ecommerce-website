import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setMessage(
      "Password reset instructions have been sent to your email."
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3efe9] px-4 py-10">

      {/* Forgot Password Card */}
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

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Enter your email address and we'll send you
            instructions to reset your password.
          </p>
        </div>

        {/* Form */}
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
                setError("");
                setMessage("");
              }}
              placeholder="Enter your email"
              className={
                "w-full rounded-lg border px-4 py-3 text-sm outline-none transition duration-300 focus:ring-2 " +
                (error
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-300 focus:border-black focus:ring-gray-100")
              }
            />

            {/* Error Message */}
            {error && (
              <p className="mt-2 text-xs text-red-500">
                {error}
              </p>
            )}

            {/* Success Message */}
            {message && (
              <p className="mt-2 text-xs text-green-600">
                {message}
              </p>
            )}
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full rounded-lg py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, rgb(255, 187, 78) 0%, rgb(247, 74, 76) 100%)",
            }}
          >
            Send Reset Link
          </button>

        </form>

        {/* Back to Login */}
        <div className="mt-7 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-600 transition hover:text-black hover:underline"
          >
            ← Back to Login
          </Link>
        </div>

        {/* Back Home */}
        <div className="mt-5 text-center">
          <Link
            to="/"
            className="text-xs text-gray-400 transition hover:text-black"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;
