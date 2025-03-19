import PageCardLink from "@/components/PageCardLink";
import PageInfo from "@/components/PageInfo";
import PagePresentationCard from "@/components/PagePresentationCard";
import PageStatusCard from "@/components/PageStatusCard";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Home Digital Nomad Entertainment",
};

const PresentationCard_1 = (): ReactNode => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-lg font-semibold text-gray-100">
        Smart Workforce Management, Talent Acquisition, HR Solutions, and
        Co-Development Partnerships
      </div>
      <div className="flex-grow mt-4 mb-20 text-gray-300">
        DNE Solutions provides smart workforce management, talent acquisition,
        HR services, and recruitment. With advanced hiring tools, trial-based
        placements, workforce analytics, and scalable project support, we help
        businesses across industries build smarter, more effective teams. our
        services Talent Acquisition & Recruitment HR Consulting Employee
        Management Workforce Growth & Training
      </div>
      <PageCardLink linkText={"Read more"} linkHref={"/"} />
    </div>
  );
};

const PresentationCard_2 = (): ReactNode => {
  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex-grow">
        <PageCardLink linkText={"Read more"} linkHref={"/"} />
      </div>
      <div className="border-1 border-white relative h-50">
        <Image
          className={"style_1"}
          src={"/frame-game-1.jpeg"}
          alt={""}
          width={100}
          height={100}
        />
        <Image
          className={"style_2"}
          src={"/frame-game-2.jpeg"}
          alt={""}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const PresentationCard_3 = (): ReactNode => {
  return (
    <div className="h-full flex flex-col">
      <div className="my-4 text-gray-300">
        The official DNE Store features a range of exclusive collections—from
        sporty and streetwear to elegant and casual designs—blending original,
        timeless style with iconic fashion, sci-fi innovation, and gaming
        culture.
      </div>
      <PageCardLink linkText={"Visit site"} linkHref={"/"} />
    </div>
  );
};

const PresentationCard_4 = (): ReactNode => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-lg font-semibold text-gray-100">
        DNE AI specializes in developing cutting-edge AI solutions tailored to
        various applications, including:
      </div>

      <div className="my-4">items</div>

      <div className="flex-grow text-gray-300">
        Need an AI solution? Just send it our way—We’ve got it covered.
      </div>

      <PageCardLink linkText={"Read more"} linkHref={"/"} />
    </div>
  );
};

const Home = () => {
  return (
    <div className="mb-14">
      <PageInfo
        title={
          <>
            Smarter Workforce Solutions <br /> Across Industries
          </>
        }
        description="Enhancing hiring strategies, workforce efficiency, and scalable project support for businesses worldwide."
        buttonText="Learn More"
      />

      <div className="m-auto pt-20 px-36 grid grid-cols-2 gap-16 text-white">
        <PagePresentationCard
          cardTitle={"DNE SOLUTIONS"}
          cardSubtitle={"HR SERVICES"}
          cardBackgroundImage={"/card-design-blue.png"}
          cardContent={PresentationCard_1()}
          css={"col-span-1 col-start-1"}
        />
        <PagePresentationCard
          cardTitle={"DNE GAMES"}
          cardSubtitle={"NEW MOONS"}
          cardBackgroundImage={"/card-design-green.png"}
          cardContent={PresentationCard_2()}
          css={"col-span-1 col-start-2"}
        />
        <PagePresentationCard
          cardTitle={"DNE STORE"}
          cardSubtitle={"TOP COLLECTIONS"}
          cardBackgroundImage={"/card-design-green.png"}
          cardContent={PresentationCard_3()}
          css={"col-span-1 col-start-1"}
        />
        <PagePresentationCard
          cardTitle={"DNE AI"}
          cardSubtitle={"FUTURE READY"}
          cardBackgroundImage={"/card-design-blue.png"}
          cardContent={PresentationCard_4()}
          css={"col-span-1 col-start-2"}
        />
      </div>

      <div className="m-auto pt-20 pb-32 px-36 grid grid-cols-3 text-white">
        <PageStatusCard
          iconPath={"/check-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"85%"}
          secondText={"of trial-based candidates converted to long-term hires."}
          css={" col-start-1 col-end-2 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/lighting-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"40%"}
          secondText={"faster hiring processes with trial placements."}
          css={" col-start-3 col-end-4 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/stats-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"30%"}
          secondText={
            "turnover reduction by screening through trial-based evaluations."
          }
          css={"mt-8 col-start-2 justify-items-center"}
        />

        <div className="mt-16 col-span-5 flex flex-col items-center justify-items-center">
          <div className="custom-btn px-5 py-1 cursor-pointer hover:brightness-120 text-white font-semibold">
            Case Studies{" "}
            <span className="ml-2 font-bold" aria-hidden="true">
              →
            </span>
          </div>

          <div className="mt-2 text-gray-300">
            For more detailed success stories.
          </div>
        </div>
      </div>

      <PageInfo
        title="Partner with us today for smarter workforce solutions—on-site or remote."
        buttonText="Contact Us"
        buttonMargins="mt-14"
      />
    </div>
  );
};

export default Home;
