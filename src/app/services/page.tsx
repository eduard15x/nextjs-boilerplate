import PageInfo from "@/components/PageInfo";

export const metadata = {
  title: "Services Digital Nomad Entertainment",
};

const Services = () => {
  return (
    <div className="mb-14">
      <PageInfo
        title={
          "Smart Workforce Management, Talent Acquisition, HR Solutions, and Co-Development Partnerships"
        }
      />

      <div className="border-1 border-white w-full h-50 text-white">
        3d image
      </div>
      <div className="border-1 border-white w-full h-50 text-white">
        Optimize, Hire, and Scale with Confidence
      </div>

      <PageInfo
        title={"See how our adaptable solutions can transform your workforce"}
        description="Contact us today."
        buttonText="Request a Consultation"
        secondButtonText="Learn more"
      />
    </div>
  );
};

export default Services;
