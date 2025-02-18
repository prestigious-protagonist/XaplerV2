"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const nippo = localFont({
  src: "../fonts/Nippo-Variable.ttf",
});

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={`w-full px-[3%] py-2 tracking-tight flex justify-between items-center fixed top-0 left-0 z-50 text-white
      bg-white/10 backdrop-blur-md shadow-md`}
    >
      <Link href="/" className={`${nippo.className} text-3xl font-medium`}>
        Xapler
      </Link>
      {!pathname.startsWith("/auth") && (
        <Link
          href="/auth/sign-in"
          className="shimmer group px-4 py-2 flex gap-1.5 items-center rounded-md bg-[--btn-color] text-white shadow-lg text-sm font-medium"
        >
          Get Started
          <ArrowRight
            size={15}
            className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
