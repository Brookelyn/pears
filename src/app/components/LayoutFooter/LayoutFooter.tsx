import Link from "next/link";

export const LayoutFooter = () => {
  return (
    <footer className="bg-sky-700 grid grid-cols-1 sm:grid-cols-2 gap-1 sticky top-[100vh] white p-4">
      <Link href="https://www.medexpress.co.uk/faq" className="text-white">
        FAQs
      </Link>
      <Link href="https://www.medexpress.co.uk/delivery" className="text-white">
        Delivery
      </Link>
      <Link href="https://www.medexpress.co.uk/about-us" className="text-white">
        About us
      </Link>
      <Link
        href="https://www.medexpress.co.uk/referrals"
        className="text-white"
      >
        Referral scheme
      </Link>
      <Link
        href="https://www.medexpress.co.uk/education-discount"
        className="text-white"
      >
        Education discount
      </Link>
      <Link
        href="https://www.medexpress.co.uk/contact#complaints"
        className="text-white"
      >
        Complaints
      </Link>
    </footer>
  );
};
