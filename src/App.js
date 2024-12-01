import React from 'react';
import { FormProvider, useForm } from './context/FormContext';
import { FormLayout } from './components/FormLayout';
import { Sidebar } from './components/Sidebar';
import { PersonalInfo } from './components/PersonalInfo';
import { SelectPlan } from './components/SelectPlan';
import { AddOns } from './components/AddOns';
import { Summary } from './components/Summary';
import { ThankYou } from './components/ThankYou';

const FormSteps = () => {
  const { currentStep } = useForm();

  return (
    <>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectPlan />}
      {currentStep === 3 && <AddOns />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <ThankYou />}
    </>
  );
};

function App() {
  return (
    <FormProvider>
      <FormLayout>
        <Sidebar />
        <FormSteps />
      </FormLayout>
    </FormProvider>
  );
}

export default App;

