import React from 'react';
import { useForm } from '../context/FormContext';

export const PersonalInfo = () => {
  const { formData, updateFormData, nextStep } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#02295a] mb-2">Personal info</h2>
      <p className="text-[#9699ab] mb-8">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-medium text-[#02295a]">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="w-full px-4 py-3 border border-[#d6d9e6] rounded-lg focus:outline-none focus:border-[#483EFF] focus:ring-1 focus:ring-[#483EFF] placeholder:text-[#9699ab]"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-[#02295a]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full px-4 py-3 border border-[#d6d9e6] rounded-lg focus:outline-none focus:border-[#483EFF] focus:ring-1 focus:ring-[#483EFF] placeholder:text-[#9699ab]"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-sm font-medium text-[#02295a]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="w-full px-4 py-3 border border-[#d6d9e6] rounded-lg focus:outline-none focus:border-[#483EFF] focus:ring-1 focus:ring-[#483EFF] placeholder:text-[#9699ab]"
            required
          />
        </div>
        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-[#02295a] text-white rounded-lg hover:bg-[#174A8B] transition-colors duration-200"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

