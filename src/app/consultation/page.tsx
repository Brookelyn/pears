"use client";

import { Question } from "@/app/components/Question";
import { StepIndicator } from "@/app/components/StepIndicator";

const questions = [
  {
    text: "Did you know that there are more than 3,000 varieties of pears worldwide?",
    id: "varieties",
    step: 1,
  },
  {
    text: "Did you know that pears are part of the rose family?",
    id: "family",
    step: 2,
  },
  {
    text: "Did you know that before tobacco became common, pear leaves were the top choice for smokers?",
    id: "smoked",
    step: 3,
  },
  {
    text: "Did you know that humans have been eating pears for more than 1,000 years?",
    id: "consumption",
    step: 4,
  },
  {
    text: "Did you know that pears ripen more quickly if you place them next to bananas?",
    id: "readiness",
    step: 5,
  },
];

const Consultation = () => {
  return (
    <main className="flex flex-col justify-center items-center px-3 sm:px-0 grow-1">
      <StepIndicator step={1}/>
      <Question
        id={questions[0].id}
        text={questions[0].text}
        handleSelectAnswer={(selection) => console.log(selection)}
      />
    </main>
  );
};

export default Consultation;
