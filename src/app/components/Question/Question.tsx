"use client";

import { ReactElement, useState } from "react";
import { Button } from "../Button";

type TAnswer = {
  [key: string]: boolean;
};

type TQuestion = {
  currentStep: number;
  handleSelectAnswer: ({
    answer,
    step,
  }: {
    answer: TAnswer;
    step: number;
  }) => void;
  id: string;
  step: number;
  text: string;
};

export const Question = ({
  currentStep,
  handleSelectAnswer,
  id,
  step,
  text,
}: TQuestion): ReactElement | null => {
  const [answer, setAnswer] = useState<boolean | undefined>(undefined);

  if (step !== currentStep) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-xl sm:text-2xl mb-8 sm:mb-12 text-center">{text}</h2>

      <div className="flex flex-row gap-4 justify-center items-center">
        <Button
          displayText="Yes"
          handleClick={() => setAnswer(true)}
          type={answer === true ? "primary" : "secondary"}
        />
        <Button
          displayText="No"
          handleClick={() => setAnswer(false)}
          type={answer === false ? "primary" : "secondary"}
        />
      </div>

      {(answer === true || answer === false) && (
        <div className="flex flex-row gap-4 justify-center items mt-6 sm:m-12 ">
          <Button
            displayText="Continue"
            handleClick={() =>
              handleSelectAnswer({ answer: { [id]: answer }, step })
            }
            type="primary"
          />
        </div>
      )}
    </div>
  );
};
