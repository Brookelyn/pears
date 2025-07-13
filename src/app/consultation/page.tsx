"use client";

import { StepIndicator } from "@/app/components/StepIndicator";
import { ConsultationProvider } from "@/app/consultation/context/ConsultationContext";
import { Questions } from "@/app/consultation/Questions";
import { ThankYouMessage } from "@/app/consultation/ThankYouMessage";

const Consultation = () => {
  return (
    <ConsultationProvider>
      <main className="flex flex-col justify-center items-center px-3 sm:px-0 grow-1">
        <StepIndicator />
        <Questions />
        <ThankYouMessage />
      </main>
    </ConsultationProvider>
  );
};

export default Consultation;
