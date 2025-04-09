import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";
import Image from "next/image";

export const metadata = {
  title: "AboutUs Digital Nomad Entertainment",
};

const AboutUs = () => {
  return (
    <div className="mb-14 md:mb-24">
      <PageInfo title={"why we exist"} />

      <div className="d-sphere-container -mt-8 mx-auto text-white">
        <Image
          src={"/frames/frame-person-directions.png"}
          alt={"Company Directions Frame"}
          className="img-1 img-1-custom-about-us"
          width={500}
          height={400}
        />

        <div className="text-1a px-1 md:px-3 md:py-1 text-gray-200">
          Talent Acquisition & Recruitment
        </div>
        <div className="text-2a px-1 md:px-3 md:py-1 text-gray-200">
          Flexibility (On-site & Remote)
        </div>
        <div className="text-3a px-1 md:px-3 md:py-1 text-gray-200">
          Workforce Management
        </div>
        <div className="text-4a px-1 md:px-3 md:py-1 text-gray-200">
          Co-Development Partnerships
        </div>
        <div className="text-5a px-1 md:px-3 md:py-1 text-gray-200">
          Performance & Growth
        </div>
        <div className="text-6a px-1 md:px-3 md:py-1 text-gray-200">
          HR Solutions
        </div>
      </div>

      <div className="flex flex-col items-center text-center md:text-start px-2 md:px-0 mt-8 md:mt-16 mb-20 md:mb-40 mx-auto text-white">
        <div>
          <PageStatusCard
            iconPath={"/icons/people-icon.png"}
            iconAlt={"Status Icon"}
            titleText="MISSION MANAGEMENT"
            secondText={
              <>
                We help businesses build stronger, smarter teams and accelerate
                project success through flexible hiring solutions, innovative HR
                strategies, and tailored co-development partnerships.
              </>
            }
            secondTextCss="text-sm md:text-base"
            css={"card-effect-second text-sh-effect"}
            maxWidth="310px"
            arrangeItem="custom-arrange-item-responsive"
          />
        </div>
        <div className="mt-12 md:mt-16">
          <PageStatusCard
            iconPath={"/icons/people-icon.png"}
            iconAlt={"Status Icon"}
            titleText="OUR APPROACH"
            secondText={
              <>
                Tailored solutions for each client’s unique challenges.
                <br />A blend of advanced tools, trial-based candidate
                evaluations, and dedicated support—on-site or remote.
              </>
            }
            secondTextCss="text-sm md:text-base"
            css={"card-effect-second text-sh-effect"}
            maxWidth="310px"
            arrangeItem="custom-arrange-item-responsive"
          />
        </div>
      </div>

      <PageInfo
        title={
          <>
            Want to know more about our <br /> adaptable workforce solutions?
          </>
        }
        description="Contact us today."
        descriptionCss="text-sm md:text-base"
        buttonText="Contact Us"
        titleCss="text-title-custom"
      />
    </div>
  );
};

export default AboutUs;
