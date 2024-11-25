import Title from "../AllPage/Title";
import AboutUsContent from "./AboutUsContent";

const AboutPage = () => {
  return (
    <>
      {/* Title */}
      <Title
        bgSrc="/images/aboutUsHeader.svg"
        title="About Us"
        subtitle="A little background story of why we are doing this."
      />
      {/* Content */}
      <AboutUsContent />
    </>
  );
};

export default AboutPage;
