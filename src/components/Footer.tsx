import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-bg pt-12 pb-8 px-8">
      <div className="max-content-size m-auto grid grid-cols-3 gap-3">
        <div className="col-span-3 col-start-2 col-end-2 mb-6 justify-items-center">
          <div>
            <div className="text-xl text-gray-200 font-semibold mb-3">
              Stay Connected
            </div>
            <div className="flex items-center">
              <Link href={""} className="mr-4">
                <Image
                  src="/socials/youtube.svg"
                  alt="Youtube Logo"
                  width="20"
                  height="20"
                  className="w-8 h-7"
                />
              </Link>
              <Link href={""} className="mr-4">
                <Image
                  src="/socials/facebook.svg"
                  alt="Facebook Logo"
                  width="20"
                  height="20"
                  className="w-8 h-7"
                />
              </Link>
              <Link href={""} className="mr-4">
                <Image
                  src="/socials/instagram.svg"
                  alt="Instagram Logo"
                  width="20"
                  height="20"
                  className="w-8 h-7"
                />
              </Link>
              <Link href={""} className="mr-4">
                <Image
                  src="/socials/linkedin.svg"
                  alt="LinkedIn Logo"
                  width="20"
                  height="20"
                  className="w-8 h-7"
                />
              </Link>
              <Link href={""} className="mr-4">
                <Image
                  src="/socials/x-twitter.svg"
                  alt="X Logo"
                  width="20"
                  height="20"
                  className="w-8 h-7"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-2 ">
          <Image
            src="/frames/dne-logo-white.png"
            alt="Footer logo"
            width="180"
            height="75"
          />
        </div>
        <div className="col-start-2 col-end-3 justify-items-center">
          <div>
            <div className="text-xl text-gray-200 font-semibold mb-2">
              Quick Links
            </div>
            <div className="flex flex-wrap" style={{ maxWidth: "240px" }}>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Home
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Services
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Industries
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                About us
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Case Studies
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Blog
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-3 justify-items-end">
          <div>
            <div className=" text-xl text-gray-200 font-semibold mb-2">
              Legal
            </div>
            <div className="flex flex-wrap" style={{ maxWidth: "220px" }}>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Term of Use
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Privacy Policy
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Cookie Settings
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-400 hover:text-gray-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div
            className="w-full my-3 bg-gray-700"
            style={{ height: "1px" }}
          ></div>
        </div>
        <div className="col-span-3 col-start-2 col-end-2 text-gray-500 text-center">
          © 2025 DNE Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
