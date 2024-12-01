import React from 'react';
import { useForm } from '../context/FormContext';
import { Switch } from '@headlessui/react';
import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';

const plans = [
  { id: 'arcade', title: 'Arcade', price: { monthly: 9, yearly: 90 }, icon: arcade },
  { id: 'advanced', title: 'Advanced', price: { monthly: 12, yearly: 120 }, icon: advanced },
  { id: 'pro', title: 'Pro', price: { monthly: 15, yearly: 150 }, icon: pro },
];

export const SelectPlan = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#02295a] mb-2">Select your plan</h2>
      <p className="text-[#9699ab] mb-6">You have the option of monthly or yearly billing.</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-md p-4 cursor-pointer ${
                formData.plan === plan.id ? 'border-[#02295a] bg-[#f0f6ff]' : 'border-gray-300'
              }`}
              onClick={() => updateFormData({ plan: plan.id })}
            >
              <img src={plan.icon} alt={`${plan.title} icon`} className="h-12 w-12 mb-2" />
              <h3 className="font-bold text-[#02295a]">{plan.title}</h3>
              <p className="text-[#9699ab]">
                ${formData.billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}/
                {formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
              </p>
              {formData.billingCycle === 'yearly' && (
                <p className="text-[#02295a] text-sm mt-1">2 months free</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mb-6">
          <span className={`mr-2 ${formData.billingCycle === 'monthly' ? 'text-[#02295a]' : 'text-[#9699ab]'}`}>Monthly</span>
          <Switch
            checked={formData.billingCycle === 'yearly'}
            onChange={() => updateFormData({ billingCycle: formData.billingCycle === 'monthly' ? 'yearly' : 'monthly' })}
            className="bg-[#02295a] relative inline-flex h-6 w-11 items-center rounded-full"
          >
            <span className="sr-only">Toggle billing cycle</span>
            <span
              className={`${
                formData.billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <span className={`ml-2 ${formData.billingCycle === 'yearly' ? 'text-[#02295a]' : 'text-[#9699ab]'}`}>Yearly</span>
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={prevStep} className="text-[#9699ab]">
            Go Back
          </button>
          <button type="submit" className="bg-[#02295a] text-white px-4 py-2 rounded-md">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};