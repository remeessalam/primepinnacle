import React from "react";
import icon1 from "../assets/images/Vector.png";
import icon2 from "../assets/images/Vector(1).png";
import icon3 from "../assets/images/Vector(2).png";
import bannerImg from "../assets/images/banner.jpg";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { BsPhone } from "react-icons/bs";
import { MdOutlineInsights } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
const WebsiteHeader = React.lazy(
  () => import("../components/website/WebsiteHeader")

  // #0885AA
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-black/60"></div>
        <img
          loading="lazy"
          src={bannerImg}
          srcset={`${bannerImg} 400w, 
          ${bannerImg} 800w, 
          ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          class="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-5 justify-center items-center h-full relative z-10"
        >
          <p className="sub-heading">
            Welcome to
            {/* <span className="text-primary font-semibold">
              PRIME PINNACLE
            </span> */}
          </p>
          <h1 className="text-[2.5rem] md:text-[6rem] font-bold leading-[1] text-stroke">
            PRIME PINNACLE TECHSOLUTIONS
          </h1>
          <p className="sub-heading">
            Powering the Future with Intelligent Solutions
          </p>
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-5"
      >
        <div className="bg-secondary rounded-lg p-5 shadow-xl">
          <div className="flex gap-3 mb-4">
            <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
              <BsPhone className="w-[4rem] scale-150 object-contain" />
            </div>
            {/* <img
              loading="lazy"
              src={icon1}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            /> */}
            <p className="text-lg leading-tight font-medium text-primary">
              Mobile App Development
            </p>
          </div>
          <p className="desc text-black">
            Achieve Mobile Supremacy through Custom App Development Solutions
          </p>
        </div>
        <div className="bg-secondary rounded-lg p-5 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            {/* <img
              loading="lazy"
              src={icon2}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            /> */}
            <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
              <BiPalette className="w-[4rem] scale-150 object-contain" />
            </div>
            <p className="text-lg leading-tight font-medium text-primary">
              UI UX Design
            </p>
          </div>
          <p className="desc">
            Deliver unparalleled user experiences with our innovative UI/UX
            design services that blend creativity and functionality.
          </p>
        </div>
        <div className="bg-secondary rounded-lg p-5 shadow-xl">
          <div className="flex gap-3 mb-4">
            {/* <img
              loading="lazy"
              src={icon3}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            /> */}
            <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
              <AiOutlineCode className="w-[4rem] scale-150 object-contain" />
            </div>
            <p className="text-lg leading-tight font-medium text-primary">
              Website Development
            </p>
          </div>
          <p className="desc">
            Our full-stack development services provideend - to -end solutions
          </p>
        </div>
        <div className="bg-secondary rounded-lg p-5 shadow-xl">
          <div className="flex gap-3 mb-4">
            {/* <img
              loading="lazy"
              src={icon3}
              width="50"
              height="50"
              className="w-[3rem] object-contain"
              alt=""
            /> */}
            <div className="w-[4rem] h-[4rem] rounded-full bg-primary/50 flex justify-center items-center">
              <HiOutlineChatAlt2 className="w-[4rem] scale-150 object-contain" />
            </div>
            <p className="text-lg leading-tight font-medium text-primary">
              Chatbot Development
            </p>
          </div>
          <p className="desc">
            Chatbots to redefine customer interaction, drive revenue, and
            future-proof your business.
          </p>
        </div>
      </div>
      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto text-primary">
                Transforming Visions into Reality
              </h2>
              <p className="desc">
                At <b>PRIME PINNACLE TECH SOLUTIONS</b>, we leverage the
                transformative power of artificial intelligence to catalyze
                remarkable change across industries. Our unwavering commitment
                to transparency and reliability is what truly sets us apart in a
                crowded market place .We empower organizations with cutting-edge
                AI technologies that elevate data-driven insights, streamline
                complex processes, and ignite strategic growth.
                <br />
                <br />
                Our innovative solutions are designed not just to meet the
                demands of today but to anticipate the challenges of tomorrow,
                ensuring that your business stays ahead of the curve.
              </p>
            </div>
            <div className="w-fit mt-4 justify-center lg:justify-start">
              <Link to="/about-us" className="primary-btn">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
