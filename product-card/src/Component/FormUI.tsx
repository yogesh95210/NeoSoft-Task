"use client";
import React, { useState } from "react";

type FormData = {
  name: string;
  contact: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function FormUI() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    const newErrors: FormErrors = {};
    // Name Validation
    if (!formData.name.trim()) newErrors.name = "Name is Required";
    else if (formData.name.trim().length < 3)
      newErrors.name = "Minimum 3 characters";

    //contact validation

    if(!formData.contact.trim()) newErrors.contact= "Contact is Required";
    else if(!/^\d+$/.test(formData.contact)) newErrors.contact ="Digits Only";
    else if(formData.contact.length!==10) newErrors.contact= "Must be 10 digits"

     // Email validation
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";

     setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    console.log("VALID FORM", formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center"> Sign In</h2>
        <div className="space-y-1">
          <label className="text-sm font-semibold">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Name"
          />
          {errors.name && <p className="text-red-600 text-sm font-medium">{errors.name}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold">Contact</label>
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Contact"
          />
          {errors.contact && <p className="text-red-600 text-sm font-medium">{errors.contact}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email"
          />
          {errors.email && <p className="text-red-600 text-sm font-medium">{errors.email}</p>}
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition active:scale-[0.98]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
