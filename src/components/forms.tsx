"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {toast} from "sonner";
export default function FormComponent() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.terms) {
      toast("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/api/v1/users", formData, {
        headers: {
          "Content-Type": "application/json",
            
        }, withCredentials: true
      });
      console.log("Response is: "+response)
      toast(response.data.message)
      if (response.data.success) {
        router.push('/home');
      }
    } catch (error: unknown) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Invalid request. Please check your input.");
      } else if (error instanceof Error) {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.error("An unknown error occurred. Please try again.");
      }
    }
    
    
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
          placeholder="Jaskaran Singh" 
           
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input 
           
          id="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
          placeholder="jaskaran@gmail.com" 
           
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input 
          type="password" 
          id="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
           
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input 
            id="terms" 
            type="checkbox" 
            checked={formData.terms} 
            onChange={handleChange} 
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
             
          />
        </div>
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
        </label>
      </div>
      <button 
        type="submit" 
        className="border-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  );
}
