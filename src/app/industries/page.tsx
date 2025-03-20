import PageInfo from "@/components/PageInfo";
import PageStatusCard from "@/components/PageStatusCard";

export const metadata = {
  title: "Industries Digital Nomad Entertainment",
};

const Industries = () => {
  return (
    <div className="mb-14">
      <PageInfo
        title={
          <>
            Tailored Workforce Solutions <br /> for Every Industry
          </>
        }
        description="From tech startups to manufacturing, our flexible hiring and HR solutions help you scale efficiently, reduce turnover, and meet deadlines—whether on-site, remote, or hybrid."
      />

      <div className="border-1 border-white w-full h-50 text-white">
        3d image
      </div>

      <PageInfo
        title={
          <>
            Smart Hiring Strategies <br /> for Every Business
          </>
        }
        titleCss="text-title-sm"
      />

      <div className="border-1 border-white w-full h-50 text-white">
        4 columns
      </div>

      <PageInfo title="Numbers don't lie" titleCss="text-title-xs" />

      <div className="m-auto pt-26 pb-32 grid grid-cols-3 text-white">
        <PageStatusCard
          iconPath={"/check-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"$150K"}
          secondText={
            "Manufacturer saves $150,000 annually by trialing candidates before full-time offers."
          }
          css={"col-start-1 col-end-2 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/lighting-icon.png"}
          iconAlt={"Status Icon"}
          firstText={"40%"}
          secondText={
            "Tech startup reduces hiring time by 40% with trial-based candidates."
          }
          css={"col-start-3 col-end-4 justify-items-center"}
        />
        <PageStatusCard
          iconPath={"/stats-icon.png"}
          iconAlt={"Status Icon"}
          secondText={
            "Creative agency delivers project early by integrating trial candidates and co-development resources."
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
