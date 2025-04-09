import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    href: "",
    linkClassName: "mr-4",
    imageSrc: "/socials/youtube.svg",
    imageAlt: "Youtube Logo",
    imageClassName: "footer-icon",
  },
  {
    href: "",
    linkClassName: "mr-4",
    imageSrc: "/socials/facebook.svg",
    imageAlt: "Facebook Logo",
    imageClassName: "footer-icon",
  },
  {
    href: "",
    linkClassName: "mr-4",
    imageSrc: "/socials/instagram.svg",
    imageAlt: "Instagram Logo",
    imageClassName: "footer-icon",
  },
  {
    href: "",
    linkClassName: "mr-4",
    imageSrc: "/socials/linkedin.svg",
    imageAlt: "LinkedIn Logo",
    imageClassName: "footer-icon",
  },
  {
    href: "",
    linkClassName: "mr-4",
    imageSrc: "/socials/x-twitter.svg",
    imageAlt: "X Logo",
    imageClassName: "footer-icon",
  },
];

const Footer = () => {
  return (
    <footer className="footer-bg pt-6 md:pt-12 pb-4 md:pb-8 px-4 md:px-8">
      <div className="max-content-size m-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-3 md:col-start-2 md:col-end-2 mb-3 md:mb-6 md:justify-items-center">
          <div>
            <div className="md:text-xl text-gray-100 font-semibold mb-3">
              Stay Connected
            </div>
            <div className="flex items-center">
              {FOOTER_LINKS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={item.linkClassName}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width="100"
                    height="100"
                    className={item.imageClassName}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-start-1 md:col-end-2 ">
          <Image
            src="/frames/dne-logo-white.png"
            alt="Footer logo"
            width="180"
            height="75"
          />
        </div>
        <div className="flex mt-6 md:hidden justify-between">
          <div className=" md:col-start-2 md:col-end-3 md:justify-items-center">
            <div>
              <div className="md:text-xl text-gray-100 font-semibold mb-2">
                Quick Links
              </div>
              <div
                className="flex md:flex-row flex-col md:flex-wrap"
                style={{ maxWidth: "240px" }}
              >
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Home
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Services
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Industries
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  About us
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Case Studies
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Blog
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className=" md:col-start-3 md:col-end-3 md:justify-items-end">
            <div>
              <div className="md:text-xl text-gray-100 font-semibold mb-2">
                Legal
              </div>
              <div
                className="flex md:flex-row flex-col md:flex-wrap"
                style={{ maxWidth: "220px" }}
              >
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Term of Use
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Cookie Settings
                </Link>
                <Link
                  href={""}
                  className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:col-start-2 md:col-end-3 md:justify-items-center">
          <div>
            <div className="md:text-xl text-gray-100 font-semibold mb-2">
              Quick Links
            </div>
            <div
              className="flex md:flex-row flex-col md:flex-wrap"
              style={{ maxWidth: "240px" }}
            >
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Home
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Services
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Industries
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                About us
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Case Studies
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Blog
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:col-start-3 md:col-end-3 md:justify-items-end">
          <div>
            <div className="md:text-xl text-gray-100 font-semibold mb-2">
              Legal
            </div>
            <div
              className="flex md:flex-row flex-col md:flex-wrap"
              style={{ maxWidth: "220px" }}
            >
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Term of Use
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Privacy Policy
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Cookie Settings
              </Link>
              <Link
                href={""}
                className="text-sm mr-6 leading-6 text-gray-300 hover:text-gray-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 ">
          <div
            className="w-full my-3 bg-gray-700"
            style={{ height: "1px" }}
          ></div>
        </div>
        <div className="md:col-span-3 md:col-start-2 md:col-end-2 text-gray-400 text-xs md:text-base text-center">
          © 2025 DNE Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
