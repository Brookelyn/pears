import Image from "next/image";
import Link from "next/link";

export const LayoutHeader = () => {
  return (
    <header className="bg-sky-700 w-full p-4">
      <Link href="/">
        <Image
          alt="MedExpress logo"
          src="/medExpressLogo.png"
          height="40"
          width="138"
          style={{ width: "auto", height: "auto" }}
        />
      </Link>
    </header>
  );
};
