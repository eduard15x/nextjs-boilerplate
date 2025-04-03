import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";
import Image from "next/image";

export const metadata = {
  title: "Services Digital Nomad Entertainment",
};

const Services = () => {
  return (
    <div className="mb-14 md:mb-24">
      <PageInfo
        title={
          "Smart Workforce Management, Talent Acquisition, HR Solutions, and Co-Development Partnerships"
        }
      />

      <div className="d-sphere-container my-10 md:my-16 mx-auto text-white">
        <Image
          src={"/frames/frame-sphere-3d.png"}
          alt={"3D Sphere Frame"}
          className="img-1"
          width={500}
          height={400}
        />

        <div className="text-1 px-1 md:px-3 md:py-1 text-gray-200">
          AI-Powered Workforce
        </div>
        <div className="text-2 px-1 md:px-3 md:py-1 text-gray-400">
          Zero Downtime Teams
        </div>
        <div className="text-3 px-1 md:px-3 md:py-1 text-gray-200">
          Hire Smarted, Work Faster
        </div>
        <div className="text-4 px-1 md:px-3 md:py-1 text-gray-200">
          Seamless Scaling
        </div>
        <div className="text-5 px-1 md:px-3 md:py-1 text-gray-400">
          Optimize & Accelerate
        </div>
        <div className="text-6 px-1 md:px-3 md:py-1 text-gray-200">
          10x Faster Hiring
        </div>
      </div>

      <div className="pb-16 md:mb-32 m-auto grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-10 md:px-32 text-white">
        <div className="pb-8 md:pb-0 md:col-span-2">
          <div className="ml-4 md:ml-25 text-title-sm">
            OPTIMIZE, HIRE, AND
            <br />
            SCALE WITH CONFIDENCE
          </div>
        </div>

        <div className="px-4 md:px-0 md:col-span-1 md:col-start-2 shadow-top">
          <PageStatusCard
            iconPath={"/icons/hand-shake-icon.png"}
            iconAlt={"Hand Shake Icon"}
            titleText="TALENT ACQUISITION & RECRUITMENT"
            secondText={
              <>
                Advanced candidate matching tools to find the best fits.
                <br /> Trial placements to evaluate skills, team fit, and
                performance before committing—on-site or remote.
                <br /> Strategies to improve retention through better hiring
                decisions.
              </>
            }
            css={
              "tcntt-2 text-sh-effect md:col-start-3 md:col-end-4 text-sm mt-8"
            }
            maxWidth="350px"
          />
          <PageStatusCard
            iconPath={"/icons/neon-check-icon.png"}
            iconAlt={"Check Icon"}
            titleText="HR Solutions"
            secondText={
              <>
                Performance analytics and engagement tracking.
                <br />
                Automated onboarding and training workflows.
                <br /> Payroll, compliance, and benefits administration designed
                for hybrid teams.
              </>
            }
            css={"tcntt-2 text-sh-effect col-start-3 col-end-4 text-sm mt-8"}
            maxWidth="350px"
          />
          <PageStatusCard
            iconPath={"/icons/workforce-icon.png"}
            iconAlt={"Workforce Icon"}
            titleText="WORKFORCE MANAGEMENT"
            secondText={
              <>
                Workforce planning to reduce downtime and optimize team
                productivity.
                <br /> Retention strategies tailored to your industry’s unique
                challenges, including remote and on-site operations.
              </>
            }
            css={"tcntt-2 text-sh-effect col-start-3 col-end-4 text-sm mt-8"}
            maxWidth="350px"
          />
          <PageStatusCard
            iconPath={"/icons/puzzle-icon.png"}
            iconAlt={"Puzzle Icon"}
            titleText="CO-DEVELOPMENT PARTNERSHIPS"
            secondText={
              <>
                Access to experienced development teams and project managers.
                <br />
                Flexible resourcing models for long-term and short-term
                needs—on-site or remote.
              </>
            }
            css={"tcntt-2 text-sh-effect col-start-3 col-end-4 text-sm mt-8"}
            maxWidth="350px"
          />
        </div>
      </div>

      <PageInfo
        title={"See how our adaptable solutions can transform your workforce"}
        description="Contact us today."
        buttonText="Request a Consultation"
        secondButtonText="Learn more"
        titleCss="text-title-sm px-2"
      />
    </div>
  );
};

export default Services;
