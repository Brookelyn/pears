"use client";

import { ReactElement } from "react";
import { Button } from "../Button";

type TAnswer = { [key:string]: boolean }

type TQuestion = {
	handleSelectAnswer: (value: TAnswer) => void;
  id: string;
  text: string;
};

export const Question = ({
  handleSelectAnswer,
  id,
  text,
}: TQuestion): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      
      <h2 className="text-xl sm:text-2xl mb-8 sm:mb-12 text-center">{text}</h2>

      <div className="flex flex-row gap-4 justify-center items-center">
        <Button
          displayText="Yes"
          handleClick={() => handleSelectAnswer({ [id]: true })}
          type="secondary"
        />
        <Button
          displayText="No"
          handleClick={() => handleSelectAnswer({ [id]: false })}
          type="secondary"
        />
      </div>
    </div>
  );
};
