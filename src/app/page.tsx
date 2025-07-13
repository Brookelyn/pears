import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center pt-16 px-3 sm:px-0">
      <h1 className="text-4xl mb-6">Welcome!</h1>
      <p className="mb-6 sm:max-w-[50%] text-center">
        To make sure this treatment is suitable for you, we need to ask you a
        few questions first - get started by clicking the button below.
      </p>
      <Link
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-sky-700 bg-foreground text-background gap-2 hover:bg-sky-600 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto w-full"
        href="/consultation"
      >
        Start consultation
      </Link>
    </main>
  );
};

export default Home;
