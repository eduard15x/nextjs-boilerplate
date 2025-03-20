import PageInfo from "@/components/PageInfo";

export const metadata = {
  title: "UseCases Digital Nomad Entertainment",
};

const UseCases = () => {
  return (
    <div className="mb-14">
      <PageInfo
        title={
          <>
            Hiring Success Stories: Faster, <br /> Smarter, Proven
          </>
        }
      />

      <div className="border-1 border-white w-full h-50">contact form</div>

      <PageInfo title={"Featured Success Stories:"} titleCss="text-title-xs" />
      <PageInfo
        title={
          <>
            What Businesses Say About <br /> Trial-Based Hiring
          </>
        }
      />

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
