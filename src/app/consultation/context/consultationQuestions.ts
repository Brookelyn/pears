export type TConsultationQuestions = {
  id: string;
  step: number;
  text: string;
};

export const consultationQuestions = [
  {
    id: "varieties",
    step: 1,
    text: "Did you know that there are more than 3,000 varieties of pears worldwide?",
  },
  {
    id: "family",
    step: 2,
    text: "Did you know that pears are part of the rose family?",
  },
  {
    id: "smoked",
    step: 3,
    text: "Did you know that before tobacco became common, pear leaves were the top choice for smokers?",
  },
  {
    id: "consumption",
    step: 4,
    text: "Did you know that humans have been eating pears for more than 1,000 years?",
  },
  {
    id: "readiness",
    step: 5,
    text: "Did you know that pears ripen more quickly if you place them next to bananas?",
  },
];
