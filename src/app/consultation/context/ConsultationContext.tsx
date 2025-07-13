import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  consultationQuestions,
  TConsultationQuestions,
} from "./consultationQuestions";

type TConsultationContext = {
	currentStep: number
  handleChangeStep: ({
    answer,
    step,
  }: {
    answer: { [key: string]: boolean };
    step: number;
  }) => void;
  questions: TConsultationQuestions[];
};

const ConsultationContext = React.createContext<
  TConsultationContext | undefined
>(undefined);

export const useConsultationContext = () => {
  const context = useContext(ConsultationContext);

  if (context === undefined) {
    throw new Error(
      "useConsultationContext must be wrapped with a ConsultationProvider"
    );
  }

  return context;
};

export const ConsultationProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({});
  const [currentStep, setCurrentStep] = useState<number>(1);

	console.log(answers)

  const handleChangeStep = useCallback(
    ({
      answer,
      step,
    }: {
      answer: { [key: string]: boolean };
      step: number;
    }) => {
			console.log(answer, step)
      setAnswers({ ...answers, ...answer });
      setCurrentStep(step + 1);
    },
    [answers]
  );

  const contextValue = useMemo(
    () => ({
      currentStep,
      handleChangeStep,
      questions: consultationQuestions,
    }),
    [currentStep, handleChangeStep]
  );

  return (
    <ConsultationContext.Provider value={contextValue}>
      {children}
    </ConsultationContext.Provider>
  );
};
