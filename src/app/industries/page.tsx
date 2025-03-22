import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";
import Image from "next/image";

export const metadata = {
  title: "Industries Digital Nomad Entertainment",
};

const Industries = () => {
  return (
    <div className="mb-24">
      <PageInfo
        title={
          <>
            Tailored Workforce Solutions <br /> for Every Industry
          </>
        }
        description="From tech startups to manufacturing, our flexible hiring and HR solutions help you scale efficiently, reduce turnover, and meet deadlines—whether on-site, remote, or hybrid."
      />

      <div className="d-sphere-container d-sphere-container-size -mt-16 mb-16 mx-auto text-white">
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

      <div className="grid grid-cols-2 mt-16 mb-24 m-auto px-32 gap-y-12 gap-x-32 text-white">
        <div className="col-start-1 col-end-2">
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
            css={"tcntt-2 text-sh-effect"}
            maxWidth="275px"
          />
        </div>
        <div className="col-start-2 col-end-3">
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
            css={"tcntt-2 text-sh-effect "}
            maxWidth="275px"
          />
        </div>
        <div className="col-start-1 col-end-2">
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
            css={"tcntt-2 text-sh-effect"}
            maxWidth="275px"
          />
        </div>
        <div className="col-start-2 col-end-3">
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
            css={"tcntt-2 text-sh-effect "}
            maxWidth="275px"
          />
        </div>
      </div>

      <PageInfo title="Numbers don't lie" titleCss="text-title-xs" />

      <div className="m-auto pt-26 mb-40 grid grid-cols-3 text-white">
        <PageStatusCard
          iconPath={"/icons/pueple-dollar-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"$150K"}
          secondText={
            "Manufacturer saves $150,000 annually by trialing candidates before full-time offers."
          }
          css={"tcntt col-start-1 col-end-2 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/icons/stats-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"40%"}
          secondText={
            "Tech startup reduces hiring time by 40% with trial-based candidates."
          }
          css={"tcntt col-start-3 col-end-4 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/icons/rocket-icon.png"}
          iconAlt={"Status Icon"}
          secondText={
            "Creative agency delivers project early by integrating trial candidates and co-development resources."
          }
          css={"tcntt mt-8 col-start-2 justify-items-center"}
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
        title={
          <>
            Customized Hiring Solutions <br /> for Every Industry
          </>
        }
        titleCss="text-title-sm"
        description="Contact us today."
        buttonText="Learn More"
      />
    </div>
  );
};

export default Industries;
