import React from 'react';
import { useForm } from '../context/FormContext';

const addons = [
  { id: 'onlineService', title: 'Online service', description: 'Access to multiplayer games', price: { monthly: 1, yearly: 10 } },
  { id: 'largerStorage', title: 'Larger storage', description: 'Extra 1TB of cloud save', price: { monthly: 2, yearly: 20 } },
  { id: 'customizableProfile', title: 'Customizable profile', description: 'Custom theme on your profile', price: { monthly: 2, yearly: 20 } },
];

export const AddOns = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const toggleAddon = (addonId) => {
    updateFormData({
      addons: {
        ...formData.addons,
        [addonId]: !formData.addons[addonId],
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-[#02295a] mb-2">Pick add-ons</h2>
      <p className="text-[#9699ab] mb-6">Add-ons help enhance your gaming experience.</p>
      <form onSubmit={handleSubmit}>
        {addons.map((addon) => (
          <div
            key={addon.id}
            className={`flex items-center justify-between p-4 border rounded-md mb-4 cursor-pointer ${
              formData.addons[addon.id] ? 'border-[#02295a] bg-[#f0f6ff]' : 'border-gray-300'
            }`}
            onClick={() => toggleAddon(addon.id)}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.addons[addon.id]}
                onChange={() => toggleAddon(addon.id)}
                className="mr-4"
              />
              <div>
                <h3 className="font-bold text-[#02295a]">{addon.title}</h3>
                <p className="text-[#9699ab] text-sm">{addon.description}</p>
              </div>
            </div>
            <p className="text-[#473dff]">
              +${formData.billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly}/
              {formData.billingCycle === 'monthly' ? 'mo' : 'yr'}
            </p>
          </div>
        ))}
        <div className="flex justify-between mt-6">
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