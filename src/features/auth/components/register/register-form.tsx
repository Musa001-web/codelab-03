/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "../../api";

export default function SignUp() {
  const router = useRouter();
  const mutation = useRegister();

  // State for form inputs and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change and validate
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    if (name === "name") {
      setErrors({
        ...errors,
        name: value.length < 3 ? "Full name must be at least 3 characters." : "",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value),
      });
    }

    if (name === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value !== formData.password ? "Passwords do not match." : "",
      });
    }
  };

  // Password validation function
  const validatePassword = (password: string) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!minLength) return "Password must be at least 8 characters.";
    if (!hasUppercase) return "Password must include at least one uppercase letter.";
    if (!hasNumber) return "Password must include at least one number.";
    if (!hasSpecialChar) return "Password must include at least one special character.";

    return "";
  };

  // Handle form submission
  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (errors.name || errors.password || errors.confirmPassword) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      // Call the mutation to register the user
      await mutation.mutateAsync({
        username: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role
      });

      alert("Sign-up successful!");
      router.push("/dashboard");
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        apiError: error.message || "Registration failed. Please try again.",
      }));
    }
  };

  return (
    <form className="space-y-6 bg-gray-900 p-6 rounded-lg shadow-md w-96" onSubmit={handleSignUpSubmit}>
      {/* <h2 className="text-2xl font-bold text-center text-white">Sign Up</h2> */}

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-400">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400 hover:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-400 hover:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Sign Up
      </button>
    </form>
  );
}
