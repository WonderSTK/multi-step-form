import React from 'react';
import { useForm } from '../context/FormContext';

const plans = {
  arcade: { title: 'Arcade', price: { monthly: 9, yearly: 90 } },
  advanced: { title: 'Advanced', price: { monthly: 12, yearly: 120 } },
  pro: { title: 'Pro', price: { monthly: 15, yearly: 150 } },
};

const addons = {
  onlineService: { title: 'Online service', price: { monthly: 1, yearly: 10 } },
  largerStorage: { title: 'Larger storage', price: { monthly: 2, yearly: 20 } },
  customizableProfile: { title: 'Customizable Profile', price: { monthly: 2, yearly: 20 } },
};

export const Summary = () => {
  const { formData, prevStep, goToStep } = useForm();

  const calculateTotal = () => {
    const planPrice = plans[formData.plan].price[formData.billingCycle];
    const addonPrices = Object.entries(formData.addons)
      .filter(([, isSelected]) => isSelected)
      .reduce((total, [addonId]) => total + addons[addonId].price[formData.billingCycle], 0);
    return planPrice + addonPrices;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#02295a] mb-2">Finishing up</h2>
      <p className="text-[#9699ab] mb-6">Double-check everything looks OK before confirming.</p>
      <div className="bg-[#f0f6ff] rounded-md p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-[#02295a]">
              {plans[formData.plan].title} ({formData.billingCycle})
            </h3>
            <button onClick={() => goToStep(2)} className="text-[#9699ab] underline">
              Change
            </button>
          </div>
          <p className="font-bold text-[#02295a]">
            ${plans[formData.plan].price[formData.billingCycle]}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
          </p>
        </div>
        <hr className="border-t border-[#9699ab] my-4" />
        {Object.entries(formData.addons)
          .filter(([, isSelected]) => isSelected)
          .map(([addonId]) => (
            <div key={addonId} className="flex justify-between items-center mb-2">
              <p className="text-[#9699ab]">{addons[addonId].title}</p>
              <p className="text-[#02295a]">
                +${addons[addonId].price[formData.billingCycle]}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
              </p>
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-[#9699ab]">Total (per {formData.billingCycle === 'monthly' ? 'month' : 'year'})</p>
        <p className="font-bold text-[#473dff] text-xl">
          ${calculateTotal()}/{formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="text-[#9699ab]">
          Go Back
        </button>
        <button
          type="button"
          onClick={() => goToStep(5)}
          className="bg-[#473dff] text-white px-4 py-2 rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};