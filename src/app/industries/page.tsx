import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";
import Image from "next/image";

export const metadata = {
  title: "Industries Digital Nomad Entertainment",
};

const Industries = () => {
  return (
    <div className="mb-16 md:mb-24">
      <PageInfo
        title={
          <>
            Tailored Workforce Solutions <br className="d-custom-none" />
            for Every Industry
          </>
        }
        description="From tech startups to manufacturing, our flexible hiring and HR solutions help you scale efficiently, reduce turnover, and meet deadlines—whether on-site, remote, or hybrid."
      />

      <div className="d-sphere-container d-sphere-container-size mt-4 md:-mt-16 mb-16 mx-auto text-white">
        <Image
          src={"/frames/frame-circuit-3d.png"}
          alt={"3D Sphere Image"}
          className="img-2"
          width={500}
          height={400}
        />
      </div>

      <PageInfo
        title={
          <>
            Smart Hiring Strategies <br /> for Every Business
          </>
        }
        titleCss="text-title-sm"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-16 mb-18 md:mb-24 m-auto px-2 md:px-32 md:gap-y-12 md:gap-x-32 text-white">
        <div className="md:col-start-1 md:col-end-2">
          <PageStatusCard
            iconPath={"/icons/people-icon.png"}
            iconAlt={"Status Icon"}
            titleText="TECH STARTUPS"
            secondText={
              <>
                Scaling teams quickly, reducing time-to-hire, and meeting
                aggressive project deadlines with flexible on-site and remote
                solutions.
              </>
            }
            css={"tcntt-2 text-sh-effect mt-8 md:mt-0"}
            maxWidth="275px"
            arrangeItem="custom-arrange-item"
            titleCss="text-center md:text-start text-title-xs"
            secondTextCss="text-center md:text-start text-sm"
          />
        </div>
        <div className="md:col-start-2 md:col-end-3">
          <PageStatusCard
            iconPath={"/icons/clock-icon.png"}
            iconAlt={"Status Icon"}
            titleText="CREATIVE AGENCIES & GAME STUDIOS"
            secondText={
              <>
                Leveraging trial-based placements and co-development teams to
                meet tight deadlines and deliver high-quality work, no matter
                the location.
              </>
            }
            css={"tcntt-2 text-sh-effect mt-8 md:mt-0"}
            maxWidth="275px"
            arrangeItem="custom-arrange-item"
            titleCss="text-center md:text-start text-title-xs"
            secondTextCss="text-center md:text-start text-sm"
          />
        </div>
        <div className="md:col-start-1 md:col-end-2">
          <PageStatusCard
            iconPath={"/icons/hand-shake-icon.png"}
            iconAlt={"Status Icon"}
            titleText="MANUFACTURING & LOGISTICS"
            secondText={
              <>
                Using trial-based candidates to ensure skill and culture fit,
                while reducing turnover—primarily on-site roles.
              </>
            }
            css={"tcntt-2 text-sh-effect mt-8 md:mt-0"}
            maxWidth="275px"
            arrangeItem="custom-arrange-item"
            titleCss="text-center md:text-start text-title-xs"
            secondTextCss="text-center md:text-start text-sm"
          />
        </div>
        <div className="md:col-start-2 md:col-end-3">
          <PageStatusCard
            iconPath={"/icons/dollar-icon.png"}
            iconAlt={"Status Icon"}
            titleText="SMALL-TO-MEDIUM BUSINESSES (SMBs)"
            secondText={
              <>
                Affordable HR solutions and trial placements to foster
                sustainable growth with on-site hires and remote flexibility.
              </>
            }
            css={"tcntt-2 text-sh-effect mt-8 md:mt-0"}
            maxWidth="275px"
            arrangeItem="custom-arrange-item"
            titleCss="text-center md:text-start text-title-xs"
            secondTextCss="text-center md:text-start text-sm"
          />
        </div>
      </div>

      <PageInfo title="Numbers don't lie" titleCss="text-title" />

      <div className="m-auto pt-6 md:pt-26 mb-16 md:mb-40 grid grid-cols-1 md:grid-cols-3 text-white">
        <PageStatusCard
          iconPath={"/icons/pueple-dollar-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"$150K"}
          secondText={
            "Manufacturer saves $150,000 annually by trialing candidates before full-time offers."
          }
          css={
            "tcntt mt-8 md:mt-0 md:col-start-1 md:col-end-2 justify-items-center"
          }
          arrangeItem="text-center"
          secondTextCss="text-sm"
        />
        <PageStatusCard
          iconPath={"/icons/stats-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"40%"}
          secondText={
            "Tech startup reduces hiring time by 40% with trial-based candidates."
          }
          css={
            "tcntt mt-8 md:mt-0 md:col-start-3 md:col-end-4 justify-items-center"
          }
          arrangeItem="text-center"
          secondTextCss="text-sm"
        />
        <PageStatusCard
          iconPath={"/icons/rocket-icon.png"}
          iconAlt={"Status Icon"}
          secondText={
            "Creative agency delivers project early by integrating trial candidates and co-development resources."
          }
          css={"tcntt mt-8 md:mt-0 mt-8 md:col-start-2 justify-items-center"}
          arrangeItem="text-center custom-arrange-item"
          secondTextCss="text-sm"
        />

        <div className="mt-12 md:mt-16 md:col-span-5 flex flex-col items-center justify-items-center">
          <div className="custom-btn px-5 py-1 cursor-pointer hover:brightness-120 text-white font-semibold">
            Case Studies{" "}
            <span className="ml-2 font-bold" aria-hidden="true">
              →
            </span>
          </div>

          <div className="mt-2 text-sm md:text-base text-gray-300">
            For more detailed success stories.
          </div>
        </div>
      </div>

      <PageInfo
        title={
          <>
            Customized Hiring Solutions <br /> for Every Industry
          </>
        }
        titleCss="text-title-sm"
        description="Contact us today."
        descriptionCss="mb-4 md:mb-0"
        buttonText="Learn More"
      />
    </div>
  );
};

export default Industries;
