type TButton = {
  buttonType?: "button" | "reset" | "submit";
  displayText: string;
  handleClick: () => void;
  type?: "primary" | "secondary";
};

export const Button = ({
  buttonType,
  displayText,
  handleClick,
  type = 'primary',
}: TButton) => {
  const buttonStyles =
    type === "primary" ? "bg-sky-700 text-white" : "bg-white text-sky-700";

  return (
    <button
      className={`${buttonStyles} rounded-full border border-solid border-sky-700 transition-colors flex items-center justify-center text-background gap-2 hover:bg-sky-600 hover:border-sky-600 hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto w-full min-w-32`}
      onClick={handleClick}
      type={buttonType || "button"}
    >
      {displayText}
    </button>
  );
};
