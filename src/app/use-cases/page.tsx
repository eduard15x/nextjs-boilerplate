import PageInfo from "@/components/PageInfo";
import Image from "next/image";

export const metadata = {
  title: "UseCases Digital Nomad Entertainment",
};

const UseCases = () => {
  return (
    <div className="mb-16 md:mb-24">
      <PageInfo
        title={
          <>
            Hiring Success Stories: Faster, <br className="d-custom-none" />{" "}
            Smarter, Proven
          </>
        }
        titleCss="text-title-custom px-4 md:px-0"
      />

      <div className="grid grid-cols-3 gap-x-4 md:gap-x-10 px-4 md:px-32 text-white mt-12 mb-8 md:mb-32">
        <div className="mx-auto use-case-container">
          <Image
            src={"/icons/lighting-icon.png"}
            alt={"Lighting Icon"}
            width={250}
            height={200}
          />
        </div>
        <div className="mx-auto use-case-container pt-8 md:pt-32">
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
      <div className="mt-8 md:mt-16 mb-20 md:mb-40 grid grid-cols-1 md:grid-cols-3 text-white ">
        <div className="md:col-start-1 md:col-end-3">
          <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-0 gap-y-4 md:gap-y-10">
            <div className="md:col-start-1 md:col-end-2 md:pr-8">
              <div className="custom-card-design h-full px-3 md:px-4 py-4 md:py-6">
                <div className="text-base md:text-xl font-semibold text-gray-200">
                  SparkTech Innovations:
                </div>
                <div className="text-gray-200 text-sm">
                  Trial-based candidates reduced hiring time by 40%, improved
                  retention by 85%, and boosted project completion rates.
                </div>
              </div>
            </div>
            <div className="md:col-start-2 md:col-end-3 md:pr-8">
              <div className="custom-card-design h-full px-3 md:px-4 py-4 md:py-6">
                <div className="text-base md:text-xl font-semibold text-gray-200">
                  FreshFields Organic Foods:
                </div>
                <div className="text-gray-200 text-sm">
                  Trial-based placements cut onboarding time by 50%, improved
                  retention, and saved $75,000 annually in HR costs.
                </div>
              </div>
            </div>
            <div className="md:col-start-1 md:col-end-2 md:pl-8">
              <div className="custom-card-design h-full px-3 md:px-4 py-4 md:py-6">
                <div className="text-base md:text-xl font-semibold text-gray-200">
                  SteelSure Industries:
                </div>
                <div className="text-gray-200 text-sm">
                  Trial candidates lowered turnover by 30%, reduced recruitment
                  costs by $150,000 annually, and increased productivity by 20%.
                </div>
              </div>
            </div>
            <div className="md:col-start-2 md:col-end-3 md:pl-8">
              <div className="custom-card-design h-full px-3 md:px-4 py-4 md:py-6">
                <div className="text-base md:text-xl font-semibold text-gray-200">
                  Brightframe Creative Agency:
                </div>
                <div className="text-gray-200 text-sm">
                  Trial placements and co-development resources helped deliver a
                  global campaign two weeks early, increased client
                  satisfaction, and enhanced internal efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-start-3 md:col-end-4 ml-6 mt-8 md:mt-0 md:ml-2">
          <div className="d-sphere-container d-sphere-container-size-2 mx-auto flex md:block items-center justify-center">
            <Image
              src={"/icons/use-case.png"}
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
        titleCss="text-title-custom px-2 md:px-0"
      />
      <div className="mx-4 md:mx-32 mt-8 mb-20 md:mb-40 text-gray-200 text-center text-lg md:text-xl italic">
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
            Explore how our hiring solutions— <br className="d-custom-none" />{" "}
            remote or on-site..
          </>
        }
        description="Are helping companies succed. Contact us today."
        buttonText="Get Started Today"
        titleCss="text-title-custom px-10 md:px-0"
      />
    </div>
  );
};

export default UseCases;
