import { Question } from "@/app/components/Question";
import { useConsultationContext } from "../context/ConsultationContext";

export const Questions = () => {
  const { currentStep, questions, handleChangeStep } = useConsultationContext();

  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.id}
          currentStep={currentStep}
          handleSelectAnswer={handleChangeStep}
          id={question.id}
					step={question.step}
          text={question.text}
        />
      ))}
    </>
  );
};
