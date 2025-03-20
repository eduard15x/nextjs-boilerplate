import PageInfo from "@/components/PageInfo";

export const metadata = {
  title: "AboutUs Digital Nomad Entertainment",
};

const AboutUs = () => {
  return (
    <div className="mb-14">
      <PageInfo title={"why we exist"} />

      <div className="border-1 border-white w-full h-50">contact form</div>

      <PageInfo
        title={
          <>
            Want to know more about our <br /> adaptable workforce solutions?
          </>
        }
        description="Contact us today."
        buttonText="Contact Us"
      />

      <div className="border-1 border-white w-full h-50">details</div>
    </div>
  );
};

export default AboutUs;
