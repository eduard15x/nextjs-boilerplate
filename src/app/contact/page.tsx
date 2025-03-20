import PageInfo from "@/components/PageInfo";

export const metadata = {
  title: "Contact Digital Nomad Entertainment",
};

const Contact = () => {
  return (
    <div className="mb-14">
      <PageInfo
        title={"get in touch with us"}
        titleCss="text-title-xl"
        description="Have questions about trial-based hiring or flexible workforce solutions? Get in touch today!"
        descriptionCss="px-10"
      />

      <div className="border-1 border-white w-full h-50">contact form</div>

      <PageInfo title={"direct contact iformation"} titleCss="text-title-xs" />

      <div className="border-1 border-white w-full h-50">details</div>
    </div>
  );
};

export default Contact;
