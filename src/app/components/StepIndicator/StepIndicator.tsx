import { useConsultationContext } from "@/app/consultation/context/ConsultationContext";

export const StepIndicator = () => {
  const { currentStep, questions } = useConsultationContext();

	if (currentStep > questions.length) {
		return null;
	}

  return (
    <div className="flex gap-1 pt-8 mb-8">
      <div
        className={`w-9 h-3 rounded-full border border-sky-700 ${
          currentStep >= 1 ? "bg-sky-700" : "bg-white"
        }`}
      />
      <div
        className={`w-9 h-3 rounded-full border border-sky-700 ${
          currentStep >= 2 ? "bg-sky-700" : "bg-white"
        }`}
      />
      <div
        className={`w-9 h-3 rounded-full border border-sky-700 ${
          currentStep >= 3 ? "bg-sky-700" : "bg-white"
        }`}
      />
      <div
        className={`w-9 h-3 rounded-full border border-sky-700 ${
          currentStep >= 4 ? "bg-sky-700" : "bg-white"
        }`}
      />
      <div
        className={`w-9 h-3 rounded-full border border-sky-700 ${
          currentStep >= 5 ? "bg-sky-700" : "bg-white"
        }`}
      />
    </div>
  );
};
