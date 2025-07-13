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
import { useUpdateData } from "@/dataHandlers/useUpdateData/useUpdateData";

type TConsultationContext = {
  currentStep: number;
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
  const { mutateAsync } = useUpdateData();

  const handleChangeStep = useCallback(
    async ({
      answer,
      step,
    }: {
      answer: { [key: string]: boolean };
      step: number;
    }) => {
      setAnswers({ ...answers, ...answer });
      setCurrentStep(step + 1);

      if (currentStep === consultationQuestions.length) {
        try {
          const res = await mutateAsync(answers);

					console.log(res)
        } catch {
          console.log("an error");
        }
      }
    },

    [answers, currentStep, mutateAsync]
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
