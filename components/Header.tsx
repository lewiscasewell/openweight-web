import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <nav className="absolute top-0 w-full bg-transparent p-4 flex justify-between items-center">
    <div>
      <Link href="/">
        <Image src="/openweight-logo.png" alt="logo" width={50} height={50} />
      </Link>
    </div>
    <div className="flex space-x-6">
      <Link href="/privacy-policy">Privacy policy</Link>
      <Link href="/support">Support</Link>
    </div>
  </nav>
);

export default Header;
