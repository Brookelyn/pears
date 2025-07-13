import { useConsultationContext } from "../context/ConsultationContext";

export const ThankYouMessage = () => {
  const { currentStep, questions } = useConsultationContext()
  
  if (currentStep <= questions.length) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-16 px-3 sm:px-0 w-full">
      <h1 className="text-4xl mb-6">Thank you!</h1>
      <p
        data-testid="thank-you-message-text"
        className="mb-6 sm:max-w-[50%] text-center"
      >
        {`We'll be in touch after our doctors have confirmed your details.`}
      </p>
    </div>
  );
};
