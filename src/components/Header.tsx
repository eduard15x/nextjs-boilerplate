import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="custom-header flex justify-between items-center px-4 py-2">
      <div>
        <Image
          src="/Digital_Nomad_Logo_White_Transp.png"
          alt="Footer logo"
          width="80"
          height="30"
        />
      </div>
      <div className="flex justify-between">
        <Link
          href={"/home"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Services
        </Link>
        <Link
          href={"/industries"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Industries
        </Link>
        <Link
          href={"/about-us"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          About Us
        </Link>
        <Link
          href={"/use-cases"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Use Cases
        </Link>
        <Link
          href={"/blog"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className="text-gray-100 hover:text-gray-300 ml-10"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
