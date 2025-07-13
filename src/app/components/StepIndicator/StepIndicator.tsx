export const StepIndicator = ({ step }: { step: number }) => (
  <div className="flex gap-1 pt-8 mb-8">
    <div
      className={`w-9 h-3 rounded-full border border-sky-700 ${
        step >= 1 ? "bg-sky-700" : "bg-white"
      }`}
    />
    <div
      className={`w-9 h-3 rounded-full border border-sky-700 ${
        step >= 2 ? "bg-sky-700" : "bg-white"
      }`}
    />
    <div
      className={`w-9 h-3 rounded-full border border-sky-700 ${
        step >= 3 ? "bg-sky-700" : "bg-white"
      }`}
    />
    <div
      className={`w-9 h-3 rounded-full border border-sky-700 ${
        step >= 4 ? "bg-sky-700" : "bg-white"
      }`}
    />
    <div
      className={`w-9 h-3 rounded-full border border-sky-700 ${
        step >= 5 ? "bg-sky-700" : "bg-white"
      }`}
    />
  </div>
);
