import PageInfo from "@/components/PageInfo";
import Image from "next/image";

export const metadata = {
  title: "UseCases Digital Nomad Entertainment",
};

const UseCases = () => {
  return (
    <div className="mb-24">
      <PageInfo
        title={
          <>
            Hiring Success Stories: Faster, <br /> Smarter, Proven
          </>
        }
      />

      <div className="grid grid-cols-3 gap-x-10 px-32 text-white mt-12 mb-32">
        <div className="mx-auto use-case-container">
          <Image
            src={"/icons/lighting-icon.png"}
            alt={"Lighting Icon"}
            width={250}
            height={200}
          />
        </div>
        <div className="mx-auto use-case-container pt-32">
          <Image
            src={"/icons/hand-shake-icon.png"}
            alt={"Hand Shake Icon"}
            width={300}
            height={200}
          />
        </div>
        <div className="mx-auto use-case-container">
          <Image
            src={"/icons/check-icon.png"}
            alt={"Check Icon"}
            width={300}
            height={200}
          />
        </div>
      </div>

      <PageInfo title={"Featured Success Stories:"} titleCss="text-title-xs" />

      <div className="mt-16 mb-40 grid grid-cols-3 text-white ">
        <div className="col-start-1 col-end-3">
          <div className="grid grid-cols-2 gap-y-10">
            <div className="col-start-1 col-end-2 pr-8">
              <div className="custom-card-design h-full px-4 py-6">
                <div className="text-xl font-semibold text-gray-200">
                  SparkTech Innovations:
                </div>
                <div className="text-gray-300">
                  Trial-based candidates reduced hiring time by 40%, improved
                  retention by 85%, and boosted project completion rates.
                </div>
              </div>
            </div>
            <div className="col-start-2 col-end-3 pr-8">
              <div className="custom-card-design h-full px-4 py-6">
                <div className="text-xl font-semibold text-gray-200">
                  FreshFields Organic Foods:
                </div>
                <div className="text-gray-300">
                  Trial-based placements cut onboarding time by 50%, improved
                  retention, and saved $75,000 annually in HR costs.
                </div>
              </div>
            </div>
            <div className="col-start-1 col-end-2 pl-8">
              <div className="custom-card-design h-full px-4 py-6">
                <div className="text-xl font-semibold text-gray-200">
                  SteelSure Industries:
                </div>
                <div className="text-gray-300">
                  Trial candidates lowered turnover by 30%, reduced recruitment
                  costs by $150,000 annually, and increased productivity by 20%.
                </div>
              </div>
            </div>
            <div className="col-start-2 col-end-3 pl-8">
              <div className="custom-card-design h-full px-4 py-6">
                <div className="text-xl font-semibold text-gray-200">
                  Brightframe Creative Agency:
                </div>
                <div className="text-gray-300">
                  Trial placements and co-development resources helped deliver a
                  global campaign two weeks early, increased client
                  satisfaction, and enhanced internal efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 col-end-4 ml-2">
          <div className="d-sphere-container d-sphere-container-size-2  mx-auto">
            {/* // TODO replace this */}
            <Image
              src={"/need-replace/success-stories.jpeg"}
              alt={"Success Stories Frame"}
              className="img-3"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>

      <PageInfo
        title={
          <>
            What Businesses Say About <br /> Trial-Based Hiring
          </>
        }
      />
      <div className="mx-32 mt-8 mb-40 text-gray-200 text-center text-xl italic">
        <div>
          “The trial-based model gave us confidence in <br /> our team’s
          long-term fit.”
        </div>

        <div className="mt-8">
          “Flexible trial candidates allowed us to find the right fit <br />{" "}
          before committing to full-time offers.”
        </div>
      </div>

      <PageInfo
        title={
          <>
            Explore how our hiring solutions— <br /> remote or on-site..
          </>
        }
        description="Are helping companies succed. Contact us today."
        buttonText="Get Started Today"
      />
    </div>
  );
};

export default UseCases;
