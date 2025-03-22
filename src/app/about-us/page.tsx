import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";
import Image from "next/image";

export const metadata = {
  title: "AboutUs Digital Nomad Entertainment",
};

const AboutUs = () => {
  return (
    <div className="mb-24">
      <PageInfo title={"why we exist"} />

      <div className="d-sphere-container -mt-8 mx-auto text-white">
        <Image
          src={"/frames/frame-person-directions.png"}
          alt={"Company Directions Frame"}
          className="img-1"
          width={500}
          height={400}
        />

        <div className="text-1a px-3 py-1 text-gray-200">
          Talent Acquisition & Recruitment
        </div>
        <div className="text-2a px-3 py-1 text-gray-200">
          Flexibility (On-site & Remote)
        </div>
        <div className="text-3a px-3 py-1 text-gray-200">
          Workforce Management
        </div>
        <div className="text-4a px-3 py-1 text-gray-200">
          Co-Development Partnerships
        </div>
        <div className="text-5a px-3 py-1 text-gray-200">
          Performance & Growth
        </div>
        <div className="text-6a px-3 py-1 text-gray-200">HR Solutions</div>
      </div>

      <div className="flex flex-col items-center mt-16 mb-40 mx-auto text-white">
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
            css={"tcntt-2 text-sh-effect"}
            maxWidth="310px"
          />
        </div>
        <div className="mt-16">
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
            css={"tcntt-2 text-sh-effect"}
            maxWidth="310px"
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
        buttonText="Contact Us"
      />
    </div>
  );
};

export default AboutUs;
