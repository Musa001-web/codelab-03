
'use client';

import { useState } from "react";
// import { useRouter } from "next/navigation";
import SignUp from "@/features/auth/components/register/register-form";
import SignIn from "@/features/auth/components/login/login-form";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  // const [showPassword, setShowPassword] = useState(false);
  // const [showForgotPassword, setShowForgotPassword] = useState(false);
  // const router = useRouter();

  // Handle form submission
  // const handleSignInSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   router.push("/dasboard");
  // };

  // const handleSignUpSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   router.push("/dasboard");
  // };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center p-4 sm:p-6">
        <div className="bg-gray-900/90 backdrop-blur-md ring-1 ring-gray-700 shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
          {/* Tabs for Sign-In and Sign-Up */}
          <div className="flex space-x-4 mb-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("signin")}
              className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === "signin"
                  ? "text-white border-blue-500"
                  : "text-gray-400 border-transparent hover:border-blue-500 hover:text-white"
                } focus:outline-none transition-all duration-300`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === "signup"
                  ? "text-white border-blue-500"
                  : "text-gray-400 border-transparent hover:border-blue-500 hover:text-white"
                } focus:outline-none transition-all duration-300`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Container with Animation */}
          <div className="relative overflow-hidden">
            {/* Sign-In Form */}
            <div
              className={`transition-all duration-500 ease-in-out ${activeTab === "signin" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
                }`}
            >
             <SignIn/>
            </div>

            {/* Sign-Up Form */}
            <div
              className={`transition-all duration-500 ease-in-out ${activeTab === "signup" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"
                }`}
            >
             <SignUp />
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              {/* <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div> */}
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {/* <button
              type="button"
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              GitHub
            </button> */}
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {/* {showForgotPassword && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
          <div className="bg-gray-900/90 backdrop-blur-md ring-1 ring-gray-700 shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Forgot Password</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="forgot-email"
                  name="forgot-email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="mr-4 px-4 py-2 text-sm text-gray-400 hover:text-gray-300 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
}