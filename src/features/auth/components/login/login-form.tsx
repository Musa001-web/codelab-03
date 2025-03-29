/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useState } from "react";
import { InputField, PasswordInputField } from "@/components/forms"
import { useLogin } from "../../api";
import { Button } from "@/components/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"





export default function SignIn() {
  const router = useRouter()
  const mutation = useLogin()
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    mutation.mutate({
      username: username,
      password: password
    });
    e.preventDefault()
  };

  useEffect(() => {
    const handleLoginSuccess = async () => {
      try{
        if (mutation?.isError){
          toast.error("User does not exist")
        }else if(mutation.isSuccess){
          toast.success("Logged in success")
          router.push('/dashboard')
        }else{
          toast.error("something")
        }
      }catch(error){
        toast.error("Something unexpected happened")
      }
    }
    if(mutation.isSuccess){
      handleLoginSuccess()
    }
  }, [mutation.isSuccess,router])



  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>

        <div>
          <InputField className="bg-white"
            type="text"
            name="Username"
            label="Username"
            required={true}
            onChange={(e: any) => {
              const value = e.target.value
              setUserName(value)

            }}
          />
        </div>
        <div>
          <PasswordInputField className="bg-white"
            type="password"
            label="Password"
            required={true}
            onInput={(e: any) => {
              const value = e.target.value
              setPassword(value)

            }}
          />
        </div>
        {/* <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-400">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
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
        </div> */}

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="h-4 w-4 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-blue-500 hover:text-blue-400 focus:outline-none"
          >
            Forgot password?
          </button>
        </div>
        <Button
          variant="primary"
          type="submit"
          size="md"
          className="w-full mt-5"
          isLoading={mutation.isPending}
          disabled={username === '' && password === ''}
        >
          Login
        </Button>

        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 hover:bg-blue-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign In
        </button> */}
      </form>
      {showForgotPassword && (
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
      )}
    </>
  );
}


