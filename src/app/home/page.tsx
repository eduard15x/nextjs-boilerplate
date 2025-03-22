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
      <div className="flex-grow text-sm mt-4 mb-20 text-gray-300">
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
      <div className="z-3 relative h-75">
        <Image
          className={"style_1"}
          src={"/frames/frame-newmoon-1.png"}
          alt={"Newmoon Site Page Capture"}
          width={300}
          height={200}
        />
        <Image
          className={"style_2"}
          src={"/frames/frame-newmoon-2.png"}
          alt={"Newmoon Site Page Capture"}
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

const PresentationCard_3 = (): ReactNode => {
  return (
    <div className="h-full flex flex-col">
      <div className="my-4 text-sm text-gray-300">
        The official DNE Store features a range of exclusive collections—from
        sporty and streetwear to elegant and casual designs—blending original,
        timeless style with iconic fashion, sci-fi innovation, and gaming
        culture.
      </div>
      <div className="pb-4">
        <PageCardLink linkText={"Visit site"} linkHref={"/"} />
      </div>

      <Image
        className="frame-clot"
        src={"/frames/frame-clothes.png"}
        alt={""}
        width={500}
        height={400}
      />
    </div>
  );
};

const PresentationCard_4 = (): ReactNode => {
  const listItems = [
    "Conversational AI & Chatbots",
    "Speech & Audio Processing",
    "Autonomous Agents",
    "Generative AI",
    "Custom AI Pipelines",
    "Computer Vision",
    "Multimodal AI",
    "Edge AI & On-Device Processing",
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="text-xl font-semibold text-gray-100 mt-4 pr-16">
        DNE AI specializes in developing cutting-edge AI solutions tailored to
        various applications, including:
      </div>

      <div className="my-6 flex flex-wrap">
        {listItems.map((item) => (
          <div key={item} className="custom-card-title py-1 px-1 mr-1 mb-2">
            {item}
          </div>
        ))}
      </div>

      <div className="flex-grow text-gray-300 text-sm">
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

      <div className="m-auto pt-20 px-32 grid grid-cols-2 gap-14 text-white">
        <PagePresentationCard
          cardTitle={"DNE SOLUTIONS"}
          cardSubtitle={"HR SERVICES"}
          cardBackgroundImage={"/design/card-design-blue.png"}
          cardContent={PresentationCard_1()}
          css={"col-span-1 col-start-1"}
        />
        <PagePresentationCard
          cardTitle={"DNE GAMES"}
          cardSubtitle={"NEW MOONS"}
          cardBackgroundImage={"/design/card-design-green.png"}
          cardContent={PresentationCard_2()}
          css={"col-span-1 col-start-2"}
        />
        <PagePresentationCard
          cardTitle={"DNE STORE"}
          cardSubtitle={"TOP COLLECTIONS"}
          cardBackgroundImage={"/design/card-design-green.png"}
          cardContent={PresentationCard_3()}
          css={"col-span-1 col-start-1"}
        />
        <PagePresentationCard
          cardTitle={"DNE AI"}
          cardSubtitle={"FUTURE READY"}
          cardBackgroundImage={"/design/card-design-blue.png"}
          cardContent={PresentationCard_4()}
          css={"col-span-1 col-start-2"}
        />
      </div>

      <div className="m-auto pt-26 pb-32 px-29 grid grid-cols-3 text-white">
        <PageStatusCard
          iconPath={"/icons/check-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"85%"}
          secondText={"of trial-based candidates converted to long-term hires."}
          css={"tcntt text-sh-effect col-start-1 col-end-2 "}
        />
        <PageStatusCard
          iconPath={"/icons/lighting-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"40%"}
          secondText={"faster hiring processes with trial placements."}
          css={"tcntt text-sh-effect col-start-3 col-end-4 "}
        />
        <PageStatusCard
          iconPath={"/icons/stats-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"30%"}
          secondText={
            "turnover reduction by screening through trial-based evaluations."
          }
          css={"mt-8 col-start-2 "}
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
